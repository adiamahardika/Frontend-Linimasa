import React from "react";
import { parseDate } from "../../helpers/index";
const ItemNewsCategory = ({ item, index, onSelectEditNewsCategory, onSelectDeleteNewsCategory }) => {
  const onClickEdit = (event) => {
    event.preventDefault()
    onSelectEditNewsCategory(item)
  }
  const onClickDelete = (event) => {
    event.preventDefault()
    onSelectDeleteNewsCategory(item)
    
  }
  return (
    <>
      <div>{index + 1}</div>
      <div className="manage-news-category">
        <button
          type="button"
          className="dashboard btn btn-outline-delete"
          data-toggle="modal"
          data-target="#deleteModalNewsCategory"
          onClick={onClickDelete}
        >
          Delete
        </button>
        <button
          type="button"
          className="dashboard btn btn-edit"
          data-toggle="modal"
          data-target="#modalEditNewsCategory"
          onClick={onClickEdit}
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
