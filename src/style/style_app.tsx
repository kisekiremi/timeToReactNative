import { StyleSheet } from 'react-native'

const tt = StyleSheet.create({
  hide: {
    display: 'none'
  },
  show: {
    display: 'flex'
  },
  inputBox: {
    padding: 15,
    margin: 20,
    borderWidth: 1,
    borderColor: '#333'
  },
  flexBox: {
    // height: 750,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  borderBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
    borderBottomWidth: 0.8,
    borderWidth: 1,
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#cccccc55'
  },
  horizonBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 55,
    backgroundColor: '#fff',
    paddingLeft: 20,
    paddingRight: 20
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  selectItem: {
    fontSize: 12,
    color: '#939393'
  },
  image_banner: {
    width: 'auto',
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
  },
  small_text: {
    fontSize: 12,
    color: '#838383',
    margin: 10,
    marginLeft: 15
  },
  mini_text: {
    fontSize: 10,
    color: '#838383',
    margin: 10,
    marginLeft: 15
  }
})
export default tt
