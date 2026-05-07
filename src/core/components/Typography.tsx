import React from 'react';
import { Text, TextStyle, StyleSheet, StyleProp } from 'react-native';
import { useAppTheme } from '../theme/theme';

type TypographyVariant =
  | 'displayLarge'
  | 'displayMedium'
  | 'displaySmall'
  | 'bodyLarge'
  | 'bodyMedium'
  | 'bodySmall';

interface TypographyProps {
  variant?: TypographyVariant;
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
  color?: string;
}

export const Typography: React.FC<TypographyProps> = ({
  variant = 'bodyMedium',
  children,
  style,
  color,
}) => {
  const theme = useAppTheme();

  const getVariantStyle = (): TextStyle => {
    switch (variant) {
      case 'displayLarge':
        return { fontSize: 32, fontWeight: 'bold' };
      case 'displayMedium':
        return { fontSize: 24, fontWeight: 'bold' };
      case 'displaySmall':
        return { fontSize: 20, fontWeight: 'bold' };
      case 'bodyLarge':
        return { fontSize: 18, fontWeight: '400' };
      case 'bodyMedium':
        return { fontSize: 16, fontWeight: '400' };
      case 'bodySmall':
        return { fontSize: 14, fontWeight: '400' };
      default:
        return { fontSize: 16, fontWeight: '400' };
    }
  };

  return (
    <Text
      style={[
        getVariantStyle(),
        { color: color || theme.colors.text },
        style,
      ]}
    >
      {children}
    </Text>
  );
};
