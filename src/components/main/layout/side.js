import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { readAds } from "../../redux/action/ads";
import { readNews } from "../../redux/action/news";
import berita_terbaru from "../../../assets/image/logo/berita_terbaru.png";
import berita_terpopuler from "../../../assets/image/logo/berita_terpopuler.png";
import "../../css/main/layout/side.css";
class Side extends Component {
  data = {
    page: 1,
    limit: 4,
  };
  componentDidMount() {
    this.props.dispatch(readAds());
    this.props.dispatch(readNews(this.data));
  }
  render() {
    const { news, ads } = this.props;
    return (
      <div className="side">
        {ads.map((item, index) => {
          if (index === 3) {
            return <img src={item.ads_image} alt="" key={index}/>;
          }
        })}
        {ads.map((item, index) => {
          if (index === 4) {
            return <img src={item.ads_image} alt="" key={index}/>;
          }
        })}
        <div>
          <div className="image-wrapper">
            <img className="image-side" src={berita_terbaru} alt="" />
          </div>
          <div className="side-news">
            {news.map((item, index) => (
              <div className="news-wrapper" key={index}>
                <div className="side-news-title">{item.news_title}</div>
                <img className="side-news-image" src={item.news_image} alt="" />
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="image-wrapper">
            <img className="image-side" src={berita_terpopuler} alt="" />
          </div>
          <div className="side-news">
            {news.map((item, index) => (
              <div className="news-wrapper" key={index}>
                <div className="side-news-title">{item.news_title}</div>
                <img className="side-news-image" src={item.news_image} alt="" />
              </div>
            ))}
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
export default withRouter(connect(mapStateToProps)(Side));
