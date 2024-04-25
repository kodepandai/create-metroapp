"use client";
import { Provider } from "jotai";
import { store } from "shared/stores";
import { QueryClient, QueryClientProvider } from "react-query";
import ErrorWrapper from "./ErrorWrapper";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();
  return (
    <Provider store={store}>
      <ErrorWrapper>
        <QueryClientProvider client={queryClient} contextSharing={true}>
          {children}
        </QueryClientProvider>
      </ErrorWrapper>
    </Provider>
  );
}
