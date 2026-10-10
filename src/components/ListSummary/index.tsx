import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Counter } from '../Counter';
import { COLORS, FONT_SIZE, SPACING } from '../../constants';

type Props = {
  created: number;
  completed: number;
};

export function ListSummary({ created, completed }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={[styles.label, { color: COLORS.cyan }]}>Criadas</Text>
        <Counter value={created} />
      </View>

      <View style={styles.item}>
        <Text style={[styles.label, { color: COLORS.blue }]}>Concluídas</Text>
        <Counter value={completed} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: SPACING.lg,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
  },
  label: {
    fontSize: FONT_SIZE.md,
    fontWeight: '700',
  },
});