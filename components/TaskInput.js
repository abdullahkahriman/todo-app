import React from 'react';
import { useState } from 'react';
import { Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

function TaskInput({ tasks, setTasks }) {
    const [taskValue, setTaskValue] = useState('');

    const addTask = () => {
        if (!taskValue.trim()) {
            alert('Please write something');
            return;
        }

        setTasks([...tasks, {
            id: 5,
            title: taskValue.trim()
        }])
        setTaskValue('')
        Keyboard.dismiss()
    }


    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.input}
                keyboardType="default"
                returnKeyType="next"
                value={taskValue}
                onChangeText={setTaskValue}
                onSubmitEditing={addTask}
                placeholder="New task" />
            <TouchableOpacity disabled={!taskValue} onPress={addTask} style={[
                styles.buttonContainer,
                !taskValue && styles.buttonContainerDisabled]}>
                <Text style={{ color: 'white', fontSize: 20 }}>&#10133;</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 40,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 100
    },
    input: {
        borderColor: '#ddd',
        fontSize: 15,
        borderWidth: 1,
        borderRadius: 5,
        width: '85%',
        backgroundColor: '#fff',
        padding: 10
    },
    buttonContainer: {
        backgroundColor: 'black',
        borderRadius: 20,
        padding: 0,
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonContainerDisabled: {
        opacity: 0.5
    }
})

export default TaskInput