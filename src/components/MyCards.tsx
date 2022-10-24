import { FunctionComponent, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { string } from "yup";
import { Card } from "../interfaces/Card";
import { User } from "../interfaces/User";
import { deleteCard, getMyCards } from "../services/cardsService";
import { errorMsg, successMsg } from "../services/feedbacksService";
import { getBiz } from "../services/userService";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface MyCardsProps {}

const MyCards: FunctionComponent<MyCardsProps> = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [isChanged, setIsChanged] = useState<boolean>(false);

  useEffect(() => {
    getMyCards()
      .then((result) => {
        setCards(result.data);
      })
      .catch((error) => console.log(error));
  }, [isChanged]);

  const handleDelete = (card: Card) => {
    if (window.confirm(`Are you sure want to delete ${card.name}?`))
      deleteCard(card._id as string)
        .then(() => {
          setIsChanged(!isChanged);
          successMsg("Product deleted successfully");
        })
        .catch((err) => errorMsg(err));
  };
  return (
    <>
      <Navbar />

      <div className="container m-5">
        <div className="row">
          {cards.length ? (
            cards.map((card: Card) => (
              <div
                key={card._id}
                className="card col-md-3 m-2 text-center"
                style={{ height: "30rem" }}
              >
                <div className="" style={{ maxHeight: "11rem" }}>
                  <img src={card.image} alt="" style={{ maxHeight: "11rem" }} />
                </div>
                <div className="card-body text-center"></div>
                <div className="card-footer text-center">
                  <h1 className="card-title fw-light">{card.name}</h1>
                  <h5 className="card-title fw-light">{card.address}</h5>
                  <p className="card-text fw-light">{card.description}</p>
                  <p className="card-text fw-light"> {card.phone}</p>
                  <p className="card-text fw-light">
                    Card Number: {card.cardNumber}
                  </p>
                </div>
                {getBiz() ? (
                  <div className="text-center p-2">
                    <Link to={`edit/${card._id}`}>
                      <i className="fa-solid fa-pen-to-square"></i>
                    </Link>
                    <a onClick={() => handleDelete(card)} className="p-2">
                      <i className="fa-solid fa-trash"></i>
                    </a>
                  </div>
                ) : null}
              </div>
            ))
          ) : (
            <p>no cards</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyCards;
