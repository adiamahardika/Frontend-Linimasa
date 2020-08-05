import React, { Component, Fragment } from "react";
import Sidebar from "../layout/sidebar";
import Navbar from "../layout/navbar";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import "../../css/dashboard/ads.css";
import "../../css/dashboard/layout.css";
import { readAds } from "../../redux/action/ads";
import InsertAds from "./insert_ads";
class DashboardAds extends Component {
  componentDidMount() {
    this.readAds();
  }
  readAds() {
    this.props.dispatch(readAds());
  }
  parseDate(time) {
    let date = new Date(time);
    return (
      ("0" + date.getDate()).slice(-2) +
      "-" +
      ("0" + (date.getMonth() + 1)).slice(-2) +
      "-" +
      date.getFullYear() +
      " " +
      ("0" + date.getHours()).slice(-2) +
      ":" +
      ("0" + date.getMinutes()).slice(-2)
    );
  }
  render() {
    const { ads } = this.props;
    const listAds =
      ads &&
      ads.map((ads, index) => (
        <Fragment key={ads.id}>
          <div>{index + 1}</div>
          <div className="manage-ads">
            <button type="button" className="btn btn-sm btn-outline-delete">
              Delete
            </button>
            <button type="button" className="btn btn-sm btn-edit">
              Edit
            </button>
          </div>
          <div className="name-ads">{ads.ads_name}</div>
          <div>
            <img
              width={400}
              height={150}
              src={ads.ads_image}
              alt="..."
              style={{ maxHeight: 50 }}
            />
          </div>
          <div>{this.parseDate(ads.date_created)}</div>
          <div>{this.parseDate(ads.date_updated)}</div>
        </Fragment>
      ));
    return (
      <div className="container">
        <Sidebar />
        <Navbar />
        <div className="container-ads">
          <div className="title-ads">Ads Table</div>
          <form className="form ads">
            <button
              type="button"
              className="btn btn-sm btn-add"
              data-toggle="modal"
              data-target="#modalInsertAds"
            >
              Add
            </button>
            <input
              className="form-control ads"
              type="search"
              placeholder="Search Ads"
            />
          </form>
          <div className="table-ads">
            <div className="header-table-ads">No</div>
            <div className="header-table-ads">Manage</div>
            <div className="header-table-ads">Name</div>
            <div className="header-table-ads">Image</div>
            <div className="header-table-ads">Date Created</div>
            <div className="header-table-ads">Date Updated</div>
            {listAds}
          </div>
        </div>
        <InsertAds />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ads: state.ads.ads,
  };
};
export default withRouter(connect(mapStateToProps)(DashboardAds));
