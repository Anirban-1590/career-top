import {
  deleteOptimizedResume,
  getUserOptimizedResumes,
} from "@/action/optimizer";
import { UserOptimizedResumeQueryType } from "@/types/optimizer";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export function useOptimizedResumesData() {
  const { data, isFetching } = useQuery({
    queryKey: ["optimized-resume"],
    queryFn: async () => {
      return await getUserOptimizedResumes();
    },
    refetchOnWindowFocus: false,
  });

  return {
    data,
    isFetching,
  };
}

export function useDeleteOptimizedResume(emptyStateHandler: () => void) {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: async (resumeId: string) => {
      return await deleteOptimizedResume(resumeId);
    },
    async onSettled(data) {
      if (data?.error) {
        toast.error(data.message);
        return;
      }

      await queryClient.invalidateQueries({
        queryKey: ["optimzied-resumes"],
      });
      const newOptiomizedResumes =
        queryClient.getQueryData<UserOptimizedResumeQueryType>([
          "optimized-resume",
        ]);
      toast.success(data?.message);

      if (!newOptiomizedResumes?.optimizedResumes?.length) {
        emptyStateHandler();
      }
    },
  });

  return {
    deleteOptimizeResumeMutate: mutate,
    isPending,
  };
}
