import React from "react";
import OrderDataTable from "../../component/OrderDataTable";

import "./privateStyle.css";
import DataTable from "../../component/Datatable";

function OrderPage() {
  let eventPage = 1;

  return eventPage === 1 ? (
    <div className="main-panel">
      <div className="content">
        {/* <OrderDataTable/> */}
        <DataTable/>
      </div>
    </div>
  ) : (
    <div className="main-panel">
      <div className="content">
        <div
          className="row"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="assets/img/Order.png"
            alt="Order"
            style={{ width: 200, marginTop: 160, marginBottom: 260 }}
          />
        </div>
      </div>
    </div>
  );
}

export default OrderPage;
