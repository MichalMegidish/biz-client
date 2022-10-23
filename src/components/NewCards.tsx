import { useFormik } from "formik";
import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import { AddCard } from "../services/cardsService";
import * as yup from "yup";
import Navbar from "./Navbar";
import { errorMsg, successMsg } from "../services/feedbacksService";
import Footer from "./Footer";

interface NewCardsProps {}

const NewCards: FunctionComponent<NewCardsProps> = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      address: "",
      description: "",
      image: "",
      phone: "",
    },
    validationSchema: yup.object({
      name: yup.string().required().min(2),
      address: yup.string().required().min(2),
      description: yup.string().required().min(6),
      image: yup.string().required(),
      phone: yup.string().required().min(2),
    }),

    onSubmit: (values) => {
      AddCard(values)
        .then((result) => {
          console.log(result.data);
          successMsg("Your card add successfuly!");
          navigate("/cards");
        })
        .catch((error) => {
          console.log(error);
          errorMsg("Oops... sumthing is wrong");
        });
    },
  });
  return (
    <>
      <Navbar />
      <div className="row">
        <div className="text-center mx-auto my-5 col-2 py-5 px-3">
          <img
            className="imgadd"
            src="https://images.wcdn.co.il/f_auto,q_auto,w_1200,t_54/1/8/6/4/1864497-46.jpg"
            alt=""
            style={{ width: "500%" }}
          />
        </div>
        <form className="mx-auto w-25 m-5 py-5" onSubmit={formik.handleSubmit}>
          <h3 className="display-5 text-center">Add New Card</h3>
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
              type="text"
              className="form-control"
              id="inputAddress"
              name="address"
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Adress"
            />
            <label htmlFor="inputAdress">Adress</label>
          </div>
          {formik.touched.address && formik.errors.address ? (
            <p className="text-danger">{formik.errors.address}</p>
          ) : null}
          <div className="mb-3 form-floating">
            <input
              type="text"
              className="form-control"
              id="inputDescription"
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Description"
            />
            <label htmlFor="inputdesDription">Description</label>
          </div>
          {formik.touched.description && formik.errors.description ? (
            <p className="text-danger">{formik.errors.description}</p>
          ) : null}

          <div className="mb-3 form-floating">
            <input
              type="text"
              className="form-control"
              id="inputImage"
              name="image"
              value={formik.values.image}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Image"
            />
            <label htmlFor="inputImage">Image</label>
          </div>
          {formik.touched.image && formik.errors.image ? (
            <p className="text-danger">{formik.errors.image}</p>
          ) : null}

          <div className="mb-3 form-floating">
            <input
              type="text"
              className="form-control"
              id="inputPhone"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Phone"
            />
            <label htmlFor="inputPhone">Phone</label>
          </div>
          {formik.touched.phone && formik.errors.phone ? (
            <p className="text-danger">{formik.errors.phone}</p>
          ) : null}

          <div>
            <button
              type="submit"
              className="btn btn-secondary w-100"
              disabled={!(formik.isValid && formik.dirty)}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default NewCards;
