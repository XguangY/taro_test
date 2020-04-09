import { View, Text, Image} from '@tarojs/components'
import Taro, { useState, useEffect } from '@tarojs/taro'
import { fn1, fn2 } from '../../tools'
import pic from '../../static/timg.jpg'

function Blog() {
    const [blogTit, setBlogTit] = useState('')
    const [intro, setIntro] = useState('')
    const [listData, setListData] = useState([])
    const getList = () => {
        Taro.request({
            url: 'https://apiblog.jspang.com/default/getArticleList'
        }).then(res => {
            setListData(res.data.list)
        })
    }
    useEffect(() => {
        setBlogTit(this.$router.params.blogTit)
        setIntro(this.$router.params.intro)
        fn1()
        fn2()
        getList()
    }, [])
    return (
        <View>
            <Text>blog</Text>
            <View>{blogTit}</View>
            <View>{intro}</View>
            <Image src={pic} />
            <Image src={require('../../static/timg.jpg')} />
            {
                listData.map(item => {
                    return (
                    <View key={item.id}>{item.title}</View>
                    )
                })
            }
        </View>
    )
}

export default Blog