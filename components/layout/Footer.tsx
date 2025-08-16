'use client'

import Image from "next/image"
import Button from "../ui/Custom/Custom-Button"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

const Footer = () => {

        const { theme } = useTheme()
        const [mounted, setMounted] = useState(false)
    
        useEffect(() => {
            setMounted(true)
        }, [])
    
        if (!mounted) return null

    return (
        <div className="max-w-[1300px] mx-auto mt-[10px] sticky top-0 z-10">
            <div className="flex justify-between gap-y-[20px] gap-x-[5px] items-start w-full rounded-2xl px-[30px] py-[10px] shadow-[0_4px_20px_rgba(158,158,158,0.5)] transition-all duration-500">
                <div className="flex flex-col md:flex-row gap-y-[30px] md:gap-[100px] lg:gap-[300px]">
                    <div className="">
                        <h2 className={`text-[#a392d3] font-bold text-[16px] md:text-[18px] lg:text-[20px] duration-1000`}>Клиника стоматологии</h2>
                        <h2 className={`text-[#fff] font-bold text-[16px] md:text-[18px] lg:text-[20px] duration-1000`}>Анжелы Коновой</h2>

                        <h2 className={`text-[#a392d3] font-bold text-[16px] md:text-[18px] lg:text-[20px] duration-1000`}>Адрес клиники</h2>
                        <p className="text-[14px] md:text-[16px] lg:text-[18px]">Эл. почта: info@mysite.ru</p>
                        <p className="text-[14px] md:text-[16px] lg:text-[18px]">Тел.: +7 123 456-78-90</p>
                        <p className="text-[14px] md:text-[16px] lg:text-[18px]">ул. Арбат, 1а, Москва,</p>
                        <p className="text-[14px] md:text-[16px] lg:text-[18px]">119019, Россия</p>
                    </div>

                    <div className="">
                        <h2 className={`text-[#a392d3] font-bold text-[16px] md:text-[18px] lg:text-[20px] duration-1000`}>Часы работы</h2>
                        <p className="text-[14px] md:text-[16px] lg:text-[18px]">ПН, СР, ЧТ: 9:00–20:00</p>
                        <p className="text-[14px] md:text-[16px] lg:text-[18px]">ВТ: 11:00–19:00</p>
                        <p className="text-[14px] md:text-[16px] lg:text-[18px]">ПТ: 9:00–13:00</p>
                        <p className="text-[14px] md:text-[16px] lg:text-[18px]">По предварительной записи</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-[30px]">
                    <Button />
                    <Image src={'/icon/logo.webp'} width={100} height={100} alt="logo" />
                </div>
            </div>
        </div>
    )
}

export default Footer
