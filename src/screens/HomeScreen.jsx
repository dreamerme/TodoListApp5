import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import MainLayout from '../layouts/MainLayout';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';

const HomeScreen = ({ navigation }) => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Do laundry',
      priority: 'high',
      completed: false
    },
    {
      id: 2,
      text: 'Go to gym',
      priority: 'normal',
      completed: false
    },
    {
      id: 3,
      text: 'Walk dog',
      priority: 'low',
      completed: false
    }
  ]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId 
        ? {...task, completed: !task.completed}
        : task
    ));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <MainLayout>
      <View style={styles.container}>
        <ToDoList 
          tasks={tasks} 
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
        <ToDoForm addTask={addTask} />
        <Button
          title="Go to About"
          onPress={() => navigation.navigate('About')}
          style={styles.button}
        />
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    marginTop: 20,
  }
});

export default HomeScreen;
