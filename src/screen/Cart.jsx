import React from "react";
import { NavLink } from "react-router-dom";
import { CartData } from "../data/Data";
import { AiFillCloseCircle } from "react-icons/ai";
import Swal from "sweetalert2";

function Cart() {
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

  let eventPage = 0;

  return eventPage === 0 ? (
    <>
      <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <div
              className="row"
              style={{ flexDirection: "row", alignItems: "center" }}
            >
              <div className="col-1">
                <text style={{ fontWeight: "bold", fontSize: 18 }}>Item</text>
              </div>
              <div className="col-4">
                <text style={{ fontWeight: "bold", fontSize: 18 }}>Name</text>
              </div>
              <div className="col-2">
                <text style={{ fontWeight: "bold", fontSize: 18 }}>Price</text>
              </div>
              <div className="col-2">
                <text style={{ fontWeight: "bold", fontSize: 18 }}>
                  Quantity
                </text>
              </div>
              <div className="col-2">
                <text style={{ fontWeight: "bold", fontSize: 18 }}>Amount</text>
              </div>

              <div>
                <hr />
              </div>
            
               {CartData.map((item, index) => (
                <div key={index} style={{}}>
                  <div
                    className="row activeItem"
                    style={{ flexDirection: "row",
                    alignItems: "center",  
                    marginBottom:20,
                    border: '1px solid black',
                    boxShadow: '1px 2px 5px',
                    padding:"5px 0", 
                    marginTop:20
                  }}
                  >
                    <div className="col-1">
                      <img
                        src={item.image}
                        alt={item.alt}
                        style={{ width: "80%" }}
                      />
                    </div>

                    <div className="col-4">
                      <text style={{ fontSize: 18 }}>{item.name}</text>
                    </div>

                    <div className="col-2">
                      <text style={{ fontSize: 18 }}>{item.price} Bath</text>
                    </div>

                    <div className="col-2">
                      <text style={{ fontSize: 18 }}>{item.quantity}</text>
                    </div>

                    <div className="col-2">
                      <text style={{ fontSize: 18 }}>{item.amount}</text>
                    </div>

                    <div className="col-1">
                      <NavLink onClick={Alert}>
                        <AiFillCloseCircle size={40} color="red" />
                      </NavLink>
                    </div>
 
                  </div>
                </div>
              ))}
          
            
           
            </div>
          </div>

          <div className="row" style={{ alignItems: "center" }}>
            <div className="col-9 row" style={{ alignItems: "center" }}>
              <div className="col-2">
                <text style={{ fontSize: 35, fontWeight: "bold" }}>Total</text>
              </div>

              <div className="col-3">
                <text style={{ fontSize: 26 }}>970 Bath</text>
              </div>
            </div>

            <div className="col-3 text-end" style={{ alignItems: "center" }}>
              <NavLink to="/Checkout">
              <button
                type="submit"
                style={{
                  width: "80%",
                  height: 50,
                  borderColor: "white",
                  backgroundColor: "#008374",
                  color: "white",
                  fontSize: 24,
                }}
              >
                Buy
              </button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  ) : (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <div className="container" style={{ width: "60%" }}>
            <img src="Image/Cart.png" alt="Cart Empty" className="container" />

            <div className="text-center" style={{ marginTop: 20 }}>
              <NavLink to="/">
                <button
                  type="submit"
                  style={{
                    width: "40%",
                    height: 50,
                    borderColor: "white",
                    backgroundColor: "#008374",
                    color: "white",
                    fontSize: 24,
                  }}
                >
                  Go to shop
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
