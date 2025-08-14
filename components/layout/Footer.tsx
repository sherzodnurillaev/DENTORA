'use client'

const Footer = () => {

    return (
        <div className="max-w-[1300px] mx-auto mt-[10px] sticky top-0 z-50">
            <div className="flex justify-between items-center w-full rounded-2xl px-[30px] py-[10px] shadow-[0_4px_20px_rgba(158,158,158,0.5)] transition-all duration-500">
                <div className="">
                    <h2>Клиника стоматологии</h2>
                    <h2>Анжелы Коновой</h2>

                    <h2>Адрес клиники</h2>
                    <p>Эл. почта: info@mysite.ru</p>
                    <p>Тел.: +7 123 456-78-90</p>
                    <p>ул. Арбат, 1а, Москва,</p>
                    <p>119019, Россия</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
