import React, { Component } from "react";
import { connect } from "react-redux";
import { insertNewsCategory } from "../../redux/action/news_category";
import { withRouter } from "react-router-dom";
import { routes_admin } from "../../helpers/routes.json";
import { button, text } from "../../helpers/class_name.json";
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
    this.props.history.push(routes_admin.admin + routes_admin.news_category);
  };
  render() {
    const SubmitButton = () => {
      if (this.state.news_category_name !== "") {
        return (
          <button
            type="submit"
            className={button.primary}
            onClick={this.insertNewsCategory}
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
          id="modalInsertNewsCategory"
          role="dialog"
          data-backdrop="static"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <div className={text.h2}>
                  Tulis Kategori Berita
                </div>
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
                      <label className={text.p1}>Nama:</label>
                      <input
                        name="news_category_name"
                        type="text"
                        className="form-control paragraph-2"
                        onChange={this.onInsertNewsCategory}
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
export default withRouter(connect()(InsertNewsCategory));
