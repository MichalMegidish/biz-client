import { FunctionComponent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { User } from "../interfaces/User";
import { errorMsg, successMsg } from "../services/feedbacksService";
import { addUser } from "../services/userService";
import Navbar from "./Navbar";
interface RegisterProps {}

const Register: FunctionComponent<RegisterProps> = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: { name: "", email: "", password: "", biz: false },
    validationSchema: yup.object({
      name: yup.string().required().min(2),
      email: yup.string().required().email("Invalid Email"),
      password: yup.string().required().min(8, "Too short"),
      biz: yup.boolean().required(),
    }),

    onSubmit: (values) => {
      let user: User = { ...values };
      addUser(user)
        .then((result) => {
          sessionStorage.setItem("token", result.data.token);
          successMsg("You registered successfuly!");

          navigate("/home");
        })
        .catch(() => {
          errorMsg("Oops... sumthing is wrong");
        });
    },
  });

  return (
    <>
      <div className="text-center ">
        <img
          style={{ width: "15rem" }}
          src="https://i.fbcd.co/products/original/b9425668f085f93c4655202b0444bd89b4c0ddff773d905b065775e551903772.jpg"
          alt=""
        />
      </div>
      <div className="divregister  " style={{ width: "", height: "50%" }}>
        <form className="mx-5 w-25 my-5 col-2" onSubmit={formik.handleSubmit}>
          <h3 className="display-5 text-center">Sign Up</h3>
          <div className="mb-3 form-floating">
            <input
              type="text"
              className="form-control"
              id="inputName"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Name"
            />
            <label htmlFor="inputName">Name</label>
          </div>
          {formik.touched.name && formik.errors.name ? (
            <p className="text-danger">{formik.errors.name}</p>
          ) : null}
          <div className="mb-3 form-floating">
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Email"
            />
            <label htmlFor="inputEmail">Email address</label>
          </div>
          {formik.touched.email && formik.errors.email ? (
            <p className="text-danger">{formik.errors.email}</p>
          ) : null}
          <div className="mb-3 form-floating">
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Password"
            />
            <label htmlFor="inputPassword">Password</label>
          </div>
          {formik.touched.password && formik.errors.password ? (
            <p className="text-danger">{formik.errors.password}</p>
          ) : null}

          <div className="mb-3">
            <input
              type="checkbox"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="biz"
              id="biz"
              value="true"
              checked={
                (formik.values.biz = "true"
                  ? formik.values.biz == true
                  : formik.values.biz == false)
              }
            />
            <label htmlFor="checkbox" className="px-2">
              {" "}
              Are you Business?
            </label>
          </div>

          <div>
            <button
              type="submit"
              className="btn btn-secondary w-100"
              disabled={!(formik.isValid && formik.dirty)}
            >
              Submit
            </button>
            <p className="text-center m-3">
              Already have user? <Link to="/"> Login </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
