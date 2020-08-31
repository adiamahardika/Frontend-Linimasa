import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { readCommentar, readAllCommentar } from "../../redux/action/commentar";
import { routes_admin } from "../../helpers/routes.json";
import { text } from "../../helpers/class_name.json"
import ItemCommentar from "./commentar_list";
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
        <div className={text.h1}>Komentar</div>
        <div className="form admin">
          <input
            className="form-control search paragraph-3"
            type="search"
            placeholder="Search Commentar"
            onChange={this.onSearchCommentar}
          />
        </div>
        <div className="admin-table commentar">
          <div className="paragraph-1 number-column">No</div>
          <div className={text.p1}>Atur</div>
          <div className={text.p1}>Judul Berita</div>
          <div className={text.p1}>User</div>
          <div className={text.p1}>Komentar</div>
          <div className={text.p1}>Tanggal Dibuat</div>
          <div className={text.p1}>Tanggal Diedit</div>
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
