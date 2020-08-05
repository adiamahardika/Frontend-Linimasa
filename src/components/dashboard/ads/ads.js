import React, { Component } from "react";
import Sidebar from "../layout/sidebar";
import Navbar from "../layout/navbar";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import "../../css/dashboard/ads.css";
import "../../css/dashboard/layout.css";
import { readAds } from "../../redux/action/ads";
class DashboardAds extends Component {
  componentDidMount() {
    this.readAds();
  }
  readAds() {
    this.props.dispatch(readAds());
  }
  getDateTimeFromTimestamp(unixTimeStamp) {
    let date = new Date(unixTimeStamp);
    return (
      ("0" + date.getDate()).slice(-2) +
      "/" +
      ("0" + (date.getMonth() + 1)).slice(-2) +
      "/" +
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
        <div className="row-table-ads">
          <div>{index + 1}</div>
          <div>
            <button>Delete</button>
            <button>Edit</button>
          </div>
          <div>{ads.ads_name}</div>
          <div>
            <img
              src={ads.ads_image}
              alt={ads.ads_image}
              style={{ maxHeight: 50 }}
            />
          </div>
          <div>{this.getDateTimeFromTimestamp(ads.date_created)}</div>
          <div>{this.getDateTimeFromTimestamp(ads.date_updated)}</div>
        </div>
      ));
    return (
      <div className="container">
        <Sidebar />
        <Navbar />
        <div className="container-ads">
          <div className="title-ads">Ads</div>
          <form className="form ads">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
            />
          </form>
          <div className="table-ads">
            <div className="header-table-ads">
              <div>No</div>
            <div>Manage</div>
            <div>Name</div>
            <div>Image</div>
            <div>Date Created</div>
            <div>Date Updated</div>
            </div>
            <div>{listAds}</div>
          </div>
        </div>
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
