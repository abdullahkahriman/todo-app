import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function TaskItem({ task }) {
    return (
        <View style={styles.item}>
            <Text>{task.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
        padding: 16,
        marginBottom: 10,
        backgroundColor: 'white',
        borderRadius: 5
    }
})

export default TaskItem;