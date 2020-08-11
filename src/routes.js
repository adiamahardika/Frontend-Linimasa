import { routes } from "./components/helpers/routes.json";
import admin_ads from "./components/dashboard/ads/ads";
import admin_news_category from "./components/dashboard/news_category/news_category";
const adminRoutes = {
  ads: {
    path: `${routes.ads}`,
    component: admin_ads,
    layout: `${routes.admin}`,
  },
  news_category: {
    path: `${routes.news_category}`,
    component: admin_news_category,
    layout: `${routes.admin}`,
  },
};
export default adminRoutes;
