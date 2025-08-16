'use client'

import { useTheme } from "next-themes"
import ThemeToggle from "../ThemeToggle"
import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import Image from "next/image"

interface Props {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Menu = ({ open, setOpen }: Props) => {

    const { theme } = useTheme()
    const pathname = usePathname()

    const data = [
        {
            id: 1,
            title: "Главная",
            link: "/",
            name: "/"
        },
        {
            id: 2,
            title: "Запись",
            link: "/appointment",
            name: "/appointment"
        },
        {
            id: 3,
            title: "О нас",
            link: "/about",
            name: "/about"
        },
        {
            id: 4,
            title: "Вопросы и ответы",
            link: "/question",
            name: "/question"
        }
    ]

    return (
        <div suppressHydrationWarning className={`w-[300px] h-[100vh] rounded-l-2xl ${open ? 'shadow-[0_4px_20px_rgba(158,158,158,0.5)]' : 'shadow-[0_4px_10px_rgba(158,158,158,0.5)]'} ${theme == 'dark' ? 'bg-[#000]/100' : 'bg-[#9e9e9e]'} transition-colors duration-1000 text-center relative`}>
            <Image suppressHydrationWarning src={theme == 'dark' ? '/icon/close-white.svg' : '/icon/close-black.svg'} width={0} height={0} alt="close" className="absolute right-[20px] top-[20px] duration-1000 w-[24px] md:w-[24px] lg:w-[34px] h-[24px] md:h-[24px] lg:h-[34px]" onClick={() => setOpen(!open)} />
            <div className="flex flex-col gap-3 pt-[100px]">
                {
                    data.map((item, i) => (
                        <Link key={i} href={item.link} className={`${pathname === item.link ? 'text-black bg-amber-50 w-fit mx-auto px-[10px] py-[3px] rounded-[6px] font-bold' : ''}`}>{item.title}</Link>
                    ))
                }
            </div>
            <div className="mt-[30px]">
                <ThemeToggle />
            </div>
        </div>
    )
}

export default Menu
