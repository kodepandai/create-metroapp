import AdminWrapper from "shared/components/AdminWrapper";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AdminWrapper>{children}</AdminWrapper>;
}
