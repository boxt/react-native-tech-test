import React from "react";
import { Text, TextProps } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

import { FontWeight } from "../Heading/Heading";

interface BodyProps {
  children: React.ReactNode;
  small?: boolean;
  bold?: boolean;
}

const Body = ({
  children,
  small = false,
  bold = false,
  ...props
}: BodyProps & TextProps) => {
  const { styles } = useStyles(stylesheet, { small, bold });

  return (
    <Text {...props} style={[styles.text, props.style]}>
      {children}
    </Text>
  );
};

export default Body;

const stylesheet = createStyleSheet((theme) => ({
  text: {
    fontSize: theme.fontSize.textMobileBody,
    fontWeight: theme.fontWeight.textWeightBody as FontWeight,
    fontFamily: theme.fontFamily.textFamilyAppBody,
    lineHeight: theme.fontSize.textMobileBody * 1.5,
    color: theme.colors.colorTextBody,
    variants: {
      small: {
        true: {
          fontSize: theme.fontSize.textMobileSmall,
          lineHeight: theme.fontSize.textMobileSmall * 1.5,
        },
      },
      bold: {
        true: {
          fontWeight: theme.fontWeight.textWeightBold as FontWeight,
        },
      },
    },
  },
}));
