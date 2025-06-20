import { BorderRadiusTokens } from "./imported-styles/boxt/border-radius";
import { BorderWidthTokens } from "./imported-styles/boxt/border-width";
import { ColorTokens } from "./imported-styles/boxt/color";
import { DimensionTokens } from "./imported-styles/boxt/dimension";
import { FontSizeTokens } from "./imported-styles/boxt/font-size";
import { FontWeightTokens } from "./imported-styles/boxt/font-weight";
import { OpacityTokens } from "./imported-styles/boxt/opacity";
import { SizeTokens } from "./imported-styles/boxt/size";
import { SpaceTokens } from "./imported-styles/boxt/space";
import { StringTokens } from "./imported-styles/boxt/string";

export const boxtTheme = {
  colors: ColorTokens,
  borderRadius: BorderRadiusTokens,
  borderWidth: BorderWidthTokens,
  dimensions: DimensionTokens,
  size: SizeTokens,
  fontSize: FontSizeTokens,
  fontWeight: FontWeightTokens,
  fontFamily: StringTokens,
  spacing: SpaceTokens,
  opacity: OpacityTokens,
} as const;
