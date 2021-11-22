import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";

export const NavigationProvider: React.FC = ({ children }) => (
  <NavigationContainer children={children} />
);
