import React from 'react';
import { ScrollView, StyleSheet, View, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useAppTheme } from '../../../core/theme/theme';
import { Typography } from '../../../core/components/Typography';
import { TypographySection } from '../widgets/TypographySection';
import { ButtonSection } from '../widgets/ButtonSection';
import { FormSection } from '../widgets/FormSection';
import { ColorSection } from '../widgets/ColorSection';

export const ComponentsTabView: React.FC = () => {
  const theme = useAppTheme();
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={[styles.header, { paddingTop: insets.top + 16 }]}>
        <View style={styles.headerRow}>
          <Typography variant="displayMedium">Components</Typography>
          <TouchableOpacity>
            <Icon
              name={theme.dark ? 'lightbulb-on-outline' : 'lightbulb-outline'}
              size={24}
              color={theme.colors.text}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={[
          styles.content,
          { paddingBottom: insets.bottom + 24 },
        ]}
      >
        <TypographySection />
        <ButtonSection />
        <FormSection />
        <ColorSection />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 24,
    paddingBottom: 16,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {
    paddingHorizontal: 24,
  },
});
