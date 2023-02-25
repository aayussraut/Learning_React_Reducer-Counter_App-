import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: { counter: 0 },
    reducers: {
        increment(state, action) {
            state.counter += 1;
        },
        decrement(state, action) {
            state.counter -= 1;
        },
        addby(state, action) {
            state.counter += action.payload;
        }
    }
})

export const actions = counterSlice.actions;

const store = configureStore({
    reducer: counterSlice.reducer
})

export default store;