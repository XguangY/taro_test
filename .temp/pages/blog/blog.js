import Nerv from "nervjs";
import { View, Text, Image } from '@tarojs/components';
import Taro, { request as _request } from "@tarojs/taro-h5";
import { fn1, fn2 } from "../../tools/index";
import pic from '../../static/timg.jpg';

class Blog extends Taro.Component {
  render() {
    const [blogTit, setBlogTit] = Taro.useState('');
    const [intro, setIntro] = Taro.useState('');
    const [listData, setListData] = Taro.useState([]);
    const getList = () => {
      _request({
        url: 'https://apiblog.jspang.com/default/getArticleList'
      }).then(res => {
        setListData(res.data.list);
      });
    };
    Taro.useEffect(() => {
      setBlogTit(this.$router.params.blogTit);
      setIntro(this.$router.params.intro);
      fn1();
      fn2();
      getList();
    }, []);
    return <View>
            <Text>blog</Text>
            <View>{blogTit}</View>
            <View>{intro}</View>
            <Image src={pic} />
            <Image src={require('../../static/timg.jpg')} />
            {listData.map(item => {
        return <View key={item.id}>{item.title}</View>;
      })}
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