import { AddTaskModal } from "@/components/modules/tasks/AddTaskModal";
import TaskCard from "@/components/modules/tasks/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { filterTask, selectTask } from "@/redux/features/tasks/tasksSlice";
import { useAppDispatch, useAppSelector } from "@/redux/Hooks";

const Task = () => {
  const tasks = useAppSelector(selectTask);
  const dispatch = useAppDispatch();

  return (
    <div className="w-[95%] mx-auto px-5 mt-12">
      <div className="flex justify-end items-center">
        <h1 className="my-3 mr-auto">Tasks</h1>
        <Tabs defaultValue="all" className="mr-5">
          <TabsList>
            <TabsTrigger
              onClick={() => dispatch(filterTask("all"))}
              value="all"
            >
              All
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(filterTask("low"))}
              value="low"
            >
              Low
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(filterTask("medium"))}
              value="medium"
            >
              Medium
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(filterTask("high"))}
              value="high"
            >
              High
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="">
          <AddTaskModal />
        </div>
      </div>
      <div className="space-y-5 mt-5">
        {tasks.map((task) => (
          <TaskCard task={task} key={task.id}></TaskCard>
        ))}
      </div>
    </div>
  );
};

export default Task;
