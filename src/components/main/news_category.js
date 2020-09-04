import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { readNews } from "../redux/action/news";
import { readNewsCategory } from "../redux/action/news_category";
import { parseDate } from "../helpers/index";
import { text } from "../helpers/class_name.json";
import Layout from "./layout/layout";
import "../css/components/wrapper.css";
import { Link } from "react-router-dom";
class NewsCategory extends Component {
  state = {
    selectedNewsCategory: "",
  };
  data = {
    news_category: "",
    page: 1,
    limit: 10,
  };

  componentDidMount() {
    const pathname = this.props.location.pathname.replace(/[^a-z- ]/g, "");
    this.setState({
      selectedNewsCategory: pathname,
    });
    if (pathname === "news") {
      this.props.dispatch(readNewsCategory(""));
    } else {
      this.props.dispatch(readNewsCategory(pathname));
    }
    this.data.news_category = ""
    this.props.dispatch(readNews(this.data));
  }
  render() {
    const { news, news_category } = this.props;
    if (news_category.length === 1) {
      this.data.news_category = news_category[0].id;
    }
    const selectedNewsCategory = this.props.location.data;
    if (selectedNewsCategory !== undefined) {
      this.data.news_category = selectedNewsCategory;
    }
    const newsList =
      news &&
      news.map((item) => {
        let newsData = {};
        if (
          this.data.news_category !== "" &&
          this.data.news_category === item.news_category
        ) {
          newsData = item;
          return (
            <Link
              to={{
                pathname:
                  "/" + item.news_category_name.toLowerCase() + "/" + item.id,
                data: item,
              }}
            >
              <div className="home-news-list" key={newsData.id}>
                <div className={text.h2}>{newsData.news_title}</div>
                <div className={text.p3}>
                  {parseDate(newsData.date_updated)}
                </div>
                <img
                  className="home-news-image"
                  src={newsData.news_image}
                  alt=""
                />
              </div>
            </Link>
          );
        } else if (this.data.news_category === "") {
          newsData = item;
          return (
            <Link
              to={{
                pathname:
                  "/" + item.news_category_name.toLowerCase() + "/" + item.id,
                data: item,
              }}
            >
              <div className="home-news-list" key={newsData.id}>
                <div className={text.h2}>{newsData.news_title}</div>
                <div className={text.p3}>
                  {parseDate(newsData.date_updated)}
                </div>
                <img
                  className="home-news-image"
                  src={newsData.news_image}
                  alt=""
                />
              </div>
            </Link>
          );
        }
        return null;
      });
    return (
      <Layout>
        <div className="news-wrapper">{newsList}</div>
      </Layout>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    news: state.news.news,
    news_category: state.news_category.news_category,
  };
};
export default withRouter(connect(mapStateToProps)(NewsCategory));
