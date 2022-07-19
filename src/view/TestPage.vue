<template>
  <div class="container">
    <div class="content">
    <page-content :time="time" @handle="transmitData" />
    </div>
    <div class="answer">
      <page-timer @endtime="TimeOut" :timer="time"/>
      <button class="sub" @click="Submit" ref="sub">交卷</button>
      <page-user />
      <page-topic :time="time" :radio="radio" :testNum="testNum" :msg="msg" 
      :completeArt="completeArt" :completeMusic="completeMusic" 
      :testNumMusic="testNumMusic" :testNumArt="testNumArt" />
    </div>
   </div>
</template>

<script setup>
import PageContent from "../components/PageContent.vue"
import PageTimer from '../components/PageTimer.vue'
import PageUser from '../components/PageUser.vue'
import PageTopic from '../components/PageTopic.vue'
import usePageSubmit from '../hooks/usePageSubmit'

   const { 
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
    } = usePageSubmit()
    
console.log(completeArt);

</script>

<style lang="scss">
@import '../assets/styles/test-page.scss'
</style>
