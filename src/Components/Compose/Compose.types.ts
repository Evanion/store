import * as React from "react";

type Props = Record<string, any>

export type Components =
  | React.ComponentType
  | [React.ComponentType, Props]