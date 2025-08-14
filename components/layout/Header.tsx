'use client'

import Image from "next/image"
import ThemeToggle from "../ui/ThemeToggle"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import Menu from "../ui/Custom/Custom-Menu"

export const Header = () => {
    const { theme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const [open, setOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        setMounted(true)

        const onScroll = () => {
            setScrolled(window.scrollY > 10) // появится эффект после 10px
        }
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    return (
        <div className="max-w-[1300px] mx-auto mt-[10px] sticky top-0 z-50">
            <div
                className={`flex justify-between items-center w-full rounded-2xl px-[30px] py-[10px] shadow-[0_4px_20px_rgba(158,158,158,0.5)] transition-all duration-500 
                 ${scrolled ? 'opacity-20 hover:opacity-100' : 'opacity-100'}`}
            >
                <div className="flex items-center gap-3">
                    <Image src={'/icon/logo.webp'} width={50} height={50} alt="logo" />
                    <h2 className="font-bold">DENTORA</h2>
                </div>
                <div className="flex items-center gap-5">
                    <ThemeToggle />
                    {mounted && (
                        <Image
                            src={theme === 'dark' ? "/icon/menu-white.svg" : "/icon/menu-black.svg"}
                            width={0}
                            height={0}
                            alt="menu"
                            className="duration-1000 w-[24px] md:w-[24px] lg:w-[34px] h-[24px] md:h-[24px] lg:h-[34px]"
                            onClick={() => setOpen(!open)}
                        />
                    )}
                </div>
            </div>
            {mounted && (
                <div
                    className={`fixed right-0 top-0 h-screen transition-transform duration-1000 ease-in-out 
                    ${open ? 'translate-x-0' : 'translate-x-full'}`}
                >
                    <Menu open={open} setOpen={setOpen} />
                </div>
            )}
        </div>
    )
}
