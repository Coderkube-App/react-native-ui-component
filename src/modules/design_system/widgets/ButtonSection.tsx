import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Typography } from '../../../core/components/Typography';
import { Button } from '../../../core/components/Button';

export const ButtonSection: React.FC = () => {
  return (
    <View style={styles.container}>
      <Typography variant="displayMedium" style={styles.title}>
        Buttons
      </Typography>
      <View style={styles.wrap}>
        <View style={styles.buttonWrapper}>
          <Button text="Primary Button" onPressed={() => {}} />
        </View>
        <View style={styles.buttonWrapper}>
          <Button text="Secondary Button" onPressed={() => {}} isSecondary />
        </View>
        <View style={styles.buttonWrapper}>
          <Button text="Loading Button" onPressed={() => {}} isLoading />
        </View>
      </View>
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
    flexDirection: 'column',
    gap: 16,
  },
  buttonWrapper: {
    width: '100%',
    maxWidth: 300,
  },
});
