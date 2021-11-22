import { useContext, useMemo } from "react";
import { FeatureContext } from "./feature.context";
import { FeatureState } from "./feature.store";
import { Feature } from "./features.types";

export const useFeature = (feature: Feature) => {
  const { state } = useContext(FeatureContext);

  const dependencies = useMemo(() => getDependencies(state), [state]);

  return {
    ...state,
    ...dependencies,
  }[feature];
};

export const useFeatureAdvanced = () => {
  const { state, dispatch } = useContext(FeatureContext);

  const dependencies = useMemo(() => getDependencies(state), [state]);
  return {
    state: {
      ...state,
      ...dependencies,
    },
    dispatch,
  };
};

/**
 * @description Resolves and activates any features that are depended on by other features
 */
function getDependencies(state: FeatureState) {
  return Object.values(state)
    .filter((config) => config.active && config.dependencies.length)
    .map((config) => config.dependencies)
    .flat(1)
    .reduce((prev, current) => {
      prev[current] = { ...state[current], active: true, isDependency: true };
      return prev;
    }, {} as FeatureState);
}
