import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteAds } from "../../redux/action/ads";
import { routes } from "../../helpers/routes.json";
import { withRouter } from "react-router";
class DeleteAds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ads: [],
    };
  }
  deleteAds = async (event) => {
    event.preventDefault();
    await this.props.dispatch(deleteAds(this.props.ads.id));
    this.props.history.push(routes.ads);
  };
  render() {
    return (
      <>
        <div
          class="modal fade"
          id="deleteModalAds"
          role="dialog"
          data-backdrop="static"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Delete Ads</h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <p>Are you sure want to delete this ads?</p>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
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
