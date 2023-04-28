import React, { useState } from 'react'
import { View } from 'react-native'
import ImagePicker from "expo-image-picker";

const [selectImage, setSelectImage] = useState(null)

let openImagePicker = async () => {
  let permissionRes = await ImagePicker.requestCameraPermissionsAsync()
  if(permissionRes.granted === false) {
    alert("未获取到Camera权限")
    return
  }
  let pickerRes = await ImagePicker.launchImageLibraryAsync()
  if(pickerRes.canceled === true) return
}

export default () => {
  return (
    <View>
      {/*
       *
       */}
    </View>
  )
}
