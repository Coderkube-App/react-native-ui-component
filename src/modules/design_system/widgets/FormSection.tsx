import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Typography } from '../../../core/components/Typography';
import { Card } from '../../../core/components/Card';
import { TextField } from '../../../core/components/TextField';

export const FormSection: React.FC = () => {
  return (
    <View style={styles.container}>
      <Typography variant="displayMedium" style={styles.title}>
        Form Fields
      </Typography>
      <Card>
        <TextField
          label="Email Address"
          hint="enter@email.com"
          prefixIcon="email-outline"
        />
        <View style={{ height: 20 }} />
        <TextField
          label="Password"
          hint="••••••••"
          isPassword
          prefixIcon="lock-outline"
        />
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
});
