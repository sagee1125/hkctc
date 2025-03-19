import * as React from "react";
import { SquareTitle } from "../../../components";
// import { activatedButtonStyle, normalButtonStyle } from "../../../components";

export const GBA: React.FC = () => {
  // const certificationTypeMap: Record<string, React.ReactNode> = {
  //   "First group of organisation members": (
  //     <>
  //       <p>
  //         Based on the principle of “Institution-led, market-driven,
  //         benchmarking against international standards”, the State
  //         Administration for Market Regulation has invited practitioners in
  //         Guangdong, Hong Kong and Macao to participate in taking forward the
  //         GBA Certification Scheme.
  //       </p>
  //       <br />
  //       <p>
  //         The GBA Certification Alliance was established in September 2022 by
  //         certification bodies in the three places with the support and
  //         coordination of the three governments, which is tasked with
  //         researching and formulating the implementation rules of the GBA
  //         Certification Scheme for voluntary adoption by the T&C industry.
  //         Through the coordination of the ITC, the first group of organisation
  //         members of the Alliance include 10 accredited T&C bodies in Hong Kong.
  //       </p>
  //     </>
  //   ),
  //   "GBA Standard items": (
  //     <>
  //       <p>
  //         At the Announcing Ceremony on 24 April 2023, the Guangdong
  //         Administration for Market Regulation announced the list of 110 GBA
  //         Standard items, covering 25 fields, including food quality and safety,
  //         Cantonese cuisine, transportation, mechanical and electrical products,
  //         medical care, nursing care, education, e-sports, etc.
  //       </p>
  //       <br />
  //       <p>
  //         The ITC had disseminated to the T&C industry in a timely manner the
  //         latest information about the list on the day of the event. We will
  //         continue to encourage and coordinate the active participation of the
  //         Hong Kong T&C industry in the GBA Certification Scheme.
  //       </p>
  //     </>
  //   ),
  //   "Publicising Hong Kong’s T&C services": (
  //     <>
  //       <p>
  //         We have long been publicising Hong Kong’s T&C services in the GBA. For
  //         example, the HKCTC has jointly participated with the local industry in
  //         the China Hi-tech Fair held in Shenzhen since 2016. We have also set
  //         up booths in the trade fairs organised in Guangzhou and Shenzhen by
  //         the HKTDC since 2019 to promote the strengths of Hong Kong’s T&C
  //         services to enterprises in the GBA.
  //       </p>
  //     </>
  //   ),
  //   Constraints: (
  //     <>
  //       <p>
  //         Due to the constraints imposed by the epidemic, we have duly adjusted
  //         our strategy to go online when promoting Hong Kong’s T&C services. In
  //         this regard, we have launched three rounds of digital advertising
  //         campaigns at various junctures with advertisements placed on a number
  //         of targeted popular digital platforms in the Mainland.
  //       </p>
  //       <br />
  //       <p>
  //         With the epidemic under control and the resumption of market
  //         activities, we would step up our online and offline promotion efforts,
  //         targeting manufacturers and traders in the GBA cities, with the focus
  //         on the competitive edges of Hong Kong’s T&C services, including high
  //         level of integrity, robust intellectual property protection and mature
  //         international network, which would add value to GBA products in
  //         reaching other parts of the world.
  //       </p>
  //     </>
  //   ),
  // };

  // const [activeCertificationType, setActiveCertificationType] =
  //   React.useState<string>(Object.keys(certificationTypeMap)[0]);

  return (
    <div className="w-full">
      <SquareTitle title="Guangdong-Hong Kong-Macao Greater Bay Area (GBA) Standards" />

      <div className="text-body-m my-[24px]">
        <p>
          With a view to improving product and service quality, as well as
          promoting the interconnectivity and integrated development of the
          Guangdong, Hong Kong and Macao, the governments of the three places
          signed a Memorandum of Understanding on jointly promoting the
          development of GBA Standards on April 24, 2023, and promulgated the
          first batch of a total of 110 GBA Standards.
        </p>
        <br />
        <p>
          To date, a total of 215 GBA Standards have been developed and
          promulgated, covering items in the fields of food quality and safety,
          Cantonese cuisine, prepared dishes, transportation, mechanical and
          electrical products, as well as medical care, nursing care, education,
          e-sports and environmental, social and governance, etc.
        </p>

        <br />
        <p>
          The trades are welcome to adopt GBA Standards on a voluntary basis.
        </p>

        <br />
        <p className="font-bold">Information about GBA Standards</p>

        <br />
        <p>
          Information about GBA Standards can be found on the Guangdong-Hong
          Kong-Macao Greater Bay Area Standard Information Public Service
          Platform managed by the GBA Standardisation Research Center.
        </p>
        <br />
        <p>
          The Trade and Industry Department (TID) is responsible for
          co-ordinating the participation of the Government of the Hong Kong
          Special Administrative Region (HKSARG) in the work on the GBA
          Standards. The TID also disseminates information about GBA Standards
          to the trades through issuing Commercial Information Circulars.
        </p>

        <br />

        <p className="font-bold">Formulation of GBA Standards</p>
        <br />

        <p>
          The GBA Standardisation Research Center accepts applications for
          formulating GBA Standards all year round. Trade associations,
          enterprises or organisations of Guangdong, Hong Kong and Macao are
          welcome to jointly draw up GBA Standards in accordance with the
          specific requirements set out in the "Guidelines on Applications for
          GBA Standards"(in Chinese only), and submit applications to the GBA
          Standardisation Research Center.
        </p>
      </div>
      <hr className="my-[24px] text-[#E0E0E0]" />
      <SquareTitle title="GBA Certification" />
      <div className="mt-[24px]">
        <p>
          With the support and coordination of the governments of Guangdong,
          Hong Kong and Macao, certification bodies of the three places jointly
          established the "GBA Certification Alliance" in September 2022 to take
          forward the market-driven voluntary certification scheme - GBA
          Certification. The Alliance registered an entity in Guangdong, namely
          the Guangdong-Hong Kong-Macao Greater Bay Area Certification Promotion
          Center, in September 2023 to represent it in dealing with matters
          relating to GBA Certification.
        </p>
        <br />
        <p>
          The first batch of GBA Certification containing 15 certification
          schemes were announced at a ceremony held in Shenzhen on 19 December
          2023. To date, over 50 schemes have been developed and over 100
          certificates have been issued, covering products in various fields
          e.g. food, electrical appliances, construction materials, etc.
        </p>

        <br />
        <p>
          Information about GBA Certification is available on the GBA
          Certification Public Service Platform. Enterprises interested in the
          GBA Certification schemes are welcome to contact the Guangdong-Hong
          Kong-Macao Greater Bay Area Certification Promotion Center.{" "}
        </p>
        {/* Updated at 16/03/2025 according to the docs  */}
        {/* <div className="flex flex-wrap gap-[8px] my-[24px]">
          {Object.keys(certificationTypeMap).map((btn, index) => {
            const isActivated = btn === activeCertificationType;
            return (
              <button
                key={index}
                style={isActivated ? activatedButtonStyle : normalButtonStyle}
                onClick={() => {
                  setActiveCertificationType(btn);
                }}
              >
                <p className="text-highlight-xs">{btn}</p>
              </button>
            );
          })}
        </div>
        <div className="mt-[16px] text-body-m">
          {certificationTypeMap[activeCertificationType]}
        </div> */}
      </div>
    </div>
  );
};
