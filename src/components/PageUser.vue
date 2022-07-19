<template>
    <div class="userInformation">
        <div class="UserTest">
          <div class="name">姓名：{{store.state.user.name}}</div>
          <div class="cla">班级：{{store.state.user.class}}</div>
        </div>
    </div>
    <div class="testInformation">{{store.state.user.exam}}</div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useStore } from 'vuex'
const store = useStore()

const getUser = () =>{
  store.dispatch('getUser')
}

onMounted(getUser)

</script>

<style lang="scss">
@import '../assets/styles/user.scss'
</style>
