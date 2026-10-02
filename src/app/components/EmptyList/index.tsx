import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS, FONT_SIZE, SPACING } from '../../constants';

export function EmptyList() {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="clipboard-text-outline"
        size={56}
        color={COLORS.textMuted}
      />
      <Text style={styles.title}>Sua lista ainda está vazia</Text>
      <Text style={styles.subtitle}>Adicione algo para se organizar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: SPACING.xxl * 1.5,
    gap: SPACING.xs,
  },
  title: {
    marginTop: SPACING.lg,
    fontSize: FONT_SIZE.md,
    fontWeight: '700',
    color: COLORS.textSecondary,
  },
  subtitle: {
    fontSize: FONT_SIZE.md,
    color: COLORS.textSecondary,
  },
});