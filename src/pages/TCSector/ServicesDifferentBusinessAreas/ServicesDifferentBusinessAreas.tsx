import React from "react";

import { SquareTitle } from "../../../components";

export const displayBusinessAreas: Array<{
  title: string;
  img: string;
  nav: string;
}> = [
  {
    title: "Toys and Children's Products",
    img: "ToysAndChildren.png",
    nav: "/tc-sector/toys_and_children_products",
  },
  {
    title: "Textiles and Apparel",
    img: "TextilesAndApparel.png",
    nav: "",
  },
  {
    title: "Electrical and Electronic Products",
    img: "ElectricalAndElectronic.png",
    nav: "",
  },
  {
    title: "Construction Materials and Buildings",
    img: "Construction.png",
    nav: "",
  },
  {
    title: "Medical Testing",
    img: "MedicalTesting.png",
    nav: "",
  },
  {
    title: "Chinese Medicines",
    img: "ChineseMedicines.png",
    nav: "",
  },
  {
    title: "Jewellery",
    img: "Jewellery.png",
    nav: "",
  },
  {
    title: "Food",
    img: "Food.png",
    nav: "",
  },
  {
    title: "Environmental Protection",
    img: "EnvironmentalProtection.png",
    nav: "",
  },
  {
    title: "Information and Communications Technologies",
    img: "InformationAndCommunications.png",
    nav: "",
  },
];

export const ServicesDifferentBusinessAreas: React.FC = () => {
  return (
    <div className="w-full flex flex-row gap-[24px] pr-[24px]">
      <div className="flex-1">
        <SquareTitle title={"Services for Different Business Areas"} />
        <p className="text-body-m my-[24px]">
          The testing and certification sector offers services covering a wide
          range of areas, some major ones are set out below.
        </p>
        <div className="flex flex-wrap gap-[24px]">
          {displayBusinessAreas.map((item, index) => {
            const { img, title, nav } = item;
            const onClick = (): void => {
              window.open(nav, "_blank");
            };
            return (
              <div key={index} className="flex flex-col gap-[14px] w-[260px]">
                <img
                  className="w-full h-[202px] cursor-pointer"
                  src={`${process.env.PUBLIC_URL}/assets/tcSector/servicesDifferentBusinessAreas/${img}`}
                  alt={"file icon"}
                  onClick={onClick}
                />
                <p
                  className="text-highlight-m cursor-pointer"
                  onClick={onClick}
                >
                  {title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
