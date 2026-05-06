import { getUserOptimizedResumes } from "@/action/optimizer";
import { getJobTracker } from "@/action/tracker";
import { checkUserIndustryPreferenceTrends } from "@/action/trends";
import { UserProfile } from "@/action/user-profile";
import { getResumes } from "@/modules/dashboard/action/get-resumes";
import { SideBar } from "@/modules/dashboard/components/sidebar";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import React from "react";

export const queryClientServerObject: {
  client: QueryClient | null;
  getClient: () => QueryClient;
} = {
  client: null,
  getClient: function () {
    if (!this.client) {
      this.client = new QueryClient();
    }
    return this.client;
  },
};

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await UserProfile();
  const queryClient = queryClientServerObject.getClient();
  await queryClient.prefetchQuery({
    queryKey: ["resumes", user?.uid as string],
    queryFn: () => getResumes(user?.uid as string),
  });
  await queryClient.prefetchQuery({
    queryKey: ["optimized-resume"],
    queryFn: async () => {
      return getUserOptimizedResumes();
    },
  });
  await queryClient.prefetchQuery({
    queryKey: ["industry-trend"],
    queryFn: () => checkUserIndustryPreferenceTrends(),
  });

  await queryClient.prefetchQuery({
    queryKey: ["job-tracker-data"],
    queryFn: async () => {
      return await getJobTracker();
    },
  });

  return (
    <section className=" flex-grow flex ">
      <SideBar />
      <main className=" ml-84 flex-grow bg-secondary rounded-tl-lg p-10">
        <HydrationBoundary state={dehydrate(queryClient)}>
          {children}
        </HydrationBoundary>
      </main>
    </section>
  );
}
