import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Text, Button } from '@tarojs/components';
import Child from './child';
import './index.less';

// Taro提供了6个相关的导航API，我们可以使用这些API进行跳转，需要注意的是这些有些是小程序专用的。

// navigateTo: 最基本的跳转方式，可以返回上级页面。三端都支持的，小程序、H5、React Native。
// redirectTo：不记录上集页面，直接跳转。三端都支持的，小程序、H5、React Native。
// switchTab： Tab之间进行切换，这个要配合Taro的导航栏一起使用，三端都支持的，小程序、H5、React Native。
// navigateBack: 返回上一级页面，这个在小程序中常使用，三端都支持的，小程序、H5、React Native。
// relaunch：关闭所有额面，打开到应用内某个页面。三端都支持的，小程序、H5、React Native。
// getCurrentPages: 获取当前页面信息所用，这个H5是不支持的。（注意）

class Index extends Taro.Component {
  render() {
    const [userName, setUserName] = Taro.useState('哈哈哈哈');
    const [blogTit, setBlogTit] = Taro.useState('博客标题');
    const [intro, setIntro] = Taro.useState('111111');
    const goBlog = () => {
      Taro.navigateTo({
        url: '/pages/blog/blog?blogTit=' + blogTit + '&intro=' + intro
      });
    };
    return <View>
      <Text>{userName}</Text>
      <Child username={userName}></Child>
      <Button onClick={goBlog}>前往blog</Button>
    </View>;
  }

  componentDidMount() {
    super.componentDidMount && super.componentDidMount();
  }

  componentDidShow() {
    super.componentDidShow && super.componentDidShow();
  }

  componentDidHide() {
    super.componentDidHide && super.componentDidHide();
  }

}

export default Index;