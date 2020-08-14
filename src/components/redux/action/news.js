import axios from "axios";
require("dotenv").config();

export const insertNews = (data) => {
  return {
    type: "POST_NEWS",
    payload: axios({
      method: "POST",
      url: `${process.env.REACT_APP_API}/news`,
      data: data,
    }),
  };
};

export const readNews = (news_title) => {
  return {
    type: "GET_NEWS",
    payload: axios({
      method: "GET",
      url: `${process.env.REACT_APP_API}/news/?news_title=${news_title}`,
    }),
  };
};

export const readAllNews = () => {
  return {
    type: "GET_NEWS",
    payload: axios({
      method: "GET",
      url: `${process.env.REACT_APP_API}/news`,
    }),
  };
};

export const editNews = (data, id) => {
  return {
    type: "PATCH_NEWS",
    payload: axios({
      method: "PATCH",
      url: `${process.env.REACT_APP_API}/news/${id}`,
      data: data,
    }),
  };
};

export const deleteNews = (id) => {
  return {
    type: "DELETE_NEWS",
    payload: axios({
      method: "DELETE",
      url: `${process.env.REACT_APP_API}/news/${id}`,
    }),
  };
};
