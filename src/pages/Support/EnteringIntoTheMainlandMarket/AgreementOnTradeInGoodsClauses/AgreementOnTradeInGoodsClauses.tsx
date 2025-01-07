import React from "react";
import { useNavigate } from "react-router-dom";
import {
  BannerPhotoBox,
  Breadcrumb,
  DirectorySidebar,
  SquareTitle,
} from "../../../../components";
import { directorySidebarItemsMap } from "../../Support";
import { navItemEnum } from "../../../../const";

export const AgreementOnTradeInGoodsClauses: React.FC = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    {
      label: "Support",
      href: `/support?section=${navItemEnum.entering_into_the_mainland_market}#2`,
    },
    { label: "Agreement on Trade in Goods - Clauses" },
  ];
  const navigate = useNavigate();

  const directorySidebarMap =
    directorySidebarItemsMap[navItemEnum.entering_into_the_mainland_market];
  const directoryItems = Object.keys(directorySidebarMap ?? {}) ?? [];

  return (
    <div className="w-full pb-[48px]">
      <BannerPhotoBox src={"support/support_5.png"} />
      <div id="breadcrumb">
        <Breadcrumb items={breadcrumbItems} />
      </div>
      <div className="w-full flex flex-row pt-[48px] pr-[24px]">
        <div className="flex flex-col px-[24px] min-w-[440px] w-1/3 gap-[24px]">
          <DirectorySidebar
            disabled
            directorySidebarItems={directoryItems}
            activatedItems={directoryItems[2]} // "Summary of CEPA Clauses Relating to Testing and Certification"
            setActivatedItems={() => {}}
          />
        </div>
        <div className="flex-1">
          <SquareTitle title="Agreement on Trade in Goods - Clauses" />
          <p className="text-heading-l my-[24px]">
            Article 58 - Conformity Assessment Procedures
          </p>
          <p className="text-body-m">
            1. The two sides shall seek to facilitate the acceptance of the
            results of conformity assessment procedures conducted in the other
            side, with a view to increasing efficiency and ensuring cost
            effectiveness of conformity assessments.
          </p>
          <br />
          <p className="text-body-m">
            2. In the fields of electronic and electrical products, the two
            sides shall explore and promote mutual recognition of the
            certification results of originating electronic and electrical
            products between the Mainland and Hong Kong in order to facilitate
            trade.
          </p>
          <br />
          <p className="text-body-m">
            3.The two sides agree to encourage their conformity assessment
            bodies to work more closely with a view to facilitating the mutual
            acceptance of conformity assessment results.
          </p>
          <hr className="my-[24px]" />

          <p className="my-[24px] text-heading-m">
            Article 59 - Technical Cooperation
          </p>
          <p className="text-body-m">
            3. With a view to increasing their mutual understanding of their
            respective systems, enhancing capacity building and facilitating
            trade, the two sides shall strengthen their technical cooperation in
            the following areas:
          </p>
          <br />
          <p className="text-body-m">
            (ii) Encouraging cooperation between conformity assessment bodies of
            the two sides
          </p>
          <hr className="my-[24px]" />
          <p className="mb-[24px] text-heading-m">
            Article 68 - Trade Facilitation Measures in the Guangdong-Hong
            Kong-Macao Greater Bay Area
          </p>

          <p className="text-body-m">
            The two sides agree, on the principles of mutually beneficial
            cooperation and facilitation of coordinated development, that the
            nine Pearl River Delta municipalities (note) and Hong Kong shall
            implement the following measures:
          </p>
          <br />
          <p className="text-body-m">
            (v) To promote the mutual recognition of inspection and quarantine
            results on low risk goods, except for plants and animals and
            products from plants and animals, food and medicines, between the
            two sides.
          </p>
          <br />
          <p className="text-body-m">
            (vi) To explore the expansion of the scope of acceptance of third
            party inspection, testing and certification results with respect to
            commodities and institutions, and provide expedited customs
            clearance treatment.
          </p>
          <br />
          <p className="text-italic-s italic">
            Note: The nine Pearl River Delta municipalities refer to Guangzhou,
            Shenzhen, Zhuhai, Foshan, Huizhou, Dongguan, Zhongshan, Jiangmen and
            Zhaoqing in Guangdong Province.
          </p>
          <hr className="my-[24px]" />

          <div className="flex flex-row gap-[8px] items-center">
            <img
              className="w-[16px] h-[16px]"
              src={`${process.env.PUBLIC_URL}/assets/icons/arrow_left.svg`}
              alt={"arrow left"}
            />
            <p
              className="text-highlight-l cursor-pointer"
              onClick={() => {
                const element = document.getElementById("breadcrumb");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
                navigate(
                  `/support?section=${navItemEnum.entering_into_the_mainland_market}`
                );
              }}
            >
              Back
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
