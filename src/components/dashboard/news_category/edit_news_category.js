import React, { Component } from "react";
import { connect } from "react-redux";
import { editNewsCategory } from "../../redux/action/news_category";
import { withRouter } from "react-router-dom";
import { routes } from "../../helpers/routes.json";
import "../../css/components/button.css";
class EditNewsCategory extends Component {
  state = {
    news_category_name: "",
  };
  componentWillReceiveProps({ news_category }) {
    this.setState({
      news_category_name: news_category.news_category_name,
    });
  }
  onEditNewsCategory = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  editNewsCategory = async (event) => {
    event.preventDefault();
    const id = this.props.news_category.id;
    const data = this.state
    await this.props.dispatch(
      editNewsCategory(data, id)
    );
    this.props.history.push(routes.news_category);
  };
  render() {
    const SubmitButton = () => {
      if (this.state.news_category_name !== "") {
        return (
          <button
            type="submit"
            className="btn modal-btn-submit"
            onClick={this.editNewsCategory}
            data-dismiss="modal"
          >
            Edit
          </button>
        );
      } else {
        return (
          <button
            type="submit"
            className="btn modal-btn-submit"
            data-dismiss="modal"
            disabled
          >
            Edit
          </button>
        );
      }
    };
    return (
      <>
        <div
          className="modal fade"
          id="modalEditNewsCategory"
          role="dialog"
          data-backdrop="static"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modalEditNewsCategoryTitle">
                  Edit News Category
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
                        News Category Name:{" "}
                      </label>
                      <input
                        name="news_category_name"
                        type="text"
                        className="form-control"
                        id="validationCustom01"
                        onChange={this.onEditNewsCategory}
                        value={this.state.news_category_name}
                        required
                      />
                      <div className="valid-feedback">Looks good!</div>
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
                <SubmitButton/>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default withRouter(connect()(EditNewsCategory));
