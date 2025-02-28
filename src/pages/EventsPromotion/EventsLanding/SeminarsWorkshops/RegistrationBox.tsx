import React from "react";
import { Link } from "../../../../components";

export const RegistrationBox: React.FC = () => {
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
        <p>
          Seminar on Environmental, Social and Governance (ESG) and
          Sustainability
        </p>
        <Link
          linkColor="#FFF"
          innerLink="/events-promotion/seminars-registration"
        >
          Register Now
        </Link>
      </div>
    </div>
  );
};
