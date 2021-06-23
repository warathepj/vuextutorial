import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export const store = new Vuex.Store({
    state: {
        food: 'Tomyumkung',
        sport: 'Thai Boxing'
    },
    mutations: {
        setFood(state, food) {
            state.food = food
        },
        setSport(state, sport) {
            state.sport = sport
        }
    },
    getters: {
        food: state => state.food,
        sport: state => state.sport
    }
});