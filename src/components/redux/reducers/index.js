import { combineReducers } from "redux";
import ads from "./ads";
import news_category from "./news_category";
import user_role from "./user_role";
export default combineReducers({
  ads,
  news_category,
  user_role,
});
