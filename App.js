import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native'

export default function App() {
  return <View style={styles.container}></View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
  buttonContainer: {
    backgroundColor: 'blue',
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'orange',
    fontSize: 24,
    marginHorizontal: 10,
    marginTop: 24,
  },
})

//*STATE
// const [name, setName] = useState('Randy')
// const [age, setAge] = useState('26')

// const clickHandle = () => {
//   setName('Randy Ortiz')
//   setAge('27')
// }

//*JSX CODE
{
  // const [people, setPeople] = useState([
  //   { name: 'Randy', id: 1 },
  //   { name: 'Lucia', id: 2 },
  //   { name: 'Nico', id: 3 },
  //   { name: 'Danny', id: 4 },
  //   { name: 'Benji', id: 5 },
  //   { name: 'Nelly', id: 6 },
  //   { name: 'Billy Bob', id: 7 },
  //   { name: 'Billy Bob', id: 8 },
  //   { name: 'Billy Bob', id: 9 },
  // ])

  // const pressHandler = (id) => {
  //   console.log(id)
  //   setPeople((prePeople) => {
  //     return prePeople.filter((person) => person.id != id)
  //   })
  // }
  {
    {
      /* <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      /> */
    }
    /* <ScrollView>
        {people.map((item) => (
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        ))}
      </ScrollView> */
  }
  //*TextInput
  /* <Text>Enter Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g JohnDoe"
        onChangeText={(value) => setName(value)}
        keyboardType="twitter"
        keyboardAppearance="dark"
      />
      <Text>
        My name is {name} and I'm {age} years old
      </Text> */
}
{
  /* <TouchableOpacity onPress={clickHandle} style={styles.buttonContainer}>
        <Text style={{ fontSize: 20, color: '#fff' }}>Update State</Text>
      </TouchableOpacity> */
}
