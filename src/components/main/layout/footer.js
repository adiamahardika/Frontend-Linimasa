import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import lensajabar from "../../../assets/image/logo/lensajabar.png";
import youtube from "../../../assets/image/logo/youtube.jpg";
import instagram from "../../../assets/image/logo/instagram.jpg";
import twitter from "../../../assets/image/logo/twitter.png";
import facebook from "../../../assets/image/logo/facebook.png";
import "../../css/main/layout/footer.css";
import "../../css/components/media.css";
class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-column left">
          <img className="lensajabar-logo" src={lensajabar} alt="" />
          <div className="footer-bold">Connect with us</div>
          <div className="socmed-wrapper">
            <img className="socmed-logo" alt="" src={youtube} />
            <img className="socmed-logo" alt="" src={instagram} />
            <img className="socmed-logo" alt="" src={twitter} />
            <img className="socmed-logo" alt="" src={facebook} />
          </div>
          <div className="footer-bold">Copyright 2014 lensajabar.com | By Lensa Digital</div>
          <div className="footer-bold">All right reserved </div>
        </div>
        <div className="footer-column middle">
          <div className="footer-bold">Informasi</div>
          <div className="informasi-column">
            <div>
              <div className="footer-items">About Us</div>
              <div className="footer-items">Box Redaksi</div>
              <div className="footer-items">Pedoman Media Siber</div>
              <div className="footer-items">Media Partner</div>
            </div>
            <div>
              <div className="footer-items">Disclaimer</div>
              <div className="footer-items">Contact Us</div>
              <div className="footer-items">Karir</div>
              <div className="footer-items">
                Term Service Privacy Policy
              </div>
            </div>
          </div>
        </div>
        <div className="footer-column right">
          <div className="footer-bold">Jaringan Media</div>
          <div>
            <div className="footer-items">Lensa Jakarta</div>
            <div className="footer-items">Lensa Sriwijaya</div>
            <div className="footer-items">Lensa Jateng News</div>
            <div className="footer-items">Jaknews Online</div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(connect()(Footer));
