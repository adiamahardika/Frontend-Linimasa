import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteNewsCategory } from "../../redux/action/news-category";
import { routes } from "../../helpers/routes.json";
import { withRouter } from "react-router";
import "../../css/components/button.css";
class DeleteNewsCategory extends Component {
  deleteNewsCategory = async (event) => {
    event.preventDefault();
    await this.props.dispatch(deleteNewsCategory(this.props.news_category.id));
    this.props.history.push(routes.news_category);
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
                <h5 className="modal-title">Delete News Category</h5>
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
                <p>Are you sure want to delete this news category?</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn modal-btn-close"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn modal-btn-submit"
                  onClick={this.deleteNewsCategory}
                  data-dismiss="modal"
                >
                  Delete
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
