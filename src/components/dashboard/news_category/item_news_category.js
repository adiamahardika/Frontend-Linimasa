import React from "react";
import { parseDate } from "../../helpers/index";
const ItemNewsCategory = ({ item, index }) => {
  return (
    <>
      <div>{index + 1}</div>
      <div className="manage-news-category">
        <button
          type="button"
          className="dashboard btn btn-outline-delete"
          data-toggle="modal"
          data-target="#deleteModalNewsCategory"
        >
          Delete
        </button>
        <button
          type="button"
          className="dashboard btn btn-edit"
          data-toggle="modal"
          data-target="#modalEditNewsCategory"
        >
          Edit
        </button>
      </div>
      <div className="name-news-category">{item.news_category_name}</div>
      <div>{parseDate(item.date_created)}</div>
      <div>{parseDate(item.date_updated)}</div>
    </>
  );
};
export default ItemNewsCategory;
