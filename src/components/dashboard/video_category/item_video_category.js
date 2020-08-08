import React from "react";
import { parseDate } from "../../helpers";
const ItemVideoCategory = ({ item, index, selectEditVideoCategory }) => {
  const onClickEdit = (event) => {
    event.preventDefault()
    selectEditVideoCategory(item)
  }
  return (
    <>
      <div>{index + 1}</div>
      <div className="manage-video-category">
        <button
          type="button"
          className="dashboard btn btn-outline-delete"
          data-toggle="modal"
          data-target="#deleteModalVideoCategory"
        >
          Delete
        </button>
        <button
          type="button"
          className="dashboard btn btn-edit"
          data-toggle="modal"
          data-target="#modalEditVideoCategory"
          onClick={onClickEdit}
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
