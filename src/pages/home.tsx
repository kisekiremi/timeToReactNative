import React, { useState } from 'react'
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { FocusAwareStatusBar } from '../utils'
import styles from '../style/style_app'

const p2 = require('../assets/images/bh2.jpg')
const p3 = require('../assets/images/bh3.jpg')
const p4 = require('../assets/images/ys.jpg')

function Home() {
  const [text, setText] = useState('')
  return (
    <ScrollView>
      <FocusAwareStatusBar barStyle={'light-content'} backgroundColor={'#333'} />

      <Image style={styles.image_banner} source={require('../assets/images/banner_2.jpg')} />
      <View style={{ padding: 10 }}>
        <TextInput
          style={{
            width: 375,
            height: 50,
            borderWidth: 1,
            borderColor: '#333',
            padding: 5,
            paddingRight: 12,
            paddingLeft: 12
          }}
          placeholder="tap words here"
          clearButtonMode="while-editing"
          onChangeText={text => setText(text)}
          defaultValue={text}
        />
      </View>
      <Text style={{ width: 375, minHeight: 30, fontSize: 24 }}>
        {text.split('').map(e => e && '🍕')}
      </Text>

      <View style={{ ...styles.flexBox, flexDirection: 'row' }}>
        <Image style={styles.image} source={p2}></Image>
        <Image style={styles.image} source={p3}></Image>
        <Image style={styles.image} source={p4}></Image>
      </View>

      <Text style={styles.image}>Open up App.tsx to start working on your app2 3!</Text>

      <TouchableOpacity onPress={() => alert('Hello, world!')} style={styles.btnFather}>
        <Text style={styles.btn}>Pick a photo</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default () => {
  return Home()
}
