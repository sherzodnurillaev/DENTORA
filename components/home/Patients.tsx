'use client'

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import Image from "next/image"

const Patients = () => {
    const { theme } = useTheme()
    const [mounted, setMounted] = useState(false)
    
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    const data = [
        {
            id: 1,
            fullName: "Семен Жорин",
            description: "«Это отзыв. Нажмите здесь, чтобы отредактировать и написать хороший отзыв о вашей компании и услугах. Пусть клиенты порекомендуют вас посетителям сайта. Это лучший способ показать, на что вы способны, и что вы предоставляете качественные товары или услуги. Комментарии благодарных клиентов помогут посетителям сайта принять решение о заказе ваших услуг»."
        },
        {
            id: 2,
            fullName: "Марина Гажаева",
            description: "«Это отзыв. Нажмите здесь, чтобы отредактировать и написать хороший отзыв о вашей компании и услугах. Пусть клиенты порекомендуют вас посетителям сайта. Это лучший способ показать, на что вы способны, и что вы предоставляете качественные товары или услуги. Комментарии благодарных клиентов помогут посетителям сайта принять решение о заказе ваших услуг»."
        },
        {
            id: 3,
            fullName: "Роза Семенова",
            description: "«Это отзыв. Нажмите здесь, чтобы отредактировать и написать хороший отзыв о вашей компании и услугах. Пусть клиенты порекомендуют вас посетителям сайта. Это лучший способ показать, на что вы способны, и что вы предоставляете качественные товары или услуги. Комментарии благодарных клиентов помогут посетителям сайта принять решение о заказе ваших услуг»."
        }
    ]

    return (
        <div className="mt-[50px] lg:mt-[70px] duration-1000">
            <h2 className={`${theme == 'dark' ? 'text-white' : 'text-[#4f4768]'} font-bold text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px] mb-8`}>
                Пациенты рекомендуют
            </h2>
            <div className="flex justify-center md:justify-end items-center gap-5">
                <Image src={'/images/toothImg.webp'} width={300} height={100} alt="tooth" className="max-w-[300] h-auto hidden md:block" />
                <div className="w-full md:max-w-[600px]">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        loop={true}
                        pagination={{ clickable: true }}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        speed={1000}
                    >
                        {data.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className={`p-6 rounded-xl shadow-lg ${theme === 'dark' ? 'bg-[#2a2a2a] text-white' : 'bg-[#4f4768] text-[#fff]'}`}>
                                    <h3 className="font-semibold text-[18px] md:text-[24px] lg:text-[32px]">{item.fullName}</h3>
                                    <p className="mb-4">{item.description}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Patients
