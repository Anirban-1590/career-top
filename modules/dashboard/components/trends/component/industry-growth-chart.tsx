import {
  GenericChart,
  IGenericChartProps,
} from "@/components/common/generic-chart";
import { AITrendsType } from "@/types/trends";

import { Area, AreaChart, XAxis, YAxis } from "recharts";

export function IndustryGrowthChart({
  data,
  genericChartProps,
}: {
  data: AITrendsType["growthRate"];
  genericChartProps?: Pick<IGenericChartProps, "chartContainerProps">;
}) {
  return (
    <GenericChart {...genericChartProps} ChartType={AreaChart} data={data}>
      <XAxis
        dataKey="month"
        tickLine={false}
        axisLine={false}
        tickMargin={8}
        tickFormatter={(value) => value.slice(0, 3)}
      />
      <YAxis tickLine={false} axisLine={false} tickMargin={10} tickCount={6} />

      <Area
        dataKey="rate"
        type="bump"
        fill="var(--color-desktop)"
        fillOpacity={0.4}
        stroke="var(--color-desktop)"
      />
    </GenericChart>
  );
}
