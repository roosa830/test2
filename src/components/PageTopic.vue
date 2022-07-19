<template>
    <div class="test-number">
        <div class="switch">
            <button class="music" @click="switchMusic" ref="music">音乐 {{completeMusic}}/{{testNumMusic}}</button>
            <button class="art" @click="switchArt" ref="art">美术 {{completeArt}}/{{testNumArt}}</button>
        </div>
        <div class="first-question">
            <div class="first-number-text">一、选择题选择题选择题选择题选择题</div>
            <div class="first-number-grade">(共{{testNum}}题 {{testNum*5}}分)</div>
            <div 
            class="first-list"
            >
                <div 
                class="number-figures"
                :class="{'checked':(this.radio[index]===1),'check-current':(this.radio[index]===2),'checked-current':(this.radio[index]===3)}"
                v-show="!checkResult"
                v-for="(item,index) in testNum"
                @click="selectTopic(index)"
                >{{index+1}}</div>
            </div>
        </div>
        <div class="second-question">
            <div class="second-number-text">二、创编题</div>
            <div class="second-number-grade">(共6题 30分)</div>
            <div class="second-list">
                <div class="second-figures">1</div>
                <div class="second-figures">2</div>
                <div class="second-figures">3</div>
                <div class="second-figures">4</div>
                <div class="second-figures">5</div>
                <div class="second-figures">6</div>
            </div>
        </div>
        <div class="third-question">
            <div class="third-number-text">三、创编题</div>
            <div class="third-number-grade">(共2题 10分)</div>
            <div class="third-list">
                <div class="third-figures">1</div>
                <div class="third-figures">2</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import mitt from '../mitt/index.js'
import { toRefs,watch,onMounted } from 'vue'
import usePageTopicHandling from '../hooks/usePageTopicHandling'
import usePageClickTopic from '../hooks/usePageClickTopic'
    const props = defineProps({
		//子组件接收父组件传递过来的值
		time: Boolean,
        radio: [],
        testNum: '',
        msg: [],
        completeArt: '',
        completeMusic: '',
        testNumArt: '',
        testNumMusic: ''
	})

    const { time,radio,testNum,msg,completeArt,completeMusic,testNumArt,testNumMusic } = toRefs(props)

    const checkResult = false

    const { course,change,switchArt,
    switchMusic,music,art } = usePageTopicHandling()

    const { selectTopic } = usePageClickTopic(time,course,completeMusic,completeArt,testNum,msg,testNumMusic,testNumArt)

    watch(course,change)
</script>

<style lang="scss">
@import '../assets/styles/title-number.scss'
</style>