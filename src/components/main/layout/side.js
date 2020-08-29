import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { readAds } from "../../redux/action/ads";
import { readAllNews } from "../../redux/action/news";
import berita_terbaru from "../../../assets/image/logo/berita_terbaru.png";
import berita_terpopuler from "../../../assets/image/logo/berita_terpopuler.png";
import "../../css/main/layout/side.css";
class Side extends Component {
  componentDidMount() {
    this.props.dispatch(readAds());
    this.props.dispatch(readAllNews());
  }
  render() {
    const { news, ads } = this.props;
    const imageAds = (indexOrder) => {
      let url = "";
      return (
        ads &&
        ads.map((item, index) => {
          if (index === indexOrder) {
            url = item.ads_image;
            return <img src={url} alt="" />;
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
            <div className="news-wrapper" key={index}>
              <div className="side-news-title">{item.news_title}</div>
              <img className="side-news-image" src={item.news_image} alt="" />
            </div>
          );
        }
        return null;
      });
    return (
      <div className="side">
        {imageAds(3)}
        {imageAds(4)}
        <div>
          <div className="image-wrapper">
            <img className="image-side" src={berita_terbaru} alt="" />
          </div>
          <div className="side-news">{newsList}</div>
        </div>
        <div>
          <div className="image-wrapper">
            <img className="image-side" src={berita_terpopuler} alt="" />
          </div>
          <div className="side-news">{newsList}</div>
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
export default withRouter(connect(mapStateToProps)(Side));
