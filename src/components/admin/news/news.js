import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { readNews, readAllNews } from "../../redux/action/news";
import { routes } from "../../helpers/routes.json";
import DeleteNews from "./delete_news";
import AdminLayout from "../layout/admin_layout";
import FullPageLoader from "../../helpers/loading";
import NewsList from "./news_list";
import "../../css/admin/news.css";
import "../../css/components/button.css";
import "../../css/components/title.css";
import "../../css/components/form.css";
import "../../css/components/table.css";
import "../../css/components/image.css";
class AdminNews extends Component {
  state = {
    selectDeleteNews: [],
  };
  componentDidMount() {
    this.props.dispatch(readAllNews());
  }
  onSelectDeleteNews = (news) => {
    this.setState({
      selectDeleteNews: news,
    });
  };
  onSearchNews = (event) => {
    const news_title = event.target.value;
    if (news_title !== "") {
      this.props.history.push(
        `${routes.admin + routes.news}/?news_title=${news_title}`
      );
    } else {
      this.props.history.push(routes.admin + routes.news);
    }
    this.props.dispatch(readNews(news_title));
  };
  render() {
    const { news, loading } = this.props;
    const listNews =
      news &&
      news.map((item, index) => {
        return (
          <NewsList
            key={item.id}
            item={item}
            index={index}
            onSelectDeleteNews={this.onSelectDeleteNews}
          />
        );
      });
    return (
      <AdminLayout>
        <FullPageLoader loading={loading} />
        <div className="admin-title">News</div>
        <div className="form admin">
          <button
            type="button"
            className="admin btn btn-add"
            data-toggle="modal"
          >
            Add
          </button>
          <input
            className="form-control admin-search"
            type="search"
            placeholder="Search News"
            onChange={this.onSearchNews}
          />
        </div>
        <div className="admin-table news">
          <div className="header-admin-table number-column">No</div>
          <div className="header-admin-table">Manage</div>
          <div className="header-admin-table">News Title</div>
          <div className="header-admin-table">Image</div>
          <div className="header-admin-table">Image Description</div>
          <div className="header-admin-table">News Category</div>
          <div className="header-admin-table">News Author</div>
          <div className="header-admin-table">Date Created</div>
          <div className="header-admin-table">Date Updated</div>
          {listNews}
        </div>
        <DeleteNews news={this.state.selectDeleteNews} />
      </AdminLayout>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    news: state.news.news,
    loading: state.news.loading,
  };
};
export default withRouter(connect(mapStateToProps)(AdminNews));
