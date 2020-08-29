import React from "react";
import { parseDate } from "../../helpers/index";
import { routes_admin } from "../../helpers/routes.json";
import { Link } from "react-router-dom";
const ItemVideo = ({ item, index, selectDeleteVideo }) => {
  const onClickDelete = (event) => {
    event.preventDefault();
    selectDeleteVideo(item);
  };
  return (
    <>
      <div className="number-column">{index + 1}</div>
      <div className="manage-column">
        <button
          type="button"
          className="admin btn btn-outline-delete"
          data-toggle="modal"
          data-target="#deleteModalVideo"
          onClick={onClickDelete}
        >
          Delete
        </button>
        <button type="button" className="admin btn btn-edit">
          <Link
            to={{
              pathname:
                routes_admin.admin +
                routes_admin.video +
                routes_admin.edit_video,
              data: item,
            }}
          >
            Edit
          </Link>
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
