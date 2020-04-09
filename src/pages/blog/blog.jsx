import { View, Text } from '@tarojs/components'
import Taro, { useState, useEffect } from '@tarojs/taro'

function Blog() {
    const [blogTit, setBlogTit] = useState('')
    const [intro, setIntro] = useState('')
    useEffect(() => {
        setBlogTit(this.$router.params.blogTit)
        setIntro(this.$router.params.intro)
    }, [])
    return (
        <View>
            <Text>blog</Text>
            <View>{blogTit}</View>
            <View>{intro}</View>
        </View>
    )
}

export default Blog