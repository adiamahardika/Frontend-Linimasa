import React from "react";
import { parseDate } from "../../helpers/index";
import { routes } from "../../helpers/routes.json";
import { Link } from "react-router-dom";
const NewsList = ({ item, index, onSelectDeleteNews, onSelectEditNews }) => {
  const onClickDelete = (event) => {
    event.preventDefault();
    onSelectDeleteNews(item);
  };
  const onClickEdit = (event) => {
    event.preventDefault();
    onSelectEditNews(item);
  };
  return (
    <>
      <div className="number-column">{index + 1}</div>
      <div className="manage-column">
        <button
          type="button"
          className="admin btn btn-outline-delete"
          data-toggle="modal"
          data-target="#deleteModalNews"
          onClick={onClickDelete}
        >
          Delete
        </button>
        <button
          type="button"
          className="admin btn btn-edit"
          onClick={onClickEdit}
        >
          <Link to={routes.admin + routes.news + routes.edit_news}>Edit</Link>
        </button>
      </div>
      <div className="sentences-column">{item.news_title}</div>
      <div className="media-column">
        <img className="admin-image" src={item.news_image} alt="..." />
      </div>
      <div className="sentences-column">{item.news_image_description}</div>
      <div className="sentences-column">{item.news_category_name}</div>
      <div className="sentences-column">{item.user_name}</div>
      <div>{parseDate(item.date_created)}</div>
      <div>{parseDate(item.date_updated)}</div>
    </>
  );
};
export default NewsList;
