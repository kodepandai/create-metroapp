"use client";
import { Header, ContentWrapper } from "shared/components/dashboard";
import { Form } from "shared/components/ui/form";
import { useForm } from "shared/hooks";
import { TextInput } from "shared/components/ui/text-input";
import { Button } from "shared/components/ui/button";
import { Select } from "shared/components/ui/select";
import { SelectInput } from "shared/components/ui/select-input";

export default function FormExamplePage() {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      framework: "",
    },
  });

  const onSubmit = (data: typeof form.formState.defaultValues) => {
    alert(JSON.stringify(data, null, 2));
  };
  return (
    <>
      <Header title="Form Example" />
      <ContentWrapper>
        <Form {...form}>
          <form
            className="flex flex-col gap-2"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <TextInput
              control={form.control}
              label="Name"
              name="name"
              desc="Enter your name"
              required
            />
            <TextInput
              control={form.control}
              label="Email"
              name="email"
              desc="Enter your valid email address"
              type="email"
              required
            />
            <TextInput
              control={form.control}
              label="Password"
              name="password"
              type="password"
              required
            />
            <SelectInput
              control={form.control}
              name="framework"
              label="Framework"
              options={[
                {
                  label: "VueJs",
                  value: "vue",
                },
                {
                  label: "Svelte",
                  value: "svelte",
                },
              ]}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </ContentWrapper>
    </>
  );
}
