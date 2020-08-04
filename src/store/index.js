import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import { FlashLyricData, FlashSongData } from "@/api/Flash/Flash"
export default new Vuex.Store({
    state: {
        flashLyric: [],
        Song: '',
        aContent: []
    },
    mutations: {

        flashLLyric: (state, res) => {
            state.flashLyric = res
        },
        flashSong: (state, res) => {
            state.Song = res
        },
        AContent: (state, res) => {
            state.aContent = res
        }
    },
    actions: {

    },
    modules: {
        flashLyric(state) {
            return state.flashLyric
        },
        Song(state) {
            return state.Song
        }
    }
})