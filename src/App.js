import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { routes } from "./components/helpers/routes.json";
import store from "./components/redux/store";
import ads from "./components/dashboard/ads/ads";
import news_category from "./components/dashboard/news_category/news_category";
import user_role from "./components/dashboard/user_role/user_role";
export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Route path={routes.ads} component={ads} />
          <Route path={routes.news_category} component={news_category} />
          <Route path={routes.user_role} component={user_role} />
        </div>
      </Router>
    </Provider>
  );
}
