import React from 'react'
import { View, Text, Image } from 'react-native'

import second from '../style/style_app'
import RefreshViewer from '../components/RefreshViewer'

const mg = require('../assets/images/role_bunny.png')

export default () => {
  return (
    <>
      <RefreshViewer>
        <Text style={{ textAlign: 'center', margin: 40, fontSize: 24 }}>Scroll me plz</Text>

        <Image style={{ ...second.image, maxHeight: 550 }} source={mg} />
        <Image style={{ ...second.image, maxHeight: 550 }} source={mg} />
        <Image style={{ ...second.image, maxHeight: 550 }} source={mg} />
        <Image style={{ ...second.image, maxHeight: 550 }} source={mg} />
        <Image style={{ ...second.image, maxHeight: 550 }} source={mg} />
        <Image style={{ ...second.image, maxHeight: 550 }} source={mg} />
        <Image style={{ ...second.image, maxHeight: 550 }} source={mg} />
        <Image style={{ ...second.image, maxHeight: 550 }} source={mg} />
        <Image style={{ ...second.image, maxHeight: 550 }} source={mg} />
      </RefreshViewer>
    </>
  )
}
