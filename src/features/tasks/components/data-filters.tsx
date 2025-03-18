import { useGetProjects } from "@/features/projects/api/use-get-projects";
import { useWorkspaceId } from "@/features/workspaces/hooks/use-workspace-id";

interface DataFiltersProps {
  hideProjectFilter?: boolean;
};

export const DataFilters = ({ hideProjectFilter }: DataFiltersProps) => {
  const workspaceId = useWorkspaceId();
  const { data: projects } = useGetProjects({ workspaceId });
}