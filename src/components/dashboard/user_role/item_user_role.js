import React from "react";
import { parseDate } from "../../helpers/index";
const ItemUserRole = ({ item, index }) => {
  return (
    <>
      <div>{index + 1}</div>
      <div className="manage-user-role">
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
      <div className="name-user-role">{item.user_role_name}</div>
      <div>{parseDate(item.date_created)}</div>
      <div>{parseDate(item.date_updated)}</div>
    </>
  );
};
export default ItemUserRole;
