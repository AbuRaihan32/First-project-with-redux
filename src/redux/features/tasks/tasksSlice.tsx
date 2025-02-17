import { RootState } from "@/redux/store";
import { ITask } from "@/types/ITask";
import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  tasks: ITask[];
}

const initialState: IInitialState = {
  tasks: [
    {
      id: "45s5s45s54s54s5s",
      title: "Front Eed Initialize",
      description: "create home page",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "high",
    },
    {
      id: "45s5s45s5ss4s54s5s",
      title: "Front Eed Initialize",
      description: "create home page",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "medium",
    },
    {
      id: "45s5s45s5ssss4s54s5s",
      title: "Front Eed Initialize",
      description: "create home page",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "low",
    },
  ],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
});

export const selectTask = (state: RootState) => {
  return state.todo.tasks;
};

export default taskSlice.reducer;
