import React, { Component } from "react";
import { connect } from "react-redux";
import { editNewsCategory } from "../../redux/action/news_category";
import { withRouter } from "react-router-dom";
import { routes_admin } from "../../helpers/routes.json";
import { button } from "../../helpers/class_name.json";
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
    const data = this.state;
    await this.props.dispatch(editNewsCategory(data, id));
    this.props.history.push(routes_admin.admin + routes_admin.news_category);
  };
  render() {
    const SubmitButton = () => {
      if (this.state.news_category_name !== "") {
        return (
          <button
            type="submit"
            className={button.primary}
            onClick={this.editNewsCategory}
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
export default withRouter(connect()(EditNewsCategory));
