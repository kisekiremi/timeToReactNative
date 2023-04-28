import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { FocusAwareStatusBar } from '../utils'
import second from '../style/style_app'

export default () => {
  return (
    <>
      <ScrollView>
        <FocusAwareStatusBar barStyle={'light-content'} backgroundColor={'#333'} />

        <View style={{ ...second.flexBox, height: 200 }}>
          <Image style={second.image_banner} source={require('../assets/images/banner.jpg')} />
        </View>

        <Text style={{ fontSize: 20, color: '#333', letterSpacing: 2 }}>here is profile</Text>
      </ScrollView>
    </>
  )
}
