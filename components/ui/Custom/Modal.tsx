"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCategory?: string;
}

const TelegramModal: React.FC<ModalProps> = ({ isOpen, onClose, defaultCategory = "" }) => {
  const [fullName, setFullName] = useState("");
  const [contact, setContact] = useState("");
  const [category, setCategory] = useState(defaultCategory);
  const { theme } = useTheme()
        const [mounted, setMounted] = useState(false)
    
        useEffect(() => {
            setMounted(true)
        }, [])


  useEffect(() => {
    setCategory(defaultCategory);
  }, [defaultCategory]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/send-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, contact, category }),
      });

      if (res.ok) {
        alert("✅ Заявка отправлена!");
        setFullName("");
        setContact("");
        setCategory(defaultCategory);
        onClose();
      } else {
        alert("❌ Ошибка при отправке");
      }
    } catch (error) {
      alert("❌ Ошибка соединения");
      console.error(error);
    }
  };

  if (!mounted) return null

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className=" p-6 rounded-xl w-[90%] max-w-md">
        <h2 className="text-xl text-[#fff] font-semibold mb-4">Запись на приём</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Ваше имя"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            className="w-full p-2 border rounded text-white"
          />
          <input
            type="text"
            placeholder="Telegram или номер телефона"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
            className="w-full p-2 border rounded text-white"
          />
          <input
            type="text"
            placeholder="Категория"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            className="w-full p-2 border rounded text-white"
          />

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              Отмена
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Отправить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TelegramModal;
