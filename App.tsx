import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import OnboardingStack from './src/navigators/stack/OnboardingStack';

export default function App() {
  return (
    <OnboardingStack />
  );
}

const styles = StyleSheet.create({});
