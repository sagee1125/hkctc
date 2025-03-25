import React, { useState } from "react";
import {
  type BusinessAreaTitle,
  DifferentBusinessAreasDirectorySidebar,
  handleReturnDifferentBusinessAreasBreadcrumb,
} from "./utils";
import {
  BannerPhotoBox,
  Breadcrumb,
  InternalBackButton,
  MediaTemplate,
  SquareTitle,
  fullContainer,
  maxPCContainer,
  handleGetPaginatorProp,
  maxMobileContainer,
} from "../../../../components";
import { navItemEnum } from "../../../../const";
import { Language, useSettings } from "../../../../context";

const multilingual = {
  en: {
    title: "Medical Testing",
    file: "What You Need to Know about Medical Testing",
    benefits_of: "Benefit of Medical Testing & Certification",
    reliable_test: `Reliable test results are crucial for proper diagnosis and treatment. The technical competence of a laboratory depends on a number of factors including equipment, sampling procedure and qualifications of chemists. Each aspect of them could affect the accuracy of test results.`,
    accreditation_is: (
      <>
        Accreditation is the third-party recognition to affirm a medical
        laboratory’s competence to carry out specific testing services in
        accordance with international standards. In Hong Kong, the Hong Kong
        Accreditation Service of the Government provides accreditation to
        medical laboratories through the&nbsp;
        <a
          href="https://www.itc.gov.hk/en/quality/hkas/accreditation/hoklas.html"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#00E]"
        >
          Hong Kong Laboratory Accreditation Scheme (HOKLAS)
        </a>
        . It is a voluntary scheme open to participation from any medical
        laboratories.
      </>
    ),

    why_should_we_use: "Why Should We Use Accredited Medical Testing Service?",
    the_accreditation_criteria: `The accreditation criteria of HOKLAS are in accordance with ISO 15189 "Medical laboratories - Requirements for quality and competence", which contains both management and technical requirements. For example, laboratories should set up an effective management system, follow strictly the procedures and document any instructions related to test operations.`,
    to_get_accreditation: `To get accreditation, the testing service of a medical laboratory will need to be rigorously assessed by independent medical experts against international standards. After obtaining the accreditation, the laboratory will also need to undergo regular review to ensure its conforming to the professional technical standards. Quality of test results provided by accredited medical laboratories is thus assured.`,
    laboratories:
      "Laboratories Accredited by HKAS Providing Testing Services on Medical Testing",
    bottom: (
      <>
        The laboratories providing accredited testing services on Medical
        Testing are available at&nbsp;
        <a
          href="https://www.itc.gov.hk/en/quality/hkas/conformity_assessment_bodies/index.html"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#00E]"
        >
          HKAS's website
        </a>
        .
      </>
    ),

    //

    examples_of:
      "Examples of toy inspection services are factory inspections of the manufacturing processes and pre-shipment inspections at the factory to determine whether the batch of toy products complies with the buyer's specifications.",

    product_certification:
      "Product certification is required for toys, e.g. China Compulsory Certification (CCC) System.",
  },
  cn: {
    title: "醫務化驗",
    file: "選擇醫務化驗須知",
    benefits_of: "醫務化驗和認證帶來的好處",
    reliable_test:
      "可靠的化驗結果對作出適當診斷與治療十分重要。化驗所的技術能力取決於多項條件，包括設備、樣本處理程序和化驗員的資歷水平，每個環節均有機會影響化驗報告的準確性。",

    accreditation_is: (
      <>
        認可是由第三方發出證明，確認化驗所有能力根據國際標準提供特定的測試服務。在香港，政府轄下的香港認可處透過
        <a
          href="https://www.itc.gov.hk/en/quality/hkas/accreditation/hoklas.html"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#00E]"
        >
          「實驗所認可計劃」（HOKLAS）
        </a>
        為本港醫務化驗所提供認可資格，計劃屬自願參與性質。
      </>
    ),
    why_should_we_use: "為什麼須要使用經認可的醫務化驗服務？",
    the_accreditation_criteria:
      "「實驗所認可計劃」的認可準則是根據ISO 15189《醫務化驗所－質量及能力的要求》而制定，包含管理和技術要求，例如化驗所須設立有效的管理制度，每項測試步驟均須嚴格遵從和清楚記錄等。",
    to_get_accreditation: `要獲得認可資格，化驗所的測試服務會由獨立技術專家根據國際標準嚴格審查。化驗所獲取認可資格後，仍須接受定期評審，確保持續符合應有的專業技術水平。因此，認可化驗所發出的化驗結果質素得以保證。`,
    laboratories: "獲香港認可處認可的醫務化驗測試實驗所",
    bottom: (
      <>
        獲香港認可處認可的醫務化驗測試實驗所名單，請瀏覽
        <a
          href="https://www.itc.gov.hk/en/quality/hkas/conformity_assessment_bodies/index.html"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#00E]"
        >
          香港認可處網頁
        </a>
        。
      </>
    ),

    //

    examples_of:
      "玩具檢驗服務的例子包括檢驗工廠的生產過程，以及在產品付運前，確定有關玩具產品是否符合買方的規格及要求。",
  },
};

