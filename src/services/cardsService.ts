import axios from "axios";
import _ from "lodash";
import { Card } from "../interfaces/Card";

const api: string = process.env.REACT_APP_API || "";

//get all cards
export const getAllCards = (): Promise<any> =>
  axios.get(`${api}cards`, {
    headers: { Authorization: `${sessionStorage.getItem("token")}` },
  });

// add new card
export const AddCard = (newCard: Card): Promise<any> =>
  axios.post(`${api}cards`, newCard, {
    headers: { Authorization: `${sessionStorage.getItem("token")}` },
  });

// edit card
export const editCard = (card: Card): Promise<any> => {
  let body = _.omit(card, ["_id"]);
  return axios.put(`${api}cards/${card._id}`, body, {
    headers: { Authorization: `${sessionStorage.getItem("token")}` },
  });
};

//get card
export const getCard = (id: string): Promise<any> =>
  axios.get(`${api}cards/${id} `, {
    headers: { Authorization: `${sessionStorage.getItem("token")}` },
  });

//get specific card of specific user
export const getMyCards = (): Promise<any> =>
  axios.get(`${api}cards/mycards`, {
    headers: { Authorization: `${sessionStorage.getItem("token")}` },
  });

//delete card
export const deleteCard = (id: string): Promise<any> =>
  axios.delete(`${api}cards/${id} `, {
    headers: { Authorization: `${sessionStorage.getItem("token")}` },
  });
