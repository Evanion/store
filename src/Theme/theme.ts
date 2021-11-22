import { extendTheme } from "native-base";

export const theme = extendTheme({
  components: {
    Container: {
      baseStyle: () => ({
        flex: "1",
        maxWidth: "auto",
        padding: 4,
      }),
    },
    Divider: {
      baseStyle: ({ orientation }) => ({
        width: orientation === "vertical" ? "auto" : "100%",
        height: orientation === "vertical" ? "100%" : "auto",
      }),
    },
    ScrollView: {
      baseStyle: () => ({
        width: "100%",
      }),
    },
  },
});
