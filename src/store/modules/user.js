import axios from 'axios';

const state = {
        name: '',
        class: '',
        exam: ''
    };

const mutations = {
        changeUser(state,res){   // store中的数据只能通过commit mutation来改变
            state.name = res.name
            state.class = res.class
            state.exam = res.exam
        }
    };

const actions = {
        getUser(context) {
            axios.get('/api/ExamInformation')
                .then(res => {
                    context.commit('changeUser',res.data.data[0])
                }).catch(err => {
                    console.log(err)
                })
        }
    };

// const getters = {
//     name:state => store.state.user.name
// }

export default{
    state,
    mutations,
    actions,
    // getters
}
