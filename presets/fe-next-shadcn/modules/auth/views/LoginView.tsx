"use client";
import { TextInput } from "shared/components/ui/text-input";
import Image from "next/image";
import { Button } from "shared/components/ui/button";
import { Form } from "shared/components/ui/form";
import config from "config";
import { useForm } from "shared/hooks";
import { useMutation } from "react-query";
import { api } from "shared/utils/api.utils";
import { LoginBodyDto } from "shared/api/BaseApi";
import { useSetAtom } from "jotai";
import { authStore } from "../stores";
import { useRouter } from "next/navigation";

export default function LoginView() {
  const {auth} = api();
  const setAuth = useSetAtom(authStore);
  const router = useRouter();
  
  const {mutate} = useMutation(auth.authControllerLogin, {
    onSuccess: ({data}) => {
     setAuth({
      token: data.token,
     })
     router.replace('/')
    }
  })

  const form = useForm<LoginBodyDto>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginBodyDto) => {
    mutate(data)
  };

  return (
    <div className="h-screen grid grid-cols-1 lg:grid-cols-2 grid-rows-1">
      <div className="flex flex-col px-4">
        <Form {...form}>
          <form
            className="max-w-md w-full relative z-10 bg-white rounded-lg mx-auto my-auto flex flex-col gap-5 p-4"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-2">
              <span className="font-bold text-3xl">Masuk</span>
              <span>
                Selamat datang di <b>{config.appName}</b>
              </span>
            </div>
            <TextInput
              control={form.control}
              name="email"
              label="Email"
              placeholder="Email"
              desc="input valid email address"
            />
            <TextInput
              control={form.control}
              type="password"
              name="password"
              label="Password"
              placeholder="Password"
            />
            <Button type="submit">Masuk</Button>
          </form>
        </Form>
      </div>
      <div className="inset-0 object-cover absolute lg:relative">
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
