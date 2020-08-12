import axios from "axios";
require("dotenv").config();

export const insertCommentar = (data) => {
  return {
    type: "POST_COMMENTAR",
    payload: axios({
      method: "POST",
      url: `${process.env.REACT_APP_API}/commentar`,
      data: data,
    }),
  };
};

export const readCommentar = () => {
  return {
    type: "GET_COMMENTAR",
    payload: axios({
      method: "GET",
      url: `${process.env.REACT_APP_API}/commentar`,
    }),
  };
};

export const editCommentar = (data, id) => {
  return {
    type: "PATCH_COMMENTAR",
    payload: axios({
      method: "PATCH",
      url: `${process.env.REACT_APP_API}/commentar/${id}`,
      data: data,
    }),
  };
};

export const deleteCommentar = (id) => {
  return {
    type: "DELETE_COMMENTAR",
    payload: axios({
      method: "DELETE",
      url: `${process.env.REACT_APP_API}/commentar/${id}`,
    }),
  };
};
