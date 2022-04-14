import React, { Component } from "react";
import {StyleSheet, Text, View, Platform, Dimensions, ScrollView} from 'react-native'
import * as Haptics from 'expo-haptics';
import { Button, Checkbox, TextInput } from "react-native-paper";
import update from 'react-addons-update';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
interface Itodo {
    id: number[];
   todos: string[];
   isDone: boolean[];
}
class SaveTodo extends Component <Itodo>{

    Haptics(){
        if(!(Platform.OS === 'web')){
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
        }
      }
    
    state = {
        id: [],
        todos: [],
        isDone: [],
        currentText: ""
    }

    addTodo = (todo: string) => {
        this.setState({
            id: [...this.state.id, this.state.id.length],
            todos: [...this.state.todos, todo],
            isDone: [...this.state.isDone, false]
        })
        this.saveState()
    }

    deleteTodo = (id: number) => {
        this.setState({
            id: this.state.id.filter(item => item !== id),
            todos: this.state.todos.filter((item, index) => index !== id),
            isDone: this.state.isDone.filter((item, index) => index !== id)
        })
        this.saveState()
    }

    toggleTodo(id: number){

        const newIsDone = !this.state.isDone[id]
        const currState: boolean[] = this.state.isDone;
        currState[id] = newIsDone;

        this.setState({
            isDone: currState
        })
        this.saveState()

        // this.setState(update(this.state, {
        //     isDone: {
        //         [id]: {$set: newIsDone}
        //     }
        // }))
        // this.saveState()
        }

    getStyle(id: number){
        if(this.state.isDone[id]){
            return styles.todoTextDone
        }
        return styles.todoText
       
    }  

     async saveState(){
        console.log("saveState")
        try{
            console.table(JSON.stringify(this.state))
            await AsyncStorage.setItem('@todo', JSON.stringify(this.state))
        }catch(error){
            console.log(error)
        }
        console.log("saveState :)")
    }

    //TODO : Save to AsyncStorage is not working BOolean is not saving right
    loadState(){
        console.log("loadState")
        AsyncStorage.getItem('@todo').then(todo => {
            if(todo !== null){
                this.setState(JSON.parse(todo))
                console.log(this.state)
            }
        })
        console.log("loadState :)")
    }

    componentDidMount(){
        this.loadState()
    }

  
    renderAllTodos(){

        return this.state.id.map((item, index) => {
            return (
                <View key={item}>
                    <Text style={this.getStyle(index)}>
                        {this.state.todos[index]}   
                        <View style={styles.checkbox}>
                            <Checkbox status={this.state.isDone[index] ? 'checked' : 'unchecked'} onPress={this.toggleTodo.bind(this, index)}/>
                        </View>
                        <View style={styles.del}>
                            <MaterialCommunityIcons onPress={this.deleteTodo.bind(this, item)} name={"delete-forever"} size={30} color={"Black"} />
                        </View>
                            
                        {/* <Button onPress={this.deleteTodo.bind(this, item)}>{"Remove"}</Button> */}

                    </Text>
                </View>
            )
        })
    }

    onPress = () => {
        this.addTodo(this.state.currentText);
        console.table(this.state);
        this.Haptics();
      }
      
      //funtion to set current text to state
      onChangeText = (text: String) => {
        this.setState({currentText: text})
      } 

    render() {
        return (
          <View style={[styles.container]} >
            <View>
              <View style={[styles.commonResult]}>
              </View>
              {/* <Title style={styles.title}>{"Todo List"}</Title> */}
              <ScrollView style={styles.scroll}>
                  {this.renderAllTodos()}
              </ScrollView>
              </View>
              <View style={styles.add}>
                <TextInput style={styles.input} label="jot down school info" onChangeText={text => this.onChangeText(text)}></TextInput>
                <Button onPress={this.onPress} style={styles.button}>
                      <Text>Add Note</Text>
                </Button>
              </View>
          </View>
        )
      }
}

export default SaveTodo;


//variable to get width and height of screen
const {width, height} = Dimensions.get('window');
const withMultipliter: number = 0.75;
const textSize: number = 20;
//function to get 2 numbers using conditionals
const getHeightMulti = (): number => {
  if(Platform.OS === 'web'){
    return height * .5;
  } 
  else{     
    return height * .3;
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    margin: 10,
    marginTop:30,
    borderRadius: 15,
  },
  button: {
    padding: 10,
    marginTop:10,
  },
  commonResult:{
    padding: 10,
    margin:10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: 'center',
    alignSelf: 'center',
  },
  todoText: {
    padding: 10,
    backgroundColor: '#B5DEFF',
    borderRadius: 10,
    justifyContent: "center",
    alignItems: 'center',
    alignSelf: 'center',
    margin:5,
    // textAlign: 'center',
    textAlignVertical: 'center',
    minWidth: width*withMultipliter,
    fontSize: textSize,
  },
  todoTextDone:{
    padding: 10,
    backgroundColor: "#C1FFD7",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: 'center',
    alignSelf: 'center',
    margin:5,
    // textAlign: 'center',
    textAlignVertical: 'center',
    minWidth: width*withMultipliter,
    fontSize: textSize,
  },
  checkbox:{
    padding: 10,
    borderRadius: 10,
    // float: "right",
    //
  },
  title:{
    margin: 10,
    marginTop: 5,
    padding: 10,
    fontSize: 40,
    alignSelf: 'center'
  },
  scroll:{
    width: width,
    height: getHeightMulti(),
    padding: 10,
    borderRadius: 10,
    margin:10,
  },  add:{
    width: width,
    marginBottom: Platform.OS === 'web' ? 0 : 40,
  }, input:{
    width: width*withMultipliter,
    alignSelf: 'center',
  },
  del:{
      marginLeft: 30,
  }

})