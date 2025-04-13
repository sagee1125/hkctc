import * as React from "react";
import {
  MediaTemplateWithDialog,
  MediaTemplateWithDialogProps,
  SquareTitle,
} from "../../../components";
import {
  Language,
  type LanguageResources,
  useSettings,
} from "../../../context";
import { MEDIA_TYPE } from "../../../const";
import { formatDateToChinese } from "../../EventsPromotion";

export const Relaxation: React.FC = () => {
  const { isPC, language, getSingleText, getPageText } = useSettings();
  const multilingual = {
    en: {
      title:
        "Relaxation of Waiver Application for Existing Industrial Buildings",
      according_to: `According to the revitalisation scheme for industrial buildings (“IBs”), one of the measures is to relax the waiver application policy to permit uses for a number of sectors in existing IBs. Testing laboratories may benefit from this measure.`,
      background: "Background",
      as_per_the: `As per the executed land leases, the uses of most IBs are restricted to industrial uses. Under the existing land administration arrangement, if an IB owner wishes to put its premises into always-permitted1 non-industrial use under the relevant statutory plan, the owner (or an authorised person) is supposed to submit a temporary waiver application to the Lands Department (LandsD) for temporarily waiving the lease restrictions for the specific premises.`,
      note: `Note 1: It refers to uses permitted under the land use zoning of the sites concerned on the relevant Outline Zoning Plans as “Column 1” uses.`,
      details_of_relaxation: {
        title: `Details of the Relaxation of Waiver Application Arrangement`,
        para_1: (
          <>
            As the Development Bureau announced on 1 February 2019, the
            Government would permit five non-industrial uses in premises within
            IBs on a time-limited basis. The prerequisite is that such uses are
            always permitted under the relevant statutory plan, and do not
            involve direct provision of services or goods attracting visiting
            members of the public. Under the arrangement, an owner of part(s) of
            an existing IB does&nbsp;
            <span className="text-newPrimary !text-highlight-m">not</span>
            &nbsp;need to apply for a temporary waiver from LandsD, and
            does&nbsp;
            <span className="text-newPrimary !text-highlight-m">not</span>
            &nbsp;need to pay a waiver fee and an administrative fee which would
            otherwise be payable, for putting the relevant IB premises to such
            permitted non-industrial uses during the effective period.&nbsp;
            <span className="text-newPrimary !text-highlight-m">
              The effective period of the arrangement
            </span>
            &nbsp;was initially set for five years, followed by an extension to
            31 January 2025 announced on 26 January 2024, and a&nbsp;
            <span className="text-newPrimary !text-highlight-m">
              further extension to the end of 2027
            </span>
            &nbsp;announced in the 2024 Policy Address.
          </>
        ),
        para_2: `"Research, Design and Development Centre" is one of the five permitted uses. According to the Definition of Terms published by the Town Planning Board, testing laboratories are covered by “Laboratory, Inspection and Testing Centre” which is subsumed under the use of “Research, Design and Development Centre”. As such, testing laboratories in industrial premises in compliance with the above prerequisites can benefit from the relaxation of waiver application arrangement. In determining whether the use of a premise has involved non-compliant uses outside the scope of the permission, LandsD will seek advice from the Innovation and Technology Commission and the decision of which shall be final.`,
        para_3: (
          <>
            For any processed/processing temporary waiver application submitted
            in accordance with&nbsp;
            <a
              aria-label="Practice Note No. 1/2016"
              href="https://www.landsd.gov.hk/en/resources/practice-notes/lao.html"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#00E]"
            >
              Practice Note No. 1/2016
            </a>
            &nbsp;issued by LandsD, no administrative fee will be refunded.
          </>
        ),
        please_refer: `Please refer to the announcement of Development Bureau on 1 February 2019 and the press release of the extension on 26 January 2024, and the 2024 Policy Address for further details:`,
      },
      enquiries: `Enquiries`,
      enquiries_about: `Enquiries about how this measure will impact on individual IBs should be addressed to the relevant District Lands Office of LandsD. The contact information can be found at`,
      information_regarding: `Information regarding the zoning of an IB and the “Column 1” always-permitted uses specified in the relevant OZP is available on the website of the Town Planning Board`,
    },
    cn: {
      title: "放寬現有工業大廈地契豁免書申請",
      according_to: `根據活化工業大廈（工廈）計劃，其中一項措施是放寛豁免書申請安排，以准許現有工廈用作若干用途。測試實驗所可受惠於此措施。`,
      background: "背景",
      as_per_the: `按已訂立的地契，大部分現有工廈限於用作工業用途。工廈業主如欲將有關處所作所屬法定圖則上的經常准許1之非工業用途，在現行土地行政安排下，該業主（或獲授權人士）本應先向地政總署申請短期豁免書，以豁免該處所的地契限制。`,
      note: `註1：即該用途為分區計劃大綱圖上該用地所屬地帶「第一欄」的准許用途。`,
      details_of_relaxation: {
        title: "放寬地契豁免書申請安排內容",
        para_1: (
          <>
            根據發展局於2019年2月1日的公布，政府在指定期限內，准許將工廈處所用作五類特定的非工業用途，先決條件是該用途必須是所屬法定圖則上的經常准許用途，及不涉及透過直接提供服務或貨品以吸引市民到訪的用途／活動。
            在此安排下，在指定期限內，現有工廈部分處所的業主可
            <span className="text-newPrimary !text-highlight-m">無</span>
            須向地政總署申請短期豁免書及
            <span className="text-newPrimary !text-highlight-m">無</span>
            須繳付原本應付的豁免書費用和行政費，而將有關工廈處所用於准許的非工業用途。發展局於2024年1月26日宣布將原定五年的
            <span className="text-newPrimary !text-highlight-m">指定期限</span>
            延長至2025年1月31日，隨後於2024年施政報告中宣布將指定期限
            <span className="text-newPrimary !text-highlight-m">
              進一步延長至2027年年底
            </span>
            。
          </>
        ),
        para_2: `「研究所、設計及發展中心」是上述五類特定非工業用途其中一項。根據城市規劃委員會公布的詞彙釋義，測試實驗所歸屬於「實驗室、檢查測試中心」，而「實驗室、檢查測試中心」歸屬「研究所、設計及發展中心」。因此，如符合上述的先決條件，位於工廈處所的測試實驗所可以受惠於放寬地契豁免書申請安排。在判斷個別處所是否有超出准許範圍的違規用途使用情況時，地政總署會徵詢創新科技署，而所作的決定為最終決定。`,

        para_3: (
          <>
            依地政總署
            <a
              aria-label="作業備考1／2016號"
              href={
                language === Language.ZH_TW
                  ? "https://www.landsd.gov.hk/tc/legco/lpn.htm"
                  : "https://www.landsd.gov.hk/sc/legco/lpn.htm"
              }
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#00E]"
            >
              作業備考1／2016號
            </a>
            簽訂的豁免書和申請（包括已獲批准和審批中）的行政費用，不會被退還。
          </>
        ),
        please_refer: `請參閱發展局於2019年2月1日的公布、2024年1月26日關於延長期限的新聞公報、以及2024年施政報告，以了解細節：`,
      },
      enquiries: "查詢",
      enquiries_about: `如對此措施是否適用於個別工廈有任何疑問，請向相關地政總署分區地政處查詢，聯絡資料可瀏覽以下網頁：`,
      information_regarding: `至於個別工廈在相關分區計劃大綱圖所屬地帶和「第一欄」准許用途的資料，可瀏覽城市規劃委員會網頁。`,
    },
  };

  const page_text = getPageText(multilingual);

  const {
    title,
    according_to,
    background,
    as_per_the,
    note,
    details_of_relaxation,
    enquiries,
    enquiries_about,
    information_regarding,
  } = page_text;

  const fileList: Array<
    MediaTemplateWithDialogProps & {
      tcMediaLink: string;
      scMediaLink: string;
    }
  > = [
    {
      title:
        "Announcement: Relaxation of Waiver Application for Existing Industrial Buildings ",
      titleCN: `放寬現有工業大廈地契豁免書申請 `,
      date: "1 February 2019",
      maskIcon: "PDF.png",
      mediaType: MEDIA_TYPE.PDF,
      mediaDomain: "devb",
      mediaLink:
        "https://www.devb.gov.hk/filemanager/en/Content_3/Relaxation_of_the_Waiver_Application_in_Existing_IB.pdf",
      tcMediaLink:
        "https://www.devb.gov.hk/filemanager/tc/Content_3/Relaxation_of_the_Waiver_Application_in_Existing_IB.pdf",
      scMediaLink:
        "https://www.devb.gov.hk/filemanager/tc/Content_3/Relaxation_of_the_Waiver_Application_in_Existing_IB.pdf	",
    },
    {
      title:
        "Press Release: Extending Effective Period of Relaxation of Waiver Application for Existing Industrial Buildings",
      titleCN: `新聞公報(2024年1月26日) - 延長期限至2025年1月31日`,
      date: "26 January 2024",
      maskIcon: "PRESS.png",
      mediaType: MEDIA_TYPE.NEW_PAGE,
      imagePath: "extending.png",
      mediaLink:
        "https://www.info.gov.hk/gia/general/202401/26/P2024012600321.htm",
      tcMediaLink:
        "https://www.info.gov.hk/gia/general/202401/26/P2024012600317.htm",
      scMediaLink:
        "https://sc.isd.gov.hk/TuniS//www.info.gov.hk/gia/general/202401/26/P2024012600317.htm",
    },
    {
      title:
        "Work Focuses of Development Bureau in the Chief Executive’s 2024 Policy Address",
      titleCN: `《行政長官2024年施政報告》有關發展局的工作重點`,
      date: "16 October 2024",
      maskIcon: "PRESS.png",
      mediaType: MEDIA_TYPE.NEW_PAGE,
      imagePath: "Work_Focuses.png",
      mediaLink:
        "https://www.devb.gov.hk/en/about_us/policy/2024-policy-address-supplement/policy-address-initiatives/index.html",
      tcMediaLink:
        "https://www.devb.gov.hk/tc/about_us/policy/2024-policy-address-supplement/policy-address-initiatives/index.html",
      scMediaLink:
        "https://www.devb.gov.hk/sc/about_us/policy/2024-policy-address-supplement/policy-address-initiatives/index.html",
    },
  ];

  const enquiries_about_link: Record<Language, string> = {
    [Language.EN]: "https://www.landsd.gov.hk/en/about-us/contact-us.html",
    [Language.ZH_TW]: "https://www.landsd.gov.hk/tc/about/enquiries.htm",
    [Language.ZH_CN]: "https://www.landsd.gov.hk/sc/about/enquiries.htm",
  };

  return (
    <div className="w-full">
      <div className="mb-[24px]">
        <SquareTitle title={title as string} />
      </div>
      <p className="mt-[24px] text-body-m text-justify">
        {according_to as React.ReactNode}
      </p>
      <hr className="my-[24px] text-[#E0E0E0]" />
      <div className="text-heading-l">{background as React.ReactNode}</div>
      <p className="text-body-m mt-[24px] text-justify">
        {as_per_the as React.ReactNode}
      </p>
      <br />
      <p className="text-body-m text-justify">{note as React.ReactNode}</p>
      <hr className="my-[24px] text-[#E0E0E0]" />
      <div className="text-heading-l">
        {(details_of_relaxation as LanguageResources).title as React.ReactNode}
      </div>
      <div className="grid grid-cols-2 gap-[8px] my-[24px]">
        <img
          className="w-auto h-auto"
          src={
            process.env.PUBLIC_URL +
            "/assets/support/details_of_the_elaxation_1.png"
          }
          alt="Professor WONG Wing-tak"
          aria-hidden="true"
        />
        <img
          className="w-auto h-auto"
          src={
            process.env.PUBLIC_URL +
            "/assets/support/details_of_the_elaxation_2.png"
          }
          alt="Professor WONG Wing-tak"
          aria-hidden="true"
        />
      </div>
      <ul>
        <li className="!text-body-m mb-[1em]">
          {
            (details_of_relaxation as LanguageResources)
              .para_1 as React.ReactNode
          }
        </li>
        <li className="text-body-m mb-[1em]">
          {
            (details_of_relaxation as LanguageResources)
              .para_2 as React.ReactNode
          }
        </li>
        <li className="text-body-m">
          {
            (details_of_relaxation as LanguageResources)
              .para_3 as React.ReactNode
          }
        </li>
      </ul>
      <br />
      <p className="text-body-m">
        {
          (details_of_relaxation as LanguageResources)
            .please_refer as React.ReactNode
        }
      </p>
      <div className="w-full flex flex-col gap-[24px]">
        {fileList.map((item, index) => {
          const {
            title,
            titleCN = "",
            imagePath,
            mediaLink,
            mediaType,
            mediaDomain,
            maskIcon,
            date,
            tcMediaLink,
            scMediaLink,
          } = item;
          const displayTitle = getSingleText(title, titleCN);
          const displayLink =
            language === Language.EN
              ? mediaLink
              : language === Language.ZH_TW
              ? tcMediaLink
              : scMediaLink;

          return (
            <div
              key={index}
              className="flex flex-row h-[90px] mt-[24px] gap-[24px] items-center"
            >
              <MediaTemplateWithDialog
                title={
                  displayTitle.length > 58 && !isPC
                    ? displayTitle.slice(0, 58) + "..."
                    : displayTitle
                }
                imagePath={"support/" + imagePath}
                mediaLink={displayLink}
                direction="row"
                maskIcon={maskIcon}
                date={
                  language === Language.EN ? date : formatDateToChinese(date)
                }
                mediaType={mediaType}
                mediaDomain={mediaDomain}
              />
            </div>
          );
        })}
      </div>
      <hr className="my-[24px] text-[#E0E0E0]" />
      <div className="text-heading-l">{enquiries as string}</div>
      <div className="mt-[24px] border-[1px] border-[#E0E0E0] py-[24px] px-[36px]">
        <div className="flex flex-row gap-[24px] items-center w-full">
          <img
            className="w-[32px] h-[32px] flex-shrink-0"
            src={`${process.env.PUBLIC_URL}/assets/icons/alert.svg`}
            alt={"alert"}
            aria-hidden="true"
          />
          <p className="text-body-m flex-grow min-w-0">
            {enquiries_about as string}
            <br />
            <a
              aria-label="open link"
              href={enquiries_about_link[language]}
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#00E] break-all"
            >
              {enquiries_about_link[language]}
            </a>
          </p>
        </div>
        <div className="flex flex-row gap-[24px] items-center w-full mt-[24px]">
          <img
            className="w-[32px] h-[32px] flex-shrink-0"
            src={`${process.env.PUBLIC_URL}/assets/icons/alert.svg`}
            alt={"alert"}
            aria-hidden="true"
          />
          <p className="text-body-m flex-grow min-w-0">
            {information_regarding as string}
            <br />(
            <a
              aria-label="open link: https://www.ozp.tpb.gov.hk/"
              href="https://www.ozp.tpb.gov.hk/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#00E] break-all"
            >
              https://www.ozp.tpb.gov.hk/
            </a>
            )
          </p>
        </div>
      </div>
    </div>
  );
};
