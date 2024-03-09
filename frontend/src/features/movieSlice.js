import {createSlice} from '@reduxjs/toolkit'
import { moviesPoster } from '../components/Constants'

const initialState = {
    movies: moviesPoster
}

export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers:() => {}
})

export default movieSlice.reducer