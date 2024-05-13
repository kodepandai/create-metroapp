import { FieldPath, FieldValues, useController } from "react-hook-form";
import { InputWrapper, InputWrapperProps } from "./input-wrapper";
import { Select, SelectProps } from "./select";

export interface SelectInputProps<F extends FieldValues, N extends FieldPath<F>>
  extends InputWrapperProps<F, N>,
    Omit<SelectProps, "name" | "defaultValue"> {}
const SelectInput = <F extends FieldValues, N extends FieldPath<F>>({
  options,
  ...props
}: SelectInputProps<F, N>) => {
  const { field } = useController<F, N>(props);
  return (
    <InputWrapper {...props}>
      <Select {...field} required={props.required} options={options}/>
    </InputWrapper>
  );
};

export { SelectInput };
