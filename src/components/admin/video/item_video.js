import React from "react";
import { parseDate } from "../../helpers/index";
import { routes_admin } from "../../helpers/routes.json";
import { Link } from "react-router-dom";
import { button, text } from "../../helpers/class_name.json";
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
          className={button.danger}
          data-toggle="modal"
          data-target="#deleteModalVideo"
          onClick={onClickDelete}
        >
          <div className={text.p3}>Hapus</div>
        </button>
        <button type="button" className={button.primary}>
          <div className={text.p3}>
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
          </div>
        </button>
      </div>
      <div className={text.p2}>{item.video_title}</div>
      <div className="media-column">
        <video className="admin-video" controls>
          <source src={item.video} type="video/mp4" />
        </video>
      </div>
      <div className={text.p2}>{item.user_name}</div>
      <div className={text.p2}>{item.video_category_name}</div>
      <div className={text.p2}>{parseDate(item.date_created)}</div>
      <div className={text.p2}>{parseDate(item.date_updated)}</div>
    </>
  );
};
export default ItemVideo;
