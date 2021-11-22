import * as React from "react";
import { ModuleRoute } from "../../types";
import { TabNavigator } from "../TabNavigator";

interface Props {
  routes: ModuleRoute[];
}

export const Router: React.FC<Props> = (props) => <TabNavigator {...props} />;
