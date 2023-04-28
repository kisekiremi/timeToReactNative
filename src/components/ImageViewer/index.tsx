import React from 'react'
import { StyleSheet, View, Image, ImageSourcePropType } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center'
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58
  },
  image: {
    width: '80%',
    height: 'auto',
    borderRadius: 18
  }
})

// export default (placeholderImageSource: ImageSourcePropType) => {
export default (placeholderImageSource: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={placeholderImageSource} style={styles.image} />
      </View>
    </View>
  )
}
