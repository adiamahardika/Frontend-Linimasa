import React from "react";
import { parseDate } from "../../helpers/index";
const ItemUserRole = ({ item, index, onSelectEditUserRole, onSelectDeleteUserRole }) => {
  const onclickEdit = (event) => {
    event.preventDefault()
    onSelectEditUserRole(item)
  }
  const onClickDelete = (event) => {
    event.preventDefault()
    onSelectDeleteUserRole(item)
  }
  return (
    <>
      <div className="number-column">{index + 1}</div>
      <div className="manage-column">
        <button
          type="button"
          className="admin btn btn-outline-delete"
          data-toggle="modal"
          data-target="#deleteModalUserRole"
          onClick={onClickDelete}
        >
          Delete
        </button>
        <button
          type="button"
          className="admin btn btn-edit"
          data-toggle="modal"
          data-target="#modalEditUserRole"
          onClick={onclickEdit}
        >
          Edit
        </button>
      </div>
      <div className="sentences-column">{item.user_role_name}</div>
      <div>{parseDate(item.date_created)}</div>
      <div>{parseDate(item.date_updated)}</div>
    </>
  );
};
export default ItemUserRole;
