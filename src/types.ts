import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { BottomTabNavigationEventMap } from "@react-navigation/bottom-tabs/lib/typescript/src/types";
import { ParamListBase, RouteConfig, TabNavigationState } from "@react-navigation/native";

export type ModuleRoute = RouteConfig<
ParamListBase,
string,
TabNavigationState<ParamListBase>,
BottomTabNavigationOptions,
BottomTabNavigationEventMap
>;