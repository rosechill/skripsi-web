"use client";

import Link from "next/link";
import React, { useState } from "react";
import * as yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import { MyButton } from "../../atoms/MyButton";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Input, Textarea } from "@nextui-org/react";
import { sendContactForm } from "@/services/lib/api";
import { FormContact } from "@/interfaces/formContactInterface";

const schema = yup.object({
  name: yup
    .string()
    .required("Nama harus diisi")
    .min(3, "Masukkan Nama yang valid"),
  phoneNumber: yup
    .string()
    .required("Nomor telephone harus diisi")
    .min(10, "Masukkan nomor telephone yang valid"),
  email: yup
    .string()
    .email()
    .required("Email harus diisi")
    .min(8, "Masukkan Email yang valid"),
  subject: yup
    .string()
    .required("Subject harus diisi")
    .min(5, "Masukkan Subject yang valid"),
  message: yup
    .string()
    .required("Pesan harus diisi")
    .min(5, "Masukkan Pesan yang valid"),
});

export default function ContactHeaderSection() {
  const [loading, setLoading] = useState(false);
  const notify = () => toast.success("Berhasil mengirimkan formulir");

  const form = useForm<FormContact>({
    defaultValues: {
      name: "",
      phoneNumber: "",
      email: "",
      subject: "",
      message: "",
    },
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = form;

  const buttonColor = isValid ? "primary" : "disabled";

  const onSubmitted = async (data: FormContact) => {
    const body = {
      name: data.name,
      phoneNumber: data.phoneNumber,
      email: data.email,
      subject: data.subject,
      message: data.message,
    };

    try {
      setLoading(true);
      await sendContactForm(body);
    } catch (error) {
      throw error
    } finally {
      setTimeout(() => {
        setLoading(false);
        reset();
        notify();
      }, 3000);
    }
  };

  return (
    <section className="grid lg:grid-cols-2 grid-cols-1 pt-16 lg:mx-24 mx-8 ">
      <div className="flex flex-col gap-8">
        <h2 className="text-4xl text-[#2E3E78]  font-semibold">
          Rencana Liburan yang Brilian ?
        </h2>
        <h3 className="lg:w-3/4 w-full lg:text-start text-justify text-[#2E3E78]">
          Butuh bantuan khusus untuk rencana perjalanan Anda? Hubungi tim
          dukungan kami yang ahli dan siap membantu Anda dengan segala yang Anda
          butuhkan. Kami sangat senang membantu anda.
        </h3>
        <div className="flex gap-4 lg:pb-0 pb-16">
          <Link href={"/services"}>
            <MyButton color="primary"> Services</MyButton>
          </Link>
          <Link href={"/tour"}>
            <MyButton color="secondary"> Explore Tour</MyButton>
          </Link>
        </div>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmitted)}
        className="flex flex-col gap-2"
      >
        <div className="flex flex-col gap-2">
          <Input
            {...register("name")}
            label="Nama Lengkap"
            variant="bordered"
            className="border-[#2E3E78]"
          />
          <p className="ms-3 text-xs text-red-500 min-h-[20px] ">
            {errors.name?.message}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-2">
            <Input
              {...register("phoneNumber")}
              label="Nomor Telephone"
              variant="bordered"
              className="border-[#2E3E78]"
            />
            <p className="ms-3 text-xs text-red-500 min-h-[20px]">
              {errors.phoneNumber?.message}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <Input
              {...register("email")}
              label="Email"
              variant="bordered"
              className="border-[#2E3E78]"
            />
            <p className="ms-3 text-xs text-red-500 min-h-[20px]">
              {errors.email?.message}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Input
            {...register("subject")}
            label="Subject"
            variant="bordered"
            className="border-[#2E3E78]"
          />
          <p className="ms-3 text-xs text-red-500 min-h-[20px] ">
            {errors.subject?.message}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <Textarea
            {...register("message")}
            label="Masukkan pesan anda"
            variant="bordered"
            className="border-[#2E3E78]"
          />
          <p className="ms-3 text-xs text-red-500 min-h-[20px]">
            {errors.message?.message}
          </p>
        </div>

        <MyButton
          color={buttonColor}
          type="submit"
          disabled={!isValid}
          isLoading={loading}
        >
          Submit
        </MyButton>
      </form>

      <Toaster />
    </section>
  );
}
