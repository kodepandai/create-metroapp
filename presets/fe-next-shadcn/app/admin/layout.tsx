import { Layout } from "shared/components/dashboard";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <Layout>{children}</Layout>
  );
}
