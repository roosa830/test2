<template>
    <div class="bg">
		<div class="title">
			<div class="subject">{{key+1}}.{{showTest}}</div>
			<div class="answeringArea">
				<div class="prompt">作答:</div>
				<textarea class="answer" id="" cols="30" rows="10" placeholder="作答已结束" readonly v-if="!time" ></textarea>
				<textarea class="answer" id="" cols="30" rows="10" placeholder="请输入答案" v-if="time" v-model="txt"></textarea>
			</div>
		</div>
		<div class="btn">
			<div class="questionNumber">共{{testNum}}题</div>
			<button class="lastQuestion" @click="lastQuestion" id="LastQuestion" ref="upper">上一题</button>
			<button class="nextQuestion" @click="nextQuestion" id="NextQuestion" ref="lower">下一题</button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue'
import usePageProcessing from '../hooks/usePageProcessing'

	const props = defineProps({
	//子组件接收父组件传递过来的值
		time: Boolean
	})

	const emits = defineEmits(['handle']);


	const { time } = toRefs(props) //倒计时
	const { key,showTest,txt,testNum,lastQuestion,nextQuestion,upper,lower } = usePageProcessing(time,emits)

</script>


<style  lang="scss">
@import '../assets/styles/content.scss'
</style>