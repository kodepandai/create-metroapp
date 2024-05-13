import { FieldPath, FieldValues, useController } from "react-hook-form";
import { Input, InputProps } from "./input";
import { InputWrapper, InputWrapperProps } from "./input-wrapper";

export interface TextInputProps<F extends FieldValues, N extends FieldPath<F>>
  extends InputWrapperProps<F, N>,
    Omit<InputProps, "name" | "defaultValue"> {}
const TextInput = <F extends FieldValues, N extends FieldPath<F>>({
  type,
  ...props
}: TextInputProps<F, N>) => {
  const { field } = useController<F, N>(props);
  return (
    <InputWrapper {...props}>
      <Input {...field} type={type} required={props.required}/>
    </InputWrapper>
  );
};

export { TextInput };
