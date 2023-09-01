import React, { useState } from 'react'
import { ScrollView, Text, Image, Share, Button, View, ActionSheetIOS } from 'react-native'
import { FocusAwareStatusBar } from '../utils'
import second from '../style/style_app'

export default () => {
  const [profileTitle, setProfileTitle] = useState('here is profile')
  const profileCover = require('../assets/images/banner.jpg')

  const profileShare = async () => {
    try {
      const result = await Share.share(
        { message: profileTitle, url: 'www.google.com', title: 'facebook is meta' },
        { tintColor: '#ccfa15' }
      )

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // fulfilled, return to this page & run code inside
          alert('temp 1')
        }
      } else if (result.action === Share.dismissedAction) {
        // cancel area & run code inside
        alert('dismiss 3')
      }
    } catch (e) {
      alert(e)
    }
  }

  const [result, setResult] = useState('🔮')
  function actionSheetPress() {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['Generate number', 'Reset', 'Cancel'],
        destructiveButtonIndex: 1,
        cancelButtonIndex: 2,
        userInterfaceStyle: 'light'
      },
      btnIndex => {
        switch (btnIndex) {
          case 0: {
            setResult(String(Math.trunc(Math.random() * 100 + 1)))
            break
          }
          case 1: {
            setResult('🔮')
            break
          }
          case 2: {
            alert('cancel')
            break
          }
        }
      }
    )
  }

  return (
    <ScrollView>
      <FocusAwareStatusBar barStyle={'light-content'} backgroundColor={'#333'} />
      <Image source={profileCover} style={{ width: '100%', minHeight: 200 }}></Image>
      <Text style={{ fontSize: 20, color: '#333', letterSpacing: 2 }}>{profileTitle}</Text>

      <Button onPress={profileShare} title="Share" />

      <>
        <View style={{ ...second.flexBox, marginTop: 20 }}>
          <Text style={{ fontSize: 30, textAlign: 'center' }}>{result} </Text>
          <Button onPress={actionSheetPress} title="testActionSheet"></Button>
        </View>
      </>
    </ScrollView>
  )
}
