"use client";

import { ContainerWithSpinner } from "@/components/common/container-with-spinner";
import { useJobs } from "../../../jobs/hooks/use-jobs";

export function JobsCompact() {
  const { data, isFetching } = useJobs({
    jobtype: "fulltime",
  });

  if (isFetching) return <ContainerWithSpinner />;
  if (!data || !data.length)
    return (
      <div className="w-full h-full">
        <p className="text-center content-center h-full">No new jobs posted.</p>
      </div>
    );

  return (
    <div className="flex-grow">
      <ul className="w-full h-full  flex flex-col gap-3 ">
        {data.slice(0, 3).map((job) => {
          return (
            <li
              key={job.id}
              onClick={(ev) => {}}
              className=" w-full border border-input rounded-md list-none p-3 cursor-pointer hover:scale-102 transition duration-200 ease-in-out"
            >
              <div className=" flex">
                <div className=" flex flex-col gap-2">
                  <h4 className="text-base font-bold">{job.title}</h4>
                  <span
                    className=" font-light text-sm"
                    aria-label={job.company || "Unknown Company"}
                  >
                    {job.company ? job.company : "Unknown Company"}
                  </span>
                </div>

                <div className="ml-auto">
                  <img
                    width={50}
                    height={50}
                    src={
                      !job.companyLogo
                        ? "/placeholder-company-logo.svg"
                        : job.companyLogo
                    }
                    alt={job.company ?? "company-logo"}
                    loading="lazy"
                  />
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
