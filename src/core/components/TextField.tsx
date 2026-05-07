import React from 'react';
import { View, TextInput, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { Typography } from '../components/Typography';
import { useAppTheme } from '../theme/theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface TextFieldProps {
  label: string;
  hint?: string;
  isPassword?: boolean;
  prefixIcon?: string;
  value?: string;
  onChangeText?: (text: string) => void;
}

export const TextField: React.FC<TextFieldProps> = ({
  label,
  hint,
  isPassword = false,
  prefixIcon,
  value,
  onChangeText,
}) => {
  const theme = useAppTheme();

  return (
    <View style={styles.container}>
      <Typography variant="bodySmall" style={styles.label}>
        {label}
      </Typography>
      <View
        style={[
          styles.inputContainer,
          {
            backgroundColor: theme.colors.surface,
            borderColor: theme.colors.border,
          },
        ]}
      >
        {prefixIcon && (
          <Icon
            name={prefixIcon}
            size={20}
            color={theme.colors.text}
            style={styles.icon}
          />
        )}
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={hint}
          placeholderTextColor="rgba(0,0,0,0.3)"
          secureTextEntry={isPassword}
          style={[styles.input, { color: theme.colors.text }]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {
    marginBottom: 8,
    fontWeight: '600',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 56,
  },
  icon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
});
