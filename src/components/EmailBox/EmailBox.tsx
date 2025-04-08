import { CircularProgress } from "@mui/material";
import React, { useState } from "react";
import { useSettings } from "../../context";
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
  const { getPageText } = useSettings();

  const page_text = getPageText(multilingual);

  const { enquiries, contact, name, email, write_down, send } = page_text;
  const handleButtonClick = async () => {
    setLoading(true);

    const formData = {
      do: "test.mail",
      u_name: "John Doe",
      u_email: "johndoe@example.com",
    };

    try {
      const response = await fetch("https://localhost:8000/api/process.php", {
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
      <div className="text-heading-l pb-[16px]">{enquiries as string}</div>
      <div className="bg-[#EAEAE5] w-full px-[24px] py-[22px] flex flex-col gap-[16px]">
        <div className="text-body-m">{contact as string}</div>
        <input
          placeholder={name as string}
          aria-label={name as string}
          className="w-full p-[16px] resize-none overflow-y-auto"
          style={{
            lineHeight: 2,
            minHeight: "calc(2.5em * 1)",
            maxHeight: "calc(2.5em * 1)",
          }}
        />
        <input
          placeholder={email as string}
          aria-label={email as string}
          className="w-full p-[16px] resize-none overflow-y-auto"
          style={{
            lineHeight: 2,
            minHeight: "calc(2.5em * 1)",
            maxHeight: "calc(2.5em * 1)",
          }}
        />
        <textarea
          placeholder={write_down as string}
          aria-label={write_down as string}
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
          tabIndex={0}
          disabled={loading}
          onClick={handleButtonClick}
        >
          {loading ? (
            <CircularProgress
              size="28px"
              sx={{
                color: "white",
              }}
            />
          ) : (
            (send as string)
          )}
        </button>
      </div>
    </div>
  );
};
