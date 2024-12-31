import * as React from "react";

export const NITTP: React.FC = () => {
  return (
    <div className="bg-[#F7F7F5] px-[42px] py-[36px]">
      <p className="text-heading-m">
        New Industrialisation and Technology Training Programme (NITTP)
      </p>
      <p className="text-body-m mt-[16px]">
        NITTP subsidises local companies on a{" "}
        <span className="text-newPrimary font-semibold">
          2(Government):1(enterprise) matching basis
        </span>{" "}
        to train their staff in advanced technologies, especially those related
        to "New Industrialisation". The Vocational Training Council administers
        the NITTP and serves as its Secretariat.
      </p>
    </div>
  );
};
