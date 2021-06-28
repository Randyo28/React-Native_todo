import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
  Alert,
} from 'react-native'
import Header from './components/Header'
import TodoItem from './components/TodoItem'
import AddTodo from './components/AddTodo'

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on playstation', key: '3' },
  ])

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key)
    })
  }

  const addTodo = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [{ text, key: Math.random().toString() }, ...prevTodos]
      })
    } else {
      Alert.alert('OOPS', 'Hey this needs to be more then 3 characters!', [
        { text: 'OK' },
      ])
    }
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss()
      }}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo addTodo={addTodo} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
})
