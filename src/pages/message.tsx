import React from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'

import second from '../style/style_app'
import RefreshViewer from '../components/RefreshViewer'

// @ts-ignore
export default ({ navigation: { navigate } }) => {
  return (
    <>
      <RefreshViewer>
        <View
          style={{
            backgroundColor: '#f6ccF4',
            height: 350,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <TouchableOpacity
            onPress={() => navigate('系统通知')}
            style={{ ...second.flexBox, height: 'auto', flexDirection: 'column' }}
          >
            <View style={{ ...second.flexBox, flexDirection: 'column' }}>
              <Image source={require('../assets/images/wdsjb.jpg')}></Image>
              <Text style={{ ...second.btn, color: '#333' }}>系统通知</Text>
            </View>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              color: '#cddfff',
              textShadowColor: '#333',
              textShadowOffset: { width: 1, height: 1 },
              textShadowRadius: 3,
              letterSpacing: 2
            }}
          >
            message is huge, glorious
          </Text>
        </View>
      </RefreshViewer>
    </>
  )
}
