"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  { question: "О чем раздел FAQ «Вопросы и ответы»?", answer: "Раздел FAQ содержит ответы на частые вопросы о вашем бизнесе, например, «В какие регионы вы доставляете?», «Какие у вас часы работы?» или «Как записаться на услугу?»." },
  { question: "Почему раздел с вопросами и ответами важен?", answer: "Раздел с вопросами и ответами — отличный способ для пользователей быстро найти интересующую их информацию и взаимодействовать с вашим бизнесом и сайтом более эффективно и удобно." },
  { question: "Где можно добавить раздел FAQ?", answer: "Раздел можно добавить на любую страницу сайта или приложения Wix, для удобства пользователей." },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const { theme } = useTheme()
    const [mounted, setMounted] = useState(false)
    
    useEffect(() => {
        setMounted(true)
    }, [])
    
    if (!mounted) return null

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-[100%] mx-auto">
        <h2 className={`${theme == 'dark' ? 'text-white duration-700' : 'text-[#4f4768] duration-700'} text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px] text-center mt-[20px] font-bold`} >Часто задаваемые вопросы</h2>
      {faqData.map((item, index) => (
        <div key={index} className="border-b border-gray-300">
          <button
            onClick={() => toggleItem(index)}
            className="w-full flex justify-between items-center p-4 text-left"
          >
            <span className="font-semibold">{item.question}</span>
            <span>{openIndex === index ? "▲" : "▼"}</span>
          </button>
          {openIndex === index && (
            <div className="p-4 pt-0 text-gray-600">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default FAQ
