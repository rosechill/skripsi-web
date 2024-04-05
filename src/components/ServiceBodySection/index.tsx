import { getImageService } from '@/utils/constant'
import { dataServiceBody } from '@/utils/dataServiceBody'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

export default function ServiceBodySection() {
  return (
    <section className='bg-[#F4F3FF] lg:px-24 px-8 py-[10vh] flex flex-col lg:justify-normal  gap-12'>
        {dataServiceBody.map((item, index) => (
          <div key={index} className='flex lg:flex-row flex-col  lg:gap-24 gap-8'>
              <Image
                src={getImageService(item.imgPath)}
                alt={item.title}
                width={300}
                height={300}
                className={`lg:w-1/2 w-full  rounded-xl ${index % 2 === 0 ? 'lg:order-1 ' : ''}`}
              />
              <div className='lg:w-1/2 flex flex-col gap-4 justify-center'>
                <h2 className='text-[#2E3E78] text-3xl font-bold'>{item.title}</h2>
                <p className='text-[#2E3E78] lg:text-start text-justify'>{item.description1}</p>
                <p className='text-[#2E3E78] lg:text-start text-justify'>{item.description2}</p>
                <Link href={item.pdfPath} target='_blank'>
                  <button className=" z-10 bg-[#FCFCFC] border-2 border-[#2E3E78] text-[#2E3E78]  px-4 py-2 rounded-lg lg:h-12 w-40 ">
                    Preview Pdf
                  </button>
                </Link>
              </div>
          </div>
        ))}
    </section>
  )
}
