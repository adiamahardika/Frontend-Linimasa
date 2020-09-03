import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { readAds } from "../redux/action/ads";
import { readAllNews } from "../redux/action/news";
import { parseDate } from "../helpers/index";
import { readVideo } from "../redux/action/video";
import { readAllNewsCategory } from "../redux/action/news_category";
import { text } from "../helpers/class_name.json";
import { Link } from "react-router-dom";
import Top from "./layout/top";
import Navbar from "./layout/navbar";
import Side from "./layout/side";
import Footer from "./layout/footer";
import "../css/main/home.css";
import "../css/main/layout/layout.css";
import "../css/components/media.css";
import "../css/components/wrapper.css";
class Home extends Component {
  data = {
    page: 1,
    limit: 4,
    news_category_id: {},
  };
  componentDidMount() {
    this.props.dispatch(readAds());
    this.props.dispatch(readVideo(this.data));
    this.props.dispatch(readAllNews());
    this.props.dispatch(readAllNewsCategory());
  }
  render() {
    const { ads, news, video, news_category } = this.props;
    if (news_category.length > 1) {
      news_category &&
        news_category.map((item) => {
          return (this.data.news_category_id[item.news_category_name] =
            item.id);
        });
    }
    const newsListByCategory = (category, limit) => {
      let newsData = {};
      return (
        news &&
        news.map((item) => {
          if (
            category === item.news_category &&
            limit > Object.keys(newsData).length
          ) {
            newsData[item.id] = item;
            return (
              <Link
                to={{
                  pathname:
                    "/" + item.news_category_name.toLowerCase() + "/" + item.id,
                  data: item,
                }}
              >
                <div className="home-news-list">
                  <div className={text.h2}>{item.news_title}</div>
                  <div className={text.p3}>{parseDate(item.date_updated)}</div>
                  <img
                    className="home-news-image"
                    src={item.news_image}
                    alt=""
                  />
                </div>
              </Link>
            );
          }
          return null;
        })
      );
    };
    const newsList =
      news &&
      news.map((item, index) => {
        if (index <= 3) {
          return (
            <Link
              to={{
                pathname:
                  "/" + item.news_category_name.toLowerCase() + "/" + item.id,
                data: item,
              }}
            >
              <div className="home-news-list">
                <div className={text.h2}>{item.news_title}</div>
                <div className={text.p3}>{parseDate(item.date_updated)}</div>
                <img className="home-news-image" src={item.news_image} alt="" />
              </div>
            </Link>
          );
        }
        return null;
      });
    const sideNewsList =
      news &&
      news.map((item, index) => {
        if (index <= 3) {
          return (
            <Link
              to={{
                pathname:
                  "/" + item.news_category_name.toLowerCase() + "/" + item.id,
                data: item,
              }}
            >
              <div className="side-news-wrapper" key={index}>
                <div className={text.p1}>{item.news_title}</div>
                <img className="side-news-image" src={item.news_image} alt="" />
              </div>
            </Link>
          );
        }
        return null;
      });
    return (
      <div className="layout">
        <Top />
        <Navbar />
        <div className="container layout">
          <Side />
          <div className="home">
            {ads.map((item, index) => {
              if (index === 5) {
                return (
                  <img
                    className="image-ads-tengah"
                    src={item.ads_image}
                    alt=""
                    key={index}
                  />
                );
              }
              return null;
            })}
            {/* News */}
            <div>
              <div className="home-news-header">
                <div className={text.h1}>News</div>
                <div className={text.p1}>Lihat Lainnya</div>
              </div>
              <div className="news-wrapper home">{newsList}</div>
            </div>

            {/* Hype */}
            <div>
              <div className="home-news-header">
                <div className={text.h1}>Hype</div>
                <div className={text.p1}>Lihat Lainnya</div>
              </div>
              <div className="news-wrapper home">
                {newsListByCategory(this.data.news_category_id.Hype, 4)}
              </div>
            </div>
          </div>

          {/* Horizontal */}
          {/* Video */}
          <div className="home-horizontal-top">
            <div className="home-news-header">
              <div className={text.h1}>Video</div>
              <div className={text.p1}>Lihat Lainnya</div>
            </div>
            <div className="horizontal-home-news">
              {video.map((item, index) => (
                <Link
                  to={{
                    pathname:
                      "/" +
                      item.video_category_name.toLowerCase() +
                      "/" +
                      item.id,
                    data: item,
                  }}
                >
                  <div className="horizontal-home-news-list" key={index}>
                    <video className="horizontal-home-news-media">
                      <source src={item.video} type="video/mp4" />
                    </video>
                    <div className={text.p1}>{item.video_title}</div>
                    <div className={text.p3}>
                      {parseDate(item.date_updated)}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Content Middle */}
          <div className="home-content-middle">
            {/* Peritiwa */}
            <div>
              <div className="home-news-header">
                <div className={text.h1}>Peristiwa</div>
                <div className={text.p1}>Lihat Lainnya</div>
              </div>
              <div className="news-wrapper home">
                {newsListByCategory(this.data.news_category_id.Peristiwa, 4)}
              </div>
            </div>

            {/* Finance */}
            <div>
              <div className="home-news-header">
                <div className={text.h1}>Finance</div>
                <div className={text.p1}>Lihat Lainnya</div>
              </div>
              <div className="news-wrapper home">
                {newsListByCategory(this.data.news_category_id.Business, 2)}
                {newsListByCategory(this.data.news_category_id.Economy, 2)}
              </div>
            </div>
          </div>

          {/* Side Middle */}
          <div className="home-side-middle">
            {/* Entertainment */}
            <div>
              <div className="home-news-header">
                <div className={text.h1}>Entertainment</div>
                <div className={text.p1}>Lihat Lainnya</div>
              </div>
              <div className="side-news">{sideNewsList}</div>
            </div>

            {/* Komentar */}
            <div>
              <div className="home-news-header">
                <div className={text.h1}>Komentar</div>
                <div className={text.p1}>Lihat Lainnya</div>
              </div>
            </div>
          </div>

          {/* Horizontal Bottom */}
          {/* Lifestyle */}
          <div className="home-horizontal-bottom">
            <div className="home-news-header">
              <div className={text.h1}>Lifestyle</div>
              <div className={text.p1}>Lihat Lainnya</div>
            </div>
            <div className="horizontal-home-news">
              {news.map((item, index) => {
                if (index <= 3) {
                  return (
                    <Link
                      to={{
                        pathname:
                          "/" +
                          item.news_category_name.toLowerCase() +
                          "/" +
                          item.id,
                        data: item,
                      }}
                    >
                      <div className="horizontal-home-news-list" key={index}>
                        <img
                          className="horizontal-home-news-media"
                          src={item.news_image}
                          alt=""
                        />
                        <div className={text.p1}>{item.news_title}</div>
                        <div className={text.p3}>
                          {parseDate(item.date_updated)}
                        </div>
                      </div>
                    </Link>
                  );
                }
                return null;
              })}
            </div>
          </div>

          {/* Content Bottom */}
          <div className="home-content-bottom">
            {/* Humaniora */}
            <div>
              <div className="home-news-header">
                <div className={text.h1}>Humaniora</div>
                <div className={text.p1}>Lihat Lainnya</div>
              </div>
              <div className="news-wrapper home">{newsList}</div>
            </div>

            {/* Ragam */}
            <div>
              <div className="home-news-header">
                <div className={text.h1}>Ragam</div>
                <div className={text.p1}>Lihat Lainnya</div>
              </div>
              <div className="news-wrapper home">{newsList}</div>
            </div>
          </div>

          {/* Side Bottom */}
          <div className="home-side-bottom">
            {/* Techno */}
            <div>
              <div className="home-news-header">
                <div className={text.h1}>Techno</div>
                <div className={text.p1}>Lihat Lainnya</div>
              </div>
              <div className="side-news">{sideNewsList}</div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ads: state.ads.ads,
    news: state.news.news,
    video: state.video.video,
    news_category: state.news_category.news_category,
  };
};
export default withRouter(connect(mapStateToProps)(Home));
