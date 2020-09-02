import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { button } from "../../helpers/class_name.json";
import lensajabar from "../../../assets/image/logo/lensajabar.png";
import "../../css/main/layout/top.css";
import "../../css/components/form.css";
import "../../css/components/media.css";
class Top extends Component {
  render() {
    return (
        <div className="top-nav">
          <img className="lensajabar-logo" src={lensajabar} alt="" />
          <input
            className="form-control search paragraph-3"
            type="search"
            placeholder="Cari Berita"
          />
          <button type="button" className={button.primary}>
            Daftar Lensa ID
          </button>
          <button type="button" className={button["outline-primary"]}>
            Masuk
          </button>
        </div>
    );
  }
}
export default withRouter(connect()(Top));
