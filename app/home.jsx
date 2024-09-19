import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function home() {
    
  return (
    <View style={{
        marginTop: 300,
        alignItems: 'center'

    }}>
      <Text style={{
        fontSize: 32,
        fontweight: 'bold',
        marginBottom: 20
      }}>Members</Text>


      <Text>Anjie F. Fernandez</Text>
      <Text>Avril F. Payapag</Text>
      <Text>Emmanuel Pornel</Text>
      <Text>Imee Gallardo</Text>
      <Text>Leilymarie Ross</Text>
      <Text>Unclestan Lee</Text>


    </View>



    
    

  )
}

const styles = StyleSheet.create({})