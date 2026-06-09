import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import OnboardingStack from './src/navigators/stack/OnboardingStack';
import { CartProvider } from './src/context/CartContext';

export default function App() {
  return (
    <CartProvider>
      <OnboardingStack />
    </CartProvider>
  );
}

const styles = StyleSheet.create({});
