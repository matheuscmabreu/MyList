import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS, FONT_SIZE, SPACING } from '../../constants';

const HEADER_HEIGHT = 140;

export function Header() {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        { height: HEADER_HEIGHT + insets.top, paddingTop: insets.top },
      ]}
    >
      <View style={styles.logo} accessible accessibilityRole="header">
        <MaterialCommunityIcons
          name="format-list-checks"
          size={28}
          color={COLORS.cyan}
        />
        <Text style={styles.text}>
          <Text style={{ color: COLORS.cyan }}>My</Text>
          <Text style={{ color: COLORS.blue }}>List</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: COLORS.headerBackground,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: SPACING.lg,
  },
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
  },
  text: {
    fontSize: FONT_SIZE.xl,
    fontWeight: '800',
  },
});
