import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveEmail = async (email: string): Promise<void> => {
  try {
    await AsyncStorage.setItem('rememberedEmail', email);
  } catch (error) {
    console.error('Error saving email:', error);
  }
};

export const getRememberedEmail = async (): Promise<string | null> => {
  try {
    return await AsyncStorage.getItem('rememberedEmail');
  } catch (error) {
    console.error('Error getting remembered email:', error);
    return null;
  }
};