"use client";

import { ContainerWithSpinner } from "@/components/common/container-with-spinner";
import { Button } from "@/components/ui/button";
import { OptimizedResumeType } from "@/types/optimizer";

import { ConfigProvider, Table, TableProps, theme } from "antd";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import { useMemo } from "react";

import { useDeleteOptimizedResume, useOptimizedResumesData } from "../../hooks";

interface IDataTableProps {
  disableDeleteButton?: boolean;
  disablePagination?: boolean;
}

export function DataTable({
  disableDeleteButton,
  disablePagination,
}: IDataTableProps) {
  const router = useRouter();

  const { data, isFetching } = useOptimizedResumesData();
  const { deleteOptimizeResumeMutate, isPending } = useDeleteOptimizedResume(
    () => {
      router.push("/dashboard/resume-optimizer/upload");
      return;
    },
  );

  const columns = useMemo(() => {
    const baseColumns: TableProps<OptimizedResumeType>["columns"] = [
      {
        dataIndex: "file",
        key: "file",
        title: "Name",
        render: (_, { file }) => {
          return <>{file.name}</>;
        },
      },
      {
        dataIndex: "createdAt",
        key: "createdAt",
        title: "Created At",
        render: (_, { createdAt }) => {
          return <>{dayjs(createdAt).format("YYYY-MM-DD")}</>;
        },
      },
      {
        dataIndex: "updatedAt",
        key: "updatedAt",
        title: "Updated At",
        render: (_, { updatedAt }) => {
          return <>{dayjs(updatedAt).format("YYYY-MM-DD")}</>;
        },
      },
    ];
    if (!disableDeleteButton) {
      baseColumns.push({
        key: "delete",

        render: (value, record) => {
          return (
            <>
              <Button
                onClick={(ev) => {
                  ev.stopPropagation();
                  ev.preventDefault();
                  deleteOptimizeResumeMutate(record.id);
                }}
                disabled={isPending}
                size={"sm"}
              >
                {isPending ? (
                  <ContainerWithSpinner
                    spinnerProps={{ className: "size-5" }}
                  />
                ) : (
                  "Delete"
                )}
              </Button>
            </>
          );
        },
      });
    }
    return baseColumns;
  }, [deleteOptimizeResumeMutate, isPending, disableDeleteButton]);
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        components: {
          Pagination: {
            itemActiveColor: "var(--color-neon-red)",
            itemActiveColorHover: "var(--accent-neon-red)",
            colorPrimary: "var(--color-neon-red)",
            colorPrimaryHover: "var(--accent-neon-red)",
          },
        },
      }}
    >
      {" "}
      <Table<OptimizedResumeType>
        columns={columns}
        rowKey={(row) => {
          return row.id;
        }}
        rowClassName={" cursor-pointer"}
        onRow={(row, index) => {
          return {
            onClick: (ev) => {
              ev.preventDefault();
              router.push(`/dashboard/resume-optimizer/${row.id}`);
            },
          };
        }}
        dataSource={data?.optimizedResumes || []}
      />
    </ConfigProvider>
  );
}
