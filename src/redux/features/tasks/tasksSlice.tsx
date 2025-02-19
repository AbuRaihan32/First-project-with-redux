import { RootState } from "@/redux/store";
import { ITask } from "@/types/ITask";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

interface IInitialState {
  tasks: ITask[];
}

const initialState: IInitialState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      const id = uuidv4();
      const newTaskData = {
        ...action.payload,
        id,
        isCompleted: false,
      };

      state.tasks.push(newTaskData);
    },
  },
});

export const selectTask = (state: RootState) => {
  return state.todo.tasks;
};

export const { addTask } = taskSlice.actions;

export default taskSlice.reducer;
