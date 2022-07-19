import { ref, watch } from 'vue'
import { submitted } from './usePageChangeStyle'
import axios from 'axios'
import mitt from '../mitt/index.js'

export default function(){
    const time = ref(true);
    const msg = ref([]); //回答的答案
    const noAnswerTest = ref(0); //未作答题目
    const sub = ref(null)

    const radio = ref([])
    const testNum = ref()
    const complete = ref()

    const completeArt = ref(0)
    const completeMusic = ref(0)

    const testNumMusic = ref()
    const testNumArt = ref()

    const postMsg= async (msg)=> {
      const res = await axios.post('/api/AddAnswer',`${msg}`);
      console.log(res);
    }

    mitt.on('noAnswerTest',(res) => {
      noAnswerTest.value = res;
	  })

    //从子组件获得time值
    const TimeOut = (val) => {
      time.value = val;
    }

    //时间到
    const timeDone = () => {
      if(time.value===false){
        submitted(sub.value);
        postMsg(msg.value);
      }
    } 

    watch(time,timeDone)

    //提交
    const Submit = () => {
      if(noAnswerTest.value===0){
        if(confirm('您已完成全部题目，是否要交卷？')){
          submitted(sub.value);
          postMsg(msg.value);
        }
        
      }
      else{
        if(confirm('还有'+noAnswerTest.value+'题没做，是否要交卷？')){
          time.value = false;
          submitted(sub.value);
          postMsg(msg.value);
        }
      }
    }

    const transmitData = (sonRadio,sonTestNum,sonMsg,sonComplete,sonTestNumMusic,sonTestNumArt,sonCompleteMusic,sonCompleteArt,sonCourse) => {
        radio.value = sonRadio
        testNum.value = sonTestNum
        msg.value = sonMsg
        complete.value = sonComplete
        noAnswerTest.value = ((sonTestNumMusic-sonCompleteMusic)+(sonTestNumArt-sonCompleteArt))
        if(sonCourse===true){
          completeMusic.value = sonComplete
        }
        else{
          completeArt.value = sonComplete
        }
        testNumMusic.value = sonTestNumMusic
        testNumArt.value = sonTestNumArt
        console.log(completeArt.value)
    } 

    return{ 
      time,
      msg,
      noAnswerTest,
      TimeOut,
      Submit,
      sub,
      transmitData,
      radio,
      testNum,
      completeArt,
      completeMusic,
      testNumMusic,
      testNumArt
    }
}
    