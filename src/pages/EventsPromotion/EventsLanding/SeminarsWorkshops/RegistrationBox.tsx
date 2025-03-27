import React from "react";
import { Link } from "../../../../components";
import { useSettings } from "../../../../context";

const multilingual = {
  en: {
    seminar_on:
      "Seminar on Environmental, Social and Governance (ESG) and Sustainability",
    register: "Register Now",
  },
  cn: {
    seminar_on: "環境、社會和管治及可持續發展研討會",
    register: "立即報名",
  },
};

export const RegistrationBox: React.FC = () => {
  const { getPageText } = useSettings();
  const page_text = getPageText(multilingual);

  const { seminar_on, register } = page_text;

  return (
    <div className="flex flex-row w-full border-2 border-[#E0E0E0]">
      <div className="w-[60%] h-[134px] p-[20px] flex flex-row justify-center items-center">
        <img
          width={"71px"}
          height={"68px"}
          src={process.env.PUBLIC_URL + `/assets/icons/registration.png`}
          alt="registration"
        />
      </div>
      <div className="bg-[#203136] text-[#FFF] px-[19px] py-[15.5px] flex flex-col justify-center">
        <p>{seminar_on as string}</p>
        <Link
          linkColor="#FFF"
          innerLink="/events-promotion/seminars-registration"
        >
          {register as string}
        </Link>
      </div>
    </div>
  );
};
