import * as React from "react";
import { SquareTitle } from "../../../components";
import { activatedButtonStyle, normalButtonStyle } from "../../../components";

export const GBA: React.FC = () => {
  const certificationTypeMap: Record<string, React.ReactNode> = {
    "First group of organisation members": (
      <>
        <p>
          Based on the principle of “Institution-led, market-driven,
          benchmarking against international standards”, the State
          Administration for Market Regulation has invited practitioners in
          Guangdong, Hong Kong and Macao to participate in taking forward the
          GBA Certification Scheme.
        </p>
        <br />
        <p>
          The GBA Certification Alliance was established in September 2022 by
          certification bodies in the three places with the support and
          coordination of the three governments, which is tasked with
          researching and formulating the implementation rules of the GBA
          Certification Scheme for voluntary adoption by the T&C industry.
          Through the coordination of the ITC, the first group of organisation
          members of the Alliance include 10 accredited T&C bodies in Hong Kong.
        </p>
      </>
    ),
    "GBA Standard items": (
      <>
        <p>
          At the Announcing Ceremony on 24 April 2023, the Guangdong
          Administration for Market Regulation announced the list of 110 GBA
          Standard items, covering 25 fields, including food quality and safety,
          Cantonese cuisine, transportation, mechanical and electrical products,
          medical care, nursing care, education, e-sports, etc.
        </p>
        <br />
        <p>
          The ITC had disseminated to the T&C industry in a timely manner the
          latest information about the list on the day of the event. We will
          continue to encourage and coordinate the active participation of the
          Hong Kong T&C industry in the GBA Certification Scheme.
        </p>
      </>
    ),
    "Publicising Hong Kong’s T&C services": (
      <>
        <p>
          We have long been publicising Hong Kong’s T&C services in the GBA. For
          example, the HKCTC has jointly participated with the local industry in
          the China Hi-tech Fair held in Shenzhen since 2016. We have also set
          up booths in the trade fairs organised in Guangzhou and Shenzhen by
          the HKTDC since 2019 to promote the strengths of Hong Kong’s T&C
          services to enterprises in the GBA.
        </p>
      </>
    ),
    Constraints: (
      <>
        <p>
          Due to the constraints imposed by the epidemic, we have duly adjusted
          our strategy to go online when promoting Hong Kong’s T&C services. In
          this regard, we have launched three rounds of digital advertising
          campaigns at various junctures with advertisements placed on a number
          of targeted popular digital platforms in the Mainland.
        </p>
        <br />
        <p>
          With the epidemic under control and the resumption of market
          activities, we would step up our online and offline promotion efforts,
          targeting manufacturers and traders in the GBA cities, with the focus
          on the competitive edges of Hong Kong’s T&C services, including high
          level of integrity, robust intellectual property protection and mature
          international network, which would add value to GBA products in
          reaching other parts of the world.
        </p>
      </>
    ),
  };

  const [activeCertificationType, setActiveCertificationType] =
    React.useState<string>(Object.keys(certificationTypeMap)[0]);

  return (
    <div className="w-full">
      <SquareTitle title="GBA Standard" />

      <div className="w-full bg-[#F7F7F5] py-[36px] px-[42px] text-body-m mt-[24px]">
        The finalised texts of “GBA Standards” and other information concerning
        the implementation have been released on the “
        <a
          href="https://www.gbsrc.org.cn/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#00E]"
        >
          Guangdong-Hong Kong-Macao Greater Bay Area Standard Information Public
          Service Platform
        </a>
        ”.
      </div>
      <div className="text-body-m my-[24px]">
        <p>
          Since the signing of Supplement VII to the Mainland and Hong Kong
          Closer Economic Partnership Arrangement (CEPA), the Mainland has been
          gradually opening up its testing and certification market to Hong
          Kong.
        </p>
        <br />
        <p>
          On 24 April 2023, GAMR hosted the “GBA Standards List Promulgation
          Ceremony” in Shenzhen to announce the list of 110 GBA standard items,
          covering 25 areas, including food, Cantonese cuisine, traditional
          Chinese medicine, transportation, elderly care, logistics etc. The
          Governments of the three places also signed a memorandum on the
          cooperation of jointly promoting the development of standards in the
          GBA.
        </p>
      </div>
      <img
        className="w-full h-auto"
        src={`${process.env.PUBLIC_URL}/assets/support/GBA_Standard.png`}
        alt="GBA Standard"
      />
      <hr className="my-[24px] text-[#E0E0E0]" />
      <SquareTitle title="GBA Certification" />
      <div>
        <div className="flex flex-wrap gap-[8px] my-[24px]">
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
        </div>
      </div>
    </div>
  );
};
