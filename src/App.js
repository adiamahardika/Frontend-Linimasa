import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { routes_admin, routes } from "./components/helpers/routes.json";
import store from "./components/redux/store";
import ads from "./components/admin/ads/ads";
import commentar from "./components/admin/commentar/commentar";
import news from "./components/admin/news/news";
import insert_news from "./components/admin/news/insert_news";
import edit_news from "./components/admin/news/edit_news";
import admin_news_category from "./components/admin/news_category/news_category";
import user from "./components/admin/user/user";
import user_role from "./components/admin/user_role/user_role";
import video from "./components/admin/video/video";
import insert_video from "./components/admin/video/insert_video";
import video_category from "./components/admin/video_category/video_category";
import home from "./components/main/home";
import news_category from "./components/main/news_category";
export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path={routes_admin.admin + routes_admin.ads} component={ads} />
          <Route
            path={routes_admin.admin + routes_admin.commentar}
            component={commentar}
          />
          <Route
            exact
            path={routes_admin.admin + routes_admin.news}
            component={news}
          />
          <Route
            path={
              routes_admin.admin + routes_admin.news + routes_admin.insert_news
            }
            component={insert_news}
          />
          <Route
            path={
              routes_admin.admin + routes_admin.news + routes_admin.edit_news
            }
            component={edit_news}
          />
          <Route
            path={routes_admin.admin + routes_admin.news_category}
            component={admin_news_category}
          />
          <Route
            path={routes_admin.admin + routes_admin.user}
            component={user}
          />
          <Route
            path={routes_admin.admin + routes_admin.user_role}
            component={user_role}
          />
          <Route
            exact
            path={routes_admin.admin + routes_admin.video}
            component={video}
          />
          <Route
            path={
              routes_admin.admin +
              routes_admin.video +
              routes_admin.insert_video
            }
            component={insert_video}
          />
          <Route
            path={routes_admin.admin + routes_admin.video_category}
            component={video_category}
          />
          <Route exact path={routes.home} component={home} />
          <Route path={routes.news} component={news_category} />
          <Route path={routes.hype} component={news_category}/>
          <Route path={routes.peristiwa} component={news_category}/>
          <Route path={routes.business} component={news_category}/>
          <Route path={routes.economy} component={news_category}/>
          <Route path={routes.entertainment} component={news_category}/>
          <Route path={routes.food} component={news_category}/>
          <Route path={routes.health} component={news_category}/>
          <Route path={routes.humaniora} component={news_category}/>
          <Route path={routes.outgoing} component={news_category}/>
          <Route path={routes.ragam} component={news_category}/>
          <Route path={routes.sport} component={news_category}/>
          <Route path={routes.techno} component={news_category}/>
        </Switch>
      </Router>
    </Provider>
  );
}
