import { FeatureState } from "./Utils/features";

export enum Feature {
  Profile = "profile",
  Auction = "auction",
  AuctionCreate = "auction.create",
  AuctionView = "auction.view",
}

export const featureConfig = {
  permissive: false
}

export const features: FeatureState = {
  
  [Feature.Auction]: {
    active: false,
    dependencies: [],
  },
  [Feature.AuctionCreate]: {
    active: false,
    dependencies: [Feature.Auction],
  },
  [Feature.AuctionView]: {
    active: true,
    dependencies: [Feature.Auction],
  },
  [Feature.Profile]: {
    active: true,
    dependencies: [],
  },
};