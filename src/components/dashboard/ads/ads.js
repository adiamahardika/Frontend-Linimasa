import React, { Component } from "react";
import Sidebar from "../layout/sidebar";
import Navbar from "../layout/navbar";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import "../../css/dashboard/ads.css";
import "../../css/layout_dashboard/layout.css";
import "../../css/components/button.css";
import { readAds } from "../../redux/action/ads";
import ItemAds from "./item_ads";
import InsertAds from "./insert_ads";
import EditAds from "./edit_ads";
import DeleteAds from "./delete_ads";
class DashboardAds extends Component {
  state = {
    selectAdsEdit: [],
    selectAdsDelete: null,
  };
  componentDidMount() {
    this.props.dispatch(readAds());
  }
  onSelectAdsEdit = (ads) => {
    this.setState({
      selectAdsEdit: ads,
    });
  };
  onSelectAdsDelete = (ads) => {
    this.setState({
      selectAdsDelete: ads,
    });
  };
  render() {
    const { ads } = this.props;
    const listAds =
      ads &&
      ads.map((item, index) => {
        return (
          <ItemAds
            key={item.id}
            item={item}
            index={index}
            onSelectAdsEdit={this.onSelectAdsEdit}
            onSelectAdsDelete={this.onSelectAdsDelete}
          />
        );
      });
    return (
      <div className="container">
        <Sidebar />
        <Navbar />
        <div className="container-ads">
          <div className="title-ads">Ads Table</div>
          <div className="form ads">
            <button
              type="button"
              className="dashboard btn btn-add"
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
          </div>
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
        <EditAds ads={this.state.selectAdsEdit} />
        <DeleteAds ads={this.state.selectAdsDelete} />
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
