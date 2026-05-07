import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Typography } from '../../../core/components/Typography';
import { useAppTheme } from '../../../core/theme/theme';
import { Colors } from '../../../core/theme/colors';

export const ColorSection: React.FC = () => {
  const theme = useAppTheme();

  return (
    <View style={styles.container}>
      <Typography variant="displayMedium" style={styles.title}>
        Colors
      </Typography>
      <View style={styles.wrap}>
        <ColorCircle color={theme.colors.primary} label="Primary" />
        <ColorCircle color={theme.colors.secondary} label="Secondary" />
        <ColorCircle color={Colors.success} label="Success" />
        <ColorCircle color={Colors.warning} label="Warning" />
        <ColorCircle color={Colors.errorLight} label="Error" />
      </View>
    </View>
  );
};

interface ColorCircleProps {
  color: string;
  label: string;
}

const ColorCircle: React.FC<ColorCircleProps> = ({ color, label }) => {
  return (
    <View style={styles.circleContainer}>
      <View style={[styles.circle, { backgroundColor: color }]} />
      <Typography variant="bodySmall" style={styles.label}>
        {label}
      </Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  title: {
    marginBottom: 16,
  },
  wrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  circleContainer: {
    alignItems: 'center',
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
  },
  label: {
    marginTop: 4,
  },
});
