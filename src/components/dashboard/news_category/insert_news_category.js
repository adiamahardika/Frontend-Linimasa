import React, { Component } from "react";
import { connect } from "react-redux";
import { insertNewsCategory } from "../../redux/action/news-category";
import { withRouter } from "react-router-dom";
import { routes } from "../../helpers/routes.json";
import "../../css/components/button.css";
class InsertNewsCategory extends Component {
  state = {
    news_category_name: "",
  };
  onInsertNewsCategory = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  insertNewsCategory = async (event) => {
    event.preventDefault();
    await this.props.dispatch(insertNewsCategory(this.state));
    this.props.history.push(routes.news_category);
  };
  render() {
    return (
      <>
        <div
          className="modal fade"
          id="modalInsertNewsCategory"
          role="dialog"
          data-backdrop="static"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modalInsertNewsCategoryTitle">
                  Insert New News Category
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
                        onChange={this.onInsertNewsCategory}
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
                  Close
                </button>
                <button
                  type="submit"
                  className="btn modal-btn-submit"
                  onClick={this.insertNewsCategory}
                  data-dismiss="modal"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default withRouter(connect()(InsertNewsCategory));
