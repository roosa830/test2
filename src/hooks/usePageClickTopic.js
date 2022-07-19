import mitt from '../mitt/index.js'
export default function(time,course,completeMusic,completeArt,testNum,msg,testNumMusic,testNumArt,emits){
    //选中题目
    const selectTopic = (temp) => {
        if(time.value===true){
            mitt.emit('key',temp)
            if(course.value===true){
                completeMusic.value = 0
                for(let i=0;i<testNum.value;i++){
                    if(msg.value[i]!=''){
                        completeMusic.value++
                        mitt.emit('noAnswerTest',((testNumMusic.value-completeMusic.value)+(testNumArt.value-completeArt.value)))
                    }
                }
            }
            else{
                completeArt.value = 0
                for(let i=0;i<testNum.value;i++){
                    if(msg.value[i]!=''){
                        completeArt.value++
                        mitt.emit('noAnswerTest',((testNumMusic.value-completeMusic.value)+(testNumArt.value-completeArt.value)))
                    }
                }
            }
        }
    }
    return { completeMusic,completeArt,selectTopic }
}