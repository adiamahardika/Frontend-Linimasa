import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { routes } from "./components/helpers/routes.json";
import store from "./components/redux/store";
import ads from "./components/admin/ads/ads";
import commentar from "./components/admin/commentar/commentar";
import news from "./components/admin/news/news";
import insert_news from "./components/admin/news/insert_news";
import edit_news from "./components/admin/news/edit_news"
import news_category from "./components/admin/news_category/news_category";
import user from "./components/admin/user/user";
import user_role from "./components/admin/user_role/user_role";
import video_category from "./components/admin/video_category/video_category";
import video from "./components/admin/video/video";
export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path={routes.admin + routes.ads} component={ads} />
          <Route path={routes.admin + routes.commentar} component={commentar} />
          <Route exact path={routes.admin + routes.news} component={news} />
          <Route
            path={routes.admin + routes.news + routes.insert_news}
            component={insert_news}
          />
          <Route
            path={routes.admin + routes.news + routes.edit_news}
            component={edit_news}
          />
          <Route
            path={routes.admin + routes.news_category}
            component={news_category}
          />
          <Route path={routes.admin + routes.user} component={user} />
          <Route path={routes.admin + routes.user_role} component={user_role} />
          <Route path={routes.admin + routes.video} component={video} />
          <Route
            path={routes.admin + routes.video_category}
            component={video_category}
          />
        </Switch>
      </Router>
    </Provider>
  );
}
