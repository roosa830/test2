import { createStore } from 'vuex'; //引入vuex
import user from './modules/user'; //引入modules的方法;
const store = createStore({
    modules: {
        user,
    },
    // getters
})

export default store; //导出
