import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hi friends !</Text>
            <Text onPress={() => navigation.navigate('Task')} style={styles.subTitle}>
                Click to create the to-do list right <Text style={{ textDecorationLine: 'underline', color: 'black' }}>away!</Text>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 30
    },
    subTitle: {
        fontSize: 20,
        textAlign: 'center'
    }
})

export default Home;