export default function(key,course,msg,msgMusic,msgArt,radio,radioMusic,radioArt,complete,completeMusic,completeArt,test,testArt,testMusic,txt,testNum,testNumArt,testNumMusic){
    const witch = () =>{
        document.getElementById("NextQuestion").style.cursor="default";
        if(course.value===true){
            key.value = 0
            completeArt.value=complete.value
            msgArt.value = msg.value
            radioArt.value = radio.value
            for(let i=0;i<testNumArt;i++){
                msg.value[i]=''
                radio.value[i]=''
            }
            msg.value = msgMusic.value
            radio.value = radioMusic.value
            test.value = testMusic.value
            testNum.value = testNumMusic.value
            txt.value=msg.value[key.value]
            complete.value = completeMusic.value
        }
        else{
            key.value = 0
            completeMusic.value = complete.value
            msgMusic.value = msg.value
            radioMusic.value = radio.value
            for(let i=0;i<testNumArt;i++){
                msg.value[i]=''
                radio.value[i]=''
            }
            msg.value = msgArt.value
            radio.value = radioMusic.value
            test.value = testArt.value
            testNum.value = testNumArt.value
            txt.value=msg.value[key.value]
            complete.value = completeArt.value
        }
    }

    return {witch}
}