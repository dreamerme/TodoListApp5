import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import MainLayout from '../layouts/MainLayout';

const AboutScreen = ({ navigation }) => {
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const currentDate = new Date().toLocaleDateString();

  return (
    <MainLayout>
      <View style={styles.container}>
        <Text style={styles.title}>TodoListApp</Text>
        <TouchableOpacity onPress={() => setShowEasterEgg(!showEasterEgg)}>
          <Text style={styles.name}>Created by: Yuan Lyu</Text>
        </TouchableOpacity>
        <Text style={styles.date}>Date: {currentDate}</Text>
        
        {showEasterEgg && (
          <View style={styles.easterEgg}>
            <Text style={styles.easterEggText}>🎉 You found the Easter egg! 🎉</Text>
          </View>
        )}

        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
          style={styles.button}
        />
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  name: {
    fontSize: 18,
    color: '#007AFF',
    marginBottom: 10,
  },
  date: {
    fontSize: 16,
    color: '#666',
  },
  easterEgg: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#FFE4E1',
    borderRadius: 10,
  },
  easterEggText: {
    fontSize: 16,
    color: '#FF69B4',
  },
  button: {
    marginTop: 30,
  }
});

export default AboutScreen;
