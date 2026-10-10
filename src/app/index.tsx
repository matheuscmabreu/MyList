import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { AddTaskInput } from '@/components/AddTaskInput';
import { EmptyList } from '@/components/EmptyList';
import { Header } from '@/components/Header';
import { ListSummary } from '@/components/ListSummary';
import { TaskItem } from '@/components/TaskItem';
import { COLORS, SPACING } from '@/constants';
import { useTasks } from '@/hooks/useTasks';

export default function Index() {
  const { tasks, addTask, toggleTask, removeTask } = useTasks();
  const insets = useSafeAreaInsets();
  const [text, setText] = useState('');

  const createdCount = tasks.length;
  const completedCount = tasks.filter((t) => t.done).length;

  function handleAdd() {
    const title = text.trim();
    if (!title) return;

    addTask(title);
    setText('');
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <Header />
      <AddTaskInput value={text} onChangeText={setText} onAdd={handleAdd} />

      <View style={styles.content}>
        <ListSummary created={createdCount} completed={completedCount} />

        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TaskItem
              title={item.title}
              done={item.done}
              onToggle={() => toggleTask(item.id)}
              onRemove={() => removeTask(item.id)}
            />
          )}
          ListEmptyComponent={EmptyList}
          contentContainerStyle={[
            styles.list,
            { paddingBottom: SPACING.xl + insets.bottom },
          ]}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    flex: 1,
    paddingHorizontal: SPACING.lg,
    marginTop: SPACING.xl,
  },
  list: {
    paddingTop: SPACING.xl,
  },
});
