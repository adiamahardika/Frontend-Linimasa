import React from "react";
import { parseDate } from "../../helpers/index";
const AdsItem = ({ item, index, onSelectAdsEdit, onSelectAdsDelete }) => {
  const onClickEdit = (event) => {
    event.preventDefault();
    onSelectAdsEdit(item);
  };
  const onClickDelete = (event) => {
    event.preventDefault();
    onSelectAdsDelete(item);
  };
  return (
    <>
      <div>{index + 1}</div>
      <div className="manage-ads">
        <button
          type="button"
          className="btn btn-sm btn-outline-delete"
          data-toggle="modal"
          data-target="#deleteModalAds"
          onClick={onClickDelete}
        >
          Delete
        </button>
        <button
          type="button"
          className="btn btn-sm btn-edit"
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
export default AdsItem;
