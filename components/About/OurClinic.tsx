'use client'

import { useTheme } from "next-themes"
import Image from "next/image"
import { useEffect, useState } from "react"
import Button from "../ui/Custom/Custom-Button"

const Clinic = () => {
    const { theme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <div className="">
            <h2 className={`${theme == 'dark' ? 'text-white duration-700' : 'text-[#4f4768] duration-700'} text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px] my-[10px] md:my-[20px] lg:my-[30px] text-center font-bold`}>Наша клиника</h2>

            <div className="flex flex-col sm:flex-row gap-4">
                <Image src={'/images/forClinicFirst.avif'} width={300} height={0} alt="first" className="w-[100%] h-auto rounded-[6px]" />
                <Image src={'/images/forClinicSecond.avif'} width={300} height={0} alt="second" className="w-[100%] h-auto rounded-[6px]" />
            </div>

            <div className="flex justify-center my-[30px] md:my-[50px] lg:my-[70px]">
                <Button />
            </div>
            
        </div>
    )
}

export default Clinic
