import { getJobTracker } from "@/action/tracker";
import { useQuery } from "@tanstack/react-query";

export function useJobTrackerData() {
  const {
    data: jobTrackerData,
    error,
    isLoading: isTrackerLoading,
  } = useQuery({
    queryKey: ["job-tracker-data"],
    queryFn: async () => {
      return await getJobTracker();
    },
    retry: 0,
    refetchOnWindowFocus: false,
  });

  return {
    jobTrackerData,
    error,
    isTrackerLoading,
  };
}
