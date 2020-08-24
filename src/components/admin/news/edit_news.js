import React, { Component } from "react";
import { connect } from "react-redux";
import { editNews } from "../../redux/action/news";
import { withRouter } from "react-router-dom";
import { imageFilter } from "../../helpers/index";
import { routes_admin } from "../../helpers/routes.json";
import { readAllNewsCategory } from "../../redux/action/news_category";
import AdminLayout from "../layout/admin_layout";
import FullPageLoader from "../../helpers/loading";
import TextEditor from "../../helpers/text_editor";
import "../../css/components/button.css";
import "../../css/components/text.css";
import "../../css/components/form.css";
import "../../css/components/media.css";
import "../../css/components/icon.css";
class EditNews extends Component {
  state = {
    id: "",
    news_title: "",
    news_content: "",
    news_image: "",
    news_image_description: "",
    news_category: "",
    news_author: "",
    image_preview: "",
  };
  componentWillReceiveProps({ news }) {
    this.setState({
      id: news.id,
      news_title: news.news_title,
      news_content: news.news_content,
      news_image: news.news_image,
      news_image_description: news.news_image_description,
      news_category: news.news_category,
      news_author: news.news_author,
    });
  }
  componentDidMount() {
    this.props.dispatch(readAllNewsCategory());
  }
  onEditNews = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  onEditImage = (event) => {
    const image = event.target.files[0];
    const filter = imageFilter(image);
    if (filter !== null) {
      this.setState({
        news_image: image,
      });
    }
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({
          image_preview: reader.result,
        });
      }
    };
    reader.readAsDataURL(image);
  };
  onEditArticle = (content) => {
    this.setState({
      news_content: content,
    });
  };
  editNews = async (event) => {
    event.preventDefault();
    const data = new FormData();

    data.append("news_title", this.state.news_title);
    data.append("news_content", this.state.news_content);
    data.append("news_category", this.state.news_category);
    data.append("news_image", this.state.news_image);
    data.append("news_image_description", this.state.news_image_description);
    data.append("news_author", this.state.news_author);

    const id = this.state.id;
    if (this.state.news_image === "") {
      data.delete("news_image");
      await this.props.dispatch(editNews(data, id));
    } else {
      await this.props.dispatch(editNews(data, id));
    }
    this.props.history.push(routes_admin.admin + routes_admin.news);
  };
  render() {
    const { loading, news_category } = this.props;
    const SubmitButton = () => {
      if (Object.values(this.state).every((values) => values !== "")) {
        return (
          <button
            type="button"
            className="admin btn btn-add"
            onClick={this.editNews}
          >
            Submit
          </button>
        );
      } else {
        return (
          <button type="button" className="admin btn btn-add" disabled>
            Submit
          </button>
        );
      }
    };
    return (
      <AdminLayout>
        <FullPageLoader loading={loading} />
        <div className="admin-title">Edit News</div>
        <div className="form admin">
          <SubmitButton />
        </div>
        <div className="form-input news">
          <div className="form-group">
            <textarea
              type="text"
              className="input-title"
              placeholder="Tulis Judul..."
              onChange={this.onEditNews}
              name="news_title"
              rows="1"
            />
          </div>
          <div className="form-group">
            <select
              className="custom-select input-category"
              onChange={this.onEditNews}
              name="news_category"
              defaultValue={"DEFAULT"}
            >
              <option disabled value="DEFAULT">
                Pilih Kategori Berita...
              </option>
              {news_category.map((news_category, index) => (
                <option key={index} value={news_category.id}>
                  {news_category.news_category_name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label className="label-input">Image</label>
            <div className="image-wrapper">
              <div className="image-uploaded">
                <img src={this.state.image_preview} alt="" />
              </div>
              <div className="upload">
                <ion-icon size="large" name="cloud-upload"></ion-icon>
                <div className="text">No file chosen, yet!</div>
                <input
                  type="file"
                  className="form-control-file"
                  accept="image/*"
                  onChange={this.onInsertImage}
                  id="input-button"
                />
                <label className="upload-file" htmlFor="input-button">
                  Upload Gambar
                </label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <textarea
              type="text"
              className="input-image-description"
              placeholder="Tulis Deskripsi Gambar..."
              onChange={this.onEditNews}
              name="news_image_description"
              rows="1"
            />
          </div>
          <div className="form-group">
            <label className="label-input">Artikel</label>
            <TextEditor insertArticle={this.onEditArticle} />
          </div>
        </div>
      </AdminLayout>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    news_category: state.news_category.news_category,
    loading: state.news.loading,
  };
};
export default withRouter(connect(mapStateToProps)(EditNews));
