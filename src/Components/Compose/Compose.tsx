import * as React from "react";
import { Components } from "./Compose.types";

interface Props {
  components: Components[];
}

export const Compose: React.FC<Props> = ({ components, children }) => (
  <React.Fragment>
    {components.reverse().reduce((acc, curr) => {
      const [Provider, props] = Array.isArray(curr)
        ? [curr[0], curr[1]]
        : [curr, {}];
      return <Provider {...props}>{acc}</Provider>;
    }, children)}
  </React.Fragment>
);

/// source: https://juliuskoronci.medium.com/avoid-a-long-list-of-react-providers-c45a269d80c1
