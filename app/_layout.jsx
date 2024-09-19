import { StyleSheet, Text, View,  } from 'react-native'
import React from 'react'
import {Stack} from 'expo-router'

export default function RootLayout() {
  return (
    <Stack>
        <Stack.Screen name='index'
            options={{
                headerShown: false
            }}
        />
        <Stack.Screen name='home'/>
    </Stack>
  )
}

const styles = StyleSheet.create({})