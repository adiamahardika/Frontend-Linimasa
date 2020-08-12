import React from "react";
import { parseDate } from "../../helpers/index";
const ItemCommentar = ({ item, index }) => {
  return (
    <>
      <div className="item-number">{index + 1}</div>
      <div className="manage-user-role">
        <button
          type="button"
          className="admin btn btn-outline-delete"
          data-toggle="modal"
          data-target="#deleteModalUserRole"
        >
          Delete
        </button>
      </div>
      <div>{item.news_title}</div>
      <div>{item.user_name}</div>
      <div>{item.commentar}</div>
      <div>{parseDate(item.date_created)}</div>
      <div>{parseDate(item.date_updated)}</div>
    </>
  );
};
export default ItemCommentar;
