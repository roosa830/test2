
//选中美术
export function selectArt(art,music){
    art.style.background = "#1ac36e"
    art.style.color = "white"
    music.style.background = "white"
    music.style.color = "#1ac36e"
}

//选中音乐
export function selectMusic(music,art){
    music.style.background = "#1ac36e"
    music.style.color = "white"
    art.style.background = "white"
    art.style.color = "#1ac36e"
}

//交卷后
export function submitted(sub){
    sub.style.cursor="not-allowed";
    sub.disabled=true;
    sub.style.background = "grey"
}