import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { readAds } from "../../redux/action/ads";
import { button, text } from "../../helpers/class_name.json"
import AdsList from "./ads_list";
import InsertAds from "./insert_ads";
import EditAds from "./edit_ads";
import DeleteAds from "./delete_ads";
import AdminLayout from "../layout/admin_layout";
import FullPageLoader from "../../helpers/loading";
import "../../css/admin/ads.css";
import "../../css/components/button.css";
import "../../css/components/text.css";
import "../../css/components/form.css";
import "../../css/components/table.css";
import "../../css/components/media.css";
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
        <div className={text.h1}>Ads</div>
        <div className="form admin">
          <button
            type="button"
            className={button.primary}
            data-toggle="modal"
            data-target="#modalInsertAds"
          >
            Tulis Ads
          </button>
          <input
            className="form-control search paragraph-3"
            type="search"
            placeholder="Cari Ads"
          />
        </div>
        <div className="admin-table ads">
          <div className="paragraph-1 number-column">No</div>
          <div className={text.p1}>Manage</div>
          <div className={text.p1}>Nama</div>
          <div className={text.p1}>Gambar</div>
          <div className={text.p1}>Tanggal Dibuat</div>
          <div className={text.p1}>Tanggal Diedit</div>
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
