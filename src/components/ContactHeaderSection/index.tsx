"use client";
import Link from "next/link";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { MyButton } from "../MyButton";
import { useFormState } from "react-dom";


interface FormContact {
    name: string,
    phoneNumber: string, 
    email: string, 
    message: string
}

export default function ContactHeaderSection() {
    // const form = useForm<FormContact>({
    //     name: "",
    //     phoneNumber: "",
    //     email: "",
    //     message: ""
    // })
  return (
    <section className="grid grid-cols-2  pt-16 mx-28">
      <div className="flex flex-col gap-8">
        <h2 className="text-4xl text-[#2E3E78] font-semibold">
          Rencana Liburan yang Brilian ?
        </h2>
        <h3 className="w-3/4 text-[#2E3E78]">
          Butuh bantuan khusus untuk rencana perjalanan Anda? Hubungi tim
          dukungan kami yang ahli dan siap membantu Anda dengan segala yang Anda
          butuhkan. Cukup hubungi kami, dan kami akan senang membantu Anda.
        </h3>
        <div className="flex gap-4 lg:pb-0 pb-16">
          <Link href={"/services"}>
            <MyButton color="primary"> Services </MyButton>
          </Link>
          <Link href={"/tour"}>
            <MyButton color="secondary"> Explore Tour </MyButton>
          </Link>
        </div>
      </div>
      {/* Form */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h2>Masukkan Nama:</h2>
          <input
            type="text"
            placeholder="Test input"
            className="border-2 border-[#2E3E78] p-2 rounded-md w-3/4"
          />
        </div>
        <MyButton color="primary" type="submit">
          Submit
        </MyButton>
      </div>
    </section>
  );
}
