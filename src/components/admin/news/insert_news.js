import React, { Component } from "react";
import { connect } from "react-redux";
import { insertNews } from "../../redux/action/news";
import { withRouter } from "react-router-dom";
import { imageFilter } from "../../helpers/index";
import { routes_admin } from "../../helpers/routes.json";
import { readAllNewsCategory } from "../../redux/action/news_category";
import { button, text } from "../../helpers/class_name.json"
import AdminLayout from "../layout/admin_layout";
import FullPageLoader from "../../helpers/loading";
import TextEditor from "../../helpers/text_editor";
import "../../css/components/button.css";
import "../../css/components/text.css";
import "../../css/components/form.css";
import "../../css/components/media.css";
import "../../css/components/icon.css";
class InsertNews extends Component {
  state = {
    news_title: "",
    news_content: "Ini isinya",
    news_image: "",
    news_image_description: "",
    news_category: "",
    news_author: "adia-4zgkdslofmw",
    image_preview: "",
  };
  componentDidMount() {
    this.props.dispatch(readAllNewsCategory());
  }
  onInsertNews = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  onInsertArticle = (content) => {
    this.setState({
      news_content: content,
    });
  };
  onInsertImage = async (event) => {
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
  insertNews = async (event) => {
    event.preventDefault();
    let data = new FormData();

    data.append("news_title", this.state.news_title);
    data.append("news_content", this.state.news_content);
    data.append("news_image", this.state.news_image);
    data.append("news_image_description", this.state.news_image_description);
    data.append("news_category", this.state.news_category);
    data.append("news_author", this.state.news_author);

    await this.props.dispatch(insertNews(data));
    this.props.history.push(routes_admin.admin + routes_admin.news);
  };
  render() {
    const { loading, news_category } = this.props;
    const SubmitButton = () => {
      if (Object.values(this.state).every((values) => values !== "")) {
        return (
          <button
            type="button"
            className={button.primary}
            onClick={this.insertNews}
          >
            Submit
          </button>
        );
      } else {
        return (
          <button type="button" disabled className={button.disabled}>
            Submit
          </button>
        );
      }
    };
    return (
      <AdminLayout>
      <FullPageLoader loading={loading} />
        <div className={text.h1}>Tulis Berita</div>
        <div className="form admin">
          <SubmitButton />
        </div>
        <div className="form-input news">
          <div className="form-group">
            <textarea
              type="text"
              className="input-title header-2"
              placeholder="Tulis Judul..."
              onChange={this.onInsertNews}
              name="news_title"
              rows="1"
            />
          </div>
          <div className="form-group">
            <select
              className="custom-select input-category paragraph-1"
              onChange={this.onInsertNews}
              name="news_category"
              defaultValue={"DEFAULT"}
            >
              <option className={text.p1} disabled value="DEFAULT">
                Pilih Kategori Berita...
              </option>
              {news_category.map((news_category, index) => (
                <option className={text.p1} key={index} value={news_category.id}>
                  {news_category.news_category_name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label className={text.p1}>Image</label>
            <div className="media-wrapper">
              <div className="image-uploaded">
                <img src={this.state.image_preview} alt="" />
              </div>
              <div className="upload">
                <ion-icon size="large" name="cloud-upload"></ion-icon>
                <div className={text.p2}>Belum ada gambar yang dipilih!</div>
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
              className="input-image-description paragraph-3"
              placeholder="Tulis Deskripsi Gambar..."
              onChange={this.onInsertNews}
              name="news_image_description"
              rows="1"
            />
          </div>
          <div className="form-group">
            <label className={text.p1}>Artikel</label>
            <TextEditor insertArticle={this.onInsertArticle} />
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
export default withRouter(connect(mapStateToProps)(InsertNews));
