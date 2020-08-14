import axios from "axios";
require("dotenv").config();

export const insertNewsCategory = (data) => {
  return {
    type: "POST_NEWS_CATEGORY",
    payload: axios({
      method: "POST",
      url: `${process.env.REACT_APP_API}/news-category`,
      data: data,
    }),
  };
};

export const readNewsCategory = (news_category_name) => {
  return {
    type: "GET_NEWS_CATEGORY",
    payload: axios({
      method: "GET",
      url: `${process.env.REACT_APP_API}/news-category/?news_category_name=${news_category_name}`,
    }),
  };
};

export const readAllNewsCategory = () => {
  return {
    type: "GET_NEWS_CATEGORY",
    payload: axios({
      method: "GET",
      url: `${process.env.REACT_APP_API}/news-category`,
    }),
  };
};

export const editNewsCategory = (data, id) => {
  return {
    type: "PATCH_NEWS_CATEGORY",
    payload: axios({
      method: "PATCH",
      url: `${process.env.REACT_APP_API}/news-category/${id}`,
      data: data,
    }),
  };
};

export const deleteNewsCategory = (id) => {
  return {
    type: "DELETE_NEWS_CATEGORY",
    payload: axios({
      method: "DELETE",
      url: `${process.env.REACT_APP_API}/news-category/${id}`,
    }),
  };
};
