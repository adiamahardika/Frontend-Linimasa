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
        <tr>
          <td>{index + 1}</td>
          <td>
            <button>Delete</button>
            <button>Edit</button>
          </td>
          <td>{ads.ads_name}</td>
          <td>
            <img
              src={ads.ads_image}
              alt={ads.ads_image}
              style={{ maxHeight: 50 }}
            />
          </td>
          <td>{this.getDateTimeFromTimestamp(ads.date_created)}</td>
          <td>{this.getDateTimeFromTimestamp(ads.date_updated)}</td>
        </tr>
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
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th>No</th>
                <th>Manage</th>
                <th>Name</th>
                <th>Image</th>
                <th>Date Created</th>
                <th>Date Updated</th>
              </tr>
            </thead>
            <tbody>
                {listAds}
            </tbody>
          </table>
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
