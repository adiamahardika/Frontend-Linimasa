import React from "react";
import { parseDate } from "../../helpers/index";
import { button, text } from "../../helpers/class_name.json"
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
          className={button.danger}
          data-toggle="modal"
          data-target="#deleteModalNewsCategory"
          onClick={onClickDelete}
        >
          Delete
        </button>
        <button
          type="button"
          className={button.primary}
          data-toggle="modal"
          data-target="#modalEditNewsCategory"
          onClick={onClickEdit}
        >
          Edit
        </button>
      </div>
      <div className={text.p2}>{item.news_category_name}</div>
      <div className={text.p2}>{parseDate(item.date_created)}</div>
      <div className={text.p2}>{parseDate(item.date_updated)}</div>
    </>
  );
};
export default ItemNewsCategory;
