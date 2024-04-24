import { Dashboard } from "shared/components/AdminDashboard";
import AdminWrapper from "shared/components/AdminWrapper";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AdminWrapper>
    <Dashboard></Dashboard>
  </AdminWrapper>;
}
