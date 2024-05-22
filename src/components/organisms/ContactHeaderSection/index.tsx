"use client";

import Link from "next/link";
import React from "react";
import { MyButton } from "../../atoms/MyButton";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Input, Textarea } from "@nextui-org/react";
import { sendContactForm } from "@/services/lib/api";
import { FormContact } from "@/interfaces/formContactInterface";
import toast, { Toaster } from "react-hot-toast";

const schema = yup.object({
  name: yup.string().required("Nama harus diisi"),
  phoneNumber: yup.string().required("Nomor telephone harus diisi"),
  email: yup.string().email().required("Email harus diisi"),
  subject: yup.string().required("Subject harus diisi"),
  message: yup.string().required("Pesan harus diisi"),
});

export default function ContactHeaderSection() {
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
      await sendContactForm(body);
    } catch (error) {
      if (error instanceof SyntaxError) {
        console.log("Received non-JSON response from server.");
      } else {
        console.error("Error submitting form:", error);
      }
    }
    reset();
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
          onClick={notify}
          color={buttonColor}
          type="submit"
          disabled={!isValid}
        >
          Submit
        </MyButton>
      </form>

      <Toaster />
    </section>
  );
}
