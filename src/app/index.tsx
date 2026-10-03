import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { AddTaskInput } from './src/components/AddTaskInput';
import { EmptyList } from './src/components/EmptyList';
import { Header } from './src/components/Header';
import { ListSummary } from './src/components/ListSummary';
import { TaskItem } from './src/components/TaskItem';
import { COLORS, SPACING } from './src/constants';

type Task = {
  id: string;
  title: string;
  done: boolean;
};

const LOREM =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.';

// Dados de exemplo para conferir o layout. Troque por [] quando terminar.
const INITIAL_TASKS: Task[] = [
  { id: '1', title: LOREM, done: false },
  { id: '2', title: LOREM, done: false },
  { id: '3', title: LOREM, done: false },
  { id: '4', title: LOREM, done: true },
  { id: '5', title: LOREM, done: true },
];

export default function Index() {
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);
  const [text, setText] = useState('');

  const createdCount = tasks.length;
  const completedCount = tasks.filter((t) => t.done).length;

  function handleAdd() {
    const title = text.trim();
    if (!title) return;

    setTasks((prev) => [
      ...prev,
      { id: String(Date.now()), title, done: false },
    ]);
    setText('');
  }

  function handleToggle(id: string) {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  }

  function handleRemove(id: string) {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }

  return (
    <GestureHandlerRootView style={styles.root}>
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
                onToggle={() => handleToggle(item.id)}
                onRemove={() => handleRemove(item.id)}
              />
            )}
            ListEmptyComponent={EmptyList}
            contentContainerStyle={styles.list}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
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
    paddingBottom: SPACING.xl,
  },
});