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

export const AgreementOnEconomicTechnicalCooperationClauses: React.FC = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    {
      label: "Support",
      href: `/support?section=${navItemEnum.entering_into_the_mainland_market}#2`,
    },
    { label: "Agreement on Economic and Technical Cooperation - Clauses" },
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
          <SquareTitle title="Agreement on Economic and Technical Cooperation - Clauses" />
          <p className="text-heading-l my-[24px]">Article 23(4)</p>
          <p className="text-body-m">
            Relevant authorities of the two sides will make use of existing
            cooperation channels to strengthen cooperation in the innovation of
            certification and accreditation systems, and support the
            certification, accreditation, inspection and testing organisations
            to conduct technical exchanges and cooperation.
          </p>

          <hr className="my-[24px]" />

          <p className="text-heading-l">Article 23(6)</p>
          <br />
          <p className="text-body-m">
            Actively promote cooperation between Hong Kong's testing
            laboratories and Mainland's certification bodies which are members
            of international multilateral systems on mutual recognition of
            testing and certification that are open to national member bodies
            (such as the IECEE/CB system), so that Hong Kong's testing
            laboratories can be recognised under these multilateral systems.
          </p>

          <hr className="my-[24px]" />
          <p className="text-heading-l">Article 23(7)</p>
          <br />

          <p className="text-body-m">
            Actively consider recommending an eligible certification body
            located in Hong Kong to join the International Electrotechnical
            Commission System of Conformity Assessment Schemes for
            Electrotechnical Equipment and Components (IECEE) as a National
            Certification Body (NCB) of China.
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

          <p className="text-heading-l">Article 23(8)</p>
          <br />

          <p className="text-body-m">
            Consider applications of eligible certification bodies set up by
            Hong Kong enterprises in the Mainland to become designated
            certification bodies under the China Compulsory Certification (CCC)
            System.
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
