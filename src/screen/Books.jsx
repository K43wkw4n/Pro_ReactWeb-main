import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Data, imagesBook } from "../data/Data";
import axios from "axios";

function Books() {
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

  const image = (i) => {
    return imagesBook[i]
  }


  return (
    <>
      <section id="portfolio" className="portfolio sections-bg">
        <div className="container" data-aos="fade-up">
          <div className="row gy-4 portfolio-container">
            {product.map((item, i) => (
              <div
                className="col-xl-3 col-md-6 portfolio-item filter-app"
                key={i}
              >
                <div className="portfolio-wrap">
                  <NavLink to="/ProductDetail" state={item}>
                    <img
                      src={image(i)}
                      className="img-fluid"
                      alt=""
                      width="100%"
                    />
                  </NavLink>

                  <div className="portfolio-info">
                    <NavLink
                      to="/ProductDetail"
                      state={item}
                    >
                      <h4>
                        <a href="portfolio-details.html" title="More Details">
                          {item.name}
                        </a>
                      </h4>
                    </NavLink>

                    <p>{item.description}</p>

                    <div style={{ marginTop: 10 }}>
                      <div
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                          display: "flex",
                          borderBlockColor: "white",
                        }}
                      >
                        <NavLink
                          to="/ProductDetail"
                          state={item}
                        >
                          <button
                            style={{
                              width: 150,
                              height: 50,
                              borderRadius: 20,
                              borderColor: "white",
                              backgroundColor: "#008374",
                              color: "white",
                              fontSize: 19,
                            }}
                            title="Buy"
                          >
                            Add to cart
                          </button>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Books;
