import mitt from '../mitt/index.js'
import axios from 'axios'
import { onMounted, ref, watch } from 'vue'
import usePageUpdate from './usePageUpdate'
import usePageSwitchTopicType from './usePageSwitchTopicType'
import usePageSwitchTopics from './usePageSwitchTopics'

export default function(time,emits){
    const test = ref([])  //题目
    const testMusic = ref([])  //音乐题目
    const testArt = ref([])  //美术题目
    const showTest = ref() //页面上显示的题目
    const key = ref(0) 
    const testNum = ref()  
    const testNumMusic = ref()  //音乐题目数量
    const testNumArt = ref()  //美术题目数量
    const txt = ref('') //输入框
    const msg = ref([]) 
    const msgMusic = ref([]) //音乐的答案
    const msgArt = ref([])  //美术的答案
    const radio = ref([])  
    const radioMusic = ref([])  //音乐的题目状态
    const radioArt = ref([])  //美术的题目状态
    const course = ref(true) //当前页面显示音乐还是美术（true为音乐,false为美术）
    const complete = ref(0)
    const completeMusic = ref(0) //音乐已回答的题目数量
    const completeArt = ref(0) //美术已回答的题目数量
    
    const upper = ref(null)
    const lower = ref(null)

    const transData = () => {
        emits('handle', radio.value,testNum.value,msg.value,complete.value,testNumMusic.value,testNumArt.value,completeMusic.value,completeArt.value,course.value)
    } 

    const { upDateTest,upDateStatus } = usePageUpdate(showTest,test,key,complete,radio,testNum,msg)

    
    const { witch } = usePageSwitchTopicType(key,course,msg,msgMusic,msgArt,radio,radioMusic,radioArt,complete,
        completeMusic,completeArt,test,testArt,testMusic,txt,testNum,testNumArt,testNumMusic)

    const { last,next } = usePageSwitchTopics(txt,msg,key,time,testNum,complete)

    //获取题目
    const getTest = async()=> { 
        const res = await axios.get('/api/getMusicSubject')
        testNumMusic.value = res.data.data.length
        testNum.value = res.data.data.length
        for(let i=0;i<testNumMusic.value;i++){
            testMusic.value.splice(i,1,res.data.data[i].sentence)
            test.value.splice(i,1,res.data.data[i].sentence)
            msg.value[i] = ''
            msgMusic.value[i] = ''
        }
        showTest.value = res.data.data[0].sentence
        
        const ress = await axios.get('/api/getArtSubject')
        testNumArt.value = ress.data.data.length
        for(let i=0;i<testNumArt.value;i++){
            testArt.value.splice(i,1,ress.data.data[i].sentence)
            msgArt.value[i] = ''
        }
        completeMusic.value = 0
        completeArt.value = 0
        upDateStatus()
        transData()
    }

    mitt.on('course', (res) => {
        course.value = res
    })

    //切换题目类型
    const witchTopicType = () =>{
        witch()
        upDateTest()
        upDateStatus()
        transData()
    }
    
    //上一题
    const lastQuestion = () => {
        last(upper.value,lower.value)
        upDateStatus()
        transData()

    }

    //下一题
    const nextQuestion = () => {
        next(upper.value,lower.value)
        upDateStatus()
        transData()
    }

    mitt.on('key', (res) => {
        txt.value = txt.value.replace(/\s/gi,'')//去除空格
        msg.value.splice(key.value,1,txt.value)
        key.value = res
        txt.value=msg.value[res]
        upDateStatus()
        transData()
    })

    onMounted(getTest)

    watch(key,upDateTest)

    watch(course,witchTopicType)

    return { 
        key,
        showTest,
        time,
        txt,
        testNum,
        lastQuestion,
        nextQuestion,
        upper,
        lower,
    }
}