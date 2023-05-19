import React, { useState } from 'react'
import { TouchableOpacity, Text, View, ScrollView } from 'react-native'
import second from '../../../style/style_app'

export default () => {
  const [SelectItem, setSelectItem] = useState(1)

  return (
    <>
      <ScrollView>
        <TouchableOpacity
          onPress={() => setSelectItem(1)}
          style={[second.flexBox, second.horizonBox]}
        >
          <View style={[second.borderBox]}>
            <Text>所有人</Text>
            <Text style={SelectItem === 1 ? second.show : second.hide}>✔</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setSelectItem(2)}
          style={[second.flexBox, second.horizonBox]}
        >
          <View style={[second.borderBox]}>
            <Text>仅关注人</Text>
            <Text style={SelectItem === 2 ? second.show : second.hide}>✔</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setSelectItem(3)}
          style={[second.flexBox, second.horizonBox]}
        >
          <View style={[second.borderBox, { borderBottomWidth: 0 }]}>
            <Text>不接收任何消息提醒</Text>
            <Text style={SelectItem === 3 ? second.show : second.hide}>✔</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </>
  )
}
