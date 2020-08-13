import React from "react";
import { parseDate } from "../../helpers/index";
const ItemVideo = ({ item, index }) => {
  return (
    <>
      <div className="number-column">{index + 1}</div>
      <div className="manage-column">
        <button
          type="button"
          className="admin btn btn-outline-delete"
          data-toggle="modal"
          data-target="#deleteModalVideo"
        >
          Delete
        </button>
      </div>
      <div className="sentences-column">{item.video_title}</div>
      <div className="media-column">
        <video className="admin-video" controls>
          <source src={item.video} type="video/mp4" />
        </video>
      </div>
      <div className="sentences-column">{item.video_description}</div>
      <div className="sentences-column">{item.user_name}</div>
      <div className="sentences-column">{item.video_category_name}</div>
      <div>{parseDate(item.date_created)}</div>
      <div>{parseDate(item.date_updated)}</div>
    </>
  );
};
export default ItemVideo;
