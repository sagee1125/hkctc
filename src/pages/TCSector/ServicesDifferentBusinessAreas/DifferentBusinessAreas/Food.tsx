import React from "react";
import {
  type BusinessAreaTitle,
  handleReturnDifferentBusinessAreasBreadcrumb,
  DifferentBusinessAreasDirectorySidebar,
} from "./utils";
import { navItemEnum } from "../../../../const";
import {
  Accordion,
  BannerPhotoBox,
  Breadcrumb,
  InternalBackButton,
  MediaTemplate,
  SquareTitle,
  fullContainer,
  maxContainer,
} from "../../../../components";

const tableRowsData = [
  [
    "Chemical composition analysis for nutritional labeling",
    "Energy, Protein, Total Fat, Sodium, Sugars, Carbohydrates, Saturated fatty acids, Trans fatty acids",
  ],
  ["Microbiological examination", "Microbial indicators, Food borne pathogens"],
  [
    "Contaminants",
    "Pesticide residues, Veterinary drug residues, Metalic contaminants, Other harmful substances e.g. melamine, and phthalates",
  ],

  ["Natural toxins", "Marine toxins, Mycotoxins"],

  ["Additives", "Sweeteners, Antioxidant, Colouring matters, Preservatives"],
  ["Food contact materials", "Leachable metals, Extractives"],
  ["Food authentication", "Species identification by DNA methods"],
  [
    "Genetically modified food",
    "Qualitative and quantitative analysis by DNA method, Genetically modified traits identification",
  ],
];

