import axios from 'axios'
import mitt from '../mitt/index.js'
import { ref } from 'vue'
import { selectArt, selectMusic } from '../hooks/usePageChangeStyle.js'
export default function(){
    const course = ref(true)
    const music = ref(null)
    const art = ref(null)

    const change = () =>{
        mitt.emit('course',course.value)
    }

    const switchArt = () => {
        selectArt(art.value,music.value)
        course.value = false
    }

    const switchMusic = () => {
        selectMusic(music.value,art.value)
        course.value = true
    }

    return { 
        course,
        change,
        switchArt,
        switchMusic,
        music,
        art
    }
}