// This file contains all the types that are used in the application
export type AuthStackParamList = {
  Login: undefined;
  SignUp: undefined;
  Home: undefined;
};

export interface FormValues {
  email: string;
  password: string;
  confirmPassword?: string;
  rememberMe?: boolean;
}
