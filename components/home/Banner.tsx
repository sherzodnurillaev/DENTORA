'use client'

import { useTheme } from "next-themes"
import Image from "next/image"
import { useEffect, useState } from "react"
import Button from "../ui/Custom/Custom-Button"

const Banner = () => {
    const { theme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <div className="flex items-center justify-between mt-[20px] md:mt-[50px] lg:mt-[100px] flex-wrap">
            <div className="flex flex-col gap-5">
                <h2 className={`${theme == 'dark' ? 'text-white duration-500' : 'text-[#4f4768] duration-500'} font-bold max-w-[500px] text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px]`}>
                    Клиника стоматологии Анжелы Коновой
                </h2>

                <p className={`${theme == 'dark' ? 'text-white duration-500' : 'text-[#4f4768] duration-500'} text-[14px] md:text-[16px] lg:text-[18px]`}>
                    Еще одна причина улыбаться
                </p>

                <Button />
            </div>

            <div className="flex-1 min-w-[250px] max-w-[500px]">
                <Image 
                    src={'/images/banner-smile.webp'} 
                    alt="smile" 
                    width={500} 
                    height={350} 
                    style={{ width: '100%', height: 'auto' }} 
                />
            </div>
        </div>
    )
}

export default Banner
