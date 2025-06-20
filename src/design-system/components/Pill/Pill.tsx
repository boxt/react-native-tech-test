import { View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

import AppTag from "../AppTag/AppTag";

interface PillProps {
  text: string;
  inverse?: boolean;
  error?: boolean;
  success?: boolean;
  disabled?: boolean;
  selected?: boolean;
  testID?: string;
}

const Pill = ({
  text,
  inverse = false,
  error = false,
  success = false,
  disabled = false,
  selected = false,
  testID,
}: PillProps) => {
  const { styles } = useStyles(stylesheet, {
    inverse,
    error,
    success,
    disabled,
    selected,
  });

  return (
    <View
      style={[
        styles.container,
        styles.inverseContainer(inverse, error, success, disabled),
      ]}
      testID={testID}
    >
      <AppTag
        style={[
          styles.text,
          styles.inverseText(inverse, error, success, disabled),
        ]}
      >
        {text}
      </AppTag>
    </View>
  );
};

export default Pill;

const stylesheet = createStyleSheet((theme) => {
  const { spacing, colors, borderWidth, borderRadius } = theme;

  return {
    container: {
      borderWidth: borderWidth.stroke01,
      borderColor: colors.colorTagsBrand,
      paddingHorizontal: spacing.spacing1,
      paddingVertical: spacing.spacing05,
      borderRadius: borderRadius.radiusTag,
      alignSelf: "flex-start",
      variants: {
        error: {
          true: {
            borderColor: colors.colorFeedbackError,
          },
        },
        success: {
          true: {
            borderColor: colors.colorFeedbackSuccess,
          },
        },
        selected: {
          true: {
            borderColor: colors.colorFeedbackSelectedInverse,
          },
        },
        disabled: {
          true: {
            borderColor: colors.colorButtonDisabled,
          },
        },
        inverse: {
          true: {},
        },
      },
    },
    inverseContainer: (inverse, error, success, disabled) => {
      if (!inverse) {
        return {};
      }

      if (error) {
        return {
          backgroundColor: colors.colorFeedbackError,
        };
      }

      if (success) {
        return {
          backgroundColor: colors.colorFeedbackSuccess,
        };
      }

      if (disabled) {
        return {
          backgroundColor: colors.colorButtonDisabled,
        };
      }

      return {
        backgroundColor: colors.colorTagsBrand,
      };
    },

    text: {
      color: colors.colorTagsBrand,
      variants: {
        error: {
          true: {
            color: colors.colorFeedbackError,
          },
        },
        success: {
          true: {
            color: colors.colorFeedbackSuccess,
          },
        },
        selected: {
          true: {
            color: colors.colorFeedbackSelectedInverse,
          },
        },
        disabled: {
          true: {
            color: colors.colorButtonDisabled,
          },
        },
      },
    },

    inverseText: (inverse, error, success, disabled) => {
      if (!inverse) {
        return {};
      }

      if (error || success) {
        return {
          color: colors.colorTextInverse,
        };
      }

      if (disabled) {
        return {
          color: colors.colorTextStrong,
        };
      }

      return {
        color: colors.colorTextInverse,
      };
    },
  };
});
