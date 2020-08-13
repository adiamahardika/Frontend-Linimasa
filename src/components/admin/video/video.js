import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { readVideo } from "../../redux/action/video";
import ItemVideo from "./item_video";
import DeleteVideo from "./delete_video";
import AdminLayout from "../layout/admin_layout";
import FullPageLoader from "../../helpers/loading";
import "../../css/components/button.css";
import "../../css/components/title.css";
import "../../css/components/form.css";
import "../../css/components/table.css";
import "../../css/admin/video.css";
class AdminVideo extends Component {
  state = {
    selectDeleteVideo: [],
  };
  componentDidMount() {
    this.props.dispatch(readVideo());
  }
  onSelectDeleteVideo = (video) => {
    this.setState({
      selectDeleteVideo: video,
    });
  };
  render() {
    const { video, loading, total_data } = this.props;
    const listVideo =
      video &&
      video.map((item, index) => {
        return (
          <ItemVideo
            key={item.id}
            item={item}
            index={index}
            selectDeleteVideo={this.onSelectDeleteVideo}
          />
        );
      });
    return (
      <AdminLayout>
        <FullPageLoader loading={loading} />
        <div className="admin-title">Video</div>
        <div className="form admin">
          <input
            className="form-control admin-search"
            type="search"
            placeholder="Search Video"
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
        <div className="total_data">
          Total Data = {total_data}
        </div>
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
  };
};
export default withRouter(connect(mapStateToProps)(AdminVideo));
