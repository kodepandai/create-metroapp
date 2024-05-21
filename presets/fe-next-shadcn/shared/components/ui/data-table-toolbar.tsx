import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";

import { Button } from "shared/components/ui/button";
import { Input } from "shared/components/ui/input";
import { DataTableViewOptions } from "shared/components/ui/data-table-view-options";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  rightSection?: (table: Table<TData>) => React.ReactNode;
  leftSection?: (table: Table<TData>) => React.ReactNode;
}

export function DataTableToolbar<TData>({
  table,
  rightSection,
  leftSection,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Search..."
          onChange={(event) =>
            table.setGlobalFilter(event.target.value || undefined)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {leftSection?.(table)}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <div className="flex flex-row gap-2">
        {rightSection?.(table)}
        <DataTableViewOptions table={table} />
      </div>
    </div>
  );
}
