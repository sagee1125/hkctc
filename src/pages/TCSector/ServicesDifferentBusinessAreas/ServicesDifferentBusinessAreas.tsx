import React from "react";

import { SquareTitle } from "../../../components";
import { useNavigate } from "react-router-dom";
import { Language, useSettings } from "../../../context";

export const displayBusinessAreas: Array<{
  title: string;
  titleCN: string;
  img: string;
  nav: string;
}> = [
  {
    title: "Toys and Children's Products",
    titleCN: "",
    img: "ToysAndChildren.png",
    nav: "/tc-sector/toys_and_children_products",
  },
  {
    title: "Textiles and Apparel",
    titleCN: "",
    img: "TextilesAndApparel.png",
    nav: "/tc-sector/textiles_and_apparel",
  },
  {
    title: "Electrical and Electronic Products",
    titleCN: "",
    img: "ElectricalAndElectronic.png",
    nav: "/tc-sector/electrical_and_electronic_products",
  },
  {
    title: "Construction Materials and Buildings",
    titleCN: "",
    img: "Construction.png",
    nav: "/tc-sector/construction_materials_and_buildings",
  },
  {
    title: "Medical Testing",
    titleCN: "",
    img: "MedicalTesting.png",
    nav: "/tc-sector/medical_testing",
  },
  {
    title: "Chinese Medicines",
    titleCN: "",
    img: "ChineseMedicines.png",
    nav: "/tc-sector/chinese_medicines",
  },
  {
    title: "Jewellery",
    titleCN: "",
    img: "Jewellery.png",
    nav: "/tc-sector/jewellery",
  },
  {
    title: "Food",
    titleCN: "",
    img: "Food.png",
    nav: "/tc-sector/food",
  },
  {
    title: "Environmental Protection",
    titleCN: "",
    img: "EnvironmentalProtection.png",
    nav: "/tc-sector/environmental_protection",
  },
  {
    title: "Information and Communications Technologies",
    titleCN: "",
    img: "InformationAndCommunications.png",
    nav: "/tc-sector/information_and_communications_technologies",
  },
];

const multilingual = {
  en: {
    services_for_diff_business_areas: "Services for Different Business Areas",
    the_testing_and_certification:
      "The testing and certification sector offers services covering a wide range of areas, some major ones are set out below.",
  },
  cn: {
    services_for_diff_business_areas: "Services for Different Business Areas",
    the_testing_and_certification:
      "The testing and certification sector offers services covering a wide range of areas, some major ones are set out below.",
  },
};

export const ServicesDifferentBusinessAreas: React.FC = () => {
  const navigate = useNavigate();
  const { isPC, language } = useSettings();
  const page_text =
    language === Language.EN ? multilingual.en : multilingual.cn;

  const { services_for_diff_business_areas, the_testing_and_certification } =
    page_text;
  return (
    <div className="w-full">
      <div className="flex-1">
        <SquareTitle title={services_for_diff_business_areas} />
        <p className="text-body-m my-[24px]">{the_testing_and_certification}</p>
        <div className={`flex ${isPC ? "flex-wrap" : "flex-col"} gap-[24px]`}>
          {displayBusinessAreas.map((item, index) => {
            const { img, title, nav } = item;
            const onClick = (): void => {
              const element = document.getElementById("breadcrumb");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }

              navigate(nav);
            };
            return (
              <div
                key={index}
                className={`flex flex-col gap-[14px] ${
                  isPC ? "w-[270px]" : "w-full"
                } group`}
              >
                <div className="w-full aspect-[260/202] overflow-hidden cursor-pointer">
                  <img
                    className="w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-110"
                    src={`${process.env.PUBLIC_URL}/assets/tcSector/servicesDifferentBusinessAreas/${img}`}
                    alt={"file icon"}
                    onClick={onClick}
                  />
                </div>
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
