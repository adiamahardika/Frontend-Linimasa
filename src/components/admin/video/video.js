import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { readVideo, readAllVideo } from "../../redux/action/video";
import { routes_admin } from "../../helpers/routes.json";
import { readAllVideoCategory } from "../../redux/action/video_category";
import { Link } from "react-router-dom";
import ItemVideo from "./item_video";
import DeleteVideo from "./delete_video";
import AdminLayout from "../layout/admin_layout";
import FullPageLoader from "../../helpers/loading";
import "../../css/components/button.css";
import "../../css/components/text.css";
import "../../css/components/form.css";
import "../../css/components/table.css";
import "../../css/components/icon.css";
import "../../css/admin/video.css";
class AdminVideo extends Component {
  state = {
    selectDeleteVideo: [],
  };
  data = {
    video_title: "",
    video_category: "",
  };
  componentDidMount() {
    this.props.dispatch(readAllVideo());
    this.props.dispatch(readAllVideoCategory());
  }
  selectDeleteVideo = (video) => {
    this.setState({
      selectDeleteVideo: video,
    });
  };
  searchVideo = (event) => {
    const video_title = event.target.value;
    this.data.video_title = video_title;
    this.propsHistoryPush();
  };
  filterVideo = (event) => {
    const video_category = event;
    this.data.video_category = video_category;
    this.propsHistoryPush();
  };
  propsHistoryPush = () => {
    const data = this.data;
    let result = [];
    Object.keys(data).map((key) => {
      if (data[key] !== "") {
        return result.push(key + "=" + data[key]);
      } else {
        return "";
      }
    });
    if (result.length !== 0) {
      this.props.history.push(
        `${routes_admin.admin + routes_admin.video}/?${result.map((value) => {
          if (result.indexOf(value) === result.length - 1) {
            return value;
          } else {
            return value + "&";
          }
        })}`
      );
    } else {
      this.props.history.push(routes_admin.admin + routes_admin.video);
    }
    this.props.dispatch(readVideo(data));
  };
  render() {
    const { video, loading, total_data, video_category } = this.props;
    const listVideo =
      video &&
      video.map((item, index) => {
        return (
          <ItemVideo
            key={item.id}
            item={item}
            index={index}
            selectDeleteVideo={this.selectDeleteVideo}
          />
        );
      });
    return (
      <AdminLayout>
        <FullPageLoader loading={loading} />
        <div className="admin-title">Video</div>
        <div className="form admin">
          <button type="button" className="admin btn btn-add">
            <Link
              to={
                routes_admin.admin +
                routes_admin.video +
                routes_admin.insert_video
              }
            >
              Insert
            </Link>
          </button>
          <div className="admin-icon dropdown">
            <ion-icon
              name="funnel"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            />
            <div className="dropdown-menu">
              <button
                className="dropdown-item"
                onClick={() => this.filterVideo("")}
              >
                All
              </button>
              {video_category.map((video_category, index) => (
                <button
                  className="dropdown-item"
                  key={index}
                  onClick={() => this.filterVideo(video_category.id)}
                >
                  {video_category.video_category_name}
                </button>
              ))}
            </div>
          </div>
          <input
            className="form-control admin-search"
            type="search"
            placeholder="Search Video"
            onChange={this.searchVideo}
          />
        </div>
        <div className="admin-table video">
          <div className="number-column header-admin-table">No</div>
          <div className="header-admin-table">Manage</div>
          <div className="header-admin-table">Video Title</div>
          <div className="header-admin-table">Video</div>
          <div className="header-admin-table">Video Description</div>
          <div className="header-admin-table">Video Author</div>
          <div className="header-admin-table">Video Category</div>
          <div className="header-admin-table">Date Created</div>
          <div className="header-admin-table">Date Updated</div>
          {listVideo}
        </div>
        <div className="total_data">Total Data = {total_data}</div>
        <DeleteVideo video={this.state.selectDeleteVideo} />
      </AdminLayout>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    video: state.video.video,
    loading: state.video.loading,
    total_data: state.video.total_data,
    video_category: state.video_category.video_category,
  };
};
export default withRouter(connect(mapStateToProps)(AdminVideo));
