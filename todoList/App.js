import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View, TouchableOpacity, Keyboard } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task, setTask]=useState();
  const [taskItems, setTaskItems]=useState([]);

  const handleAddTask=()=>{
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  }
  const completeTask=(index)=>{
    let itemsCopy=[...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }
  return (
    <View style={styles.container}>
    {/* Today's task */}
    <View style={styles.tasksWrapper}>
      <Text style={styles.sectionTitle}>Today's Task</Text>
      <View style={styles.items}>
        {/*Here the tasks will go */}
        {taskItems.map((item, index)=>{
          return(
            <TouchableOpacity key={index} onPress={()=>completeTask(index)}>
            <Task key={index} text={item}/>

            </TouchableOpacity>
          ) 
         
        })}
       

      </View>
    </View>

    <View  style={styles.writeTaskWrapper}>
      {/*Write a task */}
      <KeyboardAvoidingView 
       behavior={Platform.OS==="ios"?"padding":"height"}
      >
         {/**KeyboardAvoidingView is a class of react native so that when you click on the writing text field then it automatically pushes the keyboard in and drags the component of the page to the top so that the keyboard can fit in  */}
       <TextInput style={styles.input} placeholder={'Write a task'}
         value={task}
         onChangeText={text=>setTask(text)}
       />
       </KeyboardAvoidingView>
       <TouchableOpacity onPress={()=>handleAddTask()}>
         <View style={styles.addWrapper}>
           <Text style={styles.addText}>+</Text>
         </View>
       </TouchableOpacity>
    </View>
     
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    
  },
  tasksWrapper:{
    paddingTop:80,
    paddingHorizontal:20,
  },
  sectionTitle:{
    fontSize:24,
    fontWeight:'bold',
  },
  items:{
    marginTop:30,
  },
  writeTaskWrapper:{
    position:'absolute',
    bottom:30,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
   
  },
  input:{
    paddingVertical:15,
    Width:250,
    paddingHorizontal:15,
    backgroundColor:'#fff',
    borderRadius:60,
    borderColor:'#C0C0C0',
    borderWidth:1,
   
  },
  addWrapper:{
    width:60,
    height:60,
    backgroundColor:'#fff',
    justifyContent:'center',
    borderRadius:60,
    alignItems:'center',
    borderColor:'#C0C0C0',
    borderWidth:1,
  },
  addText:{},
});