export const MedicalTesting: React.FC = () => {
  const { isPC, language } = useSettings();
  const isEn = language === Language.EN;
  const page_text = isEn ? multilingual.en : multilingual.cn;
  const {
    title,
    file,
    benefits_of,
    reliable_test,
    accreditation_is,
    why_should_we_use,
    the_accreditation_criteria,
    to_get_accreditation,
    laboratories,
    bottom,
  } = page_text;
  const businessAreaTitle = title as BusinessAreaTitle;
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 9;
  const listData = [
    // 1
    {
      name: "Bright Growth Medical Laboratory Limited",
      regNo: "870S",
    },
    {
      name: "Canossa Hospital (Caritas) Management Company Limited - Clinical Laboratory",
      regNo: "835S",
    },
    {
      name: "CareLink Bioscience Limited",
      regNo: "835S",
    },

    // 4
    {
      name: "Chan & Hou Medical Laboratories Ltd.",
      regNo: "834S",
    },
    {
      name: "China Inspection Medical Laboratories Limited",
      regNo: "851S",
    },
    {
      name: "Codex Genetics Limited",
      regNo: "869S",
    },
    // 7
    {
      name: "CUHK Medical Centre - Department of Pathology",
      regNo: "858S",
    },
    // 8
    {
      name: "Department of Health - Centre for Health Protection, Public Health Laboratory Services Branch, Chemical Pathology and Haematology Division*#",
      regNo: "813P",
    },
    // 9
    {
      name: "Department of Health - Centre for Health Protection, Public Health Laboratory Services Branch, Histopathology and Cytology Division*#",
      regNo: "803P",
    },
    // 10
    {
      name: "Department of Health - Centre for Health Protection, Public Health Laboratory Services Branch, Microbiology Division*#",
      regNo: "801P",
    },
    // 11
    {
      name: "Diagnostix Medical Centre Ltd.",
      regNo: "806S",
    },
    // 12
    {
      name: "Diagnostix Pathology Laboratories Ltd.",
      regNo: "802P",
    },
    // 13
    {
      name: "Evangel Hospital - Laboratory",
      regNo: "863S",
    },
    // 14
    {
      name: "FZ Public Health Laboratory Company Limited	",
      regNo: "855S",
    },
    // 15
    {
      name: "GenieBiome (Diagnostic) Co. Ltd. - G-NiiB Molecular & MicroBiome Laboratory",
      regNo: "872S",
    },
    // 16
    {
      name: "GHK Hospital Limited - Gleneagles Hospital Hong Kong, Department of Clinical Laboratory",
      regNo: "842S",
    },
    // 17
    {
      name: "HKSH Medical Group Limited - Department of Pathology",
      regNo: "852P",
    },
    // 18
    {
      name: "Hong Kong Baptist Hospital - Pathology Department",
      regNo: "844P",
    },
    {
      name: "Hong Kong Health Check and Medical Diagnostic Centre Limited - Hong Kong Health Check Medical Laboratory",
      regNo: "845S",
    },

    // 20
    {
      name: "Hong Kong Molecular Pathology Diagnostic Centre Limited",
      regNo: "838S",
    },
    // 21
    {
      name: "Hong Kong Precision Pathology Laboratory Limited",
      regNo: "865S",
    },
    // 22
    {
      name: "Hospital Authority - Alice Ho Miu Ling Nethersole Hospital, Department of Pathology",
      regNo: "808P",
    },
    {
      name: "Hospital Authority - Caritas Medical Centre, Department of Clinical Pathology",
      regNo: "830P",
    },
    {
      name: "Hospital Authority - Hong Kong Children's Hospital, Department of Pathology",
      regNo: "871P",
    },
    // 25
    {
      name: "Hospital Authority - Hong Kong East Cluster, Department of Clinical Pathology",
      regNo: "821P",
    },
    {
      name: "Hospital Authority - Hong Kong Red Cross Blood Transfusion Service*",
      regNo: "816P",
    },
    {
      name: "Hospital Authority - Kwong Wah Hospital, Department of Pathology",
      regNo: "833P",
    },
    // 28
    {
      name: "Hospital Authority - North District Hospital, Department of Pathology",
      regNo: "810P",
    },
    {
      name: "Hospital Authority - Princess Margaret Hospital, Department of Pathology",
      regNo: "826P",
    },
    // 30
    {
      name: "Hospital Authority - Queen Elizabeth Hospital, Department of Pathology",
      regNo: "867P",
    },
    {
      name: "Hospital Authority - Tsan Yuk Hospital, Prenatal Diagnostic Laboratory",
      regNo: "832S",
    },
    {
      name: "Hospital Authority - Tseung Kwan O Hospital, Department of Pathology",
      regNo: "815P",
    },
    // 33
    {
      name: "Hospital Authority - Tuen Mun Hospital, Department of Clinical Pathology",
      regNo: "837P",
    },
    {
      name: "Hospital Authority - United Christian Hospital, Department of Pathology",
      regNo: "817P",
    },
    // 35
    {
      name: "Hospital Authority - Yan Chai Hospital, Department of Pathology",
      regNo: "829P",
    },
    {
      name: "In Touch, Limited - Histopathology Laboratory",
      regNo: "868P",
    },
    // 37
    {
      name: "iPath Laboratory Limited",
      regNo: "840P",
    },
    // 38
    {
      name: "KingMed Diagnostics (Hong Kong) Limited",
      regNo: "822S",
    },
    // 39
    {
      name: "Lee's Pharm Genomics Lab Limited",
      regNo: "860S",
    },
    // 40
    {
      name: "Medtimes Molecular Laboratory Limited",
      regNo: "856S",
    },
    {
      name: "New Life Laboratory Testing Limited",
      regNo: "866S",
    },
    {
      name: "Onco Medical Laboratory Ltd.",
      regNo: "823S",
    },
    // 43
    {
      name: "Pangenia Lifesciences Limited",
      regNo: "862S",
    },
    // 44
    {
      name: "PathLab Medical Laboratories Limited",
      regNo: "805S",
    },
    // 45
    {
      name: "Precious Blood Hospital (Caritas) - Clinical Pathology Laboratory",
      regNo: "849S",
    },
    // 46
    {
      name: "Prenetics Limited",
      regNo: "827S",
    },
    // 47
    {
      name: "Quality Healthcare Medical Services Limited - Alpha Medical Diagnostic Centre",
      regNo: "819S",
    },
    // 48
    {
      name: "Seventh-Day Adventist Corporation (HK) Limited - Clinical Laboratories, Adventist Health",
      regNo: "825S",
    },
    // 49
    {
      name: "St. Paul’s Hospital - Pathology Department",
      regNo: "846P",
    },
    // 50
    {
      name: "St. Teresa's Hospital - Clinical Laboratory",
      regNo: "861S",
    },
    // 51
    {
      name: "St. Teresa's Hospital - Histopathology Laboratory",
      regNo: "811P",
    },
    // 52
    {
      name: "The Chinese University of Hong Kong - Department of Obstetrics and Gynaecology, Obstetrics Screening Laboratory",
      regNo: "841S",
    },
    // 53
    {
      name: "The Hong Kong Polytechnic University - Molecular Diagnostic Laboratory",
      regNo: "854S",
    },
    // 54
    {
      name: "UCN Diagnostic Services - Pathology Laboratory",
      regNo: "843S",
    },
    // 55
    {
      name: "Xcelom Limited - Xcelom Microbiology Laboratory",
      regNo: "850S",
    },
  ];

  const listRowRender: React.ReactNode[] = listData.map((item, index) => (
    <div
      key={index}
      className="grid grid-cols-[1fr,8fr,2fr] gap-[10px] !text-body-m h-[70px]"
    >
      <p className="flex items-center justify-center px-[10px] h-full text-center">
        {(index + 1).toString().padStart(2, "0")}
      </p>
      <p className="flex items-center justify-start px-[10px] h-full">
        {item.name}
      </p>
      <a
        className="flex items-center justify-center px-[10px] h-full underline text-links text-center"
        target="_blank"
        rel="noopener noreferrer"
        href={`https://www.itc.gov.hk/en/quality/hkas/doc/scopes/${item.regNo}.pdf`}
      >
        {item.regNo}
      </a>
    </div>
  ));

  const { currentPageData, startIndex, endIndex } = handleGetPaginatorProp(
    currentPage,
    itemsPerPage,
    listRowRender
  );

  const sidebar = (
    <DifferentBusinessAreasDirectorySidebar
      businessAreaTitle={businessAreaTitle}
    />
  );

  const content = (
    <>
      <SquareTitle title={businessAreaTitle} />

      <div className="mt-[24px]">
        <MediaTemplate
          title={file}
          imagePath="/assets/tcSector/servicesDifferentBusinessAreas/medicalTestingEvent.png"
          mediaLink="https://www.hkctc.gov.hk/en/doc/HKCTC_Leaflet_Medical.pdf"
        />
      </div>
      <p className="text-heading-l my-[24px]">{benefits_of}</p>

      <img
        className="w-full h-auto"
        src={`${process.env.PUBLIC_URL}/assets/tcSector/servicesDifferentBusinessAreas/Accredited-Medical-Testing-Service-1.png`}
        alt="Accredited Medical Testing Service"
      />

      <p className="text-body-m mt-[24px] text-justify">
        {reliable_test}
        <br />
        <br />
        {accreditation_is}
      </p>
      <hr className="my-[24px]" />

      <p className="text-heading-l mb-[24px]">{why_should_we_use}</p>

      <img
        className="w-full h-auto"
        src={`${process.env.PUBLIC_URL}/assets/tcSector/servicesDifferentBusinessAreas/Accredited-Medical-Testing-Service-2.png`}
        alt="Accredited Medical Testing Service"
      />
      <p className="text-body-m mt-[24px] text-justify">
        {the_accreditation_criteria}
        <br /> <br />
        {to_get_accreditation}
      </p>
      <hr className="my-[24px] text-[#E0E0E0]" />
      {/* <>
        <p className="text-heading-l">
          c. Find an Accredited Medical Laboratory
        </p>
        <div className="w-full bg-[#F7F7F5] py-[36px] px-[42px] my-[24px] text-body-m">
          Please note that accreditation is test-specific. When choosing medical
          laboratories, please check their respective scope of accreditation
          from the above “List of Medical Laboratories Accredited under HOKLAS”,
          or from the&nbsp;
          <a
            href="https://www.itc.gov.hk/en/quality/hkas/conformity_assessment_bodies/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-links"
          >
            HKAS's website
          </a>
          .
        </div>
        <p className="text-body-m">
          (As at 11 Nov 2024)
          <br />
          <br />
          Remarks: Accreditation is test-specific. Please check the scope of
          accreditation of medical laboratories by clicking the respective
          HOKLAS Registration No. in the table below, or visit the&nbsp;
          <a
            href="https://www.itc.gov.hk/en/quality/hkas/conformity_assessment_bodies/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-links"
          >
            HKAS's website
          </a>
          .
        </p>

        <Paginator
          dataSet={listRowRender}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          itemsPerPage={itemsPerPage}
          startIndex={startIndex}
          endIndex={endIndex}
        />
        <div className="my-[24px]">
          <List
            title={
              <div className="grid grid-cols-[1fr,8fr,2fr] !text-highlight-m h-[70px]">
                <div />
                <p className="flex items-center justify-start px-[10px] h-full">
                  Name of Accredited Medical Laboratory (in alphabetical order)
                </p>
                <p className="flex items-center justify-center text-center px-[10px] h-full w-full">
                  HOKLAS Registration No.
                </p>
              </div>
            }
            rowData={currentPageData}
          />
        </div>
        <div
          style={{
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "300",
            lineHeight: "22px",
          }}
        >
          *&nbsp;denotes a medical laboratory which normally does not offer
          testing service to the public.
          <br />
          #&nbsp;denotes a medical laboratory which is under the specified
          departments of the Government.
        </div>
      </> */}

      <p className="text-heading-l">{laboratories}</p>
      <p className="text-body-m pt-[24px]">{bottom}</p>
      <hr className="my-[24px]" />

      <InternalBackButton
        targetUrl={`/tc-sector?section=${navItemEnum.different_business_areas}`}
      />
    </>
  );
  return (
    <div style={fullContainer}>
      <BannerPhotoBox
        src={
          "tcSector/servicesDifferentBusinessAreas/medicalTesting_banner.png"
        }
      />
      <div style={isPC ? maxPCContainer : maxMobileContainer}>
        {isPC && (
          <div id="breadcrumb">
            <Breadcrumb
              items={handleReturnDifferentBusinessAreasBreadcrumb(
                businessAreaTitle,
                language
              )}
            />
          </div>
        )}

        {isPC ? (
          <div className="w-full flex flex-row pt-[48px] pr-[24px]">
            <div className="flex flex-col px-[24px] min-w-[440px] w-1/3 gap-[24px]">
              <div className="sticky top-[20px]">{sidebar}</div>
            </div>
            <div className="flex-1">{content}</div>
          </div>
        ) : (
          <div className="px-[24px] pb-[24px] flex flex-col gap-[24px]">
            <div>{sidebar}</div>
            <div>{content}</div>
          </div>
        )}
      </div>
    </div>
  );
};
