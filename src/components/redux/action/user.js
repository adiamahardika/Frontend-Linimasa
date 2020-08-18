import axios from "axios";
require("dotenv").config();

export const insertUser = (data) => {
  return {
    typr: "REGISTER_USER",
    payload: axios({
      method: "POST",
      url: `${process.env.REACT_APP_API}/user/register`,
      data: data,
    }),
  };
};

export const readUser = (user_name, user_role) => {
  return {
    type: "GET_USER",
    payload: axios({
      method: "GET",
      url: `${process.env.REACT_APP_API}/user/?user_name=${user_name}&user_role=${user_role}`,
    }),
  };
};

export const readAllUser = () => {
  return {
    type: "GET_USER",
    payload: axios({
      method: "GET",
      url: `${process.env.REACT_APP_API}/user`,
    }),
  };
};

export const editUser = (data, id) => {
  return {
    type: "PATCH_USER",
    payload: axios({
      method: "PATCH",
      url: `${process.env.REACT_APP_API}/user/${id}`,
      data: data,
    }),
  };
};

export const deleteUser = (id) => {
  return {
    type: "DELETE_USER",
    payload: axios({
      method: "DELETE",
      url: `${process.env.REACT_APP_API}/user/${id}`,
    }),
  };
};
