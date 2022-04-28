import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import TodoListItem from './TodoListItem';

const TodoList = ({todos, rm}) => {
  return (
    <ScrollView contentContainerStyle={styles.list}>
      {todos.map(todo => (
        <TodoListItem
          key={todo.id}
          {...todo}
          rm={rm}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  list: {
    alignItems: 'center'
  },
});

export default TodoList;