import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteAds } from "../../redux/action/ads";
import { routes_admin } from "../../helpers/routes.json";
import { withRouter } from "react-router";
import { button, text } from "../../helpers/class_name.json"
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
                <div className={text.h2}>Hapus Ads</div>
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
                <div className={text.p2}>Anda yakin ingin menghapus ads ini?</div>
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
                  onClick={this.deleteAds}
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
export default withRouter(connect()(DeleteAds));
