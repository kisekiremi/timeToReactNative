import React, { useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View, StyleSheet, Switch } from 'react-native'
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
    height: 55,
    backgroundColor: '#fff',
    paddingLeft: 20,
    paddingRight: 20
  },
  borderBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
    borderBottomWidth: 0.8,
    borderWidth: 1,
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#cccccc55'
  },
  selectItem: {
    fontSize: 12,
    color: '#939393'
  }
})

export default () => {
  const [isEnabled, setIsEnabled] = useState(false)

  return (
    <>
      <ScrollView>
        <Text style={{ fontSize: 12, color: '#838383', margin: 10, marginLeft: 15 }}>
          有以下消息通知我
        </Text>

        <TouchableOpacity onPress={() => alert('1')} style={[second.flexBox, styles.horizonBox]}>
          <View style={[styles.borderBox]}>
            <Text>回复我</Text>
            <Text style={[styles.selectItem]}>{termsHandle(1) + '  >'}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => alert('2')} style={[second.flexBox, styles.horizonBox]}>
          <View style={[styles.borderBox]}>
            <Text>转发@我</Text>
            <Text style={[styles.selectItem]}>{termsHandle(1) + '  >'}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => alert('zf')} style={[second.flexBox, styles.horizonBox]}>
          <View style={[styles.borderBox]}>
            <Text>转发@我</Text>
            <Text style={[styles.selectItem]}>{termsHandle(1) + '  >'}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => alert('zd')} style={[second.flexBox, styles.horizonBox]}>
          <View style={[styles.borderBox]}>
            <Text>主动@我</Text>
            <Text style={[styles.selectItem]}>{termsHandle(1) + '  >'}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => alert('dz')} style={[second.flexBox, styles.horizonBox]}>
          <View style={[styles.borderBox]}>
            <Text>给我点赞</Text>
            <Text style={[styles.selectItem]}>{termsHandle(1) + '  >'}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => alert('3')} style={[second.flexBox, styles.horizonBox]}>
          <View style={[styles.borderBox]}>
            <Text>回复我</Text>
            <Text style={[styles.selectItem]}>{termsHandle(1) + '  >'}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => alert('3')} style={[second.flexBox, styles.horizonBox]}>
          <View style={[styles.borderBox, { borderBottomWidth: 0 }]}>
            <Text>系统通知</Text>
            <Switch
              trackColor={{ false: '#909399', true: '#409EFF' }}
              onValueChange={v => {
                setIsEnabled(v)
              }}
              value={isEnabled}
            />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </>
  )
}
