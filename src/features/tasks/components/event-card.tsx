import { Project } from "@/features/projects/types";
import { TaskStatus } from "../types";
import { cn } from "@/lib/utils";

interface EventCardProps {
  title: string;
  assignee: any;
  project: Project;
  status: TaskStatus;
  id: string;
};

export const EventCard = ({
  title,
  assignee,
  project,
  status,
  id,
}: EventCardProps) => {
  return (
    <div className="px-2">
      <div className={cn(
        "p-1.5 text-xs bg-white text-primary border rounded-md border-l-4 flrx flrx-col gap-1.5 cursor-pointer hover:opacity-75 transition"
      )}>
        <p>{title}</p>
      </div>
    </div>
  )
}