import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { text } from "../../helpers/class_name.json";
import linimasa from "../../../assets/image/logo/linimasa.png";
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
          <img className="linimasa-logo" src={linimasa} alt="" />
          <div className={text.p1}>Connect with us</div>
          <div className="socmed-wrapper">
            <img className="socmed-logo" alt="" src={youtube} />
            <img className="socmed-logo" alt="" src={instagram} />
            <img className="socmed-logo" alt="" src={twitter} />
            <img className="socmed-logo" alt="" src={facebook} />
          </div>
        </div>
        <div className="footer-column middle">
          <div className={text.p1}>Informasi</div>
          <div className="informasi-column">
            <div>
              <div className={text.p3}>About Us</div>
              <div className={text.p3}>Box Redaksi</div>
              <div className={text.p3}>Pedoman Media Siber</div>
              <div className={text.p3}>Media Partner</div>
            </div>
            <div>
              <div className={text.p3}>Disclaimer</div>
              <div className={text.p3}>Contact Us</div>
              <div className={text.p3}>Karir</div>
              <div className={text.p3}>Term Service Privacy Policy</div>
            </div>
          </div>
        </div>
        <div className="footer-column right">
          <div className={text.p1}>Jaringan Media</div>
          <div>
            <div className={text.p3}>liniMasa Jabar</div>
            <div className={text.p3}>liniMasa Jateng</div>
            <div className={text.p3}>liniMasa Bali</div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(connect()(Footer));
