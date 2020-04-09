import { View, Text, Image} from '@tarojs/components'
import Taro, { useState, useEffect } from '@tarojs/taro'
import { fn1, fn2 } from '../../tools'
import pic from '../../static/timg.jpg'

function Blog() {
    const [blogTit, setBlogTit] = useState('')
    const [intro, setIntro] = useState('')
    useEffect(() => {
        setBlogTit(this.$router.params.blogTit)
        setIntro(this.$router.params.intro)
        fn1()
        fn2()
    }, [])
    return (
        <View>
            <Text>blog</Text>
            <View>{blogTit}</View>
            <View>{intro}</View>
            <Image src={pic} />
            <Image src={require('../../static/timg.jpg')} />
        </View>
    )
}

export default Blog