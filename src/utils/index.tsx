import { useIsFocused } from '@react-navigation/native'
import { StatusBar, StatusBarProps } from 'react-native'

export const FocusAwareStatusBar = (props: StatusBarProps) => {
  const isFocused = useIsFocused()
  return isFocused ? <StatusBar {...props} /> : null
}
