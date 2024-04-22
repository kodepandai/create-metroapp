import React from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form";
import {
  FieldPath,
  FieldValues,
  UseControllerProps,
} from "react-hook-form";

export interface InputWrapperProps<
  F extends FieldValues,
  N extends FieldPath<F>,
> extends UseControllerProps<F, N> {
  desc?: string;
  label?: string;
  error?: string;
  required?: boolean;
}
const InputWrapper = <F extends FieldValues, N extends FieldPath<F>>({
  desc,
  children,
  label,
  required,
  error,
  ...props
}: React.PropsWithChildren<InputWrapperProps<F, N>>) => {
  return (
    <FormField
      {...props}
    render={() => (
        <FormItem className="space-y-1">
          {label && <FormLabel>{label}{required && <span className="text-destructive"> *</span>}</FormLabel>}
          <FormControl>{children}</FormControl>
          <FormDescription>{desc}</FormDescription>
          {error && <FormMessage>{error}</FormMessage>}
        </FormItem>
      )}
    />
  );
};
InputWrapper.displayName = "InputWrapper";
export { InputWrapper };
