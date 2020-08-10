import { routes } from "./components/helpers/routes.json";
import admin_ads from "./components/dashboard/ads/ads";
const adminRoutes = [
  {
    path: `${routes.ads}`,
    component: admin_ads,
    layout: `${routes.admin}`,
  },
];
export default adminRoutes;
