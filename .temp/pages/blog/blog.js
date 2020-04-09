import Nerv from "nervjs";
import { View, Text } from '@tarojs/components';
import Taro from "@tarojs/taro-h5";

class Blog extends Taro.Component {
  render() {
    const [blogTit, setBlogTit] = Taro.useState('');
    const [intro, setIntro] = Taro.useState('');
    Taro.useEffect(() => {
      setBlogTit(this.$router.params.blogTit);
      setIntro(this.$router.params.intro);
    }, []);
    return <View>
            <Text>blog</Text>
            <View>{blogTit}</View>
            <View>{intro}</View>
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

export default Blog;