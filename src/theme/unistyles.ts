import { UnistylesRegistry } from "react-native-unistyles";

import { boxtTheme } from "./themes";

type AppThemes = {
  boxt: typeof boxtTheme;
};

// override library types
declare module "react-native-unistyles" {
  export interface UnistylesThemes extends AppThemes {}
}

UnistylesRegistry.addThemes({
  boxt: boxtTheme,
}).addConfig({
  initialTheme: "boxt",
});
