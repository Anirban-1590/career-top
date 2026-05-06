import { UserProfile } from "@/action/user-profile";

import dynamic from "next/dynamic";

const UserResumes = dynamic(() =>
  import("@/modules/dashboard/components/resume").then(
    (value) => value.AllResume,
  ),
);

export default async function Resume() {
  // const resumesPromise = getResumes(user?.uid as string);
  const user = await UserProfile();

  return (
    <div className="w-full h-full">
      <UserResumes userId={user?.uid as string} />
    </div>
  );
}
