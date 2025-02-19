import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import {
  deleteTask,
  toggleIsCompleted,
} from "@/redux/features/tasks/tasksSlice";
import { useAppDispatch } from "@/redux/Hooks";
import { ITask } from "@/types/ITask";
import { RiDeleteBinLine } from "react-icons/ri";
import { EditTaskModal } from "./EditTaskModal";

interface IProps {
  task: ITask;
}

const TaskCard = ({ task }: IProps) => {
  const dispatch = useAppDispatch();
  return (
    <div className="border px-5 py-3 rounded-md">
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <div
            className={cn("size-3 rounded-full", {
              " bg-green-500": task.priority === "low",
              " bg-yellow-500": task.priority === "medium",
              " bg-red-500": task.priority === "high",
            })}
          ></div>
          <h1 className={cn({ "line-through": task.isCompleted })}>
            {task.title}
          </h1>
        </div>
        <div className="flex gap-3 items-center">
          <Button
            onClick={() => dispatch(deleteTask(task.id))}
            variant="link"
            className="p-0 text-red-500"
          >
            <RiDeleteBinLine />
          </Button>

          <EditTaskModal task={task} />

          <Checkbox
            onClick={() => dispatch(toggleIsCompleted(task.id))}
          ></Checkbox>
        </div>
      </div>
      <p className="mt-5">{task.description}</p>
    </div>
  );
};

export default TaskCard;
