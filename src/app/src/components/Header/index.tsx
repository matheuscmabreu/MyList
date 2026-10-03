import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS, FONT_SIZE, SPACING } from '../../constants';

export function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
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
    height: 140,
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