import { CircularProgress } from "@mui/material";
import React, { useState } from "react";
import { Language, useSettings } from "../../context";
const multilingual = {
  en: {
    enquiries: `Enquiries`,
    contact: "Contact us to know more about Testing and Certification.",
    name: "Your name",
    email: "Email address",
    write_down: "Write down your message",
    send: "Send now",
  },

  cn: {
    enquiries: `查詢`,
    contact: "聯繫我們以了解有關測試和認證的更多信息",
    name: "姓名",
    email: "電子郵件",
    write_down: "寫下你的訊息",
    send: "立即發送",
  },
};
export const EmailBox: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { language } = useSettings();
  const isEn = language === Language.EN;
  const page_text = isEn ? multilingual.en : multilingual.cn;
  const { enquiries, contact, name, email, write_down, send } = page_text;
  const handleButtonClick = async () => {
    setLoading(true);

    const formData = {
      do: "test.mail",
      u_name: "John Doe",
      u_email: "johndoe@example.com",
    };

    try {
      const response = await fetch("http://localhost:8000/api/process.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      });

      if (!response.ok) {
        throw new Error("Failed to send request");
      }

      const data = await response.json();

      alert(data);
    } catch (err: any) {
      alert(err);
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="text-heading-l pb-[16px]">{enquiries}</div>
      <div className="bg-[#EAEAE5] w-full px-[24px] py-[22px] flex flex-col gap-[16px]">
        <div className="text-body-m">{contact}</div>
        <input
          placeholder={name}
          className="w-full p-[16px] resize-none overflow-y-auto"
          style={{
            lineHeight: 2,
            minHeight: "calc(2.5em * 1)",
            maxHeight: "calc(2.5em * 1)",
          }}
        />
        <input
          placeholder={email}
          className="w-full p-[16px] resize-none overflow-y-auto"
          style={{
            lineHeight: 2,
            minHeight: "calc(2.5em * 1)",
            maxHeight: "calc(2.5em * 1)",
          }}
        />
        <textarea
          placeholder={write_down}
          className="w-full p-[16px] resize-none overflow-y-auto"
          style={{
            lineHeight: 1.5,
            minHeight: "calc(2.5em * 3)",
            maxHeight: "calc(2.5em * 3)",
          }}
        />
        <button
          className="w-full text-white p-[16px] bg-newPrimary h-[56px]"
          style={{
            lineHeight: 1.5,
          }}
          disabled={loading}
          onClick={handleButtonClick}
        >
          {loading ? <CircularProgress size="28px" /> : send}
        </button>
      </div>
    </div>
  );
};
