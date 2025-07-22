"use client";

import { ColumnDef } from "@tanstack/react-table";

import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";
import { Message } from "@/lib/type/message";

export const columns: ColumnDef<Message>[] = [
  {
    accessorKey: "content",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Message Content" />
    ),
    cell: ({ row }) => (
      <div
        className="w-[80px] cursor-pointer hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
        onClick={() =>
          window.open(`/message/${row.original.message_obj_addr}`, "_blank")
        }
      >
        {row.getValue("content")}
      </div>
    ),
    enableSorting: false,
  },
  {
    accessorKey: "creation_timestamp",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Creation Timestamp" />
    ),
    cell: ({ row }) => (
      <div className="w-[160px]">
        {new Date(
          (row.getValue("creation_timestamp") as number) * 1000
        ).toLocaleString()}
      </div>
    ),
    enableSorting: true,
  },
];
