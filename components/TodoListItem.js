import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const TodoListItem = ({textValue, id, rm}) => {
  return (
    <View style={styles.container}>
      <Text
        style={styles.text}>
        {textValue}
      </Text>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText} onPress={rm(id)}>
            <Icon name="delete" size={28} color="red" />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderBottomColor: '#A417F1',
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: 'space-between'
  },
  text: {
    flex: 5,
    fontWeight: '600',
    fontSize: 20,
    marginVertical: 15,
    width: 90,
  },
  buttons: {
    flexDirection: 'row',
  },
  buttonContainer: {
    marginVertical: 15,
    marginHorizontal: 15,
  },
});

export default TodoListItem;