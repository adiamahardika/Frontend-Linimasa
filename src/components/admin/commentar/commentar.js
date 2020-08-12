import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { readCommentar } from "../../redux/action/commentar";
import ItemCommentar from "./item_commentar";
import AdminLayout from "../layout/admin_layout";
import FullPageLoader from "../../helpers/loading";
import "../../css/admin_layout/layout.css";
import "../../css/components/button.css";
import "../../css/admin/commentar.css";
import "../../css/components/title.css";
import "../../css/components/form.css";
import "../../css/components/table.css";
class AdminCommentar extends Component {
  componentDidMount() {
    this.props.dispatch(readCommentar());
  }
  render() {
    const { commentar, loading } = this.props;
    const listCommentar =
      commentar &&
      commentar.map((item, index) => {
        return <ItemCommentar key={item.id} item={item} index={index} />;
      });
    return (
      <AdminLayout>
        <FullPageLoader loading={loading} />
        <div className="admin-title">Commentar</div>
        <div className="form admin">
          <input
            className="form-control admin-search"
            type="search"
            placeholder="Search Commentar"
          />
        </div>
        <div className="admin-table commentar">
          <div className="header-admin-table number-column">No</div>
          <div className="header-admin-table">Manage</div>
          <div className="header-admin-table">News Title</div>
          <div className="header-admin-table">User</div>
          <div className="header-admin-table">Commentar</div>
          <div className="header-admin-table">Date Created</div>
          <div className="header-admin-table">Date Updated</div>
          {listCommentar}
        </div>
      </AdminLayout>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    commentar: state.commentar.commentar,
    loading: state.commentar.loading,
  };
};
export default withRouter(connect(mapStateToProps)(AdminCommentar));
