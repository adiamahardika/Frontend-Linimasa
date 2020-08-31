import React, { Component } from "react";
import { connect } from "react-redux";
import { insertVideo } from "../../redux/action/video";
import { withRouter } from "react-router-dom";
import { videoFilter } from "../../helpers/index";
import { routes_admin } from "../../helpers/routes.json";
import { readAllVideoCategory } from "../../redux/action/video_category";
import { button, text } from "../../helpers/class_name.json";
import AdminLayout from "../layout/admin_layout";
import FullPageLoader from "../../helpers/loading";
import TextEditor from "../../helpers/text_editor";
import "../../css/components/button.css";
import "../../css/components/text.css";
import "../../css/components/form.css";
import "../../css/components/media.css";
import "../../css/components/icon.css";
class InsertVideo extends Component {
  state = {
    video_title: "",
    video: "",
    video_description: "Ini artikel",
    video_author: "adia-4zgkdslofmw",
    video_category: "",
    video_preview: "",
  };
  componentDidMount() {
    this.props.dispatch(readAllVideoCategory());
  }
  onInsertVideo = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  onInsertArticle = (content) => {
    this.setState({
      video_description: content,
    });
  };
  onInsertNewsVideo = async (event) => {
    const video = event.target.files[0];
    const filter = videoFilter(video);
    if (filter !== null) {
      this.setState({
        video: video,
      });
    }
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({
          video_preview: reader.result,
        });
      }
    };
    reader.readAsDataURL(video);
  };
  insertVideo = async (event) => {
    event.preventDefault();
    let data = new FormData();

    data.append("video_title", this.state.video_title);
    data.append("video", this.state.video);
    data.append("video_description", this.state.video_description);
    data.append("video_author", this.state.video_author);
    data.append("video_category", this.state.video_category);

    await this.props.dispatch(insertVideo(data));
    this.props.history.push(routes_admin.admin + routes_admin.video);
  };
  render() {
    const { loading, video_category } = this.props;
    const SubmitButton = () => {
      if (Object.values(this.state).every((values) => values !== "")) {
        return (
          <button
            type="button"
            className={button.primary}
            onClick={this.insertVideo}
          >
            Submit
          </button>
        );
      } else {
        return (
          <button type="button" className={button.disabled} disabled>
            Submit
          </button>
        );
      }
    };
    return (
      <AdminLayout>
        <FullPageLoader loading={loading} />
        <div className={text.h1}>Insert Video</div>
        <div className="form admin">
          <SubmitButton />
        </div>
        <div className="form-input news">
          <div className="form-group">
            <textarea
              type="text"
              className="input-title header-2"
              placeholder="Tulis Judul..."
              onChange={this.onInsertVideo}
              name="video_title"
              rows="1"
            />
          </div>
          <div className="form-group">
            <select
              className="custom-select input-category paragraph-1"
              onChange={this.onInsertVideo}
              name="video_category"
              defaultValue={"DEFAULT"}
            >
              <option disabled value="DEFAULT" className={text.p1}>
                Pilih Kategori Video...
              </option>
              {video_category.map((video_category, index) => (
                <option
                  key={index}
                  value={video_category.id}
                  className={text.p1}
                >
                  {video_category.video_category_name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label className={text.p1}>Video</label>
            <div className="media-wrapper">
              <div className="video-uploaded">
                <video>
                  <source src={this.state.video_preview} type="video/mp4" />
                </video>
              </div>
              <div className="upload">
                <ion-icon size="large" name="cloud-upload"></ion-icon>
                <div className={text.p2}>Belum ada video yang dipilih!</div>
                <input
                  type="file"
                  className="form-control-file"
                  accept="video/*"
                  onChange={this.onInsertNewsVideo}
                  id="input-button"
                />
                <label className="upload-file" htmlFor="input-button">
                  Upload Video
                </label>
              </div>
            </div>
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
    video_category: state.video_category.video_category,
    loading: state.video.loading,
  };
};
export default withRouter(connect(mapStateToProps)(InsertVideo));
