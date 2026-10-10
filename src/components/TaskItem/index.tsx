import { Feather } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ReanimatedSwipeable, {
  SwipeableMethods,
} from 'react-native-gesture-handler/ReanimatedSwipeable';
import { COLORS, FONT_SIZE, RADIUS, SPACING } from '../../constants';

type Props = {
  title: string;
  done: boolean;
  onToggle: () => void;
  onRemove: () => void;
};

export function TaskItem({ title, done, onToggle, onRemove }: Props) {
  function renderRightActions(
    _progress: unknown,
    _translation: unknown,
    swipeable: SwipeableMethods
  ) {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        accessibilityRole="button"
        accessibilityLabel="Remover tarefa"
        style={styles.deleteAction}
        onPress={() => {
          swipeable.close();
          onRemove();
        }}
      >
        <Feather name="trash-2" size={20} color={COLORS.textPrimary} />
      </TouchableOpacity>
    );
  }

  return (
    <ReanimatedSwipeable
      friction={2}
      rightThreshold={40}
      overshootRight={false}
      containerStyle={styles.swipeContainer}
      renderRightActions={renderRightActions}
    >
      <TouchableOpacity
        activeOpacity={0.7}
        accessibilityRole="checkbox"
        accessibilityState={{ checked: done }}
        accessibilityActions={[{ name: 'delete', label: 'Remover tarefa' }]}
        onAccessibilityAction={(e) => {
          if (e.nativeEvent.actionName === 'delete') onRemove();
        }}
        style={styles.container}
        onPress={onToggle}
      >
        <View style={[styles.checkbox, done && styles.checkboxDone]}>
          {done && (
            <Feather name="check" size={12} color={COLORS.textPrimary} />
          )}
        </View>

        <Text style={[styles.title, done && styles.titleDone]}>{title}</Text>
      </TouchableOpacity>
    </ReanimatedSwipeable>
  );
}

const styles = StyleSheet.create({
  swipeContainer: {
    marginBottom: SPACING.sm,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.md,
    padding: SPACING.lg,
    backgroundColor: COLORS.taskBackground,
    borderWidth: 1,
    borderColor: COLORS.taskBorder,
    borderRadius: RADIUS.md,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: RADIUS.full,
    borderWidth: 2,
    borderColor: COLORS.cyan,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxDone: {
    backgroundColor: COLORS.blue,
    borderColor: COLORS.blue,
  },
  title: {
    flex: 1,
    fontSize: FONT_SIZE.md,
    lineHeight: 20,
    color: COLORS.textPrimary,
  },
  titleDone: {
    color: COLORS.textSecondary,
    textDecorationLine: 'line-through',
  },
  deleteAction: {
    width: 64,
    marginLeft: -SPACING.sm, // fica um pouco por baixo do card
    backgroundColor: COLORS.danger,
    borderRadius: RADIUS.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
});