import { useEffect, useState } from 'react';
import Storage from 'expo-sqlite/kv-store';

export type Task = {
  id: string;
  title: string;
  done: boolean;
};

const STORAGE_KEY = 'mylist:tasks';

function loadTasks(): Task[] {
  try {
    const saved = Storage.getItemSync(STORAGE_KEY);
    return saved ? (JSON.parse(saved) as Task[]) : [];
  } catch {
    return [];
  }
}

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>(loadTasks);

  useEffect(() => {
    Storage.setItem(STORAGE_KEY, JSON.stringify(tasks)).catch(() => {});
  }, [tasks]);

  function addTask(title: string) {
    setTasks((prev) => [
      ...prev,
      { id: String(Date.now()), title, done: false },
    ]);
  }

  function toggleTask(id: string) {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  }

  function removeTask(id: string) {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }

  return { tasks, addTask, toggleTask, removeTask };
}
