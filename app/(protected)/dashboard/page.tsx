import { UserProfile } from "@/action/user-profile";
import { Dashboard } from "@/modules/dashboard";

export default async function DashboardPage() {
  const user = await UserProfile();
  return (
    <section className="h-full flex flex-col gap-4">
      <div>
        <h3 className=" text-2xl">
          {" "}
          Hi, {user ? (user.name as string).split(" ")[0] : "User"}
        </h3>
      </div>
      <Dashboard />
    </section>
  );
}
