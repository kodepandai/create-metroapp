"use client";
import { Provider } from "jotai";
import { store } from "shared/stores";
import { QueryClientProvider } from "react-query";
import { queryClient } from "shared/utils/api.utils";
import ErrorWrapper from "./ErrorWrapper";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
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
