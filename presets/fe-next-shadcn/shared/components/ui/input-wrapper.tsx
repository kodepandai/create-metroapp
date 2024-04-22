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
  required?: boolean;
}
const InputWrapper = <F extends FieldValues, N extends FieldPath<F>>({
  desc,
  children,
  label,
  required,
  ...props
}: React.PropsWithChildren<InputWrapperProps<F, N>>) => {
  return (
    <FormField
      {...props}
      render={() => (
        <FormItem>
          {label && <FormLabel>{label}{required && <span className="text-destructive"> *</span>}</FormLabel>}
          <FormControl>{children}</FormControl>
          <FormDescription>{desc}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
InputWrapper.displayName = "InputWrapper";
export { InputWrapper };
