import { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { COLORS, FONT_SIZE, RADIUS, SPACING } from '../../constants';
import { Button } from '../Button';

const INPUT_HEIGHT = 52;

type Props = {
  value: string;
  onChangeText: (text: string) => void;
  onAdd: () => void;
};

export function AddTaskInput({ value, onChangeText, onAdd }: Props) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, isFocused && styles.inputFocused]}
        value={value}
        onChangeText={onChangeText}
        placeholder="Adicione algo à sua lista"
        accessibilityLabel="Nova tarefa"
        placeholderTextColor={COLORS.placeholder}
        returnKeyType="done"
        onSubmitEditing={onAdd}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <Button onPress={onAdd} accessibilityLabel="Adicionar tarefa" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: SPACING.sm,
    paddingHorizontal: SPACING.lg,
    marginTop: -INPUT_HEIGHT / 2, // sobrepõe o Header pela metade
  },
  input: {
    flex: 1,
    height: INPUT_HEIGHT,
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.md,
    paddingHorizontal: SPACING.lg,
    fontSize: FONT_SIZE.lg,
    color: COLORS.textPrimary,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  inputFocused: {
    borderColor: COLORS.purple,
  },
});