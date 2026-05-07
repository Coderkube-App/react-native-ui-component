import React, { useState } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Switch,
  Alert,
  Platform,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Typography } from '../../core/components/Typography';
import { Card } from '../../core/components/Card';
import { useAppTheme } from '../../core/theme/theme';
import { Colors } from '../../core/theme/colors';

export const SettingsScreen: React.FC = () => {
  const theme = useAppTheme();
  const insets = useSafeAreaInsets();

  const [notifications, setNotifications] = useState(true);
  const [haptics, setHaptics] = useState(true);
  const [analytics, setAnalytics] = useState(false);

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={[styles.header, { paddingTop: insets.top + 16 }]}>
        <Typography variant="displayMedium">Settings</Typography>
      </View>

      <ScrollView
        contentContainerStyle={[
          styles.scrollContent,
          { paddingBottom: insets.bottom + 24 },
        ]}
      >
        {/* Profile Card */}
        <ProfileCard />

        <SettingGroupLabel label="Appearance" />
        <Card style={styles.groupCard}>
          <SettingIconTile
            icon="palette-outline"
            label="Theme"
            trailing={
              <View style={styles.themeToggle}>
                <TouchableOpacity
                  style={[
                    styles.toggleButton,
                    !theme.dark && { backgroundColor: theme.colors.primary },
                  ]}
                >
                  <Typography
                    variant="bodySmall"
                    style={{ color: !theme.dark ? '#fff' : theme.colors.text }}
                  >
                    Light
                  </Typography>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.toggleButton,
                    theme.dark && { backgroundColor: theme.colors.primary },
                  ]}
                >
                  <Typography
                    variant="bodySmall"
                    style={{ color: theme.dark ? '#fff' : theme.colors.text }}
                  >
                    Dark
                  </Typography>
                </TouchableOpacity>
              </View>
            }
          />
        </Card>

        <SettingGroupLabel label="Notifications" />
        <Card style={styles.groupCard}>
          <SettingSwitchTile
            icon="notifications-outline"
            label="Push Notifications"
            value={notifications}
            onValueChange={setNotifications}
          />
          <View style={styles.divider} />
          <SettingSwitchTile
            icon="vibrate"
            label="Haptic Feedback"
            value={haptics}
            onValueChange={setHaptics}
          />
        </Card>

        <SettingGroupLabel label="Privacy & Data" />
        <Card style={styles.groupCard}>
          <SettingSwitchTile
            icon="chart-timeline-variant"
            label="Usage Analytics"
            subtitle="Help improve the app"
            value={analytics}
            onValueChange={setAnalytics}
          />
          <View style={styles.divider} />
          <SettingActionTile
            icon="lock-outline"
            label="Privacy Policy"
            trailing={<Icon name="open-in-new" size={16} color={theme.colors.text} />}
          />
        </Card>

        <SettingGroupLabel label="About" />
        <Card style={styles.groupCard}>
          <SettingActionTile icon="information-outline" label="App Version" value="1.0.0 (1)" />
          <View style={styles.divider} />
          <SettingActionTile
            icon="logout"
            label="Sign Out"
            labelStyle={{ color: Colors.errorLight }}
            iconColor={Colors.errorLight}
          />
        </Card>

        <View style={styles.footer}>
          <Typography variant="bodySmall" style={styles.footerText}>
            UI Component System • v1.0.0
          </Typography>
        </View>
      </ScrollView>
    </View>
  );
};

const ProfileCard = () => {
  const theme = useAppTheme();
  return (
    <Card
      color={theme.colors.primary}
      style={styles.profileCard}
      padding={20}
    >
      <View style={styles.profileRow}>
        <View style={styles.avatar}>
          <Icon name="account" size={32} color="#fff" />
        </View>
        <View style={styles.profileInfo}>
          <Typography variant="bodyLarge" style={styles.profileName}>
            John Doe
          </Typography>
          <Typography variant="bodySmall" style={styles.profileEmail}>
            john@example.com
          </Typography>
          <View style={styles.badge}>
            <Typography variant="bodySmall" style={styles.badgeText}>
              Pro Member
            </Typography>
          </View>
        </View>
        <TouchableOpacity>
          <Icon name="pencil-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </Card>
  );
};

