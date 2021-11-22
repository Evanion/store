import * as React from "react";
import { Compose } from "../../Components/Compose";
import { providers } from "./providers.registry";

export const Providers: React.FC = ({ children }) => (
  <Compose components={providers} children={children} />
);
