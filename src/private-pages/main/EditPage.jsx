import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Formik, Form, ErrorMessage } from "formik";
import { ValidateFormContact } from "../../screen/validate_form/ValidateContact";
import "../components/style.css";
import { NavLink, useLocation } from "react-router-dom";

import Select from 'react-select';
import { imagesBook } from "../../data/Data";
import axios from "axios";

const options = [
  { value: 'paperback', label: 'Paperback' },
  { value: 'hardcover', label: 'Hardcover' },
];

export default function EditPage() {
  const location = useLocation();
  const item = location.state;

  const [name, setName] = useState(item.name)
  const [price, setPrice] = useState(item.price)
  const [description, setDescription] = useState(item.description)
  const [quantity, setQuantity] = useState(item.quantity)

  const [selectedOption, setSelectedOption] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  console.log("log", item)

  const image = (arry) => {
    return imagesBook[arry]
  }

  const handleUpdate = (id) => {
    axios.post(`https://localhost:7191/api/Book/CreateNUpdateBook`, { id, name, description, quantity, price, imageUrl: "string", publisherID: 1, authorID: 1, categoryID: 1 })
      .then(res => {
        console.log("onEdit : ", res.data);
      })
  };

  return (
    <>
      <div>
        <div className="main-panel">
          <div className="content">
            <Formik
              enableReinitialize={true}
              initialValues={{
                Name: "",
                Price: "",
                Description: ""
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
                /* and other goodies */
              }) => (
                <Form onSubmit={handleSubmit} className="php-email-form">
                  <text style={{ fontSize: 18, fontWeight: "bold" }}>
                    Edit Product
                  </text>

                  <hr />

                  <div className="row">
                    <div className="col-4">
                      <div className="dropzone">
                        <div {...getRootProps()}>
                          <input {...getInputProps()} />
                          {isDragActive ? (
                            <p>Drop the files here ...</p>
                          ) : (
                            <img
                              src={image(item.id)}
                              className="img-fluid"
                              alt=""
                              width="60%"
                            />
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="row col-8">
                      <div className="col-md-6">
                        <label htmlFor="name">Name</label>
                        <input
                          type="text"
                          name="Name"
                          onChange={(e) => setName(e.target.value)}
                          onBlur={handleBlur}
                          value={name}
                          className={
                            "form-control" +
                            (errors.Name && touched.Name ? " is-invalid" : "")
                          }
                          placeholder="Name"
                          style={{ height: 50 }}
                        />
                        <ErrorMessage
                          name="Name"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>

                      <div className="col-md-6">
                        <label htmlFor="name">Price</label>
                        <input
                          type="text"
                          name="Price"
                          onChange={(e) => setPrice(e.target.value)}
                          onBlur={handleBlur}
                          value={price}
                          className={
                            "form-control" +
                            (errors.Price && touched.Price ? " is-invalid" : "")
                          }
                          placeholder="Price"
                          style={{ height: 50 }}
                        />
                        <ErrorMessage
                          name="Price"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>

                      <div className="form-group col-md-12">
                        <label htmlFor="name">Description</label>
                        <textarea
                          className={
                            "form-control" +
                            (errors.Description && touched.Description
                              ? " is-invalid"
                              : "")
                          }
                          name="Description"
                          onChange={(e) => setDescription(e.target.value)}
                          onBlur={handleBlur}
                          value={description}
                          rows="auto"
                          placeholder="Description"
                        />
                        <ErrorMessage
                          name="Description"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>

                      <div className="col-md-6">
                        <label htmlFor="name">Quantity</label>
                        <input
                          type="text"
                          name="Quantity"
                          onChange={(e) => setQuantity(e.target.value)}
                          onBlur={handleBlur}
                          value={quantity}
                          className={
                            "form-control" +
                            (errors.Quantity && touched.Quantity ? " is-invalid" : "")
                          }
                          placeholder="Quantity"
                          style={{ height: 50 }}
                        />
                        <ErrorMessage
                          name="Quantity"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>

                      <div className="form-group col-md-6">
                        <label htmlFor="name">Book Format</label>
                        <Select
                          defaultValue={selectedOption}
                          onChange={setSelectedOption}
                          options={options}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="text-center" style={{ marginTop: 20 }}>
                    <NavLink
                      className="btn btn-success"
                      type="submit"
                      style={{ fontSize: 18, margin: 15 }}
                      onClick={() => handleUpdate(item.id)}
                      to="/All-Products"
                    >
                      Update
                    </NavLink>

                    <NavLink to="/All-Products">
                      <button
                        className="btn btn-danger"
                        style={{ fontSize: 18, margin: 15 }}
                      >
                        Cancel
                      </button>
                    </NavLink>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
}

