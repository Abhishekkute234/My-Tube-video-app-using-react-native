import React from "react";
import { Stack } from "expo-router";

import { StatusBar } from "expo-status-bar";

export default function AuthLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="sign-in"
          options={{
            headerShown: false,
          }}
        />
      </Stack>

      {/* <Stack
        screenOptions={{
          headerShown: false, // Hides the header globally for all screens
        }}
      /> */}

      <StatusBar backgroundColor="#161622" style="light" />
    </>
  );
}
