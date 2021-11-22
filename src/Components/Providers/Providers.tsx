import * as React from "react";
import { Compose, Components } from "../Compose";

interface Props {
  providers: Components[];
}

export const Providers: React.FC<Props> = ({providers, children }) => (
  <Compose components={providers} children={children} />
);
