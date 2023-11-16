import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export const Todo = ({ todo, onRemove }) => {
    return (
        // activeOpacity={0.7} - opacity of active element
        <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => console.log(todo.id)}
        onLongPress={() => onRemove(todo.id)}
        >
            <View style={styles.todo}>
                <Text>{todo.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 5,
        marginBottom: 10,
        backgroundColor: "#8a92ed"
    }
})