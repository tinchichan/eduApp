import React, { useState } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
} from 'react-native'
import TodoInsert from '../components/TodoInsert'
import TodoList from '../components/TodoList'

const App = () => {

  const [todos, setTodos] = useState<any>([])

  const addTodo = (text: string) => {
    setTodos([
      ...todos,
      { id: Math.random().toString(), textValue: text},
    ])
  }

  const rm = (id) => (e) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <TodoInsert onAddTodo={addTodo} />
        <TodoList todos={todos} rm={rm}/>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
  },
  card: {
    backgroundColor: '#fff',
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
  },
  input: {
    padding: 30,
    borderBottomColor: '#bbb',
    borderBottomWidth: 2,
    fontSize: 25,
    marginLeft: 20,
  },
})

export default App
