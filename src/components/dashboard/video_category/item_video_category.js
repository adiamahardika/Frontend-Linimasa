import React from "react";
import { parseDate } from "../../helpers";
const ItemVideoCategory = ({ item, index }) => {
  return (
    <>
      <div>{index + 1}</div>
      <div className="manage-video-category">
        <button
          type="button"
          className="dashboard btn btn-outline-delete"
          data-toggle="modal"
          data-target="#deleteModalUserRole"
        >
          Delete
        </button>
        <button
          type="button"
          className="dashboard btn btn-edit"
          data-toggle="modal"
          data-target="#modalEditUserRole"
        >
          Edit
        </button>
      </div>
      <div className="name-video-category">{item.video_category_name}</div>
      <div>{parseDate(item.date_created)}</div>
      <div>{parseDate(item.date_updated)}</div>
    </>
  );
};
export default ItemVideoCategory;
