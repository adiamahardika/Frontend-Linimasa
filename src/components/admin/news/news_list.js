import React from "react";
import { parseDate } from "../../helpers/index";
import { routes_admin } from "../../helpers/routes.json";
import { Link } from "react-router-dom";
import { button, text } from "../../helpers/class_name.json";
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
          <div className={text.p3}>Delete</div>
        </button>
        <button type="button" className={button.primary}>
          <div className={text.p3}>
            <Link
              to={{
                pathname:
                  routes_admin.admin +
                  routes_admin.news +
                  routes_admin.edit_news,
                data: item,
              }}
            >
              Edit
            </Link>
          </div>
        </button>
      </div>
      <div className={text.p2}>{item.news_title}</div>
      <div className="media-column">
        <img className="admin-image" src={item.news_image} alt="..." />
      </div>
      <div className={text.p2}>{item.news_image_description}</div>
      <div className={text.p2}>{item.news_category_name}</div>
      <div className={text.p2}>{item.user_name}</div>
      <div className={text.p2}>{parseDate(item.date_created)}</div>
      <div className={text.p2}>{parseDate(item.date_updated)}</div>
    </>
  );
};
export default NewsList;
