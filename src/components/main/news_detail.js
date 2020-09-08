import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { readNewsDetail, readAllNews } from "../redux/action/news";
import { readAds } from "../redux/action/ads";
import { parseDate } from "../helpers/index";
import { text, button } from "../helpers/class_name.json";
import { Link } from "react-router-dom";
import Layout from "./layout/layout";
import "../css/components/wrapper.css";
import "../css/components/form.css";
import "../css/main/news_detail.css";
class NewsDetail extends Component {
  componentDidMount() {
    const id = this.props.location.pathname.split("/");
    this.props.dispatch(readNewsDetail(id[2]));
    this.props.dispatch(readAllNews());
    this.props.dispatch(readAds());
  }
  render() {
    const { news_detail, all_news } = this.props;
    const data = this.props.location.data;
    const newsData = () => {
      let news_data = {}
      if (!data || data === undefined) {
        news_data = news_detail
      } else {
        news_data = data
      }
      return (
        <div className="news-wrapper">
          <div className="news-header">
            <div className={text.p3}>{news_data.news_category_name}</div>
            <div className={text.p3}>
              {parseDate(news_data.date_updated)}
            </div>
          </div>
          <div className={`${text.h2} news-detail-title`}>{news_data.news_title}</div>
          <div className="news-image">
            <img src={news_data.news_image} alt="" />
            <div className={text.p3}>
              {news_data.news_image_description}
            </div>
          </div>
          <div
            className={text.p2}
            dangerouslySetInnerHTML={{ __html: news_data.news_content }}
            />
          <div className={text.p3}>{news_data.user_name}</div>
        </div>
      );
    };
    return (
      <Layout>
        <div className="news_detail">
          {newsData()}
          <div>
            <div className={text.h1}>Baca Lainnya</div>
            <div className="news-wrapper home">
              {all_news &&
                all_news.map((item, index) => {
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
                        <div className="home-news-list">
                          <div className={text.h2}>{item.news_title}</div>
                          <div className={text.p3}>
                            {parseDate(item.date_updated)}
                          </div>
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
                })}
            </div>
          </div>
          <div className="commentar">
            <div className={text.h1}>Komentar</div>
            <div className="news-wrapper commentar">
              <textarea
                type="text"
                className="input-commentar paragraph-2"
                placeholder="Tulis Komentar..."
                name="commentar"
                rows="5"
              />
              <button className={`${button.primary} submit-commentar`}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    news_detail: state.news.news_detail,
    all_news: state.news.all_news,
    ads: state.ads.ads,
  };
};
export default withRouter(connect(mapStateToProps)(NewsDetail));
