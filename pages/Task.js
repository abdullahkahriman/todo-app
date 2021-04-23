import React from 'react';
import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import TaskInput from '../components/TaskInput';
import TaskItem from '../components/TaskItem'

function Task() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: 'Code refactor'
        },
        {
            id: 2,
            title: 'Publish project'
        },
        {
            id: 3,
            title: 'Learn react native'
        }
    ]);

    return (
        <ScrollView>
            <View style={{ marginLeft: 10, marginRight: 10, marginTop: 30 }}>
                {tasks.map((t, k) => <TaskItem key={k} task={t} />)}
            </View>
            <TaskInput tasks={tasks} setTasks={setTasks} />
        </ScrollView>
    )
}


export default Task;