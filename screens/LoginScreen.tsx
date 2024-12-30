import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import { Formik } from 'formik';
import {CheckBox} from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { loginValidationSchema } from '../utils/validation';
import { saveEmail, getRememberedEmail } from '../utils/storage';
import CustomButton from '../components/CustomButton';
import { AuthStackParamList, FormValues } from '../types';
import { useIsFocused } from '@react-navigation/native';

type LoginScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList, 'Login'>;

const LoginScreen = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const [initialEmail, setInitialEmail] = useState('');
  const isFocused = useIsFocused();
  const initValues = {
    email: initialEmail,
    password: '',
    rememberMe: false,
  }
  const loadRememberedEmail = async () => {
    const email = await getRememberedEmail();
    if (email) setInitialEmail(email);
  };
  const handleSubmit = async (values: FormValues ,{resetForm}) => {
    if (values.rememberMe) {
      await saveEmail(values.email);
    }else{
      await saveEmail('');
      setInitialEmail('');
    }
    Alert.alert('Success', 'Login Successful');
    resetForm();
    navigation.goBack();
  };

  useEffect(() => {
    loadRememberedEmail();
  },[isFocused]);


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Formik
        initialValues={initValues}
        validationSchema={loginValidationSchema}
        onSubmit={handleSubmit}
        resetForm
        enableReinitialize
      >
        {({ handleChange, handleSubmit,setFieldValue, values, errors, touched, isValid }) => (
          <View>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={values.email}
              onChangeText={handleChange('email')}
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
              onChangeText={handleChange('password')}
              secureTextEntry
              accessibilityLabel="Password input"
            />
            {touched.password && errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}

            <View style={styles.checkboxContainer}>
              <CheckBox
                checked={values.rememberMe}
                onPress={() => setFieldValue('rememberMe', !values.rememberMe)}
                accessibilityLabel="Remember me checkbox"
              />
              <Text style={styles.checkboxLabel}>Remember Me</Text>
            </View>

            <CustomButton
              onPress={() => handleSubmit()}
              title="Login"
              disabled={!isValid}
            />

            <CustomButton
              onPress={() => navigation.navigate('SignUp')}
              title="Create Account"
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
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    padding: 12,
    marginVertical: 8,
    fontSize: 16,
  },
  errorText: {
    color: '#FF3B30',
    fontSize: 14,
    marginBottom: 8,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  checkboxLabel: {
    marginLeft: 8,
    fontSize: 16,
  },
});

export default LoginScreen;