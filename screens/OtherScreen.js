import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Colors from '../constants/Colors'

export default function OtherScreen() {
    return (
        <View style={styles.screen}>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: Colors.primary,
        flex: 1,
      },
})
