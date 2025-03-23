import { snakeCaseToTitleCase } from "@/lib/utils";
import { TaskStatus } from "../types";

interface KanbamColumnHeaderProps {
  board: TaskStatus;
  taskCount: number;
};

export const KanbanColumnHeader = ({
  board,
  taskCount
}: KanbamColumnHeaderProps) => {
  return (
    <div className="px-2 py-1.5 flex items-center justify-between">
      <div className="flex items-center gap-x-2">
        <h2>
          {snakeCaseToTitleCase(board)}
        </h2>
      </div>
    </div>
  )
}