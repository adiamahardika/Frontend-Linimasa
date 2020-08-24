import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { readNews, readAllNews } from "../../redux/action/news";
import { routes_admin } from "../../helpers/routes.json";
import { readAllNewsCategory } from "../../redux/action/news_category";
import { Link } from "react-router-dom";
import DeleteNews from "./delete_news";
import AdminLayout from "../layout/admin_layout";
import EditNews from "./edit_news";
import FullPageLoader from "../../helpers/loading";
import NewsList from "./news_list";
import "../../css/admin/news.css";
import "../../css/components/button.css";
import "../../css/components/text.css";
import "../../css/components/form.css";
import "../../css/components/table.css";
import "../../css/components/media.css";
import "../../css/components/icon.css";
class AdminNews extends Component {
  state = {
    selectDeleteNews: [],
    selectEditNews: [],
  };
  data = {
    news_title: "",
    news_category: "",
  };
  componentDidMount() {
    this.props.dispatch(readAllNews());
    this.props.dispatch(readAllNewsCategory());
  }
  onSelectDeleteNews = (news) => {
    this.setState({
      selectDeleteNews: news,
    });
  };
  onSelectEditNews = (news) => {
    this.setState({
      selectEditNews: news,
    });
  };
  searchNews = (event) => {
    const news_title = event.target.value;
    this.data.news_title = news_title;
    this.propsHistoryPush();
  };
  filterNews = (event) => {
    const news_category = event;
    this.data.news_category = news_category;
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
        `${routes_admin.admin + routes_admin.news}/?${result.map((value) => {
          if (result.indexOf(value) === result.length - 1) {
            return value;
          } else {
            return value + "&";
          }
        })}`
      );
    } else {
      this.props.history.push(routes_admin.admin + routes_admin.news);
    }
    this.props.dispatch(
      readNews(this.data.news_title, this.data.news_category)
    );
  };
  render() {
    const { news, loading, news_category } = this.props;
    const listNews =
      news &&
      news.map((item, index) => {
        return (
          <NewsList
            key={item.id}
            item={item}
            index={index}
            onSelectDeleteNews={this.onSelectDeleteNews}
            onSelectEditNews={this.onSelectEditNews}
          />
        );
      });
    return (
      <>
        <FullPageLoader loading={loading} />
        <AdminLayout>
          <div className="admin-title">News</div>
          <div className="form admin">
            <button type="button" className="admin btn btn-add">
              <Link to={routes_admin.admin + routes_admin.news + routes_admin.insert_news}>
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
                  onClick={() => this.filterNews("")}
                >
                  All
                </button>
                {news_category.map((news_category, index) => (
                  <button
                    className="dropdown-item"
                    key={index}
                    onClick={() => this.filterNews(news_category.id)}
                  >
                    {news_category.news_category_name}
                  </button>
                ))}
              </div>
            </div>
            <input
              className="form-control admin-search"
              type="search"
              placeholder="Search News"
              onChange={this.searchNews}
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
        </AdminLayout>
        <DeleteNews news={this.state.selectDeleteNews} />
        <EditNews news={this.state.selectEditNews} />
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    news: state.news.news,
    loading: state.news.loading,
    news_category: state.news_category.news_category,
  };
};
export default withRouter(connect(mapStateToProps)(AdminNews));
