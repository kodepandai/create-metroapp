"use client";

import { useHandleError } from "shared/hooks/error.hook";

export default function ErrorWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  useHandleError();
  return children;
}
