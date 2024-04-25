import AdminWrapper from "shared/components/AdminWrapper";
import { Layout } from "shared/components/dashboard";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AdminWrapper>
      <Layout>{children}</Layout>
    </AdminWrapper>
  );
}
