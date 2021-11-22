import { FeatureAction, Feature } from "./features.types";

export interface ActionProps {
  action: FeatureAction;
  feature: Feature;
}

interface FeatureConfig {
  active: boolean;
  description?: string;
  dependencies: Feature[];
  isDependency?: boolean;
}

export type FeatureState = Record<Feature, FeatureConfig>;

export const initialState: FeatureState = {
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

export const reducer = (state: FeatureState, action: ActionProps) => {
  switch (action.action) {
    case FeatureAction.Activate:
      return {
        ...state,
        [action.feature]: { ...state[action.feature], active: true },
      };

    case FeatureAction.Deactivate:
      return {
        ...state,
        [action.feature]: { ...state[action.feature], active: false },
      };
    default:
      return state;
  }
};
