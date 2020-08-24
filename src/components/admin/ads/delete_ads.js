import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteAds } from "../../redux/action/ads";
import { routes_admin } from "../../helpers/routes.json";
import { withRouter } from "react-router";
class DeleteAds extends Component {
  deleteAds = async (event) => {
    event.preventDefault();
    await this.props.dispatch(deleteAds(this.props.ads.id));
    this.props.history.push(routes_admin.admin + routes_admin.ads);
  };
  render() {
    return (
      <>
        <div
          className="modal fade"
          id="deleteModalAds"
          role="dialog"
          data-backdrop="static"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Delete Ads</h5>
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
                <p>Are you sure want to delete this ads?</p>
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
                  onClick={this.deleteAds}
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
export default withRouter(connect()(DeleteAds));
