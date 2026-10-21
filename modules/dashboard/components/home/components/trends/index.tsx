"use client";

import { IndustryGrowthChart } from "../../../trends/component/industry-growth-chart";
import { useIndustryTrendsData } from "../../../trends/hooks";

export function IndustryTrendsCompact() {
  const { userPreference, isFetching } = useIndustryTrendsData();

  if (isFetching) return <div></div>;
  if (!userPreference) return <div></div>;

  return (
    <div className="w-full h-fit flex-grow">
      <IndustryGrowthChart
        genericChartProps={{
          chartContainerProps: { className: "h-70 w-full" },
        }}
        data={userPreference.aiResponse.growthRate}
      />
    </div>
  );
}
