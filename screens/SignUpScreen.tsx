// This file contains the Sign Up screen of the app. It allows users to create an account with their email and password. Users must confirm their password to complete the sign-up process.
import React from "react";
import { View, Text, TextInput, StyleSheet, Alert } from "react-native";
import { Formik } from "formik";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { signUpValidationSchema } from "../utils/validation";
import CustomButton from "../components/CustomButton";
import PasswordStrengthIndicator from "../components/PasswordStrengthIndicator";
import { AuthStackParamList, FormValues } from "../types";

type SignUpScreenNavigationProp = StackNavigationProp<
  AuthStackParamList,
  "SignUp"
>;

const SignUpScreen = () => {
  const navigation = useNavigation<SignUpScreenNavigationProp>();

  const handleSubmit = (values: FormValues) => {
    Alert.alert("Success", "Sign Up Successful", [
      {
        text: "OK",
        onPress: () => navigation.goBack(),
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <Formik
        initialValues={{
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={signUpValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleSubmit, values, errors, touched, isValid }) => (
          <View>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={values.email}
              onChangeText={handleChange("email")}
              keyboardType="email-address"
              autoCapitalize="none"
              accessibilityLabel="Email input"
            />
            {touched.email && errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}

            <TextInput
              style={styles.input}
              placeholder="Password"
              value={values.password}
              onChangeText={handleChange("password")}
              secureTextEntry
              accessibilityLabel="Password input"
            />
            {touched.password && errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}
            <PasswordStrengthIndicator password={values.password} />

            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              value={values.confirmPassword}
              onChangeText={handleChange("confirmPassword")}
              secureTextEntry
              accessibilityLabel="Confirm password input"
            />
            {touched.confirmPassword && errors.confirmPassword && (
              <Text style={styles.errorText}>{errors.confirmPassword}</Text>
            )}

            <CustomButton
              onPress={() => handleSubmit()}
              title="Sign Up"
              disabled={!isValid}
            />

            <CustomButton
              onPress={() => navigation.goBack()}
              title="Back to Login"
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 8,
    padding: 12,
    marginVertical: 8,
    fontSize: 16,
  },
  errorText: {
    color: "#FF3B30",
    fontSize: 14,
    marginBottom: 8,
  },
});

export default SignUpScreen;
