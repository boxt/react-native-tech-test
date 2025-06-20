import React from "react";
import { Text, TextProps } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

export type FontWeight =
  | "normal"
  | "bold"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900";

interface HeadingProps {
  children: React.ReactNode;
}

const textFactory = (defaultStyle: string) => {
  const Heading = (props: HeadingProps & TextProps) => {
    const { styles } = useStyles(stylesheet);

    return (
      <Text {...props} style={[styles[defaultStyle], props.style]}>
        {props.children}
      </Text>
    );
  };
  return Heading;
};

const stylesheet = createStyleSheet((theme) => ({
  h1: {
    fontSize: theme.fontSize.textMobileH1,
    fontWeight: theme.fontWeight.textWeightHeading as FontWeight,
    fontFamily: theme.fontFamily.textFamilyAppHeading,
    lineHeight: theme.fontSize.textMobileH1 * 1.2,
    color: theme.colors.colorTextStrong,
  },
  h2: {
    fontSize: theme.fontSize.textMobileH2,
    fontWeight: theme.fontWeight.textWeightHeading as FontWeight,
    fontFamily: theme.fontFamily.textFamilyAppHeading,
    lineHeight: theme.fontSize.textMobileH2 * 1.2,
    color: theme.colors.colorTextStrong,
  },
  h3: {
    fontSize: theme.fontSize.textMobileH3,
    fontWeight: theme.fontWeight.textWeightHeading as FontWeight,
    fontFamily: theme.fontFamily.textFamilyAppHeading,
    lineHeight: theme.fontSize.textMobileH3 * 1.2,
    color: theme.colors.colorTextStrong,
  },
  h4: {
    fontSize: theme.fontSize.textMobileH4,
    fontWeight: theme.fontWeight.textWeightHeading as FontWeight,
    fontFamily: theme.fontFamily.textFamilyAppHeading,
    lineHeight: theme.fontSize.textMobileH4 * 1.2,
    color: theme.colors.colorTextStrong,
  },
  h5: {
    fontSize: theme.fontSize.textMobileH5,
    fontWeight: theme.fontWeight.textWeightHeading as FontWeight,
    fontFamily: theme.fontFamily.textFamilyAppHeading,
    lineHeight: theme.fontSize.textMobileH5 * 1.2,
    color: theme.colors.colorTextStrong,
  },
}));

const H1 = textFactory("h1");
const H2 = textFactory("h2");
const H3 = textFactory("h3");
const H4 = textFactory("h4");
const H5 = textFactory("h5");
export { H1, H2, H3, H4, H5 };
