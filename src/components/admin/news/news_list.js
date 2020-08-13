import React from "react";
import { parseDate } from "../../helpers/index";
const NewsList = ({ item, index }) => {
  return (
    <>
      <div className="number-column">{index + 1}</div>
      <div className="manage-column">
        <button
          type="button"
          className="admin btn btn-outline-delete"
          data-toggle="modal"
          data-target="#deleteModalNews"
        >
          Delete
        </button>
        <button type="button" className="admin btn btn-edit">
          Edit
        </button>
      </div>
      <div className="sentences-column">{item.news_title}</div>
      <div className="media-column">
        <img className="admin-image" src={item.news_image} alt="..." />
      </div>
      <div className="sentences-column">{item.news_image_description}</div>
      <div className="sentences-column">{item.news_content}</div>
      <div className="sentences-column">{item.news_category_name}</div>
      <div className="sentences-column">{item.user_name}</div>
      <div>{parseDate(item.date_created)}</div>
      <div>{parseDate(item.date_updated)}</div>
    </>
  );
};
export default NewsList;
