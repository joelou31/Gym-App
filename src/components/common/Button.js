import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const Button = ({ 
  title, 
  onPress, 
  variant = 'primary',
  size = 'medium',
  disabled = false 
}) => {
  const buttonStyles = [
    styles.button,
    variant === 'secondary' && styles.secondaryButton,
    size === 'small' && styles.smallButton,
    disabled && styles.disabledButton,
  ];

  const textStyles = [
    styles.text,
    variant === 'secondary' && styles.secondaryText,
    size === 'small' && styles.smallText,
    disabled && styles.disabledText,
  ];

  return (
    <TouchableOpacity 
      style={buttonStyles} 
      onPress={onPress} 
      disabled={disabled}
    >
      <Text style={textStyles}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: theme.colors.primary,
  },
  smallButton: {
    padding: theme.spacing.sm,
  },
  disabledButton: {
    backgroundColor: theme.colors.textSecondary,
    opacity: 0.5,
  },
  text: {
    color: '#FFFFFF',
    fontSize: theme.typography.body.fontSize,
    fontWeight: '600',
  },
  secondaryText: {
    color: theme.colors.primary,
  },
  smallText: {
    fontSize: theme.typography.caption.fontSize,
  },
  disabledText: {
    color: '#FFFFFF',
  },
}); 