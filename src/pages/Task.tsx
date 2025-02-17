import { AddTaskModal } from "@/components/modules/tasks/AddTaskModal";
import TaskCard from "@/components/modules/tasks/TaskCard";
import { selectTask } from "@/redux/features/tasks/tasksSlice";
import { useAppSelector } from "@/redux/Hooks";

const Task = () => {
  const tasks = useAppSelector(selectTask);

  console.log(tasks);

  return (
    <div className="w-[95%] mx-auto px-5 mt-12">
      <div className="flex justify-between items-center">
        <h1 className="my-3">Tasks</h1>
        <AddTaskModal />
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
