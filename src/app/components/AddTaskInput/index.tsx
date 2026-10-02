import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Button } from '../Button';
import { COLORS, FONT_SIZE, RADIUS, SPACING } from '../../constants';

type Props = {
  value: string;
  onChangeText: (text: string) => void;
  onAdd: () => void;
};

export function AddTaskInput({ value, onChangeText, onAdd }: Props) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder="Adicione algo a sua lista"
        placeholderTextColor={COLORS.placeholder}
        returnKeyType="done"
        onSubmitEditing={onAdd}
      />
      <Button onPress={onAdd} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: SPACING.sm,
    paddingHorizontal: SPACING.lg,
    marginTop: -26, // sobrepõe o Header
  },
  input: {
    flex: 1,
    height: 52,
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.md,
    paddingHorizontal: SPACING.lg,
    fontSize: FONT_SIZE.lg,
    color: COLORS.textPrimary,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
});