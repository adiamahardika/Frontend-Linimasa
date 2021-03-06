import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import {
  readVideoCategory,
  readAllVideoCategory,
} from "../../redux/action/video_category";
import { routes_admin } from "../../helpers/routes.json";
import { button, text } from "../../helpers/class_name.json";
import VideoCategoryList from "./video_category_list";
import InsertVideoCategory from "./insert_video_category";
import EditVideoCategory from "./edit_video_category";
import DeleteVideoCategory from "./delete_video_category";
import AdminLayout from "../layout/admin_layout";
import FullPageLoader from "../../helpers/loading";
import "../../css/admin_layout/layout.css";
import "../../css/components/button.css";
import "../../css/admin/video_category.css";
import "../../css/components/text.css";
import "../../css/components/form.css";
import "../../css/components/table.css";
class AdminVideoCategory extends Component {
  state = {
    selectEditVideoCategory: [],
    selectDeleteVideoCategory: [],
  };
  componentDidMount() {
    this.props.dispatch(readAllVideoCategory());
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
  onSearchVideoCategory = (event) => {
    const video_category_name = event.target.value;
    if (video_category_name !== "") {
      this.props.history.push(
        `${
          routes_admin.admin + routes_admin.video_category
        }/?video_category_name=${video_category_name}`
      );
    } else {
      this.props.history.push(routes_admin.admin + routes_admin.video_category);
    }
    this.props.dispatch(readVideoCategory(video_category_name));
  };
  render() {
    const { video_category, loading } = this.props;
    const listVideoCategory =
      video_category &&
      video_category.map((item, index) => {
        return (
          <VideoCategoryList
            key={item.id}
            item={item}
            index={index}
            selectEditVideoCategory={this.onSelectEditVideoCategory}
            selectDeleteVideoCategory={this.onSelectDeleteVideoCategory}
          />
        );
      });
    return (
      <AdminLayout>
        <FullPageLoader loading={loading} />
        <div className={text.h1}>Kategori Video</div>
        <div className="form admin">
          <button
            type="button"
            className={button.primary}
            data-toggle="modal"
            data-target="#modalInsertVideoCategory"
          >
            Tulis Kategori Video
          </button>
          <input
            className="form-control search paragraph-3"
            type="search"
            placeholder="Search Video Category"
            onChange={this.onSearchVideoCategory}
          />
        </div>
        <div className="admin-table video-category">
          <div className="paragraph-1 number-column">No</div>
          <div className={text.p1}>Manage</div>
          <div className={text.p1}>Name</div>
          <div className={text.p1}>Date Created</div>
          <div className={text.p1}>Date Updated</div>
          {listVideoCategory}
        </div>
        <InsertVideoCategory />
        <EditVideoCategory
          video_category={this.state.selectEditVideoCategory}
        />
        <DeleteVideoCategory
          video_category={this.state.selectDeleteVideoCategory}
        />
      </AdminLayout>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    video_category: state.video_category.video_category,
    loading: state.video_category.loading,
  };
};
export default withRouter(connect(mapStateToProps)(AdminVideoCategory));
