import React from 'react'
import { ScrollView, Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import second from '../style/style_app'

import M_newMsg from './module_newMsg/index'

const termsHandle = (v: number) => {
  switch (v) {
    case 1:
      return '所有人'
    case 1:
      return '部分'

    default:
      return '所有人'
  }
}

const styles = StyleSheet.create({
  horizonBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    backgroundColor: '#fff',
    paddingLeft: 20,
    paddingRight: 20
  }
})

// @ts-ignore
export default ({ navigation: { navigate } }) => {
  return (
    <>
      <ScrollView>
        <Text style={{ fontSize: 14 }}>有以下消息通知我</Text>

        <TouchableOpacity onPress={() => alert('1')} style={[second.flexBox, styles.horizonBox]}>
          <Text>回复我</Text>
          <Text>{termsHandle(1) + ' >'}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => alert('2')} style={[second.flexBox, styles.horizonBox]}>
          <Text>回复我</Text>
          <Text>{termsHandle(1) + ' >'}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => alert('3')} style={[second.flexBox, styles.horizonBox]}>
          <Text>回复我</Text>
          <Text>{termsHandle(1) + ' >'}</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  )
}
