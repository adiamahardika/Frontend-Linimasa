import { combineReducers } from "redux";
import ads from "./ads";
import news_category from "./news_category";
import user_role from "./user_role";
import video_category from "./video_category"
export default combineReducers({
  ads,
  news_category,
  user_role,
  video_category
});
