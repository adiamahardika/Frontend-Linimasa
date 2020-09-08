import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { readNews } from "../redux/action/news";
import { readNewsCategory } from "../redux/action/news_category";
import { parseDate } from "../helpers/index";
import { text } from "../helpers/class_name.json";
import Layout from "./layout/layout";
import { Link } from "react-router-dom";
import "../css/main/news_category.css"
import "../css/components/wrapper.css";
import "../css/components/carousel.css";
class NewsCategory extends Component {
  state = {
    selectedNewsCategory: "",
  };
  data = {
    news_category: "",
    page: 1,
    limit: 200,
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
    this.data.news_category = "";
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
    const data = {};
    const carousel =
      news &&
      news.map((item, index) => {
        let newsData = {};
        if (
          this.data.news_category !== "" &&
          this.data.news_category === item.news_category &&
          Object.keys(data).length < 4
        ) {
          newsData = item;
          if (Object.keys(data).length === 0) {
            data[item.id] = item.news_title;
            return (
              <div className="carousel-item active">
                <div key={index} className="carousel">
                  <div className="gradient-overlay">
                    <img
                      className="image-carousel"
                      src={newsData.news_image}
                      alt=""
                    />
                  </div>
                  <div className={`carousel-caption`}>
                    <div className={text.h2}>{newsData.news_title}</div>
                    <div className={`${text.p3}`}>
                      {newsData.news_category_name} |{" "}
                      {parseDate(newsData.date_updated)}
                    </div>
                  </div>
                </div>
              </div>
            );
          } else {
            data[item.id] = item.news_title;
            return (
              <div className="carousel-item">
                <div key={index} className="carousel">
                  <div className="gradient-overlay">
                    <img
                      className="image-carousel"
                      src={newsData.news_image}
                      alt=""
                    />
                  </div>
                  <div className={`carousel-caption`}>
                    <div className={text.h2}>{newsData.news_title}</div>
                    <div className={`${text.p3}`}>
                      {newsData.news_category_name} |{" "}
                      {parseDate(newsData.date_updated)}
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        } else if (
          this.data.news_category === "" &&
          Object.keys(data).length < 4
        ) {
          console.log(Object.keys(data).length)
          newsData = item;
          if (Object.keys(data).length === 0) {
            data[item.id] = item.news_title;
            return (
              <div className="carousel-item active">
                <div key={index} className="carousel">
                  <div className="gradient-overlay">
                    <img
                      className="image-carousel"
                      src={newsData.news_image}
                      alt=""
                    />
                  </div>
                  <div className={`carousel-caption`}>
                    <div className={text.h2}>{newsData.news_title}</div>
                    <div className={`${text.p3}`}>
                      {newsData.news_category_name} |{" "}
                      {parseDate(newsData.date_updated)}
                    </div>
                  </div>
                </div>
              </div>
            );
          } else {
            data[item.id] = item.news_title;
            return (
              <div className="carousel-item">
                <div key={index} className="carousel">
                  <div className="gradient-overlay">
                    <img
                      className="image-carousel"
                      src={newsData.news_image}
                      alt=""
                    />
                  </div>
                  <div className={`carousel-caption`}>
                    <div className={text.h2}>{newsData.news_title}</div>
                    <div className={`${text.p3}`}>
                      {newsData.news_category_name} |{" "}
                      {parseDate(newsData.date_updated)}
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        }
        return null;
      });
    return (
      <Layout>
        <div className="news-category-wrapper">
        <div
          id="carouselIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselIndicators" data-slide-to="1"/>
            <li data-target="#carouselIndicators" data-slide-to="2"/>
            <li data-target="#carouselIndicators" data-slide-to="3"/>
          </ol>
          <div className="carousel-inner">{carousel}</div>
          <a
            className="carousel-control-prev"
            href="#carouselIndicators"
            role="button"
            data-slide="prev"
          >
            <div className="carousel-icon-wrapper">
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </div>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselIndicators"
            role="button"
            data-slide="next"
          >
            <div className="carousel-icon-wrapper">
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </div>
          </a>
        </div>
        <div className="news-wrapper">{newsList}</div>
        </div>
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
