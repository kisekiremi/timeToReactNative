import React, { useCallback, useMemo, useRef, useState } from 'react'
import { RefreshControl, Animated, PanResponder } from 'react-native'

export default (props: any) => {
  const [refreshing, setRefreshing] = useState(false)
  const animViewTop = useRef(new Animated.Value(0)).current

  const wait = (timeout: number) => {
    return new Promise((res, _rej) => {
      setTimeout(res, timeout)
    })
  }

  const getData = () => {
    return new Promise((res, _rej) => {
      console.log('data gotta')
      wait(1500).then(() => res(true))
    })
  }

  const onRefreshHandle = useCallback(() => {
    setRefreshing(true)
    getData().then(() => resetContainerPos())
  }, [])

  const resetContainerPos = () => {
    return new Promise((res, rej) => {
      Animated.timing(animViewTop, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true
      }).start(({ finished }) => {
        if (finished) setRefreshing(false)
      })
    })
  }

  const touchFreshHandle = PanResponder.create({
    onPanResponderRelease: (e, eState) => {
      const dy = Math.max(0, eState.dy)
      if (dy >= 200) {
        onRefreshHandle()
      }
    }
  })

  return (
    <Animated.ScrollView
      style={[
        { flex: 1 },
        {
          transform: [{ translateY: animViewTop }] // Bind opacity to animated value
        }
      ]}
      key={Math.random() * 100 - 1}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={() => onRefreshHandle} />}
      {...touchFreshHandle.panHandlers}
    >
      {props.children}
    </Animated.ScrollView>
  )
}
