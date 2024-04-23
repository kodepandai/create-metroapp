"use client";

import { useAtomValue } from "jotai";
import { authStore } from "modules/auth/stores";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AdminWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const auth = useAtomValue(authStore);
  const router = useRouter();
  useEffect(() => {
    if (!auth.token) {
      router.replace("/login");
    }
  }, [auth.token, router]);
  return children;
}
