// import * as React from 'react'
import { StyleSheet } from 'react-native'

const tt = StyleSheet.create({
  flexBox: {
    // height: 750,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image_banner: {
    maxWidth: '100%',
    height: 200
  },
  image: {
    maxWidth: '100%',
    margin: 10
  },
  btnFather: {
    marginTop: 10,
    backgroundColor: 'skyblue',
    marginBottom: 30
  },
  btn: {
    fontSize: 20,
    color: '#fff',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderColor: '#232323'
  }
})
export default tt
