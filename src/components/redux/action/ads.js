import axios from "axios";
require("dotenv").config();

export const insertAds = (data) => {
  return {
    type: "POST_ADS",
    payload: axios({
      method: "POST",
      url: `${process.env.REACT_APP_API}/ads`,
      data: data,
    }),
  };
};

export const readAds = () => {
  return {
    type: "GET_ADS",
    payload: axios({
      method: "GET",
      url: `${process.env.REACT_APP_API}/ads`,
    }),
  };
};

export const readDetailAds = (ads_id) => {
  return {
    type: "GET_ADS_DETAILED",
    payload: axios({
      method: "GET",
      url: `${process.env.REACT_APP_API}/ads/${ads_id}`,
    }),
  };
};

export const editAds = (data, ads_id) => {
  return {
    type: "PATCH_ADS",
    payload: axios({
      method: "PATCH",
      url: `${process.env.REACT_APP_API}/ads/${ads_id}`,
      data: data,
    }),
  };
};

export const deleteAds = (ads_id) => {
  return {
    type: "DELETE_ADS",
    payload: axios({
      method: "DELETE",
      url: `${process.env.REACT_APP_API}/ads/${ads_id}`
    }),
  };
};
