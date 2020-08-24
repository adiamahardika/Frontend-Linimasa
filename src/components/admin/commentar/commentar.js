import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { readCommentar, readAllCommentar } from "../../redux/action/commentar";
import { routes_admin } from "../../helpers/routes.json";
import ItemCommentar from "./item_commentar";
import DeleteCommentar from "./delete_commentar";
import AdminLayout from "../layout/admin_layout";
import FullPageLoader from "../../helpers/loading";
import "../../css/admin_layout/layout.css";
import "../../css/components/button.css";
import "../../css/admin/commentar.css";
import "../../css/components/text.css";
import "../../css/components/form.css";
import "../../css/components/table.css";
class AdminCommentar extends Component {
  state = {
    selectDeleteCommentar: [],
  };
  componentDidMount() {
    this.props.dispatch(readAllCommentar());
  }
  onSelectDeleteCommentar = (commentar) => {
    this.setState({
      selectDeleteCommentar: commentar,
    });
  };
  onSearchCommentar = (event) => {
    const commentar = event.target.value
    if (commentar !== "") {
      this.props.history.push(
        `${routes_admin.admin + routes_admin.commentar}/?commentar=${commentar}`
      )
    } else {
      this.props.history.push(routes_admin.admin + routes_admin.commentar)
    }
    this.props.dispatch(readCommentar(commentar))
  }
  render() {
    const { commentar, loading } = this.props;
    const listCommentar =
      commentar &&
      commentar.map((item, index) => {
        return (
          <ItemCommentar
            key={item.id}
            item={item}
            index={index}
            onSelectDeleteCommentar={this.onSelectDeleteCommentar}
          />
        );
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
            onChange={this.onSearchCommentar}
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
        <DeleteCommentar commentar={this.state.selectDeleteCommentar} />
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
