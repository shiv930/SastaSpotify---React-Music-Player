import {configureStore} from "@reduxjs/toolkit"
import SongReducer from '../features/SongReducer'
export let Store =configureStore({
    reducer:{
        songs: SongReducer
    }
})