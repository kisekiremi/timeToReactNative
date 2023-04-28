import React from 'react'
import { View, Image, Text, ScrollView } from 'react-native'

import second from '../style/style_app'
const expD = require('../assets/images/p_cat1.png')

export default () => {
  return (
    <>
      <ScrollView>
        <View style={{ display: 'flex', alignItems: 'center' }}>
          <Image source={expD} />
        </View>
        <View style={{ ...second.flexBox, flexDirection: 'row' }}>
          <Text>Lv3</Text>
          <Image style={{ width: 50, height: 50 }} source={expD}></Image>
          <Text>Lv4</Text>
        </View>
      </ScrollView>
    </>
  )
}
