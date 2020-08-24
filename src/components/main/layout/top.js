import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { readAds } from "../../redux/action/ads";
import lensajabar from "../../../assets/image/logo/lensajabar.png"
import youtube from "../../../assets/image/logo/youtube.jpg"
import instagram from "../../../assets/image/logo/instagram.jpg"
import twitter from "../../../assets/image/logo/twitter.png"
import facebook from "../../../assets/image/logo/facebook.png"
import "../../css/main/layout/top.css"
import "../../css/components/form.css"
import "../../css/components/media.css"
class Top extends Component {
  componentDidMount() {
    this.props.dispatch(readAds());
  }
  render() {
    return (
      <div className="top">
        <img alt="" />
        <div className="top-nav top">
          <input
            className="form-control search"
            type="search"
            placeholder="Search News"
          />
          Connect with us
          <img className="socmed-logo" alt="" src={youtube}/>
          <img className="socmed-logo" alt="" src={instagram}/>
          <img className="socmed-logo" alt="" src={twitter}/>
          <img className="socmed-logo" alt="" src={facebook}/>
          <button type="button" className="btn primary">
            Daftar Lensa ID
          </button>
          <button type="button" className="btn secondary">
            Masuk
          </button>
        </div>
        <div className="top-nav bottom">
          <img className="lensajabar-logo" src={lensajabar} alt=""/>
          <img alt="" />
        </div>
        <img alt="" />
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
