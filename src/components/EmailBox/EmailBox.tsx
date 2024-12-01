import React from "react";

export const EmailBox: React.FC = () => {
  return (
    <>
      <div className="text-heading-l pb-[16px]">Enquires</div>
      <div className="bg-[#EAEAE5] w-full px-[24px] py-[22px] flex flex-col gap-[16px]">
        <div className="text-body-m">
          Contact Us to know more about Testing and Certificate.
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
          className="w-full text-white p-[16px]"
          style={{
            lineHeight: 1.5,
            background:
              "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #242A31",
          }}
        >
          Send now
        </button>
      </div>
    </>
  );
};
