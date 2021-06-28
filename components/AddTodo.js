import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Keyboard,
  TouchableOpacity,
} from 'react-native'

export default function AddTodo({ addTodo }) {
  const [text, setText] = useState('')

  const changeHandler = (val) => {
    setText(val)
  }

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="newTodo..."
        onChangeText={changeHandler}
        keyboardAppearance="dark"
      />
      <TouchableOpacity style={styles.button} onPress={() => addTodo(text)}>
        <Text style={styles.buttonText}>Add Todo</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  button: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#1E6738',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
})
