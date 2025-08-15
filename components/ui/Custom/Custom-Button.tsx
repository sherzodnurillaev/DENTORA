'use client'

import { useTheme } from "next-themes"
import Link from "next/link"
import { useEffect, useState } from "react"

const Button = () => {
    const { theme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <Link 
            href={'/appointment'} 
                className={`px-[20px] py-[7px] ${theme === 'dark' ? 'shadow-[0_4px_10px_rgba(158,158,158,0.5)] bg-[#4f4768]' : 'bg-[#4f4768] text-white'} w-fit rounded-[4px] text-[18px] md:text-[20px] lg:text-[26px]`}
        >
            Записаться
        </Link>
    )
}

export default Button
