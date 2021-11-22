import { Feature } from "../../features";

export enum FeatureAction {
  Activate = "feature.action.activate",
  Deactivate = "feature.action.deactivate",
}

export type FeatureState = Record<Feature, FeatureOptions>;
export type FullFeatureState = {features: FeatureState, config: FeatureConfig}

export interface ActionProps {
  action: FeatureAction;
  feature: Feature;
}

export interface FeatureConfig {
  permissive: boolean
}

export interface FeatureOptions {
  active: boolean;
  description?: string;
  dependencies: Feature[];
  isDependency?: boolean;
  disabledByDependencies?: boolean;
  configuredActive?: boolean;
}

export type FeatureTuple = [Feature, FeatureOptions];