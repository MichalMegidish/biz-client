import { FunctionComponent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { errorMsg, successMsg } from "../services/feedbacksService";
import * as yup from "yup";
import { useFormik } from "formik";
import { checkUser } from "../services/userService";
import Navbar from "./Navbar";
interface LoginProps {}

const Login: FunctionComponent<LoginProps> = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: yup.object({
      email: yup.string().required().email("Invalid Email"),
      password: yup.string().required().min(8, "Too short"),
    }),
    onSubmit: (values) => {
      checkUser(values)
        .then((result) => {
          console.log(result.data);
          sessionStorage.setItem("token", result.data.token);
          successMsg("You logged successfuly!");
          navigate("/home");
        })
        .catch((error) => {
          console.log(error);
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

      <div className="divlogin  " style={{ width: "", height: "100%" }}>
        {/* <div className=" "> 
         <img
            className="
            "
            src="https://www.cio.com/wp-content/uploads/2022/10/bi-business-intelligence-ts-100646689-orig.jpg?quality=50&strip=all"
            alt=""
            style={{ width: "100%" }}
          />  */}

        <form className="mx-5 w-25 text-center " onSubmit={formik.handleSubmit}>
          <h3 className="display-5 ">Sign In</h3>
          <div className="mb-3 form-floating">
            <input
              type="email"
              className="form-control"
              id="inputEmailLogin"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Email"
            />
            <label htmlFor="inputEmailLogin">Email address</label>
          </div>
          {formik.touched.email && formik.errors.email ? (
            <p className="text-danger">{formik.errors.email}</p>
          ) : null}
          <div className="mb-3 form-floating">
            <input
              type="password"
              className="form-control"
              id="inputPasswordLogin"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Password"
            />
            <label htmlFor="inputPasswordLogin">Password</label>
          </div>
          {formik.touched.password && formik.errors.password ? (
            <p className="text-danger">{formik.errors.password}</p>
          ) : null}
          <div>
            <button
              type="submit"
              className="btn btn-secondary w-100"
              disabled={!(formik.isValid && formik.dirty)}
            >
              Submit
            </button>
            <p className="text-center m-3">
              new user? <Link to="/register"> Register</Link>
            </p>
          </div>
        </form>
      </div>
      {/* </div> */}
    </>
  );
};

export default Login;
