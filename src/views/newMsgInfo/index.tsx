import React, { useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View, StyleSheet, Switch } from 'react-native'
import second from '../../style/style_app'

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

// @ts-ignore
export default ({ navigation: { navigate } }) => {
  const [isSystemInfoEnable, setIsSystemInfoEnable] = useState(false)
  const [isPersonalInfoEnable, setIsPersonalInfoEnable] = useState(false)
  const [IsStrangerEnable, setIsStrangerEnable] = useState(false)
  const [IsUnFollowerEnable, setIsUnFollowerEnable] = useState(false)
  return (
    <>
      <ScrollView>
        <Text style={second.small_text}>有以下消息通知我</Text>

        <TouchableOpacity
          onPress={() => navigate('前5个选项(需回调)')}
          style={[second.flexBox, second.horizonBox]}
        >
          <View style={[second.borderBox]}>
            <Text>回复我</Text>
            <Text style={[second.selectItem]}>{termsHandle(1) + '  >'}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => alert('2')} style={[second.flexBox, second.horizonBox]}>
          <View style={[second.borderBox]}>
            <Text>转发@我</Text>
            <Text style={[second.selectItem]}>{termsHandle(1) + '  >'}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => alert('3')} style={[second.flexBox, second.horizonBox]}>
          <View style={[second.borderBox]}>
            <Text>主动@我</Text>
            <Text style={[second.selectItem]}>{termsHandle(1) + '  >'}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => alert('4')} style={[second.flexBox, second.horizonBox]}>
          <View style={[second.borderBox]}>
            <Text>给我点赞</Text>
            <Text style={[second.selectItem]}>{termsHandle(1) + '  >'}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => alert('5')} style={[second.flexBox, second.horizonBox]}>
          <View style={[second.borderBox]}>
            <Text>回复我</Text>
            <Text style={[second.selectItem]}>{termsHandle(1) + '  >'}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {}}
          style={[second.flexBox, second.horizonBox]}
        >
          <View style={[second.borderBox]}>
            <Text>系统通知</Text>
            <Switch
              trackColor={{ false: '#909399', true: '#409EFF' }}
              onValueChange={v => {
                setIsSystemInfoEnable(v)
              }}
              value={isSystemInfoEnable}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {}}
          style={[second.flexBox, second.horizonBox]}
        >
          <View style={[second.borderBox, { borderBottomWidth: 0 }]}>
            <Text>私信通知</Text>
            <Switch
              trackColor={{ false: '#909399', true: '#409EFF' }}
              onValueChange={bool => {
                setIsPersonalInfoEnable(bool)
              }}
              value={isPersonalInfoEnable}
            />
          </View>
        </TouchableOpacity>

        <Text style={second.small_text}>陌生人私信过滤</Text>

        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {}}
          style={[second.flexBox, second.horizonBox]}
        >
          <View style={[second.borderBox]}>
            <Text>不接收陌生人私信</Text>
            <Switch
              trackColor={{ false: '#909399', true: '#409EFF' }}
              onValueChange={bool => {
                setIsStrangerEnable(bool)
              }}
              value={IsStrangerEnable}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {}}
          style={[second.flexBox, second.horizonBox]}
        >
          <View style={[second.borderBox, { borderBottomWidth: 0 }]}>
            <Text>合并未关注人私信</Text>
            <Switch
              trackColor={{ false: '#909399', true: '#409EFF' }}
              onValueChange={bool => {
                setIsUnFollowerEnable(bool)
              }}
              value={IsUnFollowerEnable}
            />
          </View>
        </TouchableOpacity>

        <Text style={second.mini_text}>开启合并后，将不通知未关注人私信</Text>
      </ScrollView>
    </>
  )
}
