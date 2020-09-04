import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { readAllNews } from "../../redux/action/news";
import { text } from "../../helpers/class_name.json";
import berita_terbaru from "../../../assets/image/logo/berita_terbaru.png";
import berita_terpopuler from "../../../assets/image/logo/berita_terpopuler.png";
import "../../css/main/layout/side.css";
import { Link } from "react-router-dom";
class Side extends Component {
  componentDidMount() {
    this.props.dispatch(readAllNews());
  }
  render() {
    const { all_news, ads } = this.props;
    const imageAds = (indexOrder) => {
      let url = "";
      return (
        ads &&
        ads.map((item, index) => {
          if (index === indexOrder) {
            url = item.ads_image;
            return <img src={url} alt="" key={item.id} />;
          }
          return null;
        })
      );
    };
    const newsList =
      all_news &&
      all_news.map((item, index) => {
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
      <div className="side">
        {imageAds(0)}
        {imageAds(1)}
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
    all_news: state.news.all_news,
  };
};
export default withRouter(connect(mapStateToProps)(Side));
