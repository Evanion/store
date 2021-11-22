import { Components } from "../../Components/Compose";
import { FeatureProvider } from "../features";
import { NavigationProvider } from "../../Components/Navigation";
import { NativeBaseProvider } from "native-base";
import { theme } from "../../Theme";

export const providers: Components[] = [
  FeatureProvider,
  [NativeBaseProvider, { theme }],
  NavigationProvider,
];
