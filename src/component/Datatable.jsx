import React, { useState, useEffect, useRef } from "react";
import { OrderData } from "../data/Data";
import "./Datatable.css";

const PrintButton = ({ tableRef, setPrinting }) => {
  const handlePrint = () => {
    setPrinting(true);
    printData(tableRef);
  };

  return <button onClick={handlePrint}>Print</button>;
};

const printData = (tableRef) => {
  const printContents = tableRef.current.outerHTML;

  const printWindow = window.open("", "_blank");
  printWindow.document.open();
  printWindow.document.write(`
    <html>
    <head>
      <title>Print</title>
      <style>
        table {
          border-collapse: collapse;
          width: 100%;
        }
        th {
          border: 1px solid black;
          padding: 8px;
          text-align: center;
        }
        td {
            border: 1px solid black;
            padding: 8px;
            text-align: left;
          }
        .hide-print {
          display: none;
        }
      </style>
    </head>
    <body>
      ${printContents}
    </body>
  </html>
    `);
  printWindow.document.close();

  setTimeout(() => {
    printWindow.print();
    printWindow.close();
  }, 100);
};

const DataTable = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [printing, setPrinting] = useState(false);
  const itemsPerPage = 5;
  const tableRef = useRef();

  useEffect(() => {
    setData(OrderData);
  }, []);

  const previousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const deleteItem = (itemId) => {
    setData((prevData) => prevData.filter((item) => item.id !== itemId));
  };

  const editItem = (itemId) => {
    // Implement edit logic here
    console.log("Edit item:", itemId);
  };

  const exportToCSV = () => {
    const csvContent = [
      "ID,Name,Date,Status",
      ...data.map(
        (item) => `${item.id},${item.name},${item.date},${item.status}`
      ),
    ].join("\n");

    const encodedURI = encodeURI(`data:text/csv;charset=utf-8,${csvContent}`);
    const link = document.createElement("a");
    link.setAttribute("href", encodedURI);
    link.setAttribute("download", "data.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageData = data.slice(startIndex, endIndex);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const paginationButtons = [];
  for (let i = 1; i <= totalPages; i++) {
    paginationButtons.push(
      <button
        key={i}
        onClick={() => goToPage(i)}
        disabled={currentPage === i}
      >
        {i}
      </button>
    );
  }

  const tableRows = currentPageData.map((item) => (
    <tr key={item.id}>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.date}</td>
      <td>{item.status}</td>
      {!printing && (
        <td>
          <button onClick={() => editItem(item.id)}>Edit</button>
          <button onClick={() => deleteItem(item.id)}>Delete</button>
        </td>
      )}
    </tr>
  ));

  return (
    <div>
      <table className="datatable" ref={tableRef}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Date</th>
            <th>Status</th>
            {!printing && <th>Action</th>}
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
      <div className="pagination-container">
        <button
          onClick={previousPage}
          disabled={currentPage === 1}
          className="pagination-button"
        >
          Previous
        </button>
        {paginationButtons}
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="pagination-button"
        >
          Next
        </button>
      </div>

      <PrintButton tableRef={tableRef} setPrinting={setPrinting} />

      <button onClick={exportToCSV} className="export-button">
        Export to Excel
      </button>
    </div>
  );
};

export default DataTable;
