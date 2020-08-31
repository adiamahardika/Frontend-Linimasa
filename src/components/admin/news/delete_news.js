import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteNews } from "../../redux/action/news";
import { routes_admin } from "../../helpers/routes.json";
import { withRouter } from "react-router";
import { button, text } from "../../helpers/class_name.json"
class DeleteNews extends Component {
  deleteNews = async (event) => {
    event.preventDefault();
    await this.props.dispatch(deleteNews(this.props.news.id));
    this.props.history.push(routes_admin.admin + routes_admin.news);
  };
  render() {
    return (
      <>
        <div
          className="modal fade"
          id="deleteModalNews"
          role="dialog"
          data-backdrop="static"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <div className={text.h2}>Hapus Berita</div>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className={text.p2}>Anda yakin akan menghapus berita ini?</div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className={button["outline-primary"]}
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className={button.danger}
                  onClick={this.deleteNews}
                  data-dismiss="modal"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default withRouter(connect()(DeleteNews));
