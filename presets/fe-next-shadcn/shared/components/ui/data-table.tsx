import {
  ColumnDef,
  Table as ReactTable,
  flexRender,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "shared/components/ui/table";

import { Checkbox } from "./checkbox";
import { DataTableColumnHeader } from "./data-table-column-header";

interface DataTableProps<TData> {
  table: ReactTable<TData>;
}

export function DataTable<TData>({ table }: DataTableProps<TData>) {
  const columns = table.getAllColumns();
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead
                    key={header.id}
                    colSpan={header.colSpan}
                    className={
                      header.column.getIsPinned()
                        ? "sticky left-0 z-10"
                        : "relative"
                    }
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(DataTableColumnHeader<TData, any>, {
                        column: header.column,
                        title:
                          typeof header.column.columnDef.header == "string"
                            ? header.column.columnDef.header
                            : (flexRender(
                              header.column.columnDef.header,
                              header.getContext(),
                            ) as any),
                      })}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    key={cell.id}
                    className={
                      cell.column.getIsPinned()
                        ? "sticky left-0 z-10"
                        : "relative"
                    }
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={columns.length}
                className="h-full text-center"
              >
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
export const checkboxColumn = () =>
  ({
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  }) satisfies ColumnDef<any, any>;
