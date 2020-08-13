import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { readAds } from "../../redux/action/ads";
import AdsList from "./item_ads";
import InsertAds from "./insert_ads";
import EditAds from "./edit_ads";
import DeleteAds from "./delete_ads";
import AdminLayout from "../layout/admin_layout";
import FullPageLoader from "../../helpers/loading";
import "../../css/admin/ads.css";
import "../../css/components/button.css";
import "../../css/components/title.css";
import "../../css/components/form.css";
import "../../css/components/table.css";
import "../../css/components/image.css";
class AdminAds extends Component {
  state = {
    selectEditAds: [],
    selectDeleteAds: [],
  };
  componentDidMount() {
    this.props.dispatch(readAds());
  }
  onSelectEditAds = (ads) => {
    this.setState({
      selectEditAds: ads,
    });
  };
  onSelectDeleteAds = (ads) => {
    this.setState({
      selectDeleteAds: ads,
    });
  };
  render() {
    const { ads, loading } = this.props;
    const listAds =
      ads &&
      ads.map((item, index) => {
        return (
          <AdsList
            key={item.id}
            item={item}
            index={index}
            onSelectEditAds={this.onSelectEditAds}
            onSelectDeleteAds={this.onSelectDeleteAds}
          />
        );
      });
    return (
      <AdminLayout>
        <FullPageLoader loading={loading} />
        <div className="admin-title">Ads</div>
        <div className="form admin">
          <button
            type="button"
            className="admin btn btn-add"
            data-toggle="modal"
            data-target="#modalInsertAds"
          >
            Add
          </button>
          <input
            className="form-control admin-search"
            type="search"
            placeholder="Search Ads"
          />
        </div>
        <div className="admin-table ads">
          <div className="header-admin-table number-column">No</div>
          <div className="header-admin-table">Manage</div>
          <div className="header-admin-table">Name</div>
          <div className="header-admin-table">Image</div>
          <div className="header-admin-table">Date Created</div>
          <div className="header-admin-table">Date Updated</div>
          {listAds}
        </div>
        <InsertAds />
        <EditAds ads={this.state.selectEditAds} />
        <DeleteAds ads={this.state.selectDeleteAds} />
      </AdminLayout>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ads: state.ads.ads,
    loading: state.ads.loading,
  };
};
export default withRouter(connect(mapStateToProps)(AdminAds));
