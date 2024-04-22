"use client";
import { TextInput } from "shared/components/ui/text-input";
import Image from "next/image";
import { Button } from "shared/components/ui/button";
import { useForm } from "react-hook-form";
import { Form } from "shared/components/ui/form";
import config from "config";

export default function LoginView() {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: any) => {
    console.log({ data });
  };

  return (
    <div className="h-screen grid grid-cols-1 md:grid-cols-2 grid-rows-1">
      <div className="flex flex-col px-4">
        <Form {...form}>
          <form
            className="max-w-md w-full relative z-10 bg-white rounded-lg mx-auto my-auto flex flex-col gap-5 p-4"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-2">
              <span className="font-bold text-4xl">Masuk</span>
              <span>
                Selamat datang di <b>{config.appName}</b>
              </span>
            </div>
            <TextInput
              control={form.control}
              name="email"
              label="Email"
              placeholder="Email"
              required
            />
            <TextInput
              control={form.control}
              type="password"
              name="password"
              label="Password"
              placeholder="Password"
              required
            />
            <Button type="submit">Masuk</Button>
          </form>
        </Form>
      </div>
      <div className="inset-0 object-cover absolute md:relative">
        <Image
          src="/bg-signin.png"
          width="700"
          height="600"
          alt="background login"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
