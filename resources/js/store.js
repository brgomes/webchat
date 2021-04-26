import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        user: {}
    },
    mutations: {

    },
    actions: {
        userStateAction: () => {
            console.log('invoked')
        }
    }
})

export default store
