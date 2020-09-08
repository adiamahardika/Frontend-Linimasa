import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { button } from "../../helpers/class_name.json";
import linimasa from "../../../assets/image/logo/linimasa.png";
import "../../css/main/layout/top.css";
import "../../css/components/form.css";
import "../../css/components/media.css";
class Top extends Component {
  render() {
    return (
        <div className="top-nav">
          <img className="linimasa-logo" src={linimasa} alt="" />
          <input
            className="form-control search paragraph-3"
            type="search"
            placeholder="Cari Berita"
          />
          <button type="button" className={button.primary}>
            Daftar lini ID
          </button>
          <button type="button" className={button["outline-primary"]}>
            Masuk
          </button>
        </div>
    );
  }
}
export default withRouter(connect()(Top));
