import { useAtomValue } from "jotai";
import { useEffect } from "react";
import { FieldValues, useForm as baseUseForm } from "react-hook-form";
import { errorStore } from "shared/stores";
export const useForm = <
  TFieldValues extends FieldValues = FieldValues,
  TContext = any,
  TTransformedValues extends FieldValues | undefined = undefined,
>(
  props: Parameters<typeof baseUseForm>[0],
) => {
  const error = useAtomValue(errorStore);
  const form = baseUseForm<TFieldValues, TContext, TTransformedValues>(
    props as any,
  );
  useEffect(() => {
    if (error.formError) {
      Object.keys(error.formError).forEach((key) => {
        form.setError(key as any, {
          type: "validate",
          message: error.formError?.[key],
        });
      });
    }
  }, [error.formError, form]);
  return form;
};
