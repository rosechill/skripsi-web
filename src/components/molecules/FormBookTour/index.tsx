"use client";

import React, { useState } from "react";
import * as yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Input, Textarea } from "@nextui-org/react";
import { FormTour } from "@/interfaces/formTourInterface";
import { MyButton } from "../../atoms/MyButton";
import { sendBookTourForm } from "@/services/lib/api";

const schema = yup.object({
  subject: yup.string().required("Subject harus diisi"),
  name: yup
    .string()
    .required("Nama harus diisi")
    .min(3, "Masukkan nama yang valid"),
  email: yup.string().email("Email tidak valid").required("Email harus diisi"),
  people: yup
    .number()
    .typeError("Jumlah orang harus berupa angka")
    .required("Jumlah orang harus diisi")
    .min(1, "Jumlah orang harus lebih dari 0")
    .max(100, "Jumlah orang harus kurang dari 100")
    .positive("Jumlah orang harus positif"),
  notes: yup.string().required("Pesan harus diisi"),
  donation: yup.boolean().required("Penggalangan dana harus diisi"),
});

export default function FormBookTour({ decodedSlug }: { decodedSlug: string }) {
  const notify = () => toast.success("Berhasil mengirimkan formulir");
  const [loading, setLoading] = useState(false);

  const form = useForm<FormTour>({
    defaultValues: {
      subject: decodedSlug,
      name: "",
      email: "",
      people: 0,
      notes: "",
      donation: true,
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

  const onSubmitted = async (data: FormTour) => {
    const body = {
      subject: decodedSlug,
      name: data.name,
      email: data.email,
      people: data.people,
      notes: data.notes,
      donation: data.donation,
    };

    try {
      setLoading(true);
      await sendBookTourForm(body);
    } catch (error) {
      throw error;
    } finally {
      setTimeout(() => {
        setLoading(false);
        reset();
        notify();
      }, 3000);
    }
    reset();
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmitted)}
        className="flex flex-col gap-2"
      >
        <div className="flex flex-col gap-2">
          <Input
            {...register("name")}
            label="Nama Lengkap"
            placeholder="Masukkan nama lengkap anda"
            labelPlacement="outside"
            variant="bordered"
            className="border-[#2E3E78]"
          />
          <p className="ms-3 text-xs text-red-500 min-h-[20px] ">
            {errors.name?.message}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <Input
            {...register("email")}
            label="Email "
            placeholder="Masukkan email anda"
            labelPlacement="outside"
            variant="bordered"
            className="border-[#2E3E78]"
          />
          <p className="ms-3 text-xs text-red-500 min-h-[20px] ">
            {errors.email?.message}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <Input
            {...register("people")}
            type="number"
            label="Jumlah orang"
            placeholder="Berapa orang yang akan mengikuti tur ini ?"
            labelPlacement="outside"
            variant="bordered"
            className="border-[#2E3E78]"
          />
          <p className="ms-3 text-xs text-red-500 min-h-[20px] ">
            {errors.people?.message}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <Textarea
            {...register("notes")}
            label="Notes"
            placeholder="Beri tahu kami jika ada persyaratan khusus dari Anda tentang perjalanan ini. Anda juga dapat mengajukan pertanyaan di bagian ini. Jika ingin kosong, isikan dengan _"
            labelPlacement="outside"
            variant="bordered"
            className="border-[#2E3E78]"
          />
          <p className="ms-3 text-xs text-red-500 min-h-[20px]">
            {errors.notes?.message}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-small text-foreground-500">
            Untuk mendukung pariwisata berkelanjutan, apakah Anda ingin
            memberikan donasi?
          </label>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              id="donation-yes"
              {...register("donation")}
              value="true"
              defaultChecked
            />
            <label
              htmlFor="donation-yes"
              className="text-small text-foreground-500"
            >
              Iya
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              id="donation-no"
              {...register("donation")}
              value="false"
            />
            <label
              htmlFor="donation-no"
              className="text-small text-foreground-500"
            >
              Tidak
            </label>
          </div>
          <ul className="text-small text-foreground-500 flex flex-col gap-1 list-disc ps-5">
            <li>
              Donasi akan digunakan untuk mendukung kegiatan keberlanjutan kami
              seperti penanaman pohon, budidaya sampah, pembelian bibit hewan,
              dan masih banyak lagi.
            </li>
            <li>Minimal donasi adalah Rp 10.000</li>
            <li>
              Setelah donasi Anda digunakan, Anda akan mendapatkan email tentang
              donasi Anda yang digunakan untuk kegiatan keberlanjutan kami.
            </li>
          </ul>
        </div>

        <MyButton
          color={buttonColor}
          isLoading={loading}
          type="submit"
          disabled={!isValid}
          className="mt-4"
        >
          Submit
        </MyButton>
      </form>
      <Toaster />
    </div>
  );
}
