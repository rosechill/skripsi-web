import React from 'react'
import { StaticImageData } from 'next/image'
export interface DataService {
    imgPath: string | StaticImageData,
    title: string,
    caption: string,
}
