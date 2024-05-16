"use client";

import React, { InputHTMLAttributes, useEffect, useRef } from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { cn } from "shared/utils";
import { Button } from "shared/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "shared/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "shared/components/ui/popover";
import { CommandList } from "cmdk";

export interface SelectProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  options: {
    value: string;
    label: string;
  }[];
}

const Select = React.forwardRef<HTMLInputElement, SelectProps>(
  (
    {
      value: defaultValue = "",
      options,
      placeholder = "Select Value",
      ...props
    },
    ref,
  ) => {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(defaultValue);
    useEffect(() => {
      props.onChange?.({ target: { value } } as any);
    }, [value]);
    const wrapperRef = useRef<HTMLButtonElement>(null);
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <input {...props} hidden ref={ref} value={value} />
        <PopoverTrigger asChild>
          <Button
            ref={wrapperRef}
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between"
          >
            {value
              ? options.find((option) => option.value === value)?.label
              : placeholder}
            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="p-0"
          style={{ width: wrapperRef.current?.clientWidth }}
        >
          <Command>
            <CommandInput placeholder={placeholder} className="h-9" />
            <CommandEmpty>Not found.</CommandEmpty>
            <CommandList>
              <CommandGroup>
                {options.map((option) => (
                  <CommandItem
                    key={option.value}
                    value={option.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    {option.label}
                    <CheckIcon
                      className={cn(
                        "ml-auto h-4 w-4",
                        value === option.value ? "opacity-100" : "opacity-0",
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    );
  },
);
Select.displayName = "Select";
export { Select };
