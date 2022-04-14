
import React, { useState } from "react";
import {View, TextInput, Text, TouchableOpacity} from 'react-native'

export default function AddNote() {
  const [value, setValue] = useState("");

  const onChangeText = (text) => {
    setValue(text);
  };

  return (
    <View>
      <View>
        <TextInput placeholder="在這輸入筆記..." onChangeText= 
         {onChangeText} />
      </View>
      <TouchableOpacity
        onPress={() => {
          alert('button clicked')
        }}
      >
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}