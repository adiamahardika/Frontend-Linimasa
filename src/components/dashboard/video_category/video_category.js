import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { readVideoCategory } from "../../redux/action/video_category";
import "../../css/layout_dashboard/layout.css";
import "../../css/components/button.css";
import "../../css/dashboard/video_category.css";
import Sidebar from "../layout/sidebar";
import Navbar from "../layout/navbar";
import ItemVideoCategory from "./item_video_category";
import InsertVideoCategory from "./insert_video_category";
import EditVideoCategory from "./edit_video_category";
import DeleteVideoCategory from './delete_video_category'
class DashboardVideoCategory extends Component {
  state = {
    selectEditVideoCategory: [],
    selectDeleteVideoCategory: [],
  };
  componentDidMount() {
    this.props.dispatch(readVideoCategory());
  }
  onSelectEditVideoCategory = (video_category) => {
    this.setState({
      selectEditVideoCategory: video_category,
    });
  };
  onSelectDeleteVideoCategory = (video_category) => {
    this.setState({
      selectDeleteVideoCategory: video_category,
    });
  };
  render() {
    const { video_category } = this.props;
    const listVideoCategory =
      video_category &&
      video_category.map((item, index) => {
        return (
          <ItemVideoCategory
            key={item.id}
            item={item}
            index={index}
            selectEditVideoCategory={this.onSelectEditVideoCategory}
            selectDeleteVideoCategory={this.onSelectDeleteVideoCategory}
          />
        );
      });
    return (
      <div className="container">
        <Sidebar />
        <Navbar />
        <div className="container-video-category">
          <div className="title-video-category">Video Category Table</div>
          <div className="form video-category">
            <button
              type="button"
              className="dashboard btn btn-add"
              data-toggle="modal"
              data-target="#modalInsertVideoCategory"
            >
              Add
            </button>
            <input
              className="form-control video-category"
              type="search"
              placeholder="Search Video Category"
            />
          </div>
          <div className="table-video-category">
            <div className="header-table-video-category">No</div>
            <div className="header-table-video-category">Manage</div>
            <div className="header-table-video-category">Name</div>
            <div className="header-table-video-category">Date Created</div>
            <div className="header-table-video-category">Date Updated</div>
            {listVideoCategory}
          </div>
        </div>
        <InsertVideoCategory />
        <EditVideoCategory
          video_category={this.state.selectEditVideoCategory}
        />
        <DeleteVideoCategory video_category={this.state.selectDeleteVideoCategory}/>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    video_category: state.video_category.video_category,
  };
};
export default withRouter(connect(mapStateToProps)(DashboardVideoCategory));