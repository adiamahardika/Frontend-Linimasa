import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import {
  readVideoCategory,
  readAllVideoCategory,
} from "../../redux/action/video_category";
import { routes } from "../../helpers/routes.json";
import ItemVideoCategory from "./item_video_category";
import InsertVideoCategory from "./insert_video_category";
import EditVideoCategory from "./edit_video_category";
import DeleteVideoCategory from "./delete_video_category";
import AdminLayout from "../layout/admin_layout";
import FullPageLoader from "../../helpers/loading";
import "../../css/admin_layout/layout.css";
import "../../css/components/button.css";
import "../../css/admin/video_category.css";
import "../../css/components/title.css";
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
          routes.admin + routes.video_category
        }/?video_category_name=${video_category_name}`
      );
    } else {
      this.props.history.push(routes.admin + routes.video_category);
    }
    this.props.dispatch(readVideoCategory(video_category_name));
  };
  render() {
    const { video_category, loading } = this.props;
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
      <AdminLayout>
        <FullPageLoader loading={loading} />
        <div className="admin-title">Video Category</div>
        <div className="form admin">
          <button
            type="button"
            className="admin btn btn-add"
            data-toggle="modal"
            data-target="#modalInsertVideoCategory"
          >
            Add
          </button>
          <input
            className="form-control admin-search"
            type="search"
            placeholder="Search Video Category"
            onChange={this.onSearchVideoCategory}
          />
        </div>
        <div className="admin-table video-category">
          <div className="header-admin-table number-column">No</div>
          <div className="header-admin-table">Manage</div>
          <div className="header-admin-table">Name</div>
          <div className="header-admin-table">Date Created</div>
          <div className="header-admin-table">Date Updated</div>
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