const SettingGroupLabel = ({ label }: { label: string }) => {
  const theme = useAppTheme();
  return (
    <Typography
      variant="bodySmall"
      style={[styles.groupLabel, { color: theme.colors.primary }]}
    >
      {label.toUpperCase()}
    </Typography>
  );
};

const SettingIconTile = ({
  icon,
  label,
  trailing,
}: {
  icon: string;
  label: string;
  trailing: React.ReactNode;
}) => {
  const theme = useAppTheme();
  return (
    <View style={styles.tile}>
      <View style={[styles.iconContainer, { backgroundColor: theme.colors.primary + '1A' }]}>
        <Icon name={icon} size={20} color={theme.colors.primary} />
      </View>
      <Typography style={styles.tileLabel}>{label}</Typography>
      {trailing}
    </View>
  );
};

const SettingSwitchTile = ({
  icon,
  label,
  subtitle,
  value,
  onValueChange,
}: {
  icon: string;
  label: string;
  subtitle?: string;
  value: boolean;
  onValueChange: (v: boolean) => void;
}) => {
  const theme = useAppTheme();
  return (
    <View style={styles.tile}>
      <View style={[styles.iconContainer, { backgroundColor: theme.colors.primary + '1A' }]}>
        <Icon name={icon} size={20} color={theme.colors.primary} />
      </View>
      <View style={styles.tileTextContainer}>
        <Typography style={styles.tileLabel}>{label}</Typography>
        {subtitle && <Typography variant="bodySmall" style={styles.tileSubtitle}>{subtitle}</Typography>}
      </View>
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{ true: theme.colors.primary }}
      />
    </View>
  );
};

const SettingActionTile = ({
  icon,
  label,
  value,
  trailing,
  labelStyle,
  iconColor,
}: {
  icon: string;
  label: string;
  value?: string;
  trailing?: React.ReactNode;
  labelStyle?: any;
  iconColor?: string;
}) => {
  const theme = useAppTheme();
  return (
    <TouchableOpacity style={styles.tile}>
      <View style={[styles.iconContainer, { backgroundColor: (iconColor || theme.colors.primary) + '1A' }]}>
        <Icon name={icon} size={20} color={iconColor || theme.colors.primary} />
      </View>
      <Typography style={[styles.tileLabel, labelStyle]}>{label}</Typography>
      {value && <Typography variant="bodySmall" style={styles.tileValue}>{value}</Typography>}
      {trailing}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { paddingHorizontal: 24, paddingBottom: 16 },
  scrollContent: { paddingHorizontal: 24 },
  profileCard: { marginBottom: 24 },
  profileRow: { flexDirection: 'row', alignItems: 'center' },
  avatar: { width: 60, height: 60, borderRadius: 30, backgroundColor: 'rgba(255,255,255,0.2)', justifyContent: 'center', alignItems: 'center' },
  profileInfo: { flex: 1, marginLeft: 16 },
  profileName: { color: '#fff', fontWeight: 'bold' },
  profileEmail: { color: 'rgba(255,255,255,0.8)' },
  badge: { backgroundColor: 'rgba(255,255,255,0.2)', paddingHorizontal: 10, paddingVertical: 2, borderRadius: 10, marginTop: 4, alignSelf: 'flex-start' },
  badgeText: { color: '#fff', fontWeight: '600', fontSize: 10 },
  groupLabel: { marginTop: 24, marginBottom: 8, fontWeight: 'bold', letterSpacing: 1 },
  groupCard: { padding: 0 },
  tile: { flexDirection: 'row', alignItems: 'center', padding: 12 },
  iconContainer: { width: 36, height: 36, borderRadius: 10, justifyContent: 'center', alignItems: 'center' },
  tileLabel: { flex: 1, marginLeft: 12, fontSize: 16 },
  tileTextContainer: { flex: 1, marginLeft: 12 },
  tileSubtitle: { color: 'rgba(0,0,0,0.4)' },
  tileValue: { color: 'rgba(0,0,0,0.4)', marginRight: 4 },
  themeToggle: { flexDirection: 'row', backgroundColor: 'rgba(0,0,0,0.05)', borderRadius: 20, padding: 2 },
  toggleButton: { paddingHorizontal: 16, paddingVertical: 6, borderRadius: 20 },
  divider: { height: 1, backgroundColor: 'rgba(0,0,0,0.05)', marginLeft: 60 },
  footer: { marginTop: 32, alignItems: 'center' },
  footerText: { color: 'rgba(0,0,0,0.3)' },
});
