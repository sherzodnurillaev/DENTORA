'use client'

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import Formic from "../ui/Custom/Formic"

const Records = () => {
    const { theme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <div className="">
            <h2 className={`${theme == 'dark' ? 'text-white duration-700' : 'text-[#4f4768] duration-700'} max-w-[450px] text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px] mt-[10px] lg:mt-[30px] font-bold`}>Запишитесь на прием уже сегодня</h2>

            <Formic />
        </div>
    )
}

export default Records
