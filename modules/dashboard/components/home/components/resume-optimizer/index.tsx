import { DataTable } from "../../../resume-optimizer/components/datatable";

export function ResumeOptimizerCompact() {
  return (
    <div className="w-full h-fit flex-grow">
      <DataTable disableDeleteButton disablePagination />
    </div>
  );
}
