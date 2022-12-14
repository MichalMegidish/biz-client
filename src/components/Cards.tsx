import { FunctionComponent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "../interfaces/Card";
import { deleteCard, getAllCards } from "../services/cardsService";
import { errorMsg, successMsg } from "../services/feedbacksService";
import { getBiz } from "../services/userService";
import Footer from "./Footer";

import Navbar from "./Navbar";

interface CardsProps {}

const Cards: FunctionComponent<CardsProps> = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [isChanged, setIsChanged] = useState<boolean>(false);

  useEffect(() => {
    getAllCards()
      .then((result) => setCards(result.data))
      .catch((error) => console.log(error));
  }, [isChanged]);

  return (
    <>
      <Navbar />

      <div className="container m-5 ">
        <div className="row">
          {cards.length ? (
            cards.map((card: Card) => (
              <div
                key={card._id}
                className="card col-md-3 m-2 text-center fw-light"
                style={{ height: "30rem" }}
              >
                <div className="" style={{ maxHeight: "11rem" }}>
                  <img src={card.image} alt="" style={{ maxHeight: "11rem" }} />
                </div>
                <div className="card-body text-center fw-light"></div>
                <div className="card-footer text-center">
                  <h1 className="card-title fw-light">{card.name}</h1>
                  <h5 className="card-title fw-light">{card.address}</h5>
                  <p className="card-text fw-light">{card.description}</p>
                  <p className="card-text fw-light"> {card.phone}</p>
                  <p className="card-text fw-light">
                    Card Number: {card.cardNumber}
                  </p>
                </div>
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

export default Cards;
