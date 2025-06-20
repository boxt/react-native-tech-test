import { Text, TextProps } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

import { FontWeight } from "../Heading/Heading";

const AppTag = (props: TextProps) => {
  const { styles } = useStyles(stylesheet);

  return (
    <Text {...props} style={[styles.regular, props.style]}>
      {props.children}
    </Text>
  );
};

export default AppTag;

const stylesheet = createStyleSheet((theme) => ({
  regular: {
    fontSize: theme.fontSize.textMobileSmall,
    fontWeight: theme.fontWeight.textWeightTag as FontWeight,
    fontFamily: theme.fontFamily.textFamilyAppTag,
    lineHeight: theme.fontSize.textMobileSmall,
    textTransform: "uppercase",
    marginBottom: -2,
  },
}));
