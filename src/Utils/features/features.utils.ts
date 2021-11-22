import { Feature } from "../../features";
import { FeatureOptions, FeatureState, FeatureTuple } from "./features.types";

/**
 * @description Resolves and activates any features that are depended on by other features
 */
export function getPermissive(state: FeatureState) {
  return Object.values(state)
    .filter((config) => config.active && config.dependencies.length)
    .map((config: FeatureOptions) => config.dependencies)
    .flat(1)
    .reduce((prev, current) => {
      prev[current] = { ...state[current], active: true, isDependency: true };
      return prev;
    }, {} as FeatureState);
}


/**
 * @description Resolves and disables any features with disabled dependencies
 */
export function getRestrictive(state: FeatureState) {
  const featureKeyArr = Object.keys(state) as Feature[];
  const featureArr = featureKeyArr.map(
    (key) => [key, state[key]] as FeatureTuple
  );
  return featureArr
    .filter(([_key, feature]) => feature.active && feature.dependencies.length)
    .reduce((acc, [key, feature]) => {
      const originalActive = feature.active
      feature.active = feature.dependencies.reduce((previous, current) => {
        if (!previous) return previous;
        return state[current].active;
      }, feature.active);
      feature.disabledByDependencies = !feature.active && originalActive;
      acc[key] = feature;
      return acc;
    }, {} as FeatureState);
}