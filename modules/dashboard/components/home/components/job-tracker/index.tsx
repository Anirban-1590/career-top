"use client";

import { useJobTrackerData } from "../../../job-tracker/hook";

export function JobTrackerCompact() {
  const { jobTrackerData, isTrackerLoading } = useJobTrackerData();

  if (isTrackerLoading) return <div></div>;
  if (!jobTrackerData?.trackerData) return <div></div>;

  const trackerData = Object.entries(jobTrackerData?.trackerData?.metadata);

  return (
    <div className="w-full h-full  flex flex-col gap-10 ">
      {trackerData.map((data) => {
        const [tracker, value] = data;

        return (
          <div className="h-fit w-full flex justify-between" key={tracker}>
            <span>{tracker.toUpperCase()}</span>
            <span>{value}</span>
          </div>
        );
      })}
    </div>
  );
}
