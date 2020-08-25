import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { readAds } from "../redux/action/ads";
import { readNews } from "../redux/action/news";
import { parseDate } from "../helpers/index";
import Top from "./layout/top";
import Navbar from "./layout/navbar";
import Side from "./layout/side";
import "../css/main/home.css";
import "../css/main/layout/layout.css";
import "../css/components/media.css";
class Home extends Component {
  data = {
    page: 1,
    limit: 4,
  };
  componentDidMount() {
    this.props.dispatch(readAds());
    this.props.dispatch(readNews(this.data));
  }
  render() {
    const { ads, news } = this.props;
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
                  />
                );
              }
            })}
            <div>
              <div className="news-category-name">News</div>
              <div className="home-news-wrapper">
                {news.map((item, index) => (
                  <div className="home-news-list" key={index}>
                    <div className="home-news-title">{item.news_title}</div>
                    <div className="home-news-date">
                      {parseDate(item.date_updated)}
                    </div>
                    <img
                      className="home-news-image"
                      src={item.news_image}
                      alt=""
                    />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="news-category-name">Hype</div>
              <div className="home-news-wrapper">
                {news.map((item, index) => (
                  <div className="home-news-list" key={index}>
                    <div className="home-news-title">{item.news_title}</div>
                    <div className="home-news-date">
                      {parseDate(item.date_updated)}
                    </div>
                    <img
                      className="home-news-image"
                      src={item.news_image}
                      alt=""
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="home-horizontal-top">
            <div className="news-category-name">Video</div>
          </div>
          <div className="home-content-middle">
            <div>
              <div className="news-category-name">Peristiwa</div>
              <div className="home-news-wrapper">
                {news.map((item, index) => (
                  <div className="home-news-list" key={index}>
                    <div className="home-news-title">{item.news_title}</div>
                    <div className="home-news-date">
                      {parseDate(item.date_updated)}
                    </div>
                    <img
                      className="home-news-image"
                      src={item.news_image}
                      alt=""
                    />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="news-category-name">Finance</div>
              <div className="home-news-wrapper">
                {news.map((item, index) => (
                  <div className="home-news-list" key={index}>
                    <div className="home-news-title">{item.news_title}</div>
                    <div className="home-news-date">
                      {parseDate(item.date_updated)}
                    </div>
                    <img
                      className="home-news-image"
                      src={item.news_image}
                      alt=""
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="home-side-middle">
            <div>
              <div className="news-category-name">Entertainment</div>
              <div className="side-news">
                {news.map((item, index) => (
                  <div className="news-wrapper" key={index}>
                    <div className="side-news-title">{item.news_title}</div>
                    <img
                      className="side-news-image"
                      src={item.news_image}
                      alt=""
                    />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="news-category-name">Komentar</div>
            </div>
          </div>
          <div className="home-horizontal-bottom">
            <div className="news-category-name">Lifestyle</div>
            <div className="horizontal-home-news">
              {news.map((item, index) => (
                <div className="horizontal-home-news-list" key={index}>
                  <img
                    className="horizontal-home-news-image"
                    src={item.news_image}
                    alt=""
                  />
                  <div className="horizotal-home-news-title">{item.news_title}</div>
                  <div className="horizontal-home-news-date">
                    {parseDate(item.date_updated)}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="home-content-bottom">
            <div>
              <div className="news-category-name">Humaniora</div>
              <div className="home-news-wrapper">
                {news.map((item, index) => (
                  <div className="home-news-list" key={index}>
                    <div className="home-news-title">{item.news_title}</div>
                    <div className="home-news-date">
                      {parseDate(item.date_updated)}
                    </div>
                    <img
                      className="home-news-image"
                      src={item.news_image}
                      alt=""
                    />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="news-category-name">Ragam</div>
              <div className="home-news-wrapper">
                {news.map((item, index) => (
                  <div className="home-news-list" key={index}>
                    <div className="home-news-title">{item.news_title}</div>
                    <div className="home-news-date">
                      {parseDate(item.date_updated)}
                    </div>
                    <img
                      className="home-news-image"
                      src={item.news_image}
                      alt=""
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="home-side-bottom">
            <div>
              <div className="news-category-name">Techno</div>
              <div className="side-news">
                {news.map((item, index) => (
                  <div className="news-wrapper" key={index}>
                    <div className="side-news-title">{item.news_title}</div>
                    <img
                      className="side-news-image"
                      src={item.news_image}
                      alt=""
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ads: state.ads.ads,
    news: state.news.news,
  };
};
export default withRouter(connect(mapStateToProps)(Home));
