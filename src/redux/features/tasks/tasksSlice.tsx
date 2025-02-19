import { RootState } from "@/redux/store";
import { ITask } from "@/types/ITask";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
  tasks: ITask[];
  filter: string;
}

const initialState: IInitialState = {
  tasks: [
    {
      id: "bQ2TffosYnTPR-VcsLaZq",
      isCompleted: false,
      title: "Est debitis nesciuntaa",
      description: "Sed eius sunt omnis aa",
      dueDate: "2025-02-21T18:00:00.000Z",
      priority: "medium",
    },
    {
      id: "bQ2TffosYnTPR-VddcsLaZq",
      isCompleted: false,
      title: "Est debitis nesciuntaa",
      description: "Sed eius sunt omnis aa",
      dueDate: "2025-02-21T18:00:00.000Z",
      priority: "low",
    },
  ],
  filter: "all",
};

type TDraftData = Pick<ITask, "title" | "description" | "dueDate" | "priority">;

const createTask = (taskData: TDraftData): ITask => {
  return { id: nanoid(), isCompleted: false, ...taskData };
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TDraftData>) => {
      // const id = uuidv4();
      // const newTaskData = {
      //   ...action.payload,
      //   id,
      //   isCompleted: false,
      // };
      const newTaskData = createTask(action.payload);
      state.tasks.push(newTaskData);
    },

    toggleIsCompleted: (state, action: PayloadAction<string>) => {
      state.tasks.forEach((task) =>
        task.id === action.payload
          ? (task.isCompleted = !task.isCompleted)
          : task
      );
    },

    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },

    updateTask: (state, action: PayloadAction<ITask>) => {
      state.tasks.forEach((task) => {
        if (task.id === action.payload.id) {
          task.title = action.payload.title;
          task.description = action.payload.description;
          task.dueDate = action.payload.dueDate;
          task.priority = action.payload.priority;
          task.isCompleted = action.payload.isCompleted;
        }
      });
    },

    filterTask: (
      state,
      action: PayloadAction<"all" | "low" | "medium" | "high">
    ) => {
      state.filter = action.payload;
    },
  },
});

export const selectTask = (state: RootState) => {
  const filter = state.todo.filter;
  if (filter === "low") {
    return state.todo.tasks.filter((task) => task.priority === filter);
  } else if (filter === "medium") {
    return state.todo.tasks.filter((task) => task.priority === filter);
  } else if (filter === "high") {
    return state.todo.tasks.filter((task) => task.priority === filter);
  } else {
    return state.todo.tasks;
  }
};

export const {
  addTask,
  toggleIsCompleted,
  deleteTask,
  updateTask,
  filterTask,
} = taskSlice.actions;

export default taskSlice.reducer;
