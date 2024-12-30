// This file contains the Home screen of the app. It displays a welcome message and buttons to navigate to the Login and Sign Up screens.
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../types";
import CustomButton from "../components/CustomButton";

type HomeScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  "Home"
>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Authentication App</Text>
      <Text style={styles.subtitle}>Welcome</Text>
      <CustomButton
        title="Go to Login"
        onPress={() => navigation.navigate("Login")}
      />

      <CustomButton
        title="Go to Sign Up"
        onPress={() => navigation.navigate("SignUp")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#666666",
    marginBottom: 20,
    textAlign: "center",
  },
});

export default HomeScreen;
