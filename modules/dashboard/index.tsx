import { Card } from "@/components/common/card";
import { JobTrackerCompact } from "./components/home/components/job-tracker";
import Link from "next/link";
import { IndustryTrendsCompact } from "./components/home/components/trends";
import { ResumeOptimizerCompact } from "./components/home/components/resume-optimizer";
import { JobsCompact } from "./components/home/components/jobs";

export function Dashboard() {
  return (
    <main className=" w-full  flex-grow">
      <div className="w-full h-full grid grid-cols-4 grid-rows-2 gap-5 ">
        <Card
          cardProps={{
            className: "bg-background border border-input col-span-2",
          }}
          title={"Recent Job Postings"}
          titleProps={{ className: "text-base! opacity-70" }}
          cardContentProps={{ className: "flex flex-col flex-1" }}
          //   description={`Resumes you created`}
          //   descriptionProps={{ className: "opacity-50" }}
        >
          <JobsCompact />
          <Link className="underline mt-auto block" href={"/dashboard/jobs"}>
            See More
          </Link>
        </Card>
        <Card
          cardProps={{
            className: "bg-background col-span-2",
          }}
          title={"Industry Trends"}
          titleProps={{ className: "text-base! opacity-70" }}
          //   description={`test`}
          //   descriptionProps={{ className: "opacity-50" }}
          cardContentProps={{ className: "flex flex-col h-full" }}
        >
          <IndustryTrendsCompact />
          <Link className="underline" href={"/dashboard/trends"}>
            See More
          </Link>
        </Card>
        <Card
          cardProps={{
            className: "bg-background col-span-3",
          }}
          title={"Optimized Resumes"}
          titleProps={{ className: "text-base! opacity-70" }}
        >
          <ResumeOptimizerCompact />
        </Card>
        <Card
          cardProps={{
            className: "bg-background ",
          }}
          title={"Job Tracker"}
          titleProps={{ className: "text-base! opacity-70" }}
          cardContentProps={{ className: "flex flex-col h-full" }}
        >
          <JobTrackerCompact />
          <Link className="underline" href={"/dashboard/tracker"}>
            See More
          </Link>
        </Card>
      </div>
    </main>
  );
}
