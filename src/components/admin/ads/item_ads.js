import React from "react";
import { parseDate } from "../../helpers/index";
const ItemAds = ({ item, index, onSelectEditAds, onSelectDeleteAds }) => {
  const onClickEdit = (event) => {
    event.preventDefault();
    onSelectEditAds(item);
  };
  const onClickDelete = (event) => {
    event.preventDefault();
    onSelectDeleteAds(item);
  };
  return (
    <>
      <div className="number-column">{index + 1}</div>
      <div className="manage-column">
        <button
          type="button"
          className="admin btn btn-outline-delete"
          data-toggle="modal"
          data-target="#deleteModalAds"
          onClick={onClickDelete}
        >
          Delete
        </button>
        <button
          type="button"
          className="admin btn btn-edit"
          data-toggle="modal"
          data-target="#modalEditAds"
          onClick={onClickEdit}
        >
          Edit
        </button>
      </div>
      <div className="sentences-column">{item.ads_name}</div>
      <div className="media-column">
        <img className="admin-image" src={item.ads_image} alt="..." />
      </div>
      <div>{parseDate(item.date_created)}</div>
      <div>{parseDate(item.date_updated)}</div>
    </>
  );
};
export default ItemAds;
