import * as React from "react";
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import {
  ParamListBase,
  RouteConfig,
  TabNavigationState,
} from "@react-navigation/native";
import { BottomTabNavigationEventMap } from "@react-navigation/bottom-tabs/lib/typescript/src/types";

const Tab = createBottomTabNavigator();

export const TabNavigator: React.FC<Props> = ({ routes }) => {
  return (
    <Tab.Navigator>
      {routes.map((tab, index) => (
        <Tab.Screen key={index} {...tab} />
      ))}
    </Tab.Navigator>
  );
};

interface Props {
  routes: RouteConfig<
    ParamListBase,
    string,
    TabNavigationState<ParamListBase>,
    BottomTabNavigationOptions,
    BottomTabNavigationEventMap
  >[];
}
