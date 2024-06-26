"use client";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useState } from "react";
import { Header, ContentWrapper } from "shared/components/dashboard";
import { DataTable } from "shared/components/ui/data-table";
import { DataTableToolbar } from "shared/components/ui/data-table-toolbar";
import { useDataTable } from "shared/hooks/data-table";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}
export default function FormExamplePage() {
  const searchParams = useSearchParams();
  const [data, setData] = useState<Post[]>([]);
  // simulate get data
  const getData = async () => {
    const res = await axios.get<Post[]>(
      "https://jsonplaceholder.typicode.com/posts",
    );
    setData(res.data);
  };
  const table = useDataTable({
    data,
    columns: [
      {
        accessorKey: "id",
        header: "ID",
      },
      {
        accessorKey: "title",
      },
    ],
    rowCount: data.length,
  });

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header title="Datatable Example" />
      <ContentWrapper className="w-full space-y-2 flex flex-col">
        <DataTableToolbar table={table} />
        <DataTable table={table} />
      </ContentWrapper>
    </>
  );
}
