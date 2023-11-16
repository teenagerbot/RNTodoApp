import React, {useState} from "react";
import { View, StyleSheet, Button, TextInput, Alert } from "react-native";
export const AddTodo = ({ onSubmit }) => {
    const [value, setValue] = useState("")
    const pressHandler = () => {
        if (value.trim()) {
            onSubmit(value);
            setValue("") //clear input
        } else {
            Alert.alert("Error", "Enter text")
        }
    }
    return (
        <View style={styles.block}>
            <TextInput
            style={styles.input}
            onChangeText={setValue}
            value={value}
            placeholder="Input text"
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="decimal-pad"
            />
            <Button title="Add event" onPress={pressHandler} />
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: "row",
        justifyContent: "space-between", //отдаляет максимально елементы друг от друга
        alignItems: "center",
        marginBottom: 15
    },
    input: {
        width: "75%",
        borderStyle: "solid",
        borderBottomWidth: 2,
        borderBottomColor: "#3949ab",
        padding: 5
    }
})