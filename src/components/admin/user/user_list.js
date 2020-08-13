import React from "react";
import { parseDate } from "../../helpers/index";
const UserList = ({ item, index, onSelectDeleteUser }) => {
  const onClickDelete = (event) => {
    event.preventDefault();
    onSelectDeleteUser(item);
  };
  return (
    <>
      <div className="number-column">{index + 1}</div>
      <div className="manage-column">
        <button
          type="button"
          className="admin btn btn-outline-delete"
          data-toggle="modal"
          data-target="#deleteModalUser"
          onClick={onClickDelete}
        >
          Delete
        </button>
      </div>
      <div className="sentences-column">{item.user_name}</div>
      <div className="media-column">
        <img className="admin-image" src={item.user_image} alt="..." />
      </div>
      <div className="sentences-column">{item.user_email}</div>
      <div>{item.user_phone_number}</div>
      <div className="sentences-column">{item.user_role_name}</div>
      <div>{item.user_points}</div>
      <div>{parseDate(item.date_created)}</div>
      <div>{parseDate(item.date_updated)}</div>
    </>
  );
};
export default UserList;
