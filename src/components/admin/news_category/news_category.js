import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import {
  readNewsCategory,
  readAllNewsCategory,
} from "../../redux/action/news_category";
import { button, text } from "../../helpers/class_name.json";
import { routes_admin } from "../../helpers/routes.json";
import NewsCategoryList from "./news_category_list";
import InsertNewsCategory from "./insert_news_category";
import EditNewsCategory from "./edit_news_category";
import DeleteNewsCategory from "./delete_news_category";
import AdminLayout from "../layout/admin_layout";
import FullPageLoader from "../../helpers/loading";
import "../../css/admin/news_category.css";
import "../../css/admin_layout/layout.css";
import "../../css/components/button.css";
import "../../css/components/text.css";
import "../../css/components/form.css";
import "../../css/components/table.css";
class AdminNewsCategory extends Component {
  state = {
    selectEditNewsCategory: [],
    selectDeleteNewsCategory: [],
  };
  componentDidMount() {
    this.props.dispatch(readAllNewsCategory());
  }
  onSelectEditNewsCategory = (news_category) => {
    this.setState({
      selectEditNewsCategory: news_category,
    });
  };
  onSelectDeleteNewsCategory = (news_category) => {
    this.setState({
      selectDeleteNewsCategory: news_category,
    });
  };
  onSearchNewsCategory = (event) => {
    const news_category_name = event.target.value;
    if (news_category_name !== "") {
      this.props.history.push(
        `${
          routes_admin.admin + routes_admin.news_category
        }/?news_category_name=${news_category_name}`
      );
    } else {
      this.props.history.push(routes_admin.admin + routes_admin.news_category);
    }
    this.props.dispatch(readNewsCategory(news_category_name));
  };
  render() {
    const { news_category, loading } = this.props;
    const listNewsCategory =
      news_category &&
      news_category.map((item, index) => {
        return (
          <NewsCategoryList
            key={item.id}
            item={item}
            index={index}
            onSelectEditNewsCategory={this.onSelectEditNewsCategory}
            onSelectDeleteNewsCategory={this.onSelectDeleteNewsCategory}
          />
        );
      });
    return (
      <AdminLayout>
        <FullPageLoader loading={loading} />
        <div className={text.h1}>Kategori Berita</div>
        <div className="form admin">
          <button
            type="button"
            className={button.primary}
            data-toggle="modal"
            data-target="#modalInsertNewsCategory"
          >
            Tulis Kategori Berita
          </button>
          <input
            className="form-control search paragraph-3"
            type="search"
            placeholder="Cari Kategori Berita"
            onChange={this.onSearchNewsCategory}
          />
        </div>
        <div className="admin-table news-category">
          <div className="paragraph-1 number-column">No</div>
          <div className={text.p1}>Manage</div>
          <div className={text.p1}>Nama</div>
          <div className={text.p1}>Tanggal Dibuat</div>
          <div className={text.p1}>Tanggal Diedit</div>
          {listNewsCategory}
        </div>
        <InsertNewsCategory />
        <EditNewsCategory news_category={this.state.selectEditNewsCategory} />
        <DeleteNewsCategory
          news_category={this.state.selectDeleteNewsCategory}
        />
      </AdminLayout>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    news_category: state.news_category.news_category,
    loading: state.news_category.loading,
  };
};
export default withRouter(connect(mapStateToProps)(AdminNewsCategory));
