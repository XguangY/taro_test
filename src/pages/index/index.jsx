import Taro, { useState } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import Child from './child'
import './index.less'

function Index() {
  const [userName, setUserName] = useState('哈哈哈哈')
  return (
    <View>
      <Text>{userName}</Text>
      <Child username={userName}></Child>
    </View>
  )
}
export default Index