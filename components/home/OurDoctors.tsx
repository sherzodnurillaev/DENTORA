'use client'

import { useTheme } from "next-themes"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

const OurDoctors = () => {

        const { theme } = useTheme()
        const [mounted, setMounted] = useState(false)
    
        useEffect(() => {
            setMounted(true)
        }, [])
    
        if (!mounted) return null

    const doctors = [
        {
            id: 1,
            fullName: 'Анжела Конова',
            title: 'Стоматолог, к.м.н.',
            descriptions: 'Это текст. Нажмите один раз и выберите «Редактировать текст» или нажмите дважды, чтобы добавить свой текст и настроить шрифт. Расскажите о себе.',
            images: '/doctors/anjela.avif'
        },
        {
            id: 2,
            fullName: 'Кристина Воронцова',
            title: 'Стоматолог',
            descriptions: 'Это текст. Нажмите один раз и выберите «Редактировать текст» или нажмите дважды, чтобы добавить свой текст и настроить шрифт. Расскажите о себе.',
            images: '/doctors/kristina.avif'
        },
        {
            id: 3,
            fullName: 'Лариса Соснова',
            title: 'Стоматолог',
            descriptions: 'Это текст. Нажмите один раз и выберите «Редактировать текст» или нажмите дважды, чтобы добавить свой текст и настроить шрифт. Расскажите о себе.',
            images: '/doctors/larisa.avif'
        }
    ]

    return (
        <div className="mt-[100px]">
            <h2 className={`${theme == 'dark' ? 'text-white duration-700' : 'text-[#4f4768] duration-700'} text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px] text-center mb-[50px] font-bold`} >Наши врачи</h2>
            <div className="flex flex-col gap-[30px] md:flex-row md:justify-between md:gap-[10px] duration-1000">
                {
                    doctors.map((item) => (
                        <div key={item.id} className="max-w-[400px] mx-auto">
                            <Image src={item.images} width={370} height={300} alt={item.fullName} />
                            <h2 className={`${theme == 'dark' ? 'text-[#9b8bca] duration-700' : 'text-[#4f4768] duration-700'} text-[18px] sm:text-[20px] md:text-[22px] lg:text-[26px]`}>{item.fullName}</h2>
                            <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-medium italic">{item.title}</p>
                            <p className="text-[13px] md:text-[16px]">{item.descriptions}</p>
                        </div>
                    ))
                }
            </div>
            <div className="flex justify-center mt-[30px] md:mt-[50px] lg:mt-[70px]">
                <Link 
                    href={'#'} 
                        className={`px-[20px] py-[7px] ${theme === 'dark' ? 'shadow-[0_4px_10px_rgba(158,158,158,0.5)] bg-[#4f4768]' : 'bg-[#4f4768] text-white'} w-fit rounded-[4px] text-[18px] md:text-[20px] lg:text-[26px]`}
                >
                    Подробнее о нас
                </Link>
            </div>
        </div>
    )
}

export default OurDoctors
