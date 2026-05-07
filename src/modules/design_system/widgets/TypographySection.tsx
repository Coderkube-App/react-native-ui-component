import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Typography } from '../../../core/components/Typography';
import { Card } from '../../../core/components/Card';
import { useAppTheme } from '../../../core/theme/theme';

export const TypographySection: React.FC = () => {
  const theme = useAppTheme();

  return (
    <View style={styles.container}>
      <Typography variant="displayMedium" style={styles.title}>
        Typography
      </Typography>
      <Card>
        <Typography variant="displayLarge">Heading 1</Typography>
        <Typography variant="displayMedium">Heading 2</Typography>
        <Typography variant="displaySmall">Heading 3</Typography>
        
        <View style={[styles.divider, { backgroundColor: theme.colors.border }]} />
        
        <Typography variant="bodyLarge">
          Body Large: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
        <View style={{ height: 8 }} />
        <Typography variant="bodyMedium">
          Body Medium: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
      </Card>
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
  divider: {
    height: 1,
    marginVertical: 16,
  },
});
