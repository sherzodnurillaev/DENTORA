'use client'

import { useTheme } from "next-themes"
import Image from "next/image"
import { useEffect, useState } from "react"
import Button from "../ui/Custom/Custom-Button"

const Services = () => {
    const { theme } = useTheme()
        const [mounted, setMounted] = useState(false)
    
        useEffect(() => {
            setMounted(true)
        }, [])
    
        if (!mounted) return null

        const data = [
            {
                id: 1,
                title: 'Отбеливание зубов',
                description: 'Это текст. Нажмите один раз и выберите «Редактировать текст» или просто нажмите дважды, чтобы добавить свой текст и настроить шрифт.'
            },
            {
                id: 2,
                title: 'Полировка зубов',
                description: 'Это текст. Нажмите один раз и выберите «Редактировать текст» или просто нажмите дважды, чтобы добавить свой текст и настроить шрифт.'
            },
            {
                id: 3,
                title: 'Гигиеническая чистка',
                description: 'Это текст. Нажмите один раз и выберите «Редактировать текст» или просто нажмите дважды, чтобы добавить свой текст и настроить шрифт.'
            },
            {
                id: 4,
                title: 'Лечение фтором',
                description: 'Это текст. Нажмите один раз и выберите «Редактировать текст» или просто нажмите дважды, чтобы добавить свой текст и настроить шрифт.'
            },
            {
                id: 5,
                title: 'Спортивные каппы',
                description: 'Это текст. Нажмите один раз и выберите «Редактировать текст» или просто нажмите дважды, чтобы добавить свой текст и настроить шрифт.'
            },
            {
                id: 6,
                title: 'Детская гигиена',
                description: 'Это текст. Нажмите один раз и выберите «Редактировать текст» или просто нажмите дважды, чтобы добавить свой текст и настроить шрифт.'
            },
        ]

    return (
        <div className="mt-[50px] md:mt-[70px] lg:mt-[100px]">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <h2 className={`${theme == 'dark' ? 'text-white duration-700' : 'text-[#4f4768] duration-700'} font-bold text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px]`}>Наши услуги</h2>
                <div className="">
                    <Image src={'/images/services.webp'} width={500} height={300} alt="service" className="duration-700" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 max-w-[800px] gap-[50px]">
                {
                    data.map((item) => (
                        <div key={item.id} className="">
                            <h2 className={`${theme == 'dark' ? 'text-[#9b8bca] duration-700' : 'text-[#4f4768] duration-700'} text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px]`}>{item.title}</h2>
                            <p className={`max-w-[400px] text-[13px] md:text-[16px]`}>{item.description}</p>
                        </div>
                    ))
                }
            </div>
            <div className="flex justify-center mt-[30px] md:mt-[50px] lg:mt-[70px]">
                <Button />
            </div>
        </div>
    )
}

export default Services
