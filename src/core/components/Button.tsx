import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  View,
  ViewStyle,
  TextStyle,
  StyleProp,
} from 'react-native';
import { useAppTheme } from '../theme/theme';

interface ButtonProps {
  text: String;
  onPressed: () => void;
  isLoading?: boolean;
  isSecondary?: boolean;
  style?: StyleProp<ViewStyle>;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  onPressed,
  isLoading = false,
  isSecondary = false,
  style,
}) => {
  const theme = useAppTheme();

  const containerStyle: ViewStyle = {
    backgroundColor: isSecondary ? 'transparent' : theme.colors.primary,
    borderColor: theme.colors.primary,
    borderWidth: isSecondary ? 1 : 0,
    height: 56,
    borderRadius: theme.borderRadius.md,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    opacity: isLoading ? 0.7 : 1,
  };

  const textStyle: TextStyle = {
    color: isSecondary ? theme.colors.primary : theme.colors.onPrimary,
    fontSize: 16,
    fontWeight: '600',
  };

  return (
    <TouchableOpacity
      onPress={onPressed}
      disabled={isLoading}
      style={[containerStyle, style]}
      activeOpacity={0.8}
    >
      {isLoading ? (
        <ActivityIndicator
          color={isSecondary ? theme.colors.primary : theme.colors.onPrimary}
        />
      ) : (
        <View style={styles.content}>
          <Text style={textStyle}>{text}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
