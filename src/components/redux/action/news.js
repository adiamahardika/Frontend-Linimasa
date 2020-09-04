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

export const readNews = (data) => {
  const news_title = data.news_title || "";
  const news_category = data.news_category || "";
  const page = data.page || 1;
  const limit = data.limit || 10;
  return {
    type: "GET_NEWS",
    payload: axios({
      method: "GET",
      url: `${process.env.REACT_APP_API}/news/?news_title=${news_title}&news_category=${news_category}&page=${page}&limit=${limit}`,
    }),
  };
};

export const readAllNews = () => {
  return {
    type: "GET_ALL_NEWS",
    payload: axios({
      method: "GET",
      url: `${process.env.REACT_APP_API}/news`,
    }),
  };
};

export const readNewsDetail = (id) => {
  return {
    type: "GET_NEWS_DETAIL",
    payload: axios({
      method: "GET",
      url: `${process.env.REACT_APP_API}/news/${id}`,
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
