'use client'

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import TelegramModal from "./Modal"

const Formic = () => {
    const { theme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState("")

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    const data = [
        { id: 1, title: 'Диагностика зубов', time: "45 минут", cost: "2 500 ₽" },
        { id: 2, title: 'Отбеливание зубов', time: "45 минут", cost: "7 000 ₽" },
        { id: 3, title: 'Гигиеническая чистка', time: "45 минут", cost: "4 000 ₽" },
        { id: 4, title: 'Спортивные каппы', time: "45 минут", cost: "2 000 ₽" },
        { id: 5, title: 'Полировка зубов', time: "45 минут", cost: "3 000 ₽" },
        { id: 6, title: 'Лечение фтором', time: "45 минут", cost: "1 800 ₽" },
    ]

    return (
        <div>
            {data.map((item) => (
                <div key={item.id} className="my-[20px]">
                    <div className={`${theme === 'dark' ? 'bg-white' : 'bg-black'} w-full h-[1px] duration-1000`} />
                    <h2 className={`${theme === 'dark' ? 'text-[#a392d3]' : 'text-[#4f4768]'} text-[16px] md:text-[18px] lg:text-[24px] my-[10px] md:my-[20px] duration-1000`}>
                        {item.title}
                    </h2>
                    <div className={`${theme === 'dark' ? 'bg-white' : 'bg-black'} w-full h-[1px] duration-1000`} />
                    <div className="my-[10px]">
                        <p className="italic text-[14px] md:text-[16px] lg:text-[18px] duration-1000">{item.time}</p>
                        <p className="italic text-[14px] md:text-[16px] lg:text-[18px] duration-1000">{item.cost}</p>
                    </div>

                    <div className="my-[20px]">
                        <button
                            onClick={() => {
                                setSelectedCategory(item.title)
                                setIsModalOpen(true)
                            }}
                            className={`px-[20px] py-[7px] ${
                                theme === 'dark'
                                    ? 'shadow-[0_4px_10px_rgba(158,158,158,0.5)] bg-[#4f4768]'
                                    : 'bg-[#4f4768] text-white'
                            } w-fit rounded-[4px] text-[18px] md:text-[20px] lg:text-[26px]`}
                        >
                            Записаться
                        </button>
                    </div>
                </div>
            ))}

            <TelegramModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                defaultCategory={selectedCategory}
            />
        </div>
    )
}

export default Formic
