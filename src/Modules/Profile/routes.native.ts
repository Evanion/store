import { ProfileRoutes } from "./constants";
import { ProfileHome } from "./screens";

export const routes = {
  [ProfileRoutes.HOME]: {
    name: "Profile",
    component: ProfileHome,
    options: {
      title: "PROFILE_HOME",
    },
  },
};
