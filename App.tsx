import "./src/theme/unistyles";
import { UnistylesProvider } from "react-native-unistyles";
import JobScreen from "src/screens/jobScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <UnistylesProvider>
      <SafeAreaProvider>
        <JobScreen />
      </SafeAreaProvider>
    </UnistylesProvider>
  );
}
