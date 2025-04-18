import React, { useState } from "react";
import {
  type BusinessAreaTitle,
  DifferentBusinessAreasDirectorySidebar,
  handleReturnDifferentBusinessAreasBreadcrumb,
} from "./utils";
import {
  Accordion,
  BannerPhotoBox,
  Breadcrumb,
  FileTemplate,
  InternalBackButton,
  MediaTemplate,
  SquareTitle,
  activatedPagingButtonStyle,
  fullContainer,
  maxMobileContainer,
  maxPCContainer,
  normalPagingButtonStyle,
} from "../../../../components";
import { navItemEnum } from "../../../../const";
import { Icon } from "@iconify/react";
import { Language, useSettings } from "../../../../context";

type HyperlinkData = {
  label: string;
  labelCN: string;
  link: string;
  tcLink?: string;
  scLink?: string;
};
enum CertificationBodies {
  Castco,
  Fugro,
  HongKongQuality,
  SGS,
  Takwin,
  MINSEN,
}
const certificationBodiesMap: Record<CertificationBodies, HyperlinkData> = {
  [CertificationBodies.Castco]: {
    label: "Castco Certification Services Ltd.",
    labelCN: "佳力高認證服務有限公司",
    link: "https://www.itc.gov.hk/en/quality/hkas/doc/scopes/CB009.pdf",
  },
  [CertificationBodies.Fugro]: {
    label: "Fugro Certification Services Ltd.",
    labelCN: "輝固認證服務有限公司",
    link: "https://www.itc.gov.hk/en/quality/hkas/doc/scopes/CB009.pdf",
  },
  [CertificationBodies.HongKongQuality]: {
    label: "Hong Kong Quality Assurance Agency",
    labelCN: "香港品質保證局",
    link: "https://www.itc.gov.hk/en/quality/hkas/doc/scopes/CB001.pdf",
  },
  [CertificationBodies.SGS]: {
    label: "SGS Hong Kong Ltd.",
    labelCN: "香港通用檢測認證有限公司",
    link: "https://www.itc.gov.hk/en/quality/hkas/doc/scopes/CB003.pdf",
  },
  [CertificationBodies.Takwin]: {
    label: "Takwin (Hong Kong) Ltd.",
    labelCN: "德永(香港)有限公司",
    link: "https://www.itc.gov.hk/en/quality/hkas/doc/scopes/CB020.pdf",
  },
  [CertificationBodies.MINSEN]: {
    label: "MINSEN Certification (Asia) Ltd.",
    labelCN: "明晟認證(亞洲)有限公司",
    link: "https://www.itc.gov.hk/en/quality/hkas/doc/scopes/CB012.pdf",
  },
};

const schemeOwnerCol: HyperlinkData[] = [
  {
    label: certificationBodiesMap[CertificationBodies.HongKongQuality].label,
    labelCN:
      certificationBodiesMap[CertificationBodies.HongKongQuality].labelCN,
    link: "https://www.hkqaa.org/en/home?catid=1",
    tcLink: "https://www.hkqaa.org/tc/home?catid=1",
    scLink: "https://www.hkqaa.org/sc/home?catid=1",
  },
  ...Array(4).fill({
    label: "Hong Kong Institute of Steel Construction",
    labelCN: "香港鋼結構學會",
    link: "https://www.hkisc.org/",
    tcLink: "https://www.hkisc.org/",
    scLink: "https://www.hkisc.org/",
  }),
  ...Array(6).fill({
    label: "Hong Kong Concrete Institute",
    labelCN: "香港混凝土學會",
    link: "https://www.hongkongci.org/",
    tcLink: "https://www.hongkongci.org/",
    scLink: "https://www.hongkongci.org/",
  }),
  ...Array(3).fill({
    label: certificationBodiesMap[CertificationBodies.Castco].label,
    labelCN: certificationBodiesMap[CertificationBodies.Castco].labelCN,
    link: "https://en.castcocert.com/productcert",
    tcLink: "https://www.castcocert.com/productcert",
    scLink: "https://www.castcocert.com/productcert",
  }),
  ...Array(2).fill({
    label: "Hong Kong Institution of Plumbing and Drainage Ltd.",
    labelCN: "香港給排水學會有限公司",
    link: "https://www.hkipd.com.hk/index.php?lang=en",
    tcLink: "https://www.hkipd.com.hk/index.php?lang=hk",
    scLink: "https://www.hkipd.com.hk/index.php?lang=hk",
  }),
  {
    label:
      "Hong Kong Association for Testing, Inspection and Certification Ltd.",
    labelCN: "香港測檢認證協會有限公司",
    link: "https://www.hktic.org/zh_HK/pccs_pp",
    tcLink: "https://www.hktic.org/zh_HK/pccs_pp",
    scLink: "https://www.hktic.org/zh_CN/pccs_pp",
  },
];

