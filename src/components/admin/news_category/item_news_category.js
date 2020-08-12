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
      <div className="number-column">{index + 1}</div>
      <div className="manage-column">
        <button
          type="button"
          className="admin btn btn-outline-delete"
          data-toggle="modal"
          data-target="#deleteModalNewsCategory"
          onClick={onClickDelete}
        >
          Delete
        </button>
        <button
          type="button"
          className="admin btn btn-edit"
          data-toggle="modal"
          data-target="#modalEditNewsCategory"
          onClick={onClickEdit}
        >
          Edit
        </button>
      </div>
      <div className="sentences-column">{item.news_category_name}</div>
      <div>{parseDate(item.date_created)}</div>
      <div>{parseDate(item.date_updated)}</div>
    </>
  );
};
export default ItemNewsCategory;