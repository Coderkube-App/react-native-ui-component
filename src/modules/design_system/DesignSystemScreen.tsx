import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAppTheme } from '../../core/theme/theme';
import { Typography } from '../../core/components/Typography';
import { ColorSection } from './widgets/ColorSection';
import { TypographySection } from './widgets/TypographySection';
import { ButtonSection } from './widgets/ButtonSection';

export const DesignSystemScreen: React.FC = () => {
  const insets = useSafeAreaInsets();
  const theme = useAppTheme();

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
      contentContainerStyle={[
        styles.content,
        {
          paddingTop: insets.top + 16,
          paddingBottom: insets.bottom + 16,
          paddingLeft: insets.left + 16,
          paddingRight: insets.right + 16,
        },
      ]}
    >
      <Typography variant="displayLarge" style={styles.header}>
        Design System
      </Typography>
      
      <ColorSection />
      <TypographySection />
      <ButtonSection />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
  },
  header: {
    marginBottom: 32,
  },
});