const itemsPerPage = 9;
export const ConstructionMaterialsBuildings: React.FC = () => {
  const { isPC, language, getPageText, getSingleText } = useSettings();
  const [currentPage, setCurrentPage] = useState(0);

  const multilingual = {
    en: {
      title: "Construction Materials and Buildings",
      file: "Hong Kong's Testing and Certification Services for Construction Materials and Buildings",
      prod_cert: "Product Certification - An Upstream Quality Control",
      whats_pc: "What is Product Certification?",
      pc_def: [
        "A product certification scheme stipulates a set of rules and procedures for suppliers of specific products to comply with.",
        "A third party certification body will conduct rigorous evaluation on the product manufacturer in accordance with the specifications, and may issue a certificate to confirm that a product of a given supplier satisfies the requirements set out in the specified certification scheme.",
      ],
      benefits_of: "Product Certification for Construction Materials",
      whats_benefits_of_pc: "What are the Benefits of Product Certification?",
      whats_benefits_of_pc_detail: [
        "Promoting product quality through upstream control",
        "Ensuring consistency in production quality through continuous surveillance of production process in the factory",
        "Giving greater confidence on product quality to recognized standards",
        "Reducing the risk of failure in on-site compliance testing, hence reducing the risk of project delay in case reordering is required, as well as avoiding wasting time and money",
        "Feature Article on Benefits of Product Certification",
      ],
      laboratory_and_on_site: "Laboratory and on-site testing services",
      local_prod:
        "Local Product Certification Schemes for Construction Materialst",
      the_following_prod: `The following product certification schemes are available in Hong Kong (as at 30 September 2022):`,
      table_headers: [
        "Product",
        "Name of Scheme",
        "Scheme Owner",
        "Certification Bodies Accredited by Hong Kong Accreditation Service",
      ],
      inspection_services: "Inspection Services",
      inspection_services_desc: [
        "Assessment of welding procedures in construction projects",
        "Inspection on production of construction materials (e.g., waterworks and paint)",
        "Indoor air quality measurement and inspection",
      ],
      indoor_air: "Indoor Air Quality Measurement and Inspection",

      laboratories:
        "Laboratories Accredited by HKAS Providing Testing Services on Construction Materials",
      bottom: (
        <>
          Details of the laboratories providing the public with accredited
          construction materials testing services are available at&nbsp;
          <a
            aria-label="HKAS's website  – opens in a new tab"
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
      to_improve_indoor_air:
        "To improve indoor air quality (IAQ) and promote public awareness, a voluntary IAQ Certification Scheme is launched by the Environmental Protection Department. IAQ inspection bodies provide the following measurement and inspection services for the IAQ Certification Scheme:",
      to_improve_indoor_air_ways: [
        "Walk-through inspection of premises/buildings",
        "On-site measurements of IAQ parameters (e.g., air movement, carbon monoxide and volatile organic compounds)",
        "IAQ compliance assessment",
      ],
      testing_and_inspection_title:
        "Testing and Inspection Services for Construction Materials and Buildings",
      testing_and_inspection:
        "Testing and Inspection Services for Construction Materials and Buildings",
      more_info: (
        <>
          More information is available on the&nbsp;
          <a
            aria-label="visit the website"
            href="https://www.iaq.gov.hk/en/home/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#00E]"
          >
            website
          </a>
          .
        </>
      ),
      col_one: [
        "Concrete",
        "Fire Doors and Partition Walls",
        "Heat-soaked Tempered Glass",
        "Aluminum Window",
        "Frictional Hinges for Aluminum Window",
        "Tile Adhesives",
        "Cement Products",
        "Ceramic Tiles",
        "Repair Mortars",
        "Mesh Reinforcement",
        "Aggregates for Concrete",
        "Standard Sands",
        "Replacement Sands",
        "Mechanical Couplers",
        "Drainage uPVC Pipe and Fitting",
        "Close-coupled Water Closet Suites",
        "Paint",
      ],
      col_two: [
        "Quality Scheme for the Production and Supply of Concrete",
        "Product Conformity Certification Scheme for Passive Fire Protection Products",
        "Product Conformity Certification Scheme for Heat Soaked Tempered Glass",
        "Product Conformity Certification Scheme for Aluminum Window",
        "Product Conformity Certification Scheme for Frictional Hinges",
        "Product Conformity Certification Scheme for Tile Adhesives",
        "Product Conformity Certification Scheme for Cement Products",
        "Product Conformity Certification Scheme for Ceramic Tiles",
        "Product Conformity Certification Scheme for Repair Mortar",
        "Product Conformity Certification Scheme for Mesh Reinforcement",
        "Product Conformity Certification Scheme - Aggregates for Concrete",
        "Quality Scheme for Standard Sand",
        "Quality Scheme for Replacement Sand",
        "Product Conformity Certification Scheme for Mechanical Couplers",
        "Product Conformity Certification Scheme for uPVC Pipe and Fittings for Foul Water Drainage Above Ground",
        "Product Conformity Certification Scheme for Close-coupled Water Closet Suites",
        "Product Conformity Certification Scheme for Paint Products",
      ],
      how_manufacturer: "How does a Manufacturer get its Products Certified?",
      how_manufacturer_ways: [
        "The certification process starts with the manufacturer selecting an accredited certification body",
        "The accredited certification body then makes an initial evaluation for the manufacturer including factory assessment of production and on-site selection for testing of one or more samples of products representative of the production",
        "Next, surveillance visits will be conducted at periodic intervals including audit testing of selected samples; and",
        "Re-evaluation is undertaken at three-year intervals including audit testing of selected samples.",
      ],
      use_of_prod_HA:
        "Use of Product Certification by Housing Authority and Information on its Suppliers",
      use_of_prod_HA_detail: (
        <>
          The Hong Kong Housing Authority (HA) is a pioneer in using certified
          construction products in their building projects. A number of
          suppliers are able to provide many of the certified products in the
          table in (c) above. Information on these suppliers is available
          at&nbsp;
          <a
            aria-label="HA's product certification webpage"
            className="underline text-links"
            href="https://www.housingauthority.gov.hk/en/business-partnerships/resources/construction-product-certification/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            HA's product certification webpage
          </a>
          &nbsp;(OR&nbsp;
          <a
            aria-label="contact list of relevant manufacturers or suppliers"
            className="underline text-links"
            href="https://www.housingauthority.gov.hk/en/common/pdf/business-partnerships/resources/construction-product-certification/ManufacturersOrSuppliers-ProductCertStatus(20220930)_EngW3C.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            contact list of relevant manufacturers or suppliers
          </a>
          ). Certification bodies may also provide information on the suppliers
          for which their construction products have been certified.
        </>
      ),

      to_facilitate:
        "To facilitate the implementation of the Mandatory Building Inspection Scheme, HOKLAS-accredited laboratories are providing the following building diagnostic tests to help registered personnel in obtaining objective evidence on building conditions such as concrete strength, water seepage, corrosion and spalling concrete to ensure building safety:",
      to_facilitate_ways: [
        "Carbonation test",
        "Chloride content determination",
        "Covermeter survey",
        "Half-cell potential measurement",
        "Infrared thermography",
        "Resistivity measurement",
        "Surface hardness measurement",
        "Surface penetration radar survey",
        "Ultrasonic pulse velocity measurement",
      ],
      NA: "Accredited certification body not yet available",
      services_below: "The services below are available in Hong Kong:",
      services_below_desc: [
        "Physical testing of construction materials",
        "Foundation and geotechnical testing",
        "Non-destructive testing on concrete, welds and steel",
        "Functional and durability testing of building components",
        "Chemical analysis of construction materials (e.g., concrete, cement, aggregate and steel)",
        "Calibration of construction materials testing equipment and other equipment",
        "On-site building diagnostic testing",
      ],
      building_diagnostic: "Building Diagnostic Testing",
      use_of_prod_BEAM:
        "Use of Product Certification under BEAM Plus New Buildings",
      use_of_prod_BEAM_detail_1: (
        <>
          <a
            aria-label="BEAM Plus"
            href="https://www.hkgbc.org.hk/eng/beam-plus/introduction/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-links"
          >
            BEAM Plus
          </a>
          &nbsp;assessment is the Hong Kong's leading initiative to offer
          independent assessments of building sustainability performance.
          Recognised and certified by the Hong Kong Green Building Council, BEAM
          Plus offers a comprehensive set of performance criteria for a wide
          range of sustainability issues relating to the planning, design,
          construction, commissioning, management, operation and maintenance of
          a building. By providing a fair and objective assessment of a
          building's overall performance throughout its life cycle, BEAM Plus
          enables organisations and companies of all sizes to demonstrate their
          commitment to sustainable development.
        </>
      ),
      use_of_prod_BEAM_detail_2: (
        <>
          BEAM Plus New Buildings covers the demolition, planning, design,
          construction and commissioning of a new building project. It can also
          be applied to major renovations, alterations and additions. Under the
          scheme, credits would be given for using certified building materials
          and products under the Materials and Waste Aspects (MWA). For details,
          please refer to the scheme's&nbsp;
          <a
            aria-label="scheme's webpage"
            href="https://www.hkgbc.org.hk/eng/beam-plus/beam-plus-new-buildings/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-links"
          >
            webpage
          </a>
          .
        </>
      ),
      use_of_prod_ASD:
        "Use of Product Certification by Architectural Services Department",

      use_of_prod_ASD_detail_1: (
        <>
          The Architectural Services Department (ArchSD) has drawn up a flyer to
          present the mechanism of product certification and the benefits of
          using certified construction products in construction works. Examples
          have also been given to illustrate a product certification scheme in
          action. Please refer to the&nbsp;
          <a
            aria-label="flyer"
            href="https://www.archsd.gov.hk/media/consultants-contractors/product-conformity-certification-schemes/pccs_leaflet_posting%20to%20internet.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-links"
          >
            flyer
          </a>
          &nbsp;for details.
        </>
      ),
      use_of_prod_ASD_detail_2:
        "ArchSD is considering specifying the use of certain certified construction products in its works contracts. Further details are in the above flyer.",
    },
    cn: {
      title: "樓宇及建築材料",
      file: "香港的建築材料檢測和認證服務",
      prod_cert: "產品認證 –從上游監控品質",
      whats_pc: "什麼是產品認證？",
      pc_def: [
        "產品認證計劃為特定產品的供應商，訂立一系列確保產品符合質量要求的規則及程序合指定認證計劃的要求。",
        "第三方認證機構會根據規定進行嚴格評審，在確定供應商的產品達到認證計劃的要求後，對該供應商的產品發出認證證書。",
      ],
      benefits_of: "建築材料產品認證",
      whats_benefits_of_pc: "產品認證的好處",
      whats_benefits_of_pc_detail: [
        "產品認證過程會透過上游監控提升產品質素。",
        "產品認證過程包含持續監察工廠的生產程序，並確保生產質素的穩定。",
        "產品認證過程可控制未能通過實地規格測試的風險，從而減低須重新訂購產品而延誤工程進度的風險，因此亦會減少時間及金錢的虛耗。",
        "已認證產品可增強使用者對產品質素符合認可標準的信心。",
        "有關產品認證好處的專題文章",
      ],
      use_of_prod_HA: "香港房屋委員會使用已認證建材的情況及相關供應商資料",
      use_of_prod_HA_detail: (
        <>
          香港房屋委員會（房委會）率先在其建屋工程中使用已認證建材，同時亦累積了多間可供應上述大部份可認證建材的供應商資料。這些資料已上載到
          <a
            aria-label="房委會的產品認證網頁"
            className="underline text-links"
            href={
              language === Language.ZH_TW
                ? "http://www.housingauthority.gov.hk/tc/business-partnerships/resources/construction-product-certification/index.html"
                : "https://www.housingauthority.gov.hk/sc/business-partnerships/resources/construction-product-certification/index.html"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            房委會的產品認證網頁
          </a>
          （或
          <a
            aria-label="有關製造商或供應商名錄"
            className="underline text-links"
            href={
              language === Language.ZH_TW
                ? "https://www.housingauthority.gov.hk/tc/common/pdf/business-partnerships/resources/construction-product-certification/ManufacturersOrSuppliers-ProductCertStatus(20220930)_ChiW3C.pdf"
                : "https://www.housingauthority.gov.hk/sc/common/pdf/business-partnerships/resources/construction-product-certification/ManufacturersOrSuppliers-ProductCertStatus(20220930)_SimpChiW3C.pdf"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            有關製造商或供應商名錄
          </a>
          ），方便業界查閱。另外，公眾亦可向認證機構索取經該機構認證的建築材料供應商資料。
        </>
      ),

      use_of_prod_ASD: "建築署使用已認證建材的情況",
      use_of_prod_ASD_detail_1: (
        <>
          建築署擬備了一份單張介紹產品認證的運作及在工程中使用產品認證的好處。單張也列舉了幾個例子具體說明產品認證計劃的實際應用。詳情請參考
          <a
            aria-label="建築署單張"
            href="https://www.archsd.gov.hk/media/consultants-contractors/product-conformity-certification-schemes/pccs_leaflet_posting%20to%20internet.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-links"
          >
            建築署單張
          </a>
          （只有英文版本）。
        </>
      ),
      use_of_prod_ASD_detail_2:
        "建築署亦正考慮在其工程標書中指定採用部份已認證建材。詳情見於上述單張。",

      use_of_prod_BEAM: "綠建環評新建建築中選用產品認證",
      use_of_prod_BEAM_detail_1: (
        <>
          <a
            aria-label="綠建環評"
            href={
              language === Language.ZH_TW
                ? "https://www.housingauthority.gov.hk/tc/common/pdf/business-partnerships/resources/construction-product-certification/ManufacturersOrSuppliers-ProductCertStatus(20220930)_ChiW3C.pdf"
                : "https://www.housingauthority.gov.hk/sc/common/pdf/business-partnerships/resources/construction-product-certification/ManufacturersOrSuppliers-ProductCertStatus(20220930)_SimpChiW3C.pdf"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-links"
          >
            綠建環評
          </a>
          專為香港而設，一套為建築物可持續發展表現作中立評估的權威工具。綠建環評就建築物在規劃、設計、施工、調試、管理、運作及維修保養各範疇的可持續性，訂立了一套全面的表現準則，評核結果受香港綠色建築議會認可並發出認證。藉着為建築物在生命週期中的整體表現作公平、客觀的評估，大大小小的機構及企業都可通過綠建環評，展示其致力推動可持續發展的決心。
        </>
      ),
      use_of_prod_BEAM_detail_2: (
        <>
          綠建環評新建建築評估涵蓋新建項目的前期拆卸、規劃、設計、施工及調試階段，亦適用於現存建築的大規模翻新或改裝工程。計劃下，如在用材方面選用有認證的建築材料和產品，可獲取得分。如需有關詳情，請瀏覽計劃的
          <a
            aria-label="計劃的網站"
            href={
              language === Language.ZH_TW
                ? "https://www.hkgbc.org.hk/chi/NB_Intro.aspx"
                : "https://www.hkgbc.org.hk/chi/NB_Intro.aspx"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-links"
          >
            網站
          </a>
          。
        </>
      ),

      to_facilitate:
        "為配合實施強制驗樓計劃，認可實驗所現正提供下列樓宇診斷測試服務，協助註冊人員掌握有關樓宇狀況（如混凝土強度、滲水情況、侵蝕情況、混凝土剝落情況等）的客觀證據，從而確保樓宇安全:",

      to_facilitate_ways: [
        "碳化測試",
        "氯化物含量測量",
        "鋼筋深度檢測",
        "半電位法測試",
        "紅外線熱像圖法",
        "電阻率測量",
        "表面硬度測量",
        "雷達探測",
        "超聲波脈動測試",
      ],
      how_manufacturer: "製造商如何取得產品認證 ?",
      how_manufacturer_ways: [
        "首先製造商應先選擇一間獲認可的認證機構",
        "該認證機構會為製造商作初步評估，包括評審廠房生產程序，以及實地抽取一項或多項具代表性的產品樣本進行測試",
        "之後是定期進行監察巡查，包括抽取樣本進行審核測試;以及",
        "每隔三年進行重新評估，屆時亦會抽取樣本進行審核測試",
      ],
      local_prod: "本地的建築材料認證計劃",
      the_following_prod: `下列是香港本地建築材料產品認證計劃的詳情（截至2022年9月30日）：（部份計劃可能只有英文版本）`,
      table_headers: [
        "產品",
        "計劃名稱",
        "計劃持有者",
        "經香港認可處認可的認證機構",
      ],
      laboratory_and_on_site: "實驗所及實地測試服務",
      services_below: "香港本地現時可提供下列服務:",
      services_below_desc: [
        "建築材料物理試驗",
        "地基及土力測試",
        "混凝土、焊接及鋼材無損探測",
        "建築組件功能及耐用程度測試",
        "建築材料（如混凝土、水泥、骨料及鋼材等）化學分析",
        "建築材料測試儀器及其他儀器的校正",
        "實地樓宇診斷測試",
      ],
      building_diagnostic: "樓宇診斷測試",
      indoor_air: "室內空氣質素檢驗",
      laboratories: "獲香港認可處認可的樓宇及建築材料測試實驗所",
      bottom: (
        <>
          獲香港認可處認可的樓宇及建築材料測試實驗所名單，請瀏覽
          <a
            aria-label="香港認可處網頁"
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
      more_info: (
        <>
          如需更多資料，請瀏覽
          <a
            aria-label="網站"
            href="https://www.iaq.gov.hk/en/home/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#00E]"
          >
            網站
          </a>
          。
        </>
      ),
      inspection_services: "檢驗服務",
      inspection_services_desc: [
        "建築工程焊接程序評核",
        "建築材料（如水務設施及塗料）生產程序檢驗",
        "室內空氣質素量度和檢驗",
      ],
      to_improve_indoor_air: `為改善室內空氣質素，以及加強公眾對這方面的關注，環境保護署推出自願參與的「室內空氣質素檢定計劃」。室內空氣質素檢驗機構會就計劃提供下列測量及檢驗服務:`,

      to_improve_indoor_air_ways: [
        "實地視察處所/樓宇",
        "實地量度室內空氣質素參數（例如空氣流動速度、一氧化碳、揮發性有機化合物等）",
        "評核室內空氣質素是否符合指標",
      ],
      testing_and_inspection_title: "樓宇及建築材料認可測試及檢驗服務",
      testing_and_inspection: "香港的樓宇及建築材料認可測試及檢驗服務",
      col_one: [
        "混凝土",
        "防火門及間隔牆",
        "熱浸處理強化玻璃",
        "鋁窗",
        "鋁窗摩擦鉸鏈",
        "瓷磚黏合劑",
        "水泥產品",
        "瓷磚",
        "修葺用砂漿",
        "鋼筋網",
        "混凝土骨料",
        "標準沙",
        "替補沙",
        "鋼筋連接套筒",
        "uPVC排水管道及配件",
        "連體座廁設備",
        "油漆",
      ],
      col_two: [
        "混凝土生產和供應質量規範",
        "Product Conformity Certification Scheme for Passive Fire Protection Products",
        "Product Conformity Certification Scheme for Heat Soaked Tempered Glass",
        "Product Conformity Certification Scheme for Aluminum Window",
        "Product Conformity Certification Scheme for Frictional Hinges",
        "Product Conformity Certification Scheme for Tile Adhesives",
        "Product Conformity Certification Scheme for Cement Products",
        "Product Conformity Certification Scheme for Ceramic Tiles",
        "Product Conformity Certification Scheme for Repair Mortar",
        "Product Conformity Certification Scheme for Mesh Reinforcement",
        "Product Conformity Certification Scheme - Aggregates for Concrete",
        "標準砂生產質量計劃",
        "替補砂生產質量計劃",
        "鋼筋耦合器質量產品認證計劃",
        "Product Conformity Certification Scheme for uPVC Pipe and Fittings for Foul Water Drainage Above Ground",
        "Product Conformity Certification Scheme for Close-coupled Water Closet Suites",
        "Product Conformity Certification Scheme for Paint Products",
      ],
      NA: "暫時未有認證機構獲得認可",
    },
  };

  const page_text = getPageText(multilingual);

  const {
    title,
    file,
    prod_cert,
    whats_pc,
    pc_def,
    benefits_of,
    whats_benefits_of_pc,
    whats_benefits_of_pc_detail,
    local_prod,
    the_following_prod,
    building_diagnostic,
    to_facilitate,
    to_facilitate_ways,
    table_headers,
    laboratories,
    laboratory_and_on_site,
    bottom,
    inspection_services,
    inspection_services_desc,
    indoor_air,
    to_improve_indoor_air,
    to_improve_indoor_air_ways,
    more_info,
    testing_and_inspection_title,
    testing_and_inspection,
    col_one,
    col_two,
    NA,
    services_below,
    services_below_desc,
    how_manufacturer,
    how_manufacturer_ways,
    use_of_prod_HA,
    use_of_prod_HA_detail,
    use_of_prod_ASD,
    use_of_prod_ASD_detail_1,
    use_of_prod_ASD_detail_2,
    use_of_prod_BEAM,
    use_of_prod_BEAM_detail_1,
    use_of_prod_BEAM_detail_2,
  } = page_text;
  const businessAreaTitle = title as BusinessAreaTitle;
  // Calculate the indices for the current page
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  // Slice the data array based on the current page
  const currentPageData = schemeOwnerCol.slice(startIndex, endIndex);

  // Maximum number of pages (0-based index)
  const maxPage = Math.ceil(schemeOwnerCol.length / itemsPerPage) - 1;
  const schemeOwnerColArray: React.ReactNode[] = schemeOwnerCol.map(
    (item, index) => {
      const displayLink =
        (language === Language.EN
          ? item.link
          : Language.ZH_TW
          ? item.tcLink
          : item.scLink ?? item.tcLink) ?? item.link;

      return (
        <a
          aria-label={getSingleText(item.label, item.labelCN)}
          href={displayLink}
          key={index}
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#2F2F2F]"
        >
          {getSingleText(item.label, item.labelCN)}
        </a>
      );
    }
  );

  const handleGenerateA = (hyperlinkData: HyperlinkData): React.ReactNode => {
    const displayLink =
      (language === Language.EN
        ? hyperlinkData.link
        : Language.ZH_TW
        ? hyperlinkData.tcLink
        : hyperlinkData.scLink ?? hyperlinkData.tcLink) ?? hyperlinkData.link;

    return (
      <ul>
        <li>
          <a
            aria-label={getSingleText(
              hyperlinkData.label,
              hyperlinkData.labelCN
            )}
            href={displayLink}
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#2F2F2F]"
          >
            {getSingleText(hyperlinkData.label, hyperlinkData.labelCN)}
          </a>
        </li>
      </ul>
    );
  };
  const tableRowsData: Array<React.ReactNode[]> = [
    col_one as React.ReactNode[],
    col_two as React.ReactNode[],
    schemeOwnerColArray,
    [
      <>
        {handleGenerateA(certificationBodiesMap[CertificationBodies.Castco])}
        {handleGenerateA(certificationBodiesMap[CertificationBodies.Fugro])}
        {handleGenerateA(
          certificationBodiesMap[CertificationBodies.HongKongQuality]
        )}
      </>,
      <>
        {handleGenerateA(certificationBodiesMap[CertificationBodies.Castco])}
        {handleGenerateA(certificationBodiesMap[CertificationBodies.Fugro])}
        {handleGenerateA(certificationBodiesMap[CertificationBodies.SGS])}
      </>,
      NA,
      <>
        {handleGenerateA(certificationBodiesMap[CertificationBodies.Castco])}
        {handleGenerateA(certificationBodiesMap[CertificationBodies.Takwin])}
      </>,
      handleGenerateA(certificationBodiesMap[CertificationBodies.Takwin]),

      <>
        {handleGenerateA(certificationBodiesMap[CertificationBodies.Castco])}
        {handleGenerateA(certificationBodiesMap[CertificationBodies.Fugro])}
        {handleGenerateA(
          certificationBodiesMap[CertificationBodies.HongKongQuality]
        )}
        {handleGenerateA(certificationBodiesMap[CertificationBodies.MINSEN])}
      </>,
      <>
        {handleGenerateA(certificationBodiesMap[CertificationBodies.Castco])}
        {handleGenerateA(certificationBodiesMap[CertificationBodies.Fugro])}
        {handleGenerateA(certificationBodiesMap[CertificationBodies.MINSEN])}
        {handleGenerateA(certificationBodiesMap[CertificationBodies.SGS])}
      </>,
      <>
        {handleGenerateA(certificationBodiesMap[CertificationBodies.Castco])}
        {handleGenerateA(certificationBodiesMap[CertificationBodies.Fugro])}
      </>,
      <>
        {handleGenerateA(certificationBodiesMap[CertificationBodies.Castco])}
        {handleGenerateA(certificationBodiesMap[CertificationBodies.Fugro])}
        {handleGenerateA(certificationBodiesMap[CertificationBodies.MINSEN])}
      </>,
      <>
        {handleGenerateA(certificationBodiesMap[CertificationBodies.Castco])}
        {handleGenerateA(certificationBodiesMap[CertificationBodies.MINSEN])}
      </>,
      handleGenerateA(
        certificationBodiesMap[CertificationBodies.HongKongQuality]
      ),

      ...Array(3).fill(
        handleGenerateA(certificationBodiesMap[CertificationBodies.Castco])
      ),
      handleGenerateA(certificationBodiesMap[CertificationBodies.MINSEN]),
      ...Array(2).fill(
        <>
          {handleGenerateA(certificationBodiesMap[CertificationBodies.Castco])}
          {handleGenerateA(certificationBodiesMap[CertificationBodies.Fugro])}
        </>
      ),
    ],
  ];

  const productData: Array<{
    title: string;
    content: React.ReactNode;
  }> = [
    {
      title: whats_pc as string,
      content: (
        <ul>
          <li className="mb-[1em]">{(pc_def as React.ReactNode[])[0]}</li>
          <li>{(pc_def as React.ReactNode[])[1]}</li>
        </ul>
      ),
    },
    {
      title: whats_benefits_of_pc as string,
      content: (
        <>
          <ul>
            <li className="mb-[1em]">
              {(whats_benefits_of_pc_detail as React.ReactNode[])[0]}
            </li>
            <li className="mb-[1em]">
              {(whats_benefits_of_pc_detail as React.ReactNode[])[1]}
            </li>

            <li className="mb-[1em]">
              {(whats_benefits_of_pc_detail as React.ReactNode[])[2]}
            </li>

            <li className="mb-[16px]">
              {(whats_benefits_of_pc_detail as React.ReactNode[])[3]}
            </li>
          </ul>
          <FileTemplate
            title={(whats_benefits_of_pc_detail as string[])[4]}
            imagePath="assets/tcSector/servicesDifferentBusinessAreas/FeatureArticlePDF.png"
            pdfHyperlink="/en/doc/hkctc_newsletter_issue2.pdf"
          />
        </>
      ),
    },
    {
      title: local_prod as string,
      content: (
        <>
          <p>{the_following_prod as React.ReactNode}</p>
          <div>
            {/* Pagination Controls */}
            <div className="flex justify-center gap-[9px] my-[24px] !text-highlight-l">
              {/* Previous Button */}
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 0}
                style={{
                  ...normalPagingButtonStyle,
                  cursor: currentPage === 0 ? "not-allowed" : "pointer",
                  color: currentPage === 0 ? "#767676" : "black",
                }}
                aria-label="Previous Page"
              >
                <Icon
                  icon="mingcute:arrow-left-fill"
                  width="24"
                  height="24"
                  aria-hidden={true}
                />
              </button>

              {Array.from({ length: maxPage + 1 }, (_, pageIndex) => (
                <button
                  key={pageIndex}
                  onClick={() => setCurrentPage(pageIndex)}
                  style={
                    currentPage === pageIndex
                      ? activatedPagingButtonStyle
                      : normalPagingButtonStyle
                  }
                  aria-label={`Jump to Page ${pageIndex + 1}`}
                >
                  {pageIndex + 1}
                </button>
              ))}

              {/* Next Button */}
              <button
                tabIndex={0}
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === maxPage}
                style={{
                  ...normalPagingButtonStyle,
                  cursor: currentPage === maxPage ? "not-allowed" : "pointer",
                  color: currentPage === maxPage ? "#767676" : "black",
                }}
                aria-label="Next Page"
              >
                <Icon
                  icon="mingcute:arrow-right-fill"
                  width="24"
                  height="24"
                  aria-label={"arrow icon"}
                  tabIndex={0}
                />
              </button>
            </div>
            <div style={{ overflowX: "auto" }}>
              <div className="grid grid-cols-[2fr,3fr,3fr,4fr] gap-[24px] py-[16px] px-[10px] !text-body-s !text-[#7E7E7E] min-w-[900px]">
                {(table_headers as React.ReactNode[]).map((head, index) => (
                  <p key={index}>{head}</p>
                ))}
              </div>
              <hr
                style={{
                  width: "100%",
                  height: "3px",
                  backgroundColor: "black",
                }}
              />
              <div className="!text-[#2F2F2F]">
                {/* Map over the sliced data */}
                {currentPageData.map((_, index) => (
                  <div
                    key={startIndex + index} // Key should be unique and based on the actual index in the full array
                    className="grid grid-cols-[2fr,3fr,3fr,4fr] gap-[24px] py-[16px] px-[10px] min-w-[900px]"
                    style={{
                      borderBottom: "1px dashed #C8CFD6",
                    }}
                  >
                    <p className="text-body-s !text-left">
                      {tableRowsData[0][startIndex + index]}
                    </p>
                    <p className="text-body-s !text-left">
                      {tableRowsData[1][startIndex + index]}
                    </p>
                    <div className="text-linked-s !text-left">
                      {tableRowsData[2][startIndex + index]}
                    </div>
                    <div className="text-linked-s !text-left">
                      {tableRowsData[3][startIndex + index]}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      title: use_of_prod_HA as string,
      content: (
        <ul className="text-justify">
          <li>{use_of_prod_HA_detail as React.ReactNode}</li>
        </ul>
      ),
    },
    {
      title: use_of_prod_ASD as string,
      content: (
        <ul>
          <li className="mb-[1em]">
            {use_of_prod_ASD_detail_1 as React.ReactNode}
          </li>
          <li>{use_of_prod_ASD_detail_2 as React.ReactNode}</li>
        </ul>
      ),
    },
    {
      title: use_of_prod_BEAM as string,
      content: (
        <ul className="text-justify">
          <li className="mb-[1em]">
            {use_of_prod_BEAM_detail_1 as React.ReactNode}
          </li>
          <li>{use_of_prod_BEAM_detail_2 as React.ReactNode}</li>
        </ul>
      ),
    },
    {
      title: how_manufacturer as string,
      content: (
        <ul className="text-justify">
          <li className="mb-[1em]">
            {(how_manufacturer_ways as React.ReactNode[])[0]}
          </li>

          <li className="mb-[1em]">
            {(how_manufacturer_ways as React.ReactNode[])[1]}
          </li>
          <li className="mb-[1em]">
            {(how_manufacturer_ways as React.ReactNode[])[2]}
          </li>
          <li>{(how_manufacturer_ways as React.ReactNode[])[3]}</li>
        </ul>
      ),
    },
  ];

  const testingData: Array<{
    title: string;
    descriptionTitle?: string;
    description: string[];
    contentTitle: string;
    content: React.ReactNode;
  }> = [
    {
      title: laboratory_and_on_site as string,
      descriptionTitle: services_below as string,
      description: services_below_desc as string[],
      contentTitle: building_diagnostic as string,
      content: (
        <>
          <p>{to_facilitate as string}</p>
          <br />
          {(to_facilitate_ways as React.ReactNode[]).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </>
      ),
    },
    {
      title: inspection_services as string,
      description: inspection_services_desc as string[],
      contentTitle: indoor_air as string,
      content: (
        <div className="text-justify">
          <p>{to_improve_indoor_air as string}</p>
          <br />
          <ul>
            {(to_improve_indoor_air_ways as React.ReactNode[]).map(
              (item, index) => (
                <li key={index}>{item}</li>
              )
            )}
          </ul>
          <br />
          <p>{more_info as React.ReactNode}</p>
        </div>
      ),
    },
  ];

  const sidebar = (
    <DifferentBusinessAreasDirectorySidebar
      businessAreaTitle={businessAreaTitle}
    />
  );

  const youtubeTemplateLink: Record<Language, string> = {
    [Language.EN]: "https://www.youtube.com/embed/06_ec-i3gCo",
    [Language.ZH_TW]: "https://www.youtube.com/embed/mlbHPZQuJJU",
    [Language.ZH_CN]: "https://www.youtube.com/embed/mlbHPZQuJJU",
  };

  const content = (
    <>
      <SquareTitle title={businessAreaTitle} />
      <div className="my-[24px]">
        <MediaTemplate
          iconPath="VIDEO.png"
          title={file as string}
          imagePath="/assets/tcSector/servicesDifferentBusinessAreas/ConstructionVideo.png"
          mediaLink={youtubeTemplateLink[language]}
        />
      </div>
      <div className="text-heading-l mb-[24px]">
        {benefits_of as React.ReactNode}
      </div>
      <FileTemplate
        title={prod_cert as string}
        imagePath="assets/tcSector/servicesDifferentBusinessAreas/ConstructionPDF.png"
        pdfHyperlink="/en/doc/HKCTC_Leaflet_construction_product_certification.pdf"
      />

      <div className="w-full flex flex-col gap-[24px] mt-[24px]">
        {productData.map((item, index) => (
          <Accordion
            key={index}
            defaultExpanded={false}
            title={item.title}
            details={<div className="!text-body-m">{item.content}</div>}
          />
        ))}
      </div>

      <hr className="my-[24px]" />
      <div className="text-heading-l my-[24px]">
        {testing_and_inspection_title as React.ReactNode}
      </div>

      <FileTemplate
        title={testing_and_inspection as string}
        imagePath="assets/tcSector/servicesDifferentBusinessAreas/ConstructionPDF_testing.png"
        pdfHyperlink="/en/doc/HKCTC_Leaflet_Building_inspection.pdf"
      />

      <div className="w-full flex flex-col gap-[24px] mt-[24px]">
        {testingData.map((item, index) => (
          <Accordion
            key={index}
            title={item.title}
            defaultExpanded={false}
            details={
              <div>
                <div className="!text-body-m">{item.descriptionTitle}</div>
                <div className="!text-body-m flex flex-col gap-[12px]">
                  {[...item.description].map((desc, index) => (
                    <div key={index}>
                      <ul>
                        <li>{desc}</li>
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="w-full bg-[#F7F7F5] py-[36px] px-[42px] mt-[16px]">
                  <div className="text-heading-m">{item.contentTitle}</div>
                  <div className="text-body-m mt-[16px]">{item.content}</div>
                </div>
              </div>
            }
          />
        ))}
      </div>

      <div className="text-heading-l my-[24px]">
        {laboratories as React.ReactNode}
      </div>
      <div className="text-body-m text-justify">
        {bottom as React.ReactNode}
      </div>
      <hr className="my-[24px]" />

      <InternalBackButton
        targetUrl={`/tc-sector?section=${navItemEnum.different_business_areas}`}
      />
    </>
  );
  return (
    <div style={fullContainer}>
      <BannerPhotoBox
        src={"tcSector/servicesDifferentBusinessAreas/Construction_banner.png"}
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
