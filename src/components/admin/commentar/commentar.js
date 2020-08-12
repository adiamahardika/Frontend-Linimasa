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
        <div className="form commentar">
          <input
            className="form-control commentar"
            type="search"
            placeholder="Search Commentar"
          />
        </div>
        <div className="table-commentar">
          <div className="header-table-commentar item-number">No</div>
          <div className="header-table-commentar">Manage</div>
          <div className="header-table-commentar">News Title</div>
          <div className="header-table-commentar">User</div>
          <div className="header-table-commentar">Commentar</div>
          <div className="header-table-commentar">Date Created</div>
          <div className="header-table-commentar">Date Updated</div>
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
