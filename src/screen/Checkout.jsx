import React from "react";
import { NavLink } from "react-router-dom";
import { Formik, Form, ErrorMessage } from "formik";
import { ValidateFormContact } from "./validate_form/ValidateContact";

export default function Checkout() {
  return (
    <>
      <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <Formik
              enableReinitialize={true}
              initialValues={{
                name: "",
                email: "",
                phone: "",
                address: "",
                province: "",
                district: "",
                subdistrict: "",
                postcode: ""
              }}
              validationSchema={ValidateFormContact}
              onSubmit={(values) => {
                let data = { ...values };
                console.log("data : " + JSON.stringify(data));
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                setFieldValue,
                /* and other goodies */
              }) => (
                <Form onSubmit={handleSubmit}>
                  <div className="row">
                    <div
                      className="col-8"
                      style={{
                        border: "1px solid #F1F1F1",
                        backgroundColor: "#F1F1F1",
                      }}
                    >
                      <div className="row" style={{ margin: 15 }}>
                        <div className="col-6" style={{ marginBottom: 15 }}>
                          <label>Name</label>
                          <input
                            style={{ borderRadius: 0 }}
                            type="text"
                            name="name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                            className={
                              "form-control" +
                              (errors.name && touched.name ? " is-invalid" : "")
                            }
                            placeholder="Name"
                          />
                          <ErrorMessage
                            name="name"
                            component="div"
                            className="invalid-feedback"
                          />
                        </div>

                        <div className="col-6">
                          <label>Phone</label>
                          <input
                            style={{ borderRadius: 0 }}
                            type="text"
                            name="phone"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.phone}
                            className={
                              "form-control" +
                              (errors.phone && touched.phone ? " is-invalid" : "")
                            }
                            placeholder="Phone"
                          />
                          <ErrorMessage
                            name="phone"
                            component="div"
                            className="invalid-feedback"
                          />
                        </div>

                        <div style={{ marginBottom: 15 }}>
                          <label>Email</label>
                          <input
                            style={{ borderRadius: 0 }}
                            type="text"
                            name="email"
                            onChange={(e) => {
                              setFieldValue(
                                "email",
                                e.target.value.replace(
                                  /[^A-Za-z_.#?!@$%^&*0-9]/gi,
                                  ""
                                )
                              );
                            }}
                            onBlur={handleBlur}
                            value={values.email}
                            className={
                              "form-control" +
                              (errors.email && touched.email
                                ? " is-invalid"
                                : "")
                            }
                            placeholder="example@email.com"
                          />
                          <ErrorMessage
                            name="email"
                            component="div"
                            className="invalid-feedback"
                          />
                        </div>

                        <div style={{ marginBottom: 15 }}>
                          <label>Address</label>
                          <textarea
                            style={{ borderRadius: 0, height: 100 }}
                            type="text"
                            name="address"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.address}
                            className={
                              "form-control" +
                              (errors.address && touched.address ? " is-invalid" : "")
                            }
                            placeholder="Address"
                          />
                          <ErrorMessage
                            name="address"
                            component="div"
                            className="invalid-feedback"
                          />
                        </div>

                        <div className="col-6" style={{ marginBottom: 15 }}>
                          <label>Province</label>
                          <input
                            style={{ borderRadius: 0 }}
                            type="text"
                            name="province"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.province}
                            className={
                              "form-control" +
                              (errors.province && touched.province ? " is-invalid" : "")
                            }
                            placeholder="Province"
                          />
                          <ErrorMessage
                            name="province"
                            component="div"
                            className="invalid-feedback"
                          />
                        </div>

                        <div className="col-6">
                          <label>District</label>
                          <input
                            style={{ borderRadius: 0 }}
                            type="text"
                            name="district"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.district}
                            className={
                              "form-control" +
                              (errors.district && touched.district ? " is-invalid" : "")
                            }
                            placeholder="District"
                          />
                          <ErrorMessage
                            name="district"
                            component="div"
                            className="invalid-feedback"
                          />
                        </div>

                        <div className="col-6" style={{ marginBottom: 15 }}>
                          <label>Subdistrict</label>
                          <input
                            style={{ borderRadius: 0 }}
                            type="text"
                            name="subdistrict"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.subdistrict}
                            className={
                              "form-control" +
                              (errors.subdistrict && touched.subdistrict ? " is-invalid" : "")
                            }
                            placeholder="Subdistrict"
                          />
                          <ErrorMessage
                            name="subdistrict"
                            component="div"
                            className="invalid-feedback"
                          />
                        </div>

                        <div className="col-6">
                          <label>Postcode</label>
                          <input
                            style={{ borderRadius: 0 }}
                            type="text"
                            name="postcode"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.postcode}
                            className={
                              "form-control" +
                              (errors.postcode && touched.postcode ? " is-invalid" : "")
                            }
                            placeholder="Postcode"
                          />
                          <ErrorMessage
                            name="postcode"
                            component="div"
                            className="invalid-feedback"
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      className="col-4"
                      style={{
                        alignItems: "center",
                        flexDirection: "row",
                        justifyContent: "center",
                      }}
                    >
                      <div
                        style={{
                          border: "1px solid #F1F1F1",
                          backgroundColor: "#F1F1F1",
                        }}
                      >
                        <div
                          style={{
                            alignItems: "center",
                            marginTop: 20,
                            flexDirection: "row",
                          }}
                          className="container"
                        >
                          <div style={{ fontWeight: "bold" }}>
                            Order Summary
                          </div>
                          <div style={{ marginTop: 10 }}>
                            You have 2 item(s)
                          </div>
                          <hr />
                          <div
                            style={{
                              marginTop: 10,
                              marginBottom: 20,
                              flexDirection: "row",
                            }}
                          >
                            <label style={{ fontWeight: "bold" }}>
                              Grand total
                            </label>
                            <label style={{ marginLeft: 10 }}>970 Bath</label>
                          </div>

                          <div style={{ textAlign: "center" }}>
                            <button
                              type="submit"
                              style={{
                                width: "80%",
                                height: 50,
                                borderColor: "white",
                                backgroundColor: "#008374",
                                color: "white",
                                fontSize: 24,
                                marginBottom: 10,
                              }}
                            >
                              Continue
                            </button>
                          </div>

                          <div
                            style={{ textAlign: "center", marginBottom: 15 }}
                          >
                            <NavLink to="/Cart">Edit Cart</NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </section>
    </>
  );
}
