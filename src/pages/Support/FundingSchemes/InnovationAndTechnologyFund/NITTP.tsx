import * as React from "react";
import { Link } from "../../../../components";

export const NITTP: React.FC = () => {
  return (
    <div className="bg-[#F7F7F5] px-[42px] py-[36px]">
      <div className="text-heading-m ">
        <Link
          outerLink="https://www.itf.gov.hk/en/funding-programmes/nurturing-talent/nittp/index.html"
          linkColor="#000"
        >
          New Industrialisation and Technology Training Programme (NITTP)
        </Link>
      </div>

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
