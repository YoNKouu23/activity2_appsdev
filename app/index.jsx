import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import {useRouter} from 'expo-router'

export default function index() {

    const router = useRouter()

  return (
    <View style={styles.container}>
    <Text style={{
        fontWeight: 'bold',
        fontSize: 32,
        marginTop: 100

    }}>GROUP ACTIVITY</Text>


  <Pressable 
    style={styles.button}
    onPress={() => router.push('/home')}

    >
     <Text style={{
        textAlign: 'center',
        fontWeight: 'bold'
     }}>Get Started</Text> 
  </Pressable>
  </View>
  )
}


const styles = StyleSheet.create({
 container:{
   flex: 1,
   justifyContent: 'space-between',
   alignItems: 'center',
   padding: 25
 },

 button: {
    backgroundColor: 'steelblue',    
    padding: 20,
    width: 350,
    borderRadius: 20,
    marginBottom: 50
 }

})