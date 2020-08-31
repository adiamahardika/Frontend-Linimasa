import React from "react";
import { parseDate } from "../../helpers/index";
import { button, text } from "../../helpers/class_name.json";
const UserList = ({ item, index, selectDeleteUser }) => {
  const onClickDelete = (event) => {
    event.preventDefault();
    selectDeleteUser(item);
  };
  return (
    <>
      <div className="number-column">{index + 1}</div>
      <div className="manage-column">
        <button
          type="button"
          className={button.danger}
          data-toggle="modal"
          data-target="#deleteModalUser"
          onClick={onClickDelete}
        >
          Delete
        </button>
      </div>
      <div className={text.p2}>{item.user_name}</div>
      <div className="media-column">
        <img className="admin-image" src={item.user_image} alt="..." />
      </div>
      <div className={text.p2}>{item.user_email}</div>
      <div>{item.user_phone_number}</div>
      <div className={text.p2}>{item.user_role_name}</div>
      <div className={text.p2}>{item.user_points}</div>
      <div className={text.p2}>{parseDate(item.date_created)}</div>
      <div className={text.p2}>{parseDate(item.date_updated)}</div>
    </>
  );
};
export default UserList;
