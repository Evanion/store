import { AuctionRoutes } from "./constants";
import { AuctionCategory, AuctionDetails } from "./screens";

export const routes = {
  [AuctionRoutes.DETAILS]: {
    name: "Auction Details",
    component: AuctionDetails,
    options: {
      title: "AUCTION_DETAILS",
    },
  },
  [AuctionRoutes.CATEGORY]: {
    name: "Auction Category",
    component: AuctionCategory,
    options: {
      title: "AUCTION_CATEGORY",
    },
  },
};
