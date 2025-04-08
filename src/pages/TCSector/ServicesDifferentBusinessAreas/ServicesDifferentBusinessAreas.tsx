import React from "react";

import { SquareTitle } from "../../../components";
import { useNavigate } from "react-router-dom";
import { useSettings } from "../../../context";

export const displayBusinessAreas: Array<{
  title: string;
  titleCN: string;
  img: string;
  nav: string;
}> = [
  {
    title: "Toys and Children's Products",
    titleCN: "玩具及兒童產品",
    img: "ToysAndChildren.png",
    nav: "/tc-sector/toys_and_children_products",
  },
  {
    title: "Textiles and Apparel",
    titleCN: "紡織與成衣",
    img: "TextilesAndApparel.png",
    nav: "/tc-sector/textiles_and_apparel",
  },
  {
    title: "Electrical and Electronic Products",
    titleCN: "電氣及電子產品",
    img: "ElectricalAndElectronic.png",
    nav: "/tc-sector/electrical_and_electronic_products",
  },
  {
    title: "Construction Materials and Buildings",
    titleCN: "樓宇及建築材料",
    img: "Construction.png",
    nav: "/tc-sector/construction_materials_and_buildings",
  },
  {
    title: "Medical Testing",
    titleCN: "醫務化驗",
    img: "MedicalTesting.png",
    nav: "/tc-sector/medical_testing",
  },
  {
    title: "Chinese Medicines",
    titleCN: "中藥",
    img: "ChineseMedicines.png",
    nav: "/tc-sector/chinese_medicines",
  },
  {
    title: "Jewellery",
    titleCN: "珠寶",
    img: "Jewellery.png",
    nav: "/tc-sector/jewellery",
  },
  {
    title: "Food",
    titleCN: "食品",
    img: "Food.png",
    nav: "/tc-sector/food",
  },
  {
    title: "Environmental Protection",
    titleCN: "環保",
    img: "EnvironmentalProtection.png",
    nav: "/tc-sector/environmental_protection",
  },
  {
    title: "Information and Communications Technologies",
    titleCN: "資訊及通訊科技",
    img: "InformationAndCommunications.png",
    nav: "/tc-sector/information_and_communications_technologies",
  },
];

const multilingual = {
  en: {
    services_for_diff_business_areas: "Services for Different Business Areas",
    the_testing_and_certification:
      "The testing and certification industry offers services covering a wide range of areas, some major ones are set out below.",
  },
  cn: {
    services_for_diff_business_areas: "為不同業務範疇提供的服務",
    the_testing_and_certification:
      "檢測和認證業為多個範疇提供服務，主要包括以下各項。",
  },
};
export const ServicesDifferentBusinessAreas: React.FC = () => {
  const navigate = useNavigate();
  const { isPC, getSingleText, getPageText } = useSettings();
  const page_text = getPageText(multilingual);

  const { services_for_diff_business_areas, the_testing_and_certification } =
    page_text;
  return (
    <div className="w-full">
      <div className="flex-1">
        <SquareTitle title={services_for_diff_business_areas as string} />
        <p className="text-body-m my-[24px] text-justify">
          {the_testing_and_certification as string}
        </p>
        <div className={`flex ${isPC ? "flex-wrap" : "flex-col"} gap-[24px]`}>
          {displayBusinessAreas.map((item, index) => {
            const { img, title, titleCN, nav } = item;
            const onClick = (): void => {
              const element = document.getElementById("breadcrumb");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }

              navigate(nav);
            };
            const displayTitle = getSingleText(title, titleCN);

            return (
              <div
                key={index}
                className={`flex flex-col gap-[14px] ${
                  isPC ? "w-[270px]" : "w-full"
                } group`}
              >
                <div
                  className="w-full aspect-[260/202] overflow-hidden cursor-pointer"
                  tabIndex={0}
                  role="button"
                  onClick={onClick}
                >
                  <img
                    className="w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-110"
                    src={`${process.env.PUBLIC_URL}/assets/tcSector/servicesDifferentBusinessAreas/${img}`}
                    alt={"file icon"}
                  />
                </div>
                <p
                  className="text-highlight-m cursor-pointer"
                  tabIndex={0}
                  role="button"
                  onClick={onClick}
                >
                  {displayTitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
