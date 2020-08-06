import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { readNewsCategory } from "../../redux/action/news-cateogry";
import "../../css/dashboard/news_category.css";
import "../../css/layout_dashboard/layout.css";
import "../../css/components/button.css";
import Sidebar from "../layout/sidebar";
import Navbar from "../layout/navbar";
import ItemNewsCategory from "./item_news_category";
import InsertNewsCategory from "./insert_news_category"
class DashboardNewsCategory extends Component {
  componentDidMount() {
    this.props.dispatch(readNewsCategory());
  }
  render() {
    const { news_category } = this.props;
    const listNewsCategory =
      news_category &&
      news_category.map((item, index) => {
        return <ItemNewsCategory key={item.id} item={item} index={index} />;
      });
    return (
      <div className="container">
        <Sidebar />
        <Navbar />
        <div className="container-news-category">
          <div className="title-news-category">News Category Table</div>
          <div className="form news-category">
            <button
              type="button"
              className="dashboard btn btn-add"
              data-toggle="modal"
              data-target="#modalInsertNewsCategory"
            >
              Add
            </button>
            <input
              className="form-control news-category"
              type="search"
              placeholder="Search News Category"
            />
          </div>
          <div className="table-news-category">
            <div className="header-table-news-category">No</div>
            <div className="header-table-news-category">Manage</div>
            <div className="header-table-news-category">Name</div>
            <div className="header-table-news-category">Date Created</div>
            <div className="header-table-news-category">Date Updated</div>
            {listNewsCategory}
          </div>
        </div>
        <InsertNewsCategory/>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    news_category: state.news_category.news_category,
  };
};
export default withRouter(connect(mapStateToProps)(DashboardNewsCategory));
