import { CircularProgress } from "@mui/material";
import React, { useState } from "react";

export const EmailBox: React.FC = () => {
  const [loading, setLoading] = useState(false);

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
      <div className="text-heading-l pb-[16px]">Enquires</div>
      <div className="bg-[#EAEAE5] w-full px-[24px] py-[22px] flex flex-col gap-[16px]">
        <div className="text-body-m">
          Contact us to know more about Testing and Certification.
        </div>
        <input
          placeholder="Your name"
          className="w-full p-[16px] resize-none overflow-y-auto"
          style={{
            lineHeight: 2,
            minHeight: "calc(2.5em * 1)",
            maxHeight: "calc(2.5em * 1)",
          }}
        />
        <input
          placeholder="Email address"
          className="w-full p-[16px] resize-none overflow-y-auto"
          style={{
            lineHeight: 2,
            minHeight: "calc(2.5em * 1)",
            maxHeight: "calc(2.5em * 1)",
          }}
        />
        <textarea
          placeholder="Write down your message"
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
          {loading ? <CircularProgress size="28px" /> : "Send now"}
        </button>
      </div>
    </div>
  );
};
