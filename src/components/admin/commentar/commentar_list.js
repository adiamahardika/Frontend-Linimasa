import React from "react";
import { parseDate } from "../../helpers/index";
import { button, text} from "../../helpers/class_name.json"
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
          className={button.danger}
          data-toggle="modal"
          data-target="#deleteModalCommentar"
          onClick={onClickDelete}
        >
          Delete
        </button>
      </div>
      <div className={text.p2}>{item.news_title}</div>
      <div className={text.p2}>{item.user_name}</div>
      <div className={text.p2}>{item.commentar}</div>
      <div>{parseDate(item.date_created)}</div>
      <div>{parseDate(item.date_updated)}</div>
    </>
  );
};
export default ItemCommentar;
