import React, { Component } from "react";
import { connect } from "react-redux";
import { insertAds } from "../../redux/action/ads";
import { withRouter } from "react-router-dom";
import { imageFilter } from "../../helpers/index";
import { routes_admin } from "../../helpers/routes.json";
class InsertAds extends Component {
  state = {
    ads_name: "",
    ads_image: "",
  };
  onInsertAds = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  onInsertImage = (event) => {
    const image = event.target.files[0];
    const filter = imageFilter(image);
    if (filter !== null) {
      this.setState({
        ads_image: image,
      });
    }
  };
  insertAds = async (event) => {
    event.preventDefault();
    let data = new FormData();

    data.append("ads_name", this.state.ads_name);
    data.append("ads_image", this.state.ads_image);

    await this.props.dispatch(insertAds(data));
    this.props.history.push(routes_admin.admin + routes_admin.ads);
  };
  render() {
    const SubmitButton = () => {
      if (Object.values(this.state).every((values) => values !== "")) {
        return (
          <button
            type="submit"
            className="btn modal-btn-submit"
            onClick={this.insertAds}
            data-dismiss="modal"
          >
            Add
          </button>
        );
      } else {
        return (
          <button className="btn modal-btn-submit" disabled>
            Add
          </button>
        );
      }
    };
    return (
      <>
        <div
          className="modal fade"
          id="modalInsertAds"
          role="dialog"
          data-backdrop="static"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modalInsertAdsTitle">
                  Insert New Ads
                </h5>
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
                <form className="needs-validation" noValidate>
                  <div className="form-group">
                    <div>
                      <label
                        htmlFor="validationCustom01"
                        className="col-form-label"
                      >
                        Ads Name:{" "}
                      </label>
                      <input
                        name="ads_name"
                        type="text"
                        className="form-control"
                        id="validationCustom01"
                        onChange={this.onInsertAds}
                        required
                      />
                      <div className="valid-feedback">Looks good!</div>
                    </div>
                    <div>
                      <label className="col-form-label"> Image: </label>
                      <input
                        type="file"
                        name="ads_image"
                        className="form-control"
                        onChange={this.onInsertImage}
                        required
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn modal-btn-close"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <SubmitButton />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(connect()(InsertAds));
