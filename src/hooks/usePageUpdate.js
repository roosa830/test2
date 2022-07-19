export default function(showTest,test,key,complete,radio,testNum,msg){
    //更新页面题目
    const upDateTest = () =>{
        showTest.value = test.value[key.value];
    }

    //更新题目完成度    
    const upDateStatus = () =>{
        let k = key.value;
        complete.value = 0;
        for(let i=0 ; i<testNum.value ; i++){
            radio.value[i]='';
            if(msg.value[i]!=null && msg.value[i]!=''){
                radio.value[i] = 1;
                complete.value++;
            }
        }
        radio.value[k] = 2;
        if(radio.value[k] === 2 && msg.value[k]!=null && msg.value[k]!=''){
            radio.value[k] = 3;
        }
    }

    return { 
        upDateTest,
        upDateStatus 
    }
}