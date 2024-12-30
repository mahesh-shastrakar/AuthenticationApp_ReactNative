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