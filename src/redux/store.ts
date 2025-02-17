import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice.ts";
import tasksReducer from "./features/tasks/tasksSlice.tsx";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: tasksReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
