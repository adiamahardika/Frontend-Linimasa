import React from "react";
import { parseDate } from "../../helpers/index";
const ItemCommentar = ({ item, index, onSelectDeleteCommentar }) => {
  const onClickDelete = (event) => {
    event.preventDefault()
    onSelectDeleteCommentar(item)
  }
  return (
    <>
      <div className="number-column">{index + 1}</div>
      <div className="manage-column">
        <button
          type="button"
          className="admin btn btn-outline-delete"
          data-toggle="modal"
          data-target="#deleteModalCommentar"
          onClick={onClickDelete}
        >
          Delete
        </button>
      </div>
      <div className="sentences-column">{item.news_title}</div>
      <div className="sentences-column">{item.user_name}</div>
      <div className="sentences-column">{item.commentar}</div>
      <div>{parseDate(item.date_created)}</div>
      <div>{parseDate(item.date_updated)}</div>
    </>
  );
};
export default ItemCommentar;
