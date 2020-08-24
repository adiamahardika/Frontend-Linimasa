import React, { Component } from "react";
import { connect } from "react-redux";
import { editAds } from "../../redux/action/ads";
import { withRouter } from "react-router-dom";
import { imageFilter } from "../../helpers";
import { routes_admin } from "../../helpers/routes.json";
class EditAds extends Component {
  state = {
    id: "",
    ads_name: "",
    ads_image: "",
  };
  componentWillReceiveProps({ ads }) {
    this.setState({
      id: ads.id,
      ads_name: ads.ads_name,
    });
  }
  onEditAds = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  onEditImage = (event) => {
    const image = event.target.files[0];
    imageFilter(image);
    this.setState({
      ads_image: image,
    });
  };
  editAds = async (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append("ads_name", this.state.ads_name);
    data.append("ads_image", this.state.ads_image);
    const id = this.state.id;
    if (this.state.ads_image === "") {
      data.delete("ads_image");
      await this.props.dispatch(editAds(data, id));
    } else {
      await this.props.dispatch(editAds(data, id));
    }
    this.props.history.push(routes_admin.admin + routes_admin.ads);
  };
  render() {
    const SubmitButton = () => {
      if (this.state.ads_name !== "") {
        return (
          <button
            type="submit"
            className="btn modal-btn-submit"
            onClick={this.editAds}
            data-dismiss="modal"
          >
            Edit
          </button>
        );
      } else {
        return (
          <button className="btn modal-btn-submit" disabled>
            Edit
          </button>
        );
      }
    };
    return (
      <>
        <div
          className="modal fade"
          id="modalEditAds"
          role="dialog"
          data-backdrop="static"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modalEditAdsTitle">
                  Edit Ads
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
                        onChange={this.onEditAds}
                        value={this.state.ads_name}
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
                        onChange={this.onEditImage}
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
                  Cancel
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
export default withRouter(connect()(EditAds));
