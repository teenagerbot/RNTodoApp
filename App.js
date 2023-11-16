import React, { useState } from "react";
import { StyleSheet, View, FlatList } from 'react-native';
import { Navbar } from "./src/Navbar";
import { AddTodo } from "./src/AddTodo";
import { Todo } from "./src/Todo";

export default function App() {
  const [todos, setTodos] = useState([])
  /**
   * useState([]) - [] - default value in variable "todos"
   * setTodos - function for changing of "todos"
   */
  const addTodo = (title) => {
    // const newTodo = {
    //   title: title,
    //   id: String(Date.now())
    // }
    // setTodos((prevTodos) => {
    //   return [
    //     ...prevTodos,
    //     newTodo
    //   ]
    // })
    setTodos(prev => [...prev, {
      title: title,
      id: String(Date.now())
    }])
  }
  const removeTodo = id => {
    //deleteing todo with her id
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }
  return (
    <View style={{ flex: 1 }}>
      <Navbar title="Todo application" />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />

        <FlatList 
        keyExtractor={item => String(item.id)}
          data={todos}
          renderItem={({ item }) => <Todo todo={item}
          onRemove={removeTodo}
          />}
        />

        
      </View>
    </View>
  );
}
//for FlatList use <View style={{ flex: 1 }}>
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  }
});
