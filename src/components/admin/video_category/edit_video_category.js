import React, { Component } from "react";
import { connect } from "react-redux";
import { editVideoCategory } from "../../redux/action/video_category";
import { withRouter } from "react-router-dom";
import { routes_admin } from "../../helpers/routes.json";
import { button, text } from "../../helpers/class_name.json";
class EditVideoCategory extends Component {
  state = {
    video_category_name: "",
  };
  componentWillReceiveProps({ video_category }) {
    this.setState({
      video_category_name: video_category.video_category_name,
    });
  }
  onEditVideoCategory = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  editVideoCategory = async (event) => {
    event.preventDefault();
    const id = this.props.video_category.id;
    const data = this.state;
    await this.props.dispatch(editVideoCategory(data, id));
    this.props.history.push(routes_admin.admin + routes_admin.video_category);
  };
  render() {
    const SubmitButton = () => {
      if (this.state.video_category_name !== "") {
        return (
          <button
            type="submit"
            className={button.primary}
            onClick={this.editVideoCategory}
            data-dismiss="modal"
          >
            Submit
          </button>
        );
      } else {
        return (
          <button type="submit" className={button.disabled} disabled>
            Submit
          </button>
        );
      }
    };
    return (
      <>
        <div
          className="modal fade"
          id="modalEditVideoCategory"
          role="dialog"
          data-backdrop="static"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <div className={text.h2}>Edit Kategori Video</div>
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
                      <label className={text.p1}>Video Category Name:</label>
                      <input
                        name="video_category_name"
                        type="text"
                        className="form-control paragraph-2"
                        onChange={this.onEditVideoCategory}
                        value={this.state.video_category_name}
                        required
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className={button["outline-primary"]}
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
export default withRouter(connect()(EditVideoCategory));
