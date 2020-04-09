import Taro from "@tarojs/taro-h5";
import Nerv from "nervjs";
import { View, Text } from '@tarojs/components';

class Child extends Taro.Component {
  render() {
    const props = this.props;

    return <View>
            <Text>child.name {props.username}</Text>
        </View>;
  }

}

export default Child;