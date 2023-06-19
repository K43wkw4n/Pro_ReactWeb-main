import React, { useEffect, useState } from "react";
import { imagesBook } from "../../data/Data";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Product from './../../component/Product';

function AllProducts() {
  const Alert = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  const [product, setProduct] = useState([])

  function fetchPrduct() {
    axios.get(`https://localhost:7191/api/Book/GetBook?pageSize=10&currentPage=1`)
      .then(res => {
        const persons = res.data.data;
        setProduct(persons);
      })
  }

  useEffect(() => {
    fetchPrduct();
  }, [])

  console.log("Product : ", product)

  const image = (i) => {
    return imagesBook[i]
  }

  return (
    <div>
      <div className="main-panel">
        <div className="content">

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <NavLink to="/CreateProduct">
              <button className="btn btn-success">Create Product</button>
            </NavLink>
          </div>

          <div
            className="row"
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <div className="col-3"></div>
            <div className="col-3">
              <text style={{ fontWeight: "bold", fontSize: 18 }}>Name</text>
            </div>
            <div className="col-3">
              <text style={{ fontWeight: "bold", fontSize: 18 }}>Price</text>
            </div>
          </div>
          <hr />

          {product.map((item, i) => (
            <div key={i}>
              <div
                className="row"
                style={{ marginTop: 25, alignItems: "center" }}
              >
                <div className="col-3">
                  <img
                    src={image(i)}
                    className="img-fluid"
                    alt=""
                    width="40%"
                  />
                </div>
                <div className="col-3">
                  <text style={{ fontSize: 16 }}>{item.name}</text>
                </div>
                <div className="col-3">{item.price}</div>
                <div className="col-3">
                  <NavLink to="/EditPage" state={item} >
                    <button class="btn btn-success">
                      <i
                        class="fa fa-pencil-square-o"
                        style={{ fontSize: 16 }}
                      ></i>
                    </button>
                  </NavLink>
                  <button onClick={Alert} class="btn btn-danger">
                    <i class="fa fa-trash" style={{ fontSize: 16 }}></i>
                  </button>
                </div>
              </div>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllProducts;
