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

export const readNewsCategory = () => {
    return {
        type: "GET_NEWS_CATEGORY",
        payload: axios({
            method: "GET",
            url: `${process.env.REACT_APP_API}/news-category`,
        })
    }
}
