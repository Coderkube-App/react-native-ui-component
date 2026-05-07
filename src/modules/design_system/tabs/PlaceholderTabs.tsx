import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Typography } from '../../../core/components/Typography';
import { useAppTheme } from '../../../core/theme/theme';

const PlaceholderTab = ({ title }: { title: string }) => {
  const theme = useAppTheme();
  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Typography variant="displayMedium">{title}</Typography>
      <Typography variant="bodyMedium" style={{ marginTop: 16 }}>
        This module is ready for implementation.
      </Typography>
    </View>
  );
};

export const WidgetsTabView = () => <PlaceholderTab title="Widgets" />;
export const NavigationTabView = () => <PlaceholderTab title="Navigation" />;
export const DialogsTabView = () => <PlaceholderTab title="Dialogs" />;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 },
});
