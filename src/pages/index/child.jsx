import { View, Text } from '@tarojs/components'

function Child(props) {
    return (
        <View>
            <Text>child.name {props.username}</Text>
        </View>
    )
}

export default Child