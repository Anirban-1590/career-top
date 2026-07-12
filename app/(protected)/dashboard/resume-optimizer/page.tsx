import { Optimizer } from "@/modules/dashboard/components/resume-optimizer";
import { DataTable } from "@/modules/dashboard/components/resume-optimizer/components/datatable";
import { UserOptimizedResumeQueryType } from "@/types/optimizer";

import { redirect } from "next/navigation";
import { queryClientServerObject } from "../layout";

export default async function ResumeOptimizer() {
  const queryClient = queryClientServerObject.getClient();

  const data = queryClient.getQueryData<UserOptimizedResumeQueryType>([
    "optimized-resume",
  ]);

  if (!data?.optimizedResumes || !data?.optimizedResumes.length) {
    redirect("/dashboard/resume-optimizer/upload");
  }

  return (
    <Optimizer>
      <DataTable />
    </Optimizer>
  );
}
