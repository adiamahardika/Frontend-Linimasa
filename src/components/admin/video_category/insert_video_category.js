import React, { Component } from "react";
import { connect } from "react-redux";
import { insertVideoCategory } from "../../redux/action/video_category";
import { withRouter } from "react-router-dom";
import { routes } from "../../helpers/routes.json";
class InsertVideoCategory extends Component {
  state = {
    video_category_name: "",
  };
  onInsertVideoCategory = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  insertVideoCategory = async (event) => {
    event.preventDefault();
    await this.props.dispatch(insertVideoCategory(this.state));
    this.props.history.push(routes.admin + routes.video_category);
  };
  render() {
    const SubmitButton = () => {
      if (this.state.video_category_name !== "") {
        return (
          <button
            type="submit"
            className="btn modal-btn-submit"
            onClick={this.insertVideoCategory}
            data-dismiss="modal"
          >
            Add
          </button>
        );
      } else {
        return (
          <button type="submit" className="btn modal-btn-submit" disabled>
            Add
          </button>
        );
      }
    };
    return (
      <>
        <div
          className="modal fade"
          id="modalInsertVideoCategory"
          role="dialog"
          data-backdrop="static"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modalInsertVideoCategoryTitle">
                  Insert New Video Category
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
                        Video Category:{" "}
                      </label>
                      <input
                        name="video_category_name"
                        type="text"
                        className="form-control"
                        id="validationCustom01"
                        onChange={this.onInsertVideoCategory}
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
export default withRouter(connect()(InsertVideoCategory));
