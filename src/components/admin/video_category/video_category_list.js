import React from "react";
import { parseDate } from "../../helpers/index";
import { button, text } from "../../helpers/class_name.json";
const VideoCategoryList = ({
  item,
  index,
  selectEditVideoCategory,
  selectDeleteVideoCategory,
}) => {
  const onClickEdit = (event) => {
    event.preventDefault();
    selectEditVideoCategory(item);
  };
  const onClickDelete = (event) => {
    event.preventDefault();
    selectDeleteVideoCategory(item);
  };
  return (
    <>
      <div className="number-column">{index + 1}</div>
      <div className="manage-column">
        <button
          type="button"
          className={button.danger}
          data-toggle="modal"
          data-target="#deleteModalVideoCategory"
          onClick={onClickDelete}
        >
          Delete
        </button>
        <button
          type="button"
          className={button.primary}
          data-toggle="modal"
          data-target="#modalEditVideoCategory"
          onClick={onClickEdit}
        >
          Edit
        </button>
      </div>
      <div className={text.p2}>{item.video_category_name}</div>
      <div className={text.p2}>{parseDate(item.date_created)}</div>
      <div className={text.p2}>{parseDate(item.date_updated)}</div>
    </>
  );
};
export default VideoCategoryList;
