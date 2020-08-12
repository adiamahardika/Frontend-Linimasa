import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { readAds } from "../../redux/action/ads";
import ItemAds from "./item_ads";
import InsertAds from "./insert_ads";
import EditAds from "./edit_ads";
import DeleteAds from "./delete_ads";
import AdminLayout from "../layout/admin_layout";
import FullPageLoader from "../../helpers/loading";
import "../../css/admin/ads.css";
import "../../css/admin_layout/layout.css";
import "../../css/components/button.css";
import "../../css/components/title.css";
import "../../css/components/form.css";
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
          <ItemAds
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
        <div className="table-ads">
          <div className="header-table-ads">No</div>
          <div className="header-table-ads">Manage</div>
          <div className="header-table-ads">Name</div>
          <div className="header-table-ads">Image</div>
          <div className="header-table-ads">Date Created</div>
          <div className="header-table-ads">Date Updated</div>
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
