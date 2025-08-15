'use client'

import { useTheme } from "next-themes"
import Image from "next/image"
import { useEffect, useState } from "react"

const AboutUs = () => {
    const { theme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <div className="">
            <h2 className={`${theme == 'dark' ? 'text-white duration-700' : 'text-[#4f4768] duration-700'} max-w-[450px] text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px] mb-[50px] font-bold`}>Клиника А. Кононовой
            Надежность. Профессионализм.</h2>

            <div className="flex flex-col md:flex-row items-center gap-5">
                <div className="">
                    <Image src={'/doctors/anjela.avif'} width={300} height={450} alt="imag" className="rounded-[6px]" />
                    <div className="md:w-[300px]">
                        <h2 className={`${theme == 'dark' ? 'text-[#9b8bca] duration-700' : 'text-[#4f4768] duration-700'} text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px]`}>Анжела Конова</h2>
                        <p className="text-[14px] md:text-[16px] lg:text-[18px] duration-1000">Стоматолог, к.м.н.</p>
                        <p className="text-[14px] md:text-[16px] lg:text-[18px] duration-1000">Директор клиники</p>
                    </div>
                </div>
                <div className={`p-6 rounded-xl shadow-lg ${theme === 'dark' ? 'bg-[#2a2a2a] text-white duration-1000' : 'bg-[#4f4768] text-[#fff] duration-1000'} max-w-[650px]`}>
                    <h2 className={`${theme == 'dark' ? 'text-[#9b8bca] duration-700' : 'text-[#fff] duration-700'} max-w-[400px] text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px]`}>Стоматологические услуги высшего класса</h2>
                    <p className="text-[14px] md:text-[16px] lg:text-[18px]">Это текст. Вы можете перетащить его в любое место на странице. Всё просто: нажмите здесь и выберите «Редактировать текст» или нажмите дважды, чтобы добавить свой контент и настроить шрифт. Расскажите посетителям сайта о себе. Здесь будет удачно смотреться текст о вашей компании и услугах.</p>

                    <p className="text-[14px] md:text-[16px] lg:text-[18px]">Расскажите посетителям сайта историю о том, как вам в голову пришла идея создания собственного дела. Здесь замечательно будет смотреться длинный текст о вашей компании, сотрудниках и услугах, которые вы предоставляете. Здесь представьте себя и свою компанию вашим клиентам. Используйте ключевые слова, по которым ваш сайт будет продвигаться в поисковых системах.</p>
                </div>
            </div>

        </div>
    )
}

export default AboutUs
