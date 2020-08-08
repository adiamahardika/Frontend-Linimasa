import axios from "axios";
require("dotenv").config();

export const insertUserRole = (data) => {
  return {
    type: "POST_USER_ROLE",
    payload: axios({
      method: "POST",
      url: `${process.env.REACT_APP_API}/user-role`,
      data: data,
    }),
  };
};

export const readUserRole = () => {
  return {
    type: "GET_USER_ROLE",
    payload: axios({
      method: "GET",
      url: `${process.env.REACT_APP_API}/user-role`,
    }),
  };
};

export const editUserRole = (data, id) => {
  return {
    type: "PATCH_USER_ROLE",
    payload: axios({
      method: "PATCH",
      url: `${process.env.REACT_APP_API}/user-role/${id}`,
      data: data,
    }),
  };
};

export const deleteUserRole = (id) => {
  return {
    type: "DELETE_USER_ROLE",
    payload: axios({
      method: "DELETE",
      url: `${process.env.REACT_APP_API}/user-role/${id}`,
    }),
  };
};
