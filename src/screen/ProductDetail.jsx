import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { imagesBook } from "../data/Data";

function ProductDetail() {
  
  const location = useLocation();
  const item = location.state;

  const image = (i) => {
    return imagesBook[i]
  }

  return (
    <>
      <section id="portfolio" className="portfolio sections-bg">
        <div className="container" data-aos="fade-up"></div>


        <Container>
          <Row>
            <Col sm={4}>
              <div style={{ alignItems : "center", justifyContent: "center", display: "flex"}}>
              <img src={image(item.id)} width="350" alt={item.title} />
              </div>
            </Col>

            <Col sm={8}>
              <div style={{ alignItems: "center", justifyContent: "center"}}>
              <p style={{ fontSize: 50, fontWeight: "bold" }}>{item.name}</p>
              <p>{item.title}</p>
              <hr />

              <Row style={{ alignItems: "center" }}>
                <Col sm={6}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                    }}
                  >
                    <p
                      style={{
                        fontSize: 35,
                        fontWeight: "bold",
                        color: "#545454",
                      }}
                    >
                      ฿{item.price}
                    </p>
                  </div>
                </Col>

                <Col sm={6}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                    }}
                  >
                    <p style={{ fontSize: 20 }}>
                      Book Format : {item.bookFormat}
                    </p>
                  </div>
                </Col>
              </Row>

              <hr />

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <NavLink to="/Cart">
                  <button
                    style={{
                      width: 200,
                      height: 50,
                      borderRadius: 20,
                      borderColor: "white",
                      backgroundColor: "#008374",
                      color: "white",
                      fontSize: 19,
                    }}
                  >
                    Add to cart
                  </button>
                </NavLink>
              </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default ProductDetail;
