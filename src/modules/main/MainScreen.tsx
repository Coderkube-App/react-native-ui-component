import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useAppTheme } from '../../core/theme/theme';
import { ComponentsTabView } from '../design_system/tabs/ComponentsTabView';
import {
  WidgetsTabView,
  NavigationTabView,
  DialogsTabView,
} from '../design_system/tabs/PlaceholderTabs';
import { SettingsScreen } from '../settings/SettingsScreen';

const Tab = createBottomTabNavigator();

export const MainScreen = () => {
  const theme = useAppTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = '';

          if (route.name === 'Components') {
            iconName = focused ? 'widgets' : 'widgets-outline';
          } else if (route.name === 'Widgets') {
            iconName = focused ? 'tune' : 'tune-vertical';
          } else if (route.name === 'Navigation') {
            iconName = focused ? 'navigation' : 'navigation-outline';
          } else if (route.name === 'Dialogs') {
            iconName = focused ? 'layers' : 'layers-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          return <Icon name={iconName} size={24} color={color} />;
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: 'rgba(0,0,0,0.4)',
        tabBarStyle: {
          height: 70,
          paddingBottom: 10,
          paddingTop: 10,
          backgroundColor: theme.colors.surface,
          borderTopColor: 'rgba(0,0,0,0.05)',
        },
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: '600',
        },
      })}
    >
      <Tab.Screen name="Components" component={ComponentsTabView} />
      <Tab.Screen name="Widgets" component={WidgetsTabView} />
      <Tab.Screen name="Navigation" component={NavigationTabView} />
      <Tab.Screen name="Dialogs" component={DialogsTabView} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};
