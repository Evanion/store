import { Components } from "./Components/Compose";
import { FeatureProvider } from "./Utils/features";
import { NavigationProvider } from "./Components/Navigation";
import { NativeBaseProvider } from "native-base";
import { theme } from "./Theme";
import { features } from "./features";

export const providers: Components[] = [
  // @TODO: Solve the type error caused by more advanced props
  // @ts-expect-error: temporary solutio
  [FeatureProvider, {features}],
  [NativeBaseProvider, { theme }],
  NavigationProvider,
];
