import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteNewsCategory } from "../../redux/action/news_category";
import { routes_admin } from "../../helpers/routes.json";
import { withRouter } from "react-router";
import { button, text } from "../../helpers/class_name.json";
class DeleteNewsCategory extends Component {
  deleteNewsCategory = async (event) => {
    event.preventDefault();
    await this.props.dispatch(deleteNewsCategory(this.props.news_category.id));
    this.props.history.push(routes_admin.admin + routes_admin.news_category);
  };
  render() {
    return (
      <>
        <div
          className="modal fade"
          id="deleteModalNewsCategory"
          role="dialog"
          data-backdrop="static"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className={text.h2}>Hapus Kategori Berita</h5>
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
                  Anda yakin akan menghapus Kategori Berita ini?
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
                  onClick={this.deleteNewsCategory}
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
export default withRouter(connect()(DeleteNewsCategory));
