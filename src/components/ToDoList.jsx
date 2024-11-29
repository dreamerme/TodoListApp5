import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

function ToDoList({ tasks, toggleTask, deleteTask }) {
    const getPriorityColor = (priority) => {
        switch (priority) {
            case 'high':
                return '#e74c3c';
            case 'normal':
                return '#3498db';
            case 'low':
                return '#2ecc71';
            default:
                return '#95a5a6';
        }
    };

    return (
        <ScrollView style={styles.container}>
            {tasks.map(task => (
                <View key={task.id} style={styles.taskContainer}>
                    <TouchableOpacity 
                        style={styles.taskContent}
                        onPress={() => toggleTask(task.id)}
                    >
                        <MaterialIcons
                            name={task.completed ? "check-box" : "check-box-outline-blank"}
                            size={24}
                            color={task.completed ? "#2ecc71" : "#95a5a6"}
                        />
                        <View style={styles.taskTextContainer}>
                            <Text style={[
                                styles.taskText,
                                task.completed && styles.completedTask
                            ]}>
                                {task.text}
                            </Text>
                            <View style={[
                                styles.priorityBadge,
                                { backgroundColor: getPriorityColor(task.priority) }
                            ]}>
                                <Text style={styles.priorityText}>
                                    {task.priority.toUpperCase()}
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => deleteTask(task.id)}
                        style={styles.deleteButton}
                    >
                        <MaterialIcons name="delete" size={24} color="#e74c3c" />
                    </TouchableOpacity>
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    taskContainer: {
        backgroundColor: '#fff',
        marginVertical: 5,
        marginHorizontal: 10,
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    taskContent: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    taskTextContainer: {
        flex: 1,
        marginLeft: 10,
    },
    taskText: {
        fontSize: 16,
        color: '#2c3e50',
    },
    completedTask: {
        textDecorationLine: 'line-through',
        color: '#95a5a6',
    },
    priorityBadge: {
        marginTop: 5,
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 12,
        alignSelf: 'flex-start',
    },
    priorityText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
    },
    deleteButton: {
        padding: 5,
    }
});

export default ToDoList;
