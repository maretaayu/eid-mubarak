import React, { useCallback, useEffect } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import {
  useFonts,
  ReenieBeanie_400Regular,
} from "@expo-google-fonts/reenie-beanie";
SplashScreen.preventAutoHideAsync();

export default () => {
  let [fontsLoaded] = useFonts({
    ReenieBeanie_400Regular,
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={theme.Container}>
      <View style={theme.Content}>
        <Text style={theme.Title}>Selamat Hari Raya</Text>
        <Text style={theme.Subtitle}>Idul Fitri 1444H</Text>
        <Text style={theme.Description}>Mohon maaf lahir dan batin</Text>
        <View style={theme.ContainerLabel}>
          <Text style={theme.Label}>maretacodes</Text>
        </View>
      </View>
      <Image source={require("./assets/image-2.png")} />
    </View>
  );
};

const theme = StyleSheet.create({
  Container: {
    backgroundColor: "#1c1c42",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  Content: {
    marginTop: 72,
    justifyContent: "center",
  },
  Title: {
    fontFamily: "ReenieBeanie_400Regular",
    fontSize: 32,
    color: "#fff",
    textAlign: "center",
    marginTop: 72,
  },
  Subtitle: {
    fontFamily: "ReenieBeanie_400Regular",
    fontSize: 60,
    color: "#fee191",
    textAlign: "center",
    marginVertical: 4,
  },
  Description: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },
  ContainerLabel: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    marginTop: 72,
    backgroundColor: "rgba(227, 235, 255, 0.1)",
    borderRadius: 100,
    alignSelf: "center",
  },
  Label: {
    fontSize: 14,
    color: "#FEE191",
    textAlign: "center",
  },
});
