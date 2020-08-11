import React from "react";
import { parseDate } from "../../helpers/index";
import "../../css/components/button.css"
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
      <div>{index + 1}</div>
      <div className="manage-ads">
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
      <div className="name-ads">{item.ads_name}</div>
      <div>
        <img src={item.ads_image} alt="..." style={{ maxHeight: 50 }} />
      </div>
      <div>{parseDate(item.date_created)}</div>
      <div>{parseDate(item.date_updated)}</div>
    </>
  );
};
export default ItemAds;
