import { JobTracker } from "@/modules/dashboard/components/job-tracker";

export default async function Tracker() {
  return (
    <section className="h-[91dvh] flex flex-col overflow-hidden">
      <JobTracker />
    </section>
  );
}
