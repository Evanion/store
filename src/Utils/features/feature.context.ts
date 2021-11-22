import { createContext } from "react";
import { initialState as state, ActionProps } from "./feature.store";

const dispatch: React.Dispatch<ActionProps> = () => {};
export const FeatureContext = createContext({ state, dispatch });
