import { useContext, useMemo, useReducer } from "react";
import { Feature } from "../../features";
import { FeatureContext } from "./feature.context";
import { reducer } from "./feature.store";
import { FullFeatureState } from "./features.types";
import { getPermissive, getRestrictive } from "./features.utils";

export const useFeatureProvider = (fullState: FullFeatureState) => {
  const [state, dispatch] = useReducer(reducer, fullState);
  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return contextValue;
};

export const useFeature = (feature: Feature) => {
  const { state } = useContext(FeatureContext);

  const dependencies = useMemo(
    () =>
      state.config.permissive
        ? getPermissive(state.features)
        : getRestrictive(state.features),
    [state]
  );

  return {
    ...state.features,
    ...dependencies,
  }[feature];
};

export const useFeatureAdvanced = () => {
  const { state, dispatch } = useContext(FeatureContext);

  const dependencies = useMemo(
    () =>
      state.config.permissive
        ? getPermissive(state.features)
        : getRestrictive(state.features),
    [state]
  );
  return {
    state: {
      ...state.features,
      ...dependencies,
    },
    dispatch,
  };
};
