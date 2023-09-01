import React, { useEffect, useRef, useState } from 'react'
import { AppState, Image, Text, TextInput, TouchableOpacity, View, Keyboard } from 'react-native'
import { FocusAwareStatusBar } from '../utils'
import styles from '../style/style_app'

const p2 = require('../assets/images/bh2.jpg')
const p3 = require('../assets/images/bh3.jpg')
const p4 = require('../assets/images/ys.jpg')

function Home() {
  const [text, setText] = useState('')

  const AppStatusCheck = () => {
    const appState = useRef(AppState.currentState)
    const [appStateVisible, setAppStateVisible] = useState(appState.current)

    function _handleASChange(nextAppState: any) {
      if (appState.current.match(/inactive|background/) && nextAppState === 'active') {
        // alert('App has come to the foreground')
      }
      appState.current = nextAppState
      setAppStateVisible(appState.current)
      // alert(' change the state')
    }

    useEffect(() => {
      const subSs = AppState.addEventListener('change', _handleASChange)
      return () => {
        subSs.remove()
      }
    }, [appState.current])

    return (
      <>
        <View style={{ ...styles.flexBox }}>
          <Text>current state is {appStateVisible}</Text>
        </View>
      </>
    )
  }

  const KeyboardStatusCheck = () => {
    const [keyboardActive, setKeyboardActive] = useState(false)
    const handleKeyboardStatus = (v: boolean) => {
      setKeyboardActive(v)
    }
    useEffect(() => {
      const keyActiveAdd = Keyboard.addListener('keyboardDidShow', () => handleKeyboardStatus(true))
      const keyActiveEnd = Keyboard.addListener('keyboardDidHide', () =>
        handleKeyboardStatus(false)
      )

      return () => {
        keyActiveAdd.remove()
        keyActiveEnd.remove()
      }
    }, [])

    return (
      <>
        <Text style={[styles.image, { textAlign: 'center' }]}>{String(keyboardActive)}</Text>
      </>
    )
  }

  return (
    <View>
      <FocusAwareStatusBar barStyle={'light-content'} backgroundColor={'#333'} />

      <Image style={styles.image_banner} source={require('../assets/images/banner_2.jpg')} />

      <View style={[styles.inputBox]}>
        <TextInput
          placeholder="tap words here"
          clearButtonMode="while-editing"
          onChangeText={text => setText(text)}
          // onSubmitEditing={Keyboard.dismiss}
          onEndEditing={Keyboard.dismiss}
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

      <KeyboardStatusCheck />

      <TouchableOpacity
        onPress={() => alert('Hello, world!')}
        style={[styles.btnFather, { width: '50%', alignSelf: 'center', borderRadius: 7 }]}
      >
        <Text style={[styles.btn, { width: '100%', textAlign: 'center' }]}>Pick a photo</Text>
      </TouchableOpacity>

      <AppStatusCheck />
    </View>
  )
}

export default () => {
  return Home()
}
