import * as React from "react";
import { FeatureContext } from "./feature.context";
import { initialState, reducer } from "./feature.store";

export const FeatureProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const contextValue = React.useMemo(
    () => ({ state, dispatch }),
    [state, dispatch]
  );
  return <FeatureContext.Provider value={contextValue} children={children} />;
};
