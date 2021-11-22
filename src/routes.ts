import { ProfileRoutes, routes as profileRoutes } from "./Modules/Profile";
import { AuctionRoutes, routes as productRoutes } from "./Modules/Auction";
import { ModuleRoute } from "./types";

export const routes: ModuleRoute[] = [
  productRoutes[AuctionRoutes.CATEGORY],
  profileRoutes[ProfileRoutes.HOME],
];
