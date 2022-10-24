import { useFormik } from "formik";
import { FunctionComponent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as yup from "yup";
import { Card } from "../interfaces/Card";
import { editCard, getCard } from "../services/cardsService";
import { errorMsg, successMsg } from "../services/feedbacksService";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface EditCardProps {}

const EditCard: FunctionComponent<EditCardProps> = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [card, setCard] = useState({
    name: "",
    address: "",
    description: "",
    image: "",
    phone: "",
  });

  useEffect(() => {
    getCard(id as string)
      .then((result) => setCard(result.data))
      .catch();
  }, []);

  const formik = useFormik({
    initialValues: {
      name: card.name,
      address: card.address,
      description: card.description,
      image: card.image,
      phone: card.phone,
    },
    enableReinitialize: true,

    validationSchema: yup.object({
      name: yup.string().required().min(2),
      address: yup.string().required().min(2),
      description: yup.string().required().min(6),
      image: yup.string().required(),
      phone: yup.string().required().min(2),
    }),

    onSubmit: (values) => {
      let card: Card = { ...values, _id: id as string };
      editCard(card)
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
      <form className="mx-auto w-25" onSubmit={formik.handleSubmit}>
        <h3 className="display-5 text-center">EDIT CARD</h3>
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
            placeholder="address"
          />
          <label htmlFor="inputAddress">Address</label>
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
          <label htmlFor="inputDescription">Description</label>
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
      <Footer />
    </>
  );
};

export default EditCard;
