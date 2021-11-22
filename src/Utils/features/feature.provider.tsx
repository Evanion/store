import * as React from "react";
import { useFeatureProvider } from ".";
import { FeatureContext } from "./feature.context";
import { FeatureConfig, FeatureState } from "./features.types";

interface Props {
  features: FeatureState
  config: FeatureConfig
  children: React.ReactNode
}

export const FeatureProvider: React.FC<Props> = ({ features,config, children }) => {
  const contextValue = useFeatureProvider({features, config})
  return <FeatureContext.Provider value={contextValue} children={children} />;
};
