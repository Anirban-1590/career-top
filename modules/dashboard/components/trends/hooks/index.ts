import { checkUserIndustryPreferenceTrends } from "@/action/trends";
import { useQuery } from "@tanstack/react-query";

export function useIndustryTrendsData() {
  const { isFetching, data: userPreference } = useQuery({
    queryKey: ["industry-trend"],
    queryFn: () => checkUserIndustryPreferenceTrends(),
    refetchOnWindowFocus: false,
    gcTime: 0,
  });

  return {
    userPreference,
    isFetching,
  };
}
