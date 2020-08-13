import { combineReducers } from "redux";
import ads from "./ads";
import news_category from "./news_category";
import user_role from "./user_role";
import video_category from "./video_category";
import commentar from "./commentar";
import video from "./video";
export default combineReducers({
  ads,
  commentar,
  news_category,
  user_role,
  video,
  video_category,
});
