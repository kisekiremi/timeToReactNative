import React from 'react'
import { ScrollView, View, Text, Image } from 'react-native'

import second from '../style/style_app'

const mg = require('../assets/images/role_bunny.png')

export default () => {
  let mma = 1
  return (
    <ScrollView style={{ flex: 1, height: 'auto' }}>
      <View>
        <Text style={{ textAlign: 'center', margin: 40, fontSize: 24 }}>Scroll me plz</Text>
      </View>

      <Image style={{ ...second.image, maxHeight: 550 }} source={mg}></Image>
      <Image style={{ ...second.image, maxHeight: 550 }} source={mg}></Image>
      <Image style={{ ...second.image, maxHeight: 550 }} source={mg}></Image>
      <Image style={{ ...second.image, maxHeight: 550 }} source={mg}></Image>
      <Image style={{ ...second.image, maxHeight: 550 }} source={mg}></Image>
      <Image style={{ ...second.image, maxHeight: 550 }} source={mg}></Image>
      <Image style={{ ...second.image, maxHeight: 550 }} source={mg}></Image>
      <Image style={{ ...second.image, maxHeight: 550 }} source={mg}></Image>
      <Image style={{ ...second.image, maxHeight: 550 }} source={mg}></Image>
    </ScrollView>
  )
}
