import { Card } from "@/components/common/card";

export function Dashboard() {
  return (
    <main className=" w-full  flex-grow">
      <div className="w-full h-full grid grid-cols-4 gap-5 ">
        <Card
          cardProps={{
            className: "bg-background border border-input col-span-2",
          }}
          title={"Your Resumes"}
          titleProps={{ className: "text-base! opacity-70" }}
          //   description={`Resumes you created`}
          //   descriptionProps={{ className: "opacity-50" }}
        ></Card>
        <Card
          cardProps={{
            className: "bg-background col-span-2",
          }}
          title={"Industry Trends"}
          titleProps={{ className: "text-base! opacity-70" }}
          //   description={`test`}
          //   descriptionProps={{ className: "opacity-50" }}
        ></Card>
        <Card
          cardProps={{
            className: "bg-background col-span-3",
          }}
          title={"Optimized Resumes"}
          titleProps={{ className: "text-base! opacity-70" }}
        ></Card>
        <Card
          cardProps={{
            className: "bg-background ",
          }}
          title={"Job Tracker"}
          titleProps={{ className: "text-base! opacity-70" }}
        ></Card>
      </div>
    </main>
  );
}
