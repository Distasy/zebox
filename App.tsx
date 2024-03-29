import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import {BottomMenuStack} from "./src/components/BottomMenu/BottomMenu";

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
          <BottomMenuStack/>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}