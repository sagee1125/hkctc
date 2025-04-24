import React from "react";
import { SquareTitle, Link } from "../../../components";
import { accreditationService } from "../../ServiceUsers";
import { MEDIA_TYPE } from "../../../const";
import { Language, LanguageResources, useSettings } from "../../../context";

export const AccreditationServices: React.FC = () => {
  const { isPC, language, getPageText, getSingleText } = useSettings();
  const multilingual = {
    en: {
      accreditation_services: "Accreditation Services",
      whats_accreditation: "What is Accreditation?",
      accreditation_def: {
        accreditation_is: "Accreditation is the",
        third_party: "third-party attestation",
        related_to:
          "related to a conformity assessment body conveying formal demonstration of its competence to carry out specific conformity assessment tasks. Laboratories, inspection bodies and certification bodies are common types of conformity assessment bodies.",
      },
      accreditation_is_open:
        "Accreditation is open and voluntary in Hong Kong. It is currently provided by Hong Kong Accreditation Service (HKAS) under Innovation and Technology Commission in Hong Kong. HKAS operates three accreditation schemes:",
      accreditation_is_open_content: (
        <>
          HKAS is a member of the{" "}
          <Link outerLink="https://iaf.nu/en/home/">
            International Accreditation Forum (IAF)
          </Link>
          ,{" "}
          <Link outerLink="https://ilac.org/">
            International Laboratory Accreditation Cooperation (ILAC)
          </Link>{" "}
          and{" "}
          <Link outerLink="https://www.apac-accreditation.org/">
            Asia Pacific Accreditation Cooperation (APAC)
          </Link>
          . HKAS is also a signatory to the multilateral mutual recognition
          arrangements of these cooperations. All together under these
          arrangements, HKAS has 124 mutual recognition arrangement partners in
          117 economies. HKAS operates three accreditation schemes:
        </>
      ),
      this_full_list: (
        <>
          *This full list is for the purpose of searching specific conformity
          assessment activity and will only be updated weekly. For most
          up-to-date scope of accreditation, please visit
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
      establishments: "Accredited Establishments",
      establishments_content: `Accredited laboratories, inspection bodies and certification bodies need to undergo rigorous on-site assessments before they are recognised to be competent in performing the conformity assessment activities listed in their respective scopes of accreditation. Users of conformity assessment services may identify and select the services provided by accredited bodies to support their business.`,
    },
    cn: {
      accreditation_services: "認可服務",
      whats_accreditation: "何謂認可？",
      accreditation_def: {
        accreditation_is: "認可是由",
        third_party: "第三方",
        related_to:
          "發出證明，承認一間合格評定機構勝任進行特定的合格評定工作。實驗所、檢驗機構和認證機構均為常見的合格評定機構。",
      },
      accreditation_is_open:
        "在香港，申請認可資格是公開和自願性質的，目前由創新科技署轄下的香港認可處提供認可資格。該處負責推行三個認可計劃，包括：",
      accreditation_is_open_content: (
        <>
          香港認可處是
          <Link outerLink="https://iaf.nu/en/home/">
            國際認可論壇（IAF）
          </Link>,{" "}
          <Link outerLink="https://ilac.org/language-pages/chinese/">
            國際實驗所認可合作組織（ILAC）
          </Link>
          及
          <Link outerLink="https://www.apac-accreditation.org/">
            亞太認可合作組織（APAC）
          </Link>
          的成員。認可處亦是這些合作組織的多邊相互承認協議簽署成員，根據這些協議，認可處在117個經濟體系共有124個相互承認協議夥伴。該處負責推行三個認可計劃，包括：
        </>
      ),
      this_full_list: (
        <>
          此完整清單僅用於搜尋特定的合格評定活動，並且每週更新一次。如欲了解最新的認可範圍，請造訪
          <a
            aria-label="香港認可處網站"
            href="https://www.itc.gov.hk/ch/quality/hkas/conformity_assessment_bodies/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#00E]"
          >
            香港認可處網站
          </a>
          。
        </>
      ),
      HKAS: `香港認可處網頁`,
      establishments: "獲認可機構",
      establishments_content: `實驗所、檢驗機構及認證機構須通過嚴格的現場評審，方能獲得認可資格，視爲有能力進行其認可服務範圍內的合格評定活動。使用者可物色和挑選由認可機構提供的服務，以支援其業務。`,
    },
  };

  const page_text = getPageText(multilingual);
  const {
    accreditation_services,
    whats_accreditation,
    accreditation_def,
    accreditation_is_open,
    accreditation_is_open_content,
    this_full_list,
    establishments,
    establishments_content,
  } = page_text;

  const thisFullListMapping: Record<Language, any> = {
    [Language.EN]: this_full_list,
    [Language.ZH_TW]: this_full_list,
    [Language.ZH_CN]: (
      <>
        此完整清单仅用于搜寻特定的合格评定活动，并且每週更新一次。如欲了解最新的认可范围，请造访
        <a
          aria-label="香港认可处网站"
          href="https://www.itc.gov.hk/gb/quality/hkas/conformity_assessment_bodies/index.html"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#00E]"
        >
          香港认可处网站
        </a>
        。
      </>
    ),
  };

  return (
    <div className="w-full">
      <div className="flex-1">
        <SquareTitle title={accreditation_services as string} />
        <div className="bg-[#EEEEEA] my-[24px] py-[36px] px-[42px]">
          <p className="text-heading-m">{whats_accreditation as string}</p>
          <p className="text-body-m mt-[16px] text-justify">
            {
              (accreditation_def as LanguageResources)
                ?.accreditation_is as string
            }
            &nbsp;
            <span className="text-highlight-m text-newPrimary">
              {(accreditation_def as LanguageResources)?.third_party as string}
            </span>
            &nbsp;
            {(accreditation_def as LanguageResources)?.related_to as string}
          </p>
        </div>
        <p className="text-body-m mt-[24px] text-justify">
          {accreditation_is_open as string}
        </p>
        <p className="text-body-m mt-[24px] text-justify">
          {accreditation_is_open_content as string}
        </p>

        <div className="w-full">
          {accreditationService.map((item, index) => {
            const { title, titleCN, imagePath, link, explain, explainCN } =
              item;
            return (
              <div
                key={index}
                className="flex flex-row h-[90px] mt-[24px] gap-[24px]"
              >
                <a
                  href={link}
                  className="relative w-[130px] h-full flex-shrink-0"
                  target={"_blank"}
                  rel={"noopener noreferrer"}
                  aria-label={getSingleText(title, titleCN)}
                >
                  <img
                    className="border-2 border-inherit w-full h-full object-contain transition-transform duration-300 ease-in-out group-hover:scale-110"
                    src={`${process.env.PUBLIC_URL}/assets/${imagePath}`}
                    alt={getSingleText(title, titleCN)}
                    aria-hidden="true"
                  />
                  {/* Icon */}
                  <img
                    className="absolute bottom-[4px] right-[4px] w-[32px] h-[32px]"
                    src={`${process.env.PUBLIC_URL}/assets/icons/PDF.png`}
                    alt="Share"
                    aria-hidden="true"
                  />
                </a>
                <span className="!text-highlight-m h-full flex items-center">
                  <a href={link} target={"_blank"} rel={"noopener noreferrer"}>
                    <span className="underline">
                      {getSingleText(title, titleCN)}
                    </span>
                    {getSingleText(explain, explainCN).length > 48 && !isPC
                      ? getSingleText(explain, explainCN).slice(0, 48) + "..."
                      : getSingleText(explain, explainCN)}
                  </a>
                </span>
              </div>
            );
          })}
        </div>
        <p className="text-italic-s mt-[24px] text-justify">
          {thisFullListMapping[language] as React.ReactNode}
        </p>
        <hr className="my-[24px]" />
        <p className="text-heading-l">{establishments as string}</p>
        <div className="text-body-m mt-[24px] text-justify">
          {establishments_content as string}
        </div>
      </div>
    </div>
  );
};
