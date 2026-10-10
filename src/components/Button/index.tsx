import React from 'react';
import { TouchableOpacity, StyleSheet, TouchableOpacityProps } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { COLORS, RADIUS } from '../../constants';

type Props = TouchableOpacityProps & {
  icon?: keyof typeof Feather.glyphMap;
};

export function Button({ icon = 'plus-circle', style, ...rest }: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      accessibilityRole="button"
      style={[styles.button, style]}
      {...rest}
    >
      <Feather name={icon} size={20} color={COLORS.textPrimary} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 52,
    height: 52,
    borderRadius: RADIUS.md,
    backgroundColor: COLORS.blueDark,
    alignItems: 'center',
    justifyContent: 'center',
  },
});