import * as React from "react";
import { TabNavigator } from "./Components/TabNavigator";

import { ProfileRoutes, routes as profileRoutes } from "./Modules/Profile";
import { AuctionRoutes, routes as productRoutes } from "./Modules/Auction";
import { Providers } from "./Utils/Providers";

const tabs = [
  productRoutes[AuctionRoutes.CATEGORY],
  profileRoutes[ProfileRoutes.HOME],
];

export const App: React.FC = () => {
  return (
    <Providers>
      <TabNavigator tabs={tabs} />
    </Providers>
  );
};
