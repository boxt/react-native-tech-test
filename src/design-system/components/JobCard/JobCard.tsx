import { FC } from "react";
import { View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import ProductIcon from "src/assets/Product.svg";
import { Job } from "src/typing/types";

type Props = {
  job: Job;
};

export const JobCard: FC<Props> = ({ job }) => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <ProductIcon />
    </View>
  );
};

const stylesheet = createStyleSheet((theme) => {
  const { colors, borderRadius, borderWidth, spacing } = theme;

  return {
    container: {
      height: 100,
      width: "100%",
      borderWidth: borderWidth.stroke1,
      marginTop: 20,
    },
  };
});
