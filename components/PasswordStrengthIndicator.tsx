import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface PasswordStrengthIndicatorProps {
  password: string;
}

const PasswordStrengthIndicator: React.FC<PasswordStrengthIndicatorProps> = ({ password }) => {
  const getStrength = (): { strength: string; color: string; progress: number } => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[^A-Za-z0-9]/.test(password);
    const length = password.length;

    const requirements = [hasUpperCase, hasLowerCase, hasNumber, hasSpecial, length >= 8];
    const metCount = requirements.filter(Boolean).length;

    if (metCount < 2) return { strength: 'Weak', color: '#FF3B30', progress: 0 };
    if (metCount <= 2) return { strength: 'Weak', color: '#FF3B30', progress: 0.33 };
    if (metCount <= 4) return { strength: 'Medium', color: '#FF9500', progress: 0.66 };
    return { strength: 'Strong', color: '#34C759', progress: 1 };
  };

  const { strength, color, progress } = getStrength();

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Password Strength:</Text>
      <View style={styles.progressBar}>
        <View style={[styles.progress, { width: `${progress * 100}%`, backgroundColor: color }]} />
      </View>
      <Text style={[styles.text, { color }]}>{strength}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingHorizontal: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  progressBar: {
    height: 8,
    width: '100%',
    backgroundColor: '#E0E0E0',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 5,
  },
  progress: {
    height: '100%',
    borderRadius: 4,
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default PasswordStrengthIndicator;
