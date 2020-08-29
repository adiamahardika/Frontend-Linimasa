import React from "react";
import { parseDate } from "../../helpers/index";
import { routes_admin } from "../../helpers/routes.json";
import { Link } from "react-router-dom";
import { button } from "../../helpers/class_name.json"
const NewsList = ({ item, index, onSelectDeleteNews }) => {
  const onClickDelete = (event) => {
    event.preventDefault();
    onSelectDeleteNews(item);
  };
  return (
    <>
      <div className="number-column">{index + 1}</div>
      <div className="manage-column">
        <button
          type="button"
          className={button.danger}
          data-toggle="modal"
          data-target="#deleteModalNews"
          onClick={onClickDelete}
        >
          Delete
        </button>
        <button type="button" className={button.primary}>
          <Link
            to={{
              pathname:
                routes_admin.admin + routes_admin.news + routes_admin.edit_news,
              data: item,
            }}
          >
            Edit
          </Link>
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
