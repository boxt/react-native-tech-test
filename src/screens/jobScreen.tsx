import { ScrollView, View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { H3 } from "src/design-system/components/Heading/Heading";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useJobData } from "src/utils/useJobData";
import { JobCard } from "src/design-system/components/JobCard/JobCard";

export default function JobScreen() {
  const {
    styles,
    theme: { colors },
  } = useStyles(stylesheet);

  const jobs = useJobData();

  return (
    <SafeAreaView style={styles.flex}>
      <StatusBar style="dark" backgroundColor={colors.colorBackgroundAlt} />

      <View style={styles.container}>
        <H3>Today's jobs</H3>
        <ScrollView style={styles.flex}>
          {jobs.map((job) => (
            <JobCard job={job} />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const stylesheet = createStyleSheet((theme) => {
  const { spacing, colors } = theme;

  return {
    flex: {
      flex: 1,
    },
    container: {
      flex: 1,
      padding: spacing.spacing2,
      backgroundColor: colors.colorBackgroundAlt,
    },
  };
});