export const Food: React.FC = () => {
  const businessAreaTitle = "Food" as BusinessAreaTitle;
  const data: Array<{
    title: string;
    content: React.ReactNode;
  }> = [
    {
      title: "a. Food Testing Services in Hong Kong",
      content: (
        <>
          <p>
            Incidents of food contamination and adulteration occur from time to
            time. Consumers are also becoming more aware of the safety and
            nutrition information of their food. Testing your food for quality
            and safety is one of the best ways to assure and attract your
            customers. Having your food products tested will also help to reduce
            the risk of costly recalls and lawsuits arising from breach of local
            regulations.
          </p>
          <br />
          <p className="!text-body-s !text-[#7E7E7E] my-[16px]">
            Food Testing Services Provided by Laboratories in Hong Kong
          </p>
          <div
            className="!text-body-s !text-[#2F2F2F]"
            style={{
              borderTop: "2px solid #2F2F2F",
            }}
          >
            {tableRowsData.map((row, index) => (
              <div
                key={index}
                className="grid grid-cols-[1fr,2fr] gap-[24px] py-[16px] px-[10px]"
                style={{
                  borderBottom: "1px dashed #C8CFD6",
                }}
              >
                <p>{row[0]}</p>
                <p>{row[1]}</p>
              </div>
            ))}
          </div>
        </>
      ),
    },
    {
      title: "b. Food Related Certification Services in Hong Kong",
      content: (
        <>
          <p>
            Certification bodies in Hong Kong also provide food safety related
            certification services to the food trade, e.g.:
          </p>
          <br />
          <li>Food Safety Management System Certification to ISO 22000</li>
          <br />
          <li>Food Safety System Certification to FSSC 22000</li>
          <br />
          <li>
            Hazard Analysis and Critical Control Points (HACCP) Certification
          </li>
          <br />
          <li className="underline text-[#00E]">
            Food Hygiene Standard Certification System for Catering Industry
            (FHSCS)*
          </li>
          <br />
          <li>Organic Food Certification</li>
          <br />
          <p>
            *Developed by the Hong Kong Polytechnic University, this is a food
            hygiene system based on HACCP principles and is suitable for
            catering establishments where food is prepared and served.
          </p>
        </>
      ),
    },
    {
      title: "c. Selection of Accredited Testing and Certification Services",
      content: (
        <p>
          Hong Kong Accreditation Service (HKAS) offers accreditation services
          to laboratories and certification bodies in Hong Kong. Technical
          competence and operation of accredited organizations have been
          rigorously assessed by HKAS and independent experts. Accreditation
          criteria are based on internationally recognized standards. The
          reliability of results produced by HKAS-accredited organizations can
          be assured. Moreover, HKAS, through participation in Multilateral
          Mutual Recognition Arrangements, enables conformity assessments
          results issued by HKAS-accredited organizations be widely recognised
          by accreditation bodies in other economies.
          <br />
          <br />
          To indicate their accreditation status, laboratories and certification
          bodies accredited by HKAS may issue endorsed test reports/certificates
          that bear the HKAS accreditation symbol and the registration number of
          the accredited laboratories. In some cases, accreditation status may
          be claimed by including an appropriate statement in the certificates.
          <br />
          <br />
          List of&nbsp;
          <span className="underline text-[#00E]">
            laboratories accredited for performing food testing
          </span>
          &nbsp;and&nbsp;
          <span className="underline text-[#00E]">
            certification bodies accredited for carrying out food safety
            management system certification
          </span>
          &nbsp;can be obtained from HKAS website.
        </p>
      ),
    },
    {
      title: "d. Food Ordinances in Hong Kong",
      content: (
        <p>
          The basic food law in Hong Kong is laid down in&nbsp;
          <span className="underline text-[#00E]">
            Part V of the Public Health and Municipal Services Ordinance (Cap.
            132)
          </span>
          &nbsp;. The main provisions cover general protection for food
          purchasers, offences in connection with sale of unfit food and
          adulterated food, composition and labeling of food, food hygiene,
          seizure and destruction of unfit food. Controls in specific areas are
          provided in subsidiary legislation under the Ordinance.
          <br />
          <br />
          Another food related ordinance is&nbsp;
          <span className="underline text-[#00E]">
            the Food Safety Ordinance (Cap. 612)
          </span>
          &nbsp;which provides new food safety control measures, including a
          registration scheme for food importers and food distributors and a
          requirement for food traders to maintain proper records of the
          movements of food to enhance food traceability.
          <br />
          <br />
          For more details on Food Legislation / Guidelines in Hong Kong, please
          visit the&nbsp;
          <span className="underline text-[#00E]">
            Centre for Food Safety website
          </span>
          .
        </p>
      ),
    },
  ];

  const photos: Array<{ title: string; img: string; icon?: string }> = [
    {
      title: "Food Testing and Certification",
      img: "food_1",
    },
    {
      title: "HKCTC Report 2023-24",
      img: "food_2",
    },
    {
      title: "Hong Kong's Testing and Certification for Food",
      img: "food_3",
    },
  ];

  return (
    <div style={fullContainer}>
      <BannerPhotoBox
        src={"tcSector/servicesDifferentBusinessAreas/food_banner.png"}
      />
      <div style={maxContainer}>
        <div id="breadcrumb">
          <Breadcrumb
            items={handleReturnDifferentBusinessAreasBreadcrumb(
              businessAreaTitle
            )}
          />
        </div>
        <div className="w-full flex flex-row pt-[48px] pr-[24px]">
          <div className="flex flex-col px-[24px] min-w-[440px] w-1/3 gap-[24px]">
            <DifferentBusinessAreasDirectorySidebar
              businessAreaTitle={businessAreaTitle}
            />
          </div>
          <div className="flex-1">
            <SquareTitle title={businessAreaTitle} />

            <div
              className={`my-[24px] grid grid-cols-${photos.length} gap-[24px]`}
            >
              {photos.map((item, index) => (
                <div key={index} className="w-full">
                  <MediaTemplate
                    direction="vertical"
                    title={item.title}
                    iconPath={item.icon}
                    imagePath={`/assets/tcSector/servicesDifferentBusinessAreas/${item.img}.png`}
                  />
                </div>
              ))}
            </div>

            <div className="w-full flex flex-col gap-[24px] mb-[24px]">
              {data.map((item, index) => (
                <Accordion
                  key={index}
                  title={item.title}
                  details={<div className="text-body-m">{item.content}</div>}
                />
              ))}
            </div>

            <hr className="my-[24px]" />

            <InternalBackButton
              targetUrl={`/tc-sector?section=${navItemEnum.different_business_areas}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
