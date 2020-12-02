/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  ScrollView,
} from 'react-native';

const App: () => React$Node = () => {
  const [task, setTask] = React.useState('');
  const [tasks, setTasks] = React.useState([]);

  const handleAddTask = () => {
    setTasks((currentTask) => [...currentTask, task]);
    console.log(tasks);
  };

  return (
    <View style={styles.mainView}>
      <View>
        <TextInput
          placeholder="Add some tasks..."
          style={styles.inputTask}
          onChangeText={(text) => {
            setTask(text);
          }}
          value={task}
        />
        <Button
          title="Add"
          style={styles.addTaskButton}
          onPress={handleAddTask}
        />
      </View>
      <SafeAreaView>
        <ScrollView>
          {tasks.map((_task, index) => (
            <View style={styles.taskContainer} key={index}>
              <Text>{`${index + 1} - ${_task} `}</Text>
              <Button title="X" />
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    padding: 30,
  },
  inputTask: {
    backgroundColor: 'rgba(0,0,0,.1)',
    marginBottom: 10,
  },
  addTaskButton: {},
  taskContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 19,
    fontWeight: 'bold',
    borderBottomColor: 'rgba(0,0,0,.1)',
    borderBottomWidth: 1,
  },
});

export default App;
