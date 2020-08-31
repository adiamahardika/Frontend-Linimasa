import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteVideoCategory } from "../../redux/action/video_category";
import { routes_admin } from "../../helpers/routes.json";
import { withRouter } from "react-router";
import { button, text } from "../../helpers/class_name.json";
class DeleteVideoCategory extends Component {
  deleteVideoCategory = async (event) => {
    event.preventDefault();
    await this.props.dispatch(
      deleteVideoCategory(this.props.video_category.id)
    );
    this.props.history.push(routes_admin.admin + routes_admin.video_category);
  };
  render() {
    return (
      <>
        <div
          className="modal fade"
          id="deleteModalVideoCategory"
          role="dialog"
          data-backdrop="static"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <div className={text.h2}>Hapus Kategori Video</div>
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
                <div className={text.p2}>
                  Anda yakin akan menghapus kategori video ini?
                </div>
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
                  onClick={this.deleteVideoCategory}
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
export default withRouter(connect()(DeleteVideoCategory));
