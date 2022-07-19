export default function(txt,msg,key,time,testNum,complete){
    const last = (upper,lower) => {
        reduce(txt,msg,key,time,upper,lower)
        complete.value = 0
        for(let i=0;i<testNum.value;i++){
            if(msg.value[i]!=''){
                complete.value++
            }
        }
    }

    const next = (upper,lower) => {
        increase(txt,msg,key,time,testNum,upper,lower)
        for(let i=0;i<testNum.value;i++){
            if(msg.value[i]!=''){
                complete.value++
            }
        }
    }
    return {last,next}
} 

export function up(key,time,upper,lower){
    if(key.value !== 0){
        lower.style.cursor="default";
        if(time.value===false){
            upper.style.cursor="not-allowed";
            lower.style.cursor="not-allowed";
            upper.attr("disabled",false);
        }
        key.value--
    }
    else if(key.value===0){
        alert('已经是第一题le')
        upper.style.cursor="not-allowed";
        
    }
    
    return key.value
}

export function reduce(txt,msg,key,time,upper,lower){
    txt.value = txt.value.replace(/\s/gi,'')//去除空格
    msg.value.splice((up(key,time,upper,lower)+1),1,txt.value)
    txt.value = ''
    txt.value = msg.value[key.value]
}

export function down(key,testNum,time,upper,lower){
    if(key.value<testNum.value-1){ 
        upper.style.cursor="default";
        if(time.value===false){
            lower.style.cursor="not-allowed";
            upper.style.cursor="not-allowed";
            lower.attr("disabled",false);
        }
        key.value++
    }
    else if(key.value===testNum.value-1){
        alert('已经是最后一题')
        lower.style.cursor="not-allowed";
    }
    return key.value
}

export function increase(txt,msg,key,time,testNum,upper,lower){
    txt.value = txt.value.replace(/\s/gi,'')//去除空格
    msg.value.splice((down(key,testNum,time,upper,lower)-1),1,txt.value)
    txt.value = ''
    console.log(msg.value)
    txt.value = msg.value[key.value]
}

