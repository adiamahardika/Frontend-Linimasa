import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { readAds } from "../../redux/action/ads";
import { button } from "../../helpers/class_name.json";
import { text } from "../../helpers/class_name.json";
import lensajabar from "../../../assets/image/logo/lensajabar.png";
import youtube from "../../../assets/image/logo/youtube.jpg";
import instagram from "../../../assets/image/logo/instagram.jpg";
import twitter from "../../../assets/image/logo/twitter.png";
import facebook from "../../../assets/image/logo/facebook.png";
import "../../css/main/layout/top.css";
import "../../css/components/form.css";
import "../../css/components/media.css";
class Top extends Component {
  componentDidMount() {
    this.props.dispatch(readAds());
  }
  render() {
    const { ads } = this.props;
    const imageAds = (indexOrder) => {
      let url = "";
      ads &&
        ads.map((item, index) => {
          if (index === indexOrder) {
            url = item.ads_image;
          }
          return null;
        });
      return <img src={url} alt="" />;
    };
    return (
      <div className="top-section">
        {imageAds(0)}
        <div className="top-nav">
          <div className="top">
            <input
              className="form-control search paragraph-3"
              type="search"
              placeholder="Cari Berita"
            />
            <div className={text.p1}>Connect with us</div>
            <img className="socmed-logo" alt="" src={youtube} />
            <img className="socmed-logo" alt="" src={instagram} />
            <img className="socmed-logo" alt="" src={twitter} />
            <img className="socmed-logo" alt="" src={facebook} />
            <button type="button" className={button.primary}>
              Daftar Lensa ID
            </button>
            <button type="button" className={button["outline-primary"]}>
              Masuk
            </button>
          </div>
          <div className="bottom">
            <img className="lensajabar-logo" src={lensajabar} alt="" />
            {imageAds(1)}
          </div>
        </div>
        {imageAds(2)}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ads: state.ads.ads,
  };
};
export default withRouter(connect(mapStateToProps)(Top));
