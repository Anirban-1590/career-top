import { ResumeReport } from "@/modules/dashboard/components/resume-optimizer/components/report";
import { UserOptimizedResumeQueryType } from "@/types/optimizer";

import { queryClientServerObject } from "../../layout";

export default async function OptimizedResume({
  params,
}: {
  params: Promise<{ resumeId: string }>;
}) {
  const { resumeId } = await params;
  if (!resumeId) return;

  const queryClient = queryClientServerObject.getClient();
  const data = queryClient.getQueryData<UserOptimizedResumeQueryType>([
    "optimized-resume",
  ]);

  const optimizedResumeData = data?.optimizedResumes?.find(
    (resume) => resume.id === resumeId,
  );

  // await queryClient.prefetchQuery({
  //   queryKey: ["optimised-resume", resumeId],
  //   queryFn: async () => {
  //     return getUserOptimziedResume(resumeId);
  //   },
  // });

  return <ResumeReport optimizedResumeData={optimizedResumeData} />;
}
