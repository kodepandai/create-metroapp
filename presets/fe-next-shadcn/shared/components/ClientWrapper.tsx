"use client";
import { Provider } from "jotai";
import { store } from "shared/stores";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}
