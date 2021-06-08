import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        info:'',

    },
    getters: {
        getInfo(state) {
            return state.info;

        }
    },
    mutations: {//只有mutations才可以修改状态被跟踪到，另外mutations不支持异步
        //接收两个参数，第一个是state，第二个是传递的参数
        getuser(state, userList) {
            state.info = userList
        }
    }
})
export default store;