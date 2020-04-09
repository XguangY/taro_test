import Taro, { useState } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'

function Index() {
  const [userName, setuserName] = useState('哈哈哈哈')
  return (
    <View>
      <Text>{userName}</Text>
    </View>
  )
}
export default Index