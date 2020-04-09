import Nerv from "nervjs";
import { View, Text, Image } from '@tarojs/components';
import Taro from "@tarojs/taro-h5";
import { fn1, fn2 } from "../../tools/index";
import pic from '../../static/timg.jpg';

class Blog extends Taro.Component {
  render() {
    const [blogTit, setBlogTit] = Taro.useState('');
    const [intro, setIntro] = Taro.useState('');
    Taro.useEffect(() => {
      setBlogTit(this.$router.params.blogTit);
      setIntro(this.$router.params.intro);
      fn1();
      fn2();
    }, []);
    return <View>
            <Text>blog</Text>
            <View>{blogTit}</View>
            <View>{intro}</View>
            <Image src={pic} />
            <Image src={require('../../static/timg.jpg')} />
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