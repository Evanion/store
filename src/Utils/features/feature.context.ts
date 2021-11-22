import { createContext } from "react";
import { ActionProps } from "./features.types";
import {features, featureConfig} from '../../features'

const dispatch: React.Dispatch<ActionProps> = () => {};
export const FeatureContext = createContext({ state:{features, config:featureConfig}, dispatch });
