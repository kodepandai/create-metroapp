import { useEffect, useState } from "react";
import {
  ColumnDef,
  VisibilityState,
  ColumnFiltersState,
  SortingState,
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  PaginationState,
} from "@tanstack/react-table";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

interface DataTableParams<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  rowCount: number;
}
export const useDataTable = <TData, TValue>({
  columns,
  data,
  rowCount,
}: DataTableParams<TData, TValue>) => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const filteredKeys = [...(params.keys() as unknown as string[])].filter(
    (key) =>
      //TODO: masukkan key yang sesuai dengan backend
      !["page", "limit", "orderBy", "orderDirection", "search"].includes(key),
  );

  const initialFilters = filteredKeys.map((key) => ({
    id: key.replace("[]", ""),
    value: Array.isArray(params.get(key)) ? params.get(key) : [params.get(key)],
  }));
  const [rowSelection, setRowSelection] = useState({});
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [columnFilters, setColumnFilters] =
    useState<ColumnFiltersState>(initialFilters);
  const initialSorting = [];
  if (params.get("orderBy")) {
    initialSorting.push({
      id: params.get("orderBy") as string,
      desc: params.get("orderDirection") === "desc",
    });
  }
  const [sorting, setSorting] = useState<SortingState>(initialSorting);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: Number(params.get("page") || 1) - 1,
    pageSize: Number(params.get("limit")) || 10,
  });
  const [globalFilter, setGlobalFilter] = useState(params.get("search"));

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
      pagination,
      globalFilter,
    },
    manualFiltering: true,
    manualPagination: true,
    manualSorting: true,
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    onPaginationChange: setPagination,
    pageCount: Math.floor(rowCount / pagination.pageSize),
  });
  useEffect(() => {
    const currentParams = new URLSearchParams(Array.from(params.entries()));
    currentParams.set("page", (pagination.pageIndex + 1).toString());
    currentParams.set("limit", pagination.pageSize.toString());
    if (globalFilter) {
      currentParams.set("search", globalFilter);
    }
    if (sorting.length) {
      currentParams.set("orderBy", sorting[0].id);
      currentParams.set("orderDirection", sorting[0].desc ? "desc" : "asc");
    }
    columnFilters.forEach((cf) => {
      if (cf.value) {
        currentParams.set(cf.id, cf.value as string);
      }
    });
    router.replace(`${pathname}?${currentParams.toString()}`);
  }, [pagination, sorting, globalFilter, columnFilters]);
  return table;
};
