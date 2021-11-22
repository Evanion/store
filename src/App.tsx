import * as React from "react";
import { Router } from "./Components/Router";
import { routes } from "./routes";
import { Providers } from "./Components/Providers";
import { providers } from "./providers";

export const App: React.FC = () => {
  return (
    <Providers providers={providers}>
      <Router routes={routes} />
    </Providers>
  );
};
