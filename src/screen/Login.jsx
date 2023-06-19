import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import { Formik, Form, ErrorMessage } from "formik";
import { ValidateFormContact } from "./validate_form/ValidateContact";
import axios from "axios";

export default function Login() {

  const handleLogin = (userName, password) => {
    axios.post(`https://localhost:7191/api/Authen/Login`, { userName, password })
      .then(res => { 
        console.log("onLogin : ", res.data);
      })
  };

  return (
    <>
      <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">

          <div
            className="row"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Formik
              enableReinitialize={true}
              initialValues={{
                name: "",
                password: "",
                email: "",
                subject: "",
                message: "",
                phoneNumber: "",
                status: "",
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
                <Form onSubmit={handleSubmit} className="php-email-form">

                  <div className="section-header">
                    <h2>Login</h2>
                  </div>

                  <div
                    className="row"
                    style={{ alignItems: "center", justifyContent: "center" }}
                  >
                    <div className="col-6">
                      <div className="form-group" style={{ marginBottom: 10 }}>
                        <label htmlFor="name" style={{ marginBottom: 10 }}>
                        UserName or Email 
                        </label>
                        <input
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
                            (errors.email && touched.email ? " is-invalid" : "")
                          }
                          placeholder="example@email.com"
                          style={{}}
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>

                      <div style={{ marginBottom: 10 }}>
                        <label htmlFor="name" style={{ marginBottom: 10 }}>
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
                          className={
                            "form-control" +
                            (errors.password && touched.password
                              ? " is-invalid"
                              : "")
                          }
                          placeholder="Password"
                          style={{ height: 50 }}
                        />
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-center" style={{ marginTop: 20 }}>
                    <button type="submit" style={{ fontSize: 20 }} onClick={() => handleLogin(values.email, values.password)}>
                      Login
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>

          <div style={{ marginTop: 10 }}>
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "flex-end",
              }}
            >
              <div style={{ flexDirection: "row", position: "relative" }}>
                <p></p>
                <NavLink to="/Register">
                  <p style={{ fontSize: 20 }}>Register</p>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
