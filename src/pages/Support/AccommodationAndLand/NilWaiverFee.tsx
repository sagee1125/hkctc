import * as React from "react";
import {
  Accordion,
  SquareTitle,
  normalButtonStyle,
  activatedButtonStyle,
  MediaTemplateWithDialog,
} from "../../../components";
import { Language, LanguageResources, useSettings } from "../../../context";
import { MEDIA_TYPE } from "../../../const";

const multilingual = {
  en: {
    title: `"Nil Waiver Fee" for Testing Labs Operating in Industrial Buildings`,
    the_measure_is: (
      <>
        The measure is effective from 1 February 2016. The details on
        application procedures are set out in the&nbsp;
        <a
          aria-label="link"
          href="https://www.landsd.gov.hk/en/resources/practice-notes/lao.html"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#00E]"
        >
          Practice Note No. 1/2016
        </a>
        &nbsp;issued by Lands Department (LandsD).
      </>
    ),
    summary: {
      title: `Summary`,
      content: [
        `The Government introduces this policy measure effective as from 1 February 2016 to facilitate the operation of testing and calibration laboratories (hereunder referred to as "testing laboratories") in industrial building. The Government hopes that this measure would offer testing laboratories more choices of suitable space in the market.`,
        `The leases of industrial buildings1 usually contain user restrictions. The uses permitted under such leases are typically specified as "industrial and/or godown purposes". However, testing laboratories not involving a primary manufacturing use are not considered as industrial use in the context of land leases.`,
        `The owner (or his/her agent) intending to use part(s) of or an entire industrial building can apply to LandsD for a waiver of the user condition of the land lease to allow testing laboratory use for the lifetime of the existing industrial building, or until the expiry or termination of the current land lease, whichever is the earlier.`,
        `For an approved application to LandsD for a waiver under this measure, the Government will exempt the waiver fee otherwise be chargeable for issuing waivers to allow use as a testing laboratory. However, applicants would need to pay an administrative fee as and when demanded by LandsD.`,
        `Applications would only be accepted if the premises concerned are located in an industrial building where testing laboratory use is permitted under the current land use zoning of the site on the statutory plan, or is subject to a valid planning permission granted by the Town Planning Board (TPB), or is considered as an existing use under the provisions of the statutory plan.`,
        `Innovation and Technology Commission (ITC) will advise LandsD whether or not the use as stated in an application is an eligible testing laboratory use.`,
      ],
      background_information: `For background information, please refer to the Legislative Council Brief:`,
      note: `Note 1: An industrial building refers to a building lawfully erected on a lot which, under the lease conditions, shall not be used for any purpose other than for industrial and/or godown purposes. Industrial buildings do not include special factories such as those located in storage premises in container terminals and flatted factories built by the Hong Kong Housing Authority, or lots for special industries such as cargo handling uses, ship building and repairing, oil storage and refining and production of associated chemical by-product, manufacture of polystyrene plastics, manufacture and storage of chlorine, hydrogen and textile chemicals, etc.`,
      legislative_council_brief: `Legislative Council Brief`,
      to_learn_more: (
        <>
          To learn more about the measure, please see&nbsp;
          <span className="text-newPrimary">FAQs</span>&nbsp;below.
        </>
      ),
    },
    enquiries: `Enquiries`,
    for_enquiries_on_whether: (
      <>
        For enquiries on whether a testing laboratory may benefit under this
        measure, please contact the Secretariat of the Hong Kong Council for
        Testing and Certification (
        <a
          aria-label="link"
          href="mailto:enquiry@hkctc.gov.hk"
          className="underline text-[#00E]"
        >
          enquiry@hkctc.gov.hk
        </a>
        )
      </>
    ),
    for_enquiries_on_application: `For enquiries on application procedures, please contact the respective District Lands Office for which contact information can be found at `,
    faq: {
      title: "Frequently Asked Questions",
      below_are: `Below are some questions and answers for general reference only and these would not prejudice LandsD in exercising its authority and powers according to the Government land lease and the relevant Practice Note (No. 1/ 2016). If you have any doubts about the land lease conditions or land use zoning, you are encouraged to seek professional advice.`,
    },
    disclaimer: `Disclaimer`,
    disclaimer_content: `The information is provided by the Government for general reference only. The Government is not liable for any damages whatsoever arising out of the use of the information. The information shall not prejudice the Government in formulation of the implementation details and the Lands Department in exercising its authority and powers according to the Government land lease. The information shall not constitute any representation on the part of the Government or give rise to any expectation whatsoever and shall not be relied on as such. Each application for waiver will be considered on its own merits having regard to all factors and circumstances, which the Government at its absolute discretion considers applicable. The Government's right to add to, amend or delete the whole or any part of the information is hereby reserved.`,
  },
  cn: {
    title: `在工業大廈營運的測試實驗所「免繳豁免書費用」安排`,

    the_measure_is: (
      <>
        施在2016年2月1日起生效。申請程序的詳情於地政總署
        <a
          aria-label="link"
          href="https://www.landsd.gov.hk/en/resources/practice-notes/lao.html"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#00E]"
        >
          作業備考編號1/2016
        </a>
        中列明。
      </>
    ),
    summary: {
      title: `概要`,
      content: [
        `政府於2016年2月1日起實施這項措施，以協助測試及校正實驗所（下稱「測試實驗所」）於工業大廈營運。政府希望藉此為測試實驗所於市場提供更多可選擇的合適地方。`,
        `工業大廈1的土地契約一般載有用途限制，有關契約容許的用途通常指定為「工業及／或倉庫」用途。然而，沒有涉及主要製造用途的測試實驗所，在一般工業契約下，不被視作工業用途。`,
        `全幢或部份工業大廈的業主（或其代理人）可向地政總署申請豁免土地契約下用途條件的限制，以容許在現有工業大廈的整段使用期內或直至現行土地契約期屆滿或終止為止(以較早的日期為準)，作測試實驗所用途。`,
        `如在這措施下向地政總署申請豁免書獲批核，政府將免收在一般情況下發出豁免書以容許作測試實驗所用途所須徵收的豁免書費用。然而，申請人須按地政總署的要求繳付行政費用。`,
        `申請只會在以下情況下獲得接納：有關樓宇位於工業大廈內而測試實驗所用途為有關用地現時在法定圖則上的所屬土地用途地帶所准許的，或獲得城市規劃委員會（下稱「城規會」）批給有效的規劃許可，或在法定圖則的規定下被視為現有用途。`,
        `創新科技署會就申請書中列明的用途是否合資格的測試實驗所用途向地政總署提供意見。`,
      ],
      background_information: `有關措施的背景資料，請參閱立法會參考資料摘要:`,
      note: `註1:「工業大廈」指在地段合法興建的樓宇，而根據地契條件，該地段除作工業及／或倉庫用途外，不得作任何用途。這些地段在本文件中稱為工業地段。這類工業大廈不包括特殊的工廠大廈，例如貨櫃碼頭內的貨倉及香港房屋委員會興建的分層工廠大廈，以及特殊的工業，例如貨物裝卸、造船及修船、存油、煉油及生產相關化學副產品、製造聚苯乙烯塑料、製造及存儲氯氣、氫氣及紡織化工等所用的地段。`,
      legislative_council_brief: `立法會參考資料摘要`,

      to_learn_more: (
        <>
          如欲了解這項措施的詳情，請參閱
          <span className="text-newPrimary">常見問題</span>。
        </>
      ),
    },
    enquiries: `查詢`,
    for_enquiries_on_whether: (
      <>
        有關測試實驗所可否受惠於這項措施的查詢，請與香港檢測和認證局秘書處（
        <a
          aria-label="link"
          href="mailto:enquiry@hkctc.gov.hk"
          className="underline text-[#00E]"
        >
          enquiry@hkctc.gov.hk
        </a>
        ）聯絡。
      </>
    ),
    for_enquiries_on_application: `有關申請程序的查詢，請聯絡相關的分區地政處，聯絡資料可瀏覽以下網頁：`,
    faq: {
      title: "常見問題",
      below_are: `以下答問資料僅供一般參考，並不妨礙地政總署根據政府土地契約行使其權限和權力，以及相關的作業備考（編號1/2016）。如對土地契約條件或土地用途地帶有疑問，應徵詢專業意見。`,
    },
    disclaimer: `免責聲明`,
    disclaimer_content: `政府所提供的資料只供一般參考之用。政府無須對使用資料而引致的任何損害負上責任。資料並不妨礙政府制訂實施細則，以及地政總署根據政府土地契約行使其權限和權力。資料絕不構成由政府作出的任何陳述，也絕不應引起任何其他期望，故亦不得作為政府作出任何陳述或引起任何期望的根據。政府會按照每宗短期豁免書申請的個別情況，經考慮各種因素和情況後予以獨立考慮，而政府對各種因素和情況的適用與否有絕對酌情權。政府亦保留對資料的全部或部分內容作出增補、修訂或刪減的權利。`,
  },
};

const eligibilityQues = [
  {
    question:
      "What kinds of laboratories may benefit from the 'Nil Waiver Fee' for Testing Laboratories Operating in Industrial Buildings (hereunder referred to as 'the measure')?",
    answer: (
      <>
        <p>
          Testing and calibration laboratories (hereunder referred to as
          "testing laboratories") may benefit from the measure. Applicants for a
          waiver of the user condition under the land lease will be required to
          make a self-declaration and provide evidence (e.g. accreditation
          status, operation record, expert opinions) to demonstrate that the
          proposed change of use of the premises is primarily for testing
          laboratory and ancillary purposes. Upon receiving an application, ITC
          will advise LandsD whether or not the use as stated in an application
          is a testing laboratory use eligible under this policy measure.
        </p>
        <p>
          Laboratories providing clinical testing which requires humans or
          animals to undergo checking at the Industrial Premises are not covered
          by the measure because the frequent patronage by a large number of
          individual clients will expose individuals to higher fire risks posed
          by other units which are still being used for industrial activities or
          storage of dangerous and inflammable goods, and because such use is
          usually not permitted in industrial buildings according to the Notes
          of Outline Zoning Plans. Medical and veterinary laboratories that do
          not require humans or animals to undergo checking at the Industrial
          Premises are eligible to apply.
        </p>
      </>
    ),
  },
  {
    question:
      "How would I know if my laboratory is a testing laboratory that may benefit under the measure?",
    answer: (
      <span>
        You may approach the Secretariat of the Hong Kong Council for Testing
        and Certification (
        <a
          aria-label="link"
          href="mailto:enquiry@hkctc.gov.hk"
          className="underline text-[#00E] break-all"
        >
          enquiry@hkctc.gov.hk
        </a>
        ) for a discussion. In general, testing laboratories with accredited
        activities would be covered.
      </span>
    ),
  },
  {
    question: "What types of industrial buildings are covered by the measure?",
    answer: (
      <>
        <p>
          The measure is applicable to a building lawfully erected on a lot
          which, under the lease conditions, shall not be used for any purpose
          other than for industrial and / or godown purposes.
        </p>
        <p>
          However, the measure does not apply to special factories such as those
          located in storage premises in container terminals and flatted
          factories built by the Hong Kong Housing Authority, or lots for
          special industries such as cargo handling uses, ship building and
          repairing, oil storage and refining and production of associated
          chemical by-product, manufacture of polystyrene plastics, manufacture
          and storage of chlorine, hydrogen and textile chemicals, etc. An
          "industrial / office" building is not covered by the measure.
        </p>
      </>
    ),
  },
  {
    question: "Would a calibration laboratory benefit under the measure?",
    answer: (
      <>
        Yes, calibration laboratories are, in general, covered under the
        measure. Applicants will be required to make a self-declaration and
        provide evidence (e.g. accreditation status, operation record, expert
        opinions) to demonstrate that the proposed use of the premises is for
        calibration laboratory and ancillary purposes. Government encourages
        testing laboratories to obtain accreditation from the Hong Kong
        Accreditation Service.
      </>
    ),
  },
  {
    question: "Can a medical laboratory apply for a waiver at nil waiver fee?",
    answer: (
      <>
        Laboratories providing clinical testing which requires humans or animals
        to undergo checking at the Industrial Premises are not covered by the
        measure because the frequent patronage by a large number of individual
        clients will expose individuals to higher fire risks posed by other
        units which are still being used for industrial activities or storage of
        dangerous and inflammable goods, and because such use is usually not
        permitted in industrial buildings according to the Notes of Outline
        Zoning Plans. Medical and veterinary laboratories that do not require
        humans or animals to undergo checking at the Industrial Premises are
        covered in general.
      </>
    ),
  },
  {
    question: "Can a certification body apply for a waiver at nil waiver fee?",
    answer: (
      <>
        Premises used solely by a certification body without any testing or
        calibration activity are not covered under the measure. If the premises
        concerned are for certification as well as testing and / or calibration
        laboratory use, then ITC may consider that on a case-by-case basis.
      </>
    ),
  },
  {
    question:
      "We are planning to set up a new testing laboratory in Hong Kong and we have never operated in the territory. Would we benefit from the measure?",
    answer: (
      <>
        Yes, but you will have to locate premises for your proposed testing
        laboratory first, check restrictions under the land lease and land use
        zoning on the statutory plan if the subject industrial premises are
        covered under the measure. If the owner of the premises would like to
        apply for a waiver under the measure to allow use as a testing
        laboratory, he/she, or his/her authorised representative can apply to
        LandsD. Please also refer to reply to QI.1 above.
      </>
    ),
  },
  {
    question:
      "None of the existing tenants in an industrial building is a testing laboratory. Can the landlord apply for the nil fee waiver?",
    answer: (
      <>
        Yes, the landlord can apply for a waiver of the user condition under the
        measure if the use is permitted under the current land use zoning of the
        site on the statutory plan, or is subject to a valid planning permission
        granted by the Town Planning Board, or is considered as an existing use
        under the provisions of the statutory plan.
      </>
    ),
  },
  {
    question:
      "Is accreditation by the Hong Kong Accreditation Service a requirement for application under the measure?",
    answer: (
      <>
        Accreditation status can be considered as evidence to demonstrate that
        the proposed change of use is primarily for testing laboratory and
        ancillary purposes. Nonetheless, whether your laboratory would like to
        apply for a waiver, Government encourages that you obtain accreditation
        from the Hong Kong Accreditation Service.
      </>
    ),
  },
];

const planningQues = [
  {
    question:
      "How would I know whether testing laboratories are allowed to operate in an industrial building under lease?",
    answer: (
      <>
        Government leases, under which all private properties in Hong Kong are
        held, usually contain lease restrictions including the uses to which the
        land or buildings may be put. Copy of the Government lease can be
        obtained from the Land Registry. Lot owners may seek professional advice
        on lease matters.
      </>
    ),
  },
  {
    question:
      "How can I find out the land use zoning within which my industrial building falls?",
    answer: (
      <span>
        Please refer to the Outline Zoning Plans at the Statutory Planning
        Portal&nbsp;(
        <a
          aria-label="link"
          href="https://www.ozp.tpb.gov.hk/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#00E]"
        >
          www.ozp.tpb.gov.hk
        </a>
        ).
      </span>
    ),
  },
  {
    question:
      "How do I know whether the operation of testing laboratory is permitted under the land use zoning where the concerned industrial building is situated?",
    answer: (
      <>
        Potential applicants can contact / visit the Planning Enquiry Counters
        or the respective District Planning Office of the Planning Department
        for enquiry on planning matters.
      </>
    ),
  },
  {
    question:
      "Do I need to apply to Town Planning Board for planning permission before application for nil fee waiver?",
    answer: (
      <>
        If the testing laboratory use of the premises concerned is permitted
        under the current land use zoning, or is subject to a valid planning
        permission granted by the TPB, or is considered as an existing use under
        the provisions of the statutory plan, then there is no need to apply for
        planning permission. Otherwise, you have to seek planning permission
        from the TPB before application for nil fee waiver.
      </>
    ),
  },
];

const approvalQues = [
  {
    question:
      "If an industrial building is under multiple ownership, do I need the consent of all building owners to apply for the waiver?",
    answer: (
      <>
        An owner of any unit of an industrial building may apply to change the
        use of their premises into a testing laboratory. There is no need for
        all owners of the same building to submit a joint application. However,
        applicants are reminded to note any restrictions or obligations under
        the Deed of Mutual Covenant of the lot, if any.
      </>
    ),
  },
  {
    question:
      "Is an administrative fee payable for applying for the nil fee waiver?",
    answer: (
      <>
        The owner shall be required to pay an administrative fee upon demand by
        LandsD after submission of an application.
      </>
    ),
  },
  {
    question:
      "After the nil fee waiver to accommodate testing laboratory use has been granted, can I switch back to the original use without terminating the waiver?",
    answer: (
      <>
        Yes. Under the measure, the owner can use the premises for either
        testing laboratory or the original uses under lease (or both) anytime
        during the lifetime of the existing building or until expiry or
        termination of the current land lease, whichever is the earlier. Testing
        laboratory use is allowed in addition to original uses under lease. If
        the property owner wishes to revert to the original uses, there would be
        no need to terminate the waiver. The waiver would remain valid
        throughout the term of the waiver, and there is no need to apply for
        another waiver if the premises concerned are to be used as testing
        laboratories again in future during the term of the waiver.
      </>
    ),
  },
];

const otherQues = [
  {
    question:
      "Can an industrial building being wholly-converted into other uses pursuant to the revitalisation of industrial buildings policy accommodate testing laboratories?",
    answer: (
      <>
        The permitted uses of an existing industrial building that has been
        converted into other uses pursuant to the revitalisation of industrial
        buildings policy are specified in the special waiver issued. We
        understand that there are cases where testing laboratory use is among
        the permissible uses of the revitalised buildings.
      </>
    ),
  },
];

const otherQuesCN = [
  {
    question:
      "正根據活化工廈政策整幢改裝為其他用途的工業大廈，可否容許作測試實驗所用途？",
    answer: (
      <>
        已根據活化工廈政策改裝為其他用途的現有工業大廈，其准許用途訂明於地政總署發出的特別豁免書中。據悉在某些個案中，工廈經活化後的准許用途包括測試實驗所用途在內。
      </>
    ),
  },
];
const approvalQuesCN = [
  {
    question:
      "如工業大廈屬共同業權擁有，是否須徵得大廈所有業主同意，才能申請豁免書？",
    answer: (
      <>
        任何工業大廈單位的業主可提交申請，把樓宇用途更改作測試實驗所，而無須由同一大廈的全部業主提交聯合申請。不過，申請人須注意其在有關地段的大廈公契（如有的話）下的限制或責任。
      </>
    ),
  },
  {
    question: "申請免繳費豁免書是否須繳付行政費用？",
    answer: <>業主在提交申請後，須按地政總署的要求繳付行政費用。</>,
  },
  {
    question:
      "在獲發容許作測試實驗所用途的免繳費豁免書後，我可否在不終止豁免書的情況下回復原有用途？",
    answer: (
      <>
        可以。在此措施下，業主可在現有大廈的整段使用期內的任何時間或直至現行土地契約期屆滿或終止為止（以較早的日期為準），把樓宇用作測試實驗所用途或契約所訂的原有用途（或兩者兼具）。此措施除了容許樓宇用作契約所訂的原有用途外，亦容許樓宇用作測試實驗所用途。業主如欲回復原有用途，無須終止豁免書。豁免書在整段豁免期內會仍然有效；如日後有關樓宇在豁免期內再次用作測試實驗所用途，亦無須申請另一份豁免書。
      </>
    ),
  },
];

const planningQuesCN = [
  {
    question: "如何知悉地契是否容許測試實驗所在工業大廈營運？",
    answer: (
      <>
        香港所有私人物業均受到政府地契規管。政府地契一般載有地契限制，包括對土地或建築物用途的限制。政府地契的副本可於土地註冊處索取。地段業權人可就地契事宜徵詢專業意見。
      </>
    ),
  },
  {
    question: "如何查閱工業大廈所屬的土地用途地帶？",
    answer: (
      <span>
        請參閱有關法定規劃綜合網站的分區計劃大綱圖目錄詳細資料: (
        <a
          aria-label="link"
          href="https://www.ozp.tpb.gov.hk/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#00E]"
        >
          www.ozp.tpb.gov.hk
        </a>
        ).
      </span>
    ),
  },
  {
    question: "如何知悉有關工業大廈所處的土地用途地帶是否准許測試實驗所營運？",
    answer: (
      <>
        有意申請者可聯絡／到訪規劃署轄下的規劃資料查詢處或所屬的地區規劃處，就規劃事宜作出查詢。
      </>
    ),
  },
  {
    question: "在申請免繳費豁免書前，是否須向城規會申請規劃許可？",
    answer: (
      <>
        如有關樓宇的測試實驗所用途為現時所屬土地用途地帶所准許的，或獲得城規會批給有效的規劃許可，或在法定圖則的規定下被視為現有用途，則無須申請規劃許可；否則，便須在申請免繳費豁免書前，向城規會申請規劃許可。
      </>
    ),
  },
];
const eligibilityQuesCN = [
  {
    question:
      "什麼類別的實驗所可受惠於為工業大廈營運的測試實驗所推行的「免繳豁免書費用」措施（下稱「此措施」）？",
    answer: (
      <>
        <p>
          測試及校正實驗所（下稱「測試實驗所」）可受惠於此措施。申請豁免土地契約下用途條件的申請人須提交聲明書，並提供證據（例如認可資格、業務記錄、專家意見），以證明建議改變的樓宇用途主要用作測試實驗所及附屬用途。地政總署接獲申請後，創新科技署會就申請書中列明的用途是否該政策措施下合資格的測試實驗所用途向地政總署提供意見。
        </p>
        <p>
          此措施並不涵蓋在工業大廈內任何為提供臨牀測試而需要人類或動物接受檢查的實驗所，因為當其他單位仍用作工業活動或存放危險及易燃物品時，大量個人客戶經常到訪會使有關人士承受較高的火警風險，而且根據分區計劃大綱圖註釋，有關用途通常不獲准在工業大廈內進行。不需要人類或動物在工業大廈內接受檢查的醫務和獸醫化驗所則符合資格申請。
        </p>
      </>
    ),
  },
  {
    question: "如何知悉我的實驗所是否屬可受惠於此措施的測試實驗所？",
    answer: (
      <span>
        你可聯絡香港檢測和認證局秘書處 (
        <a
          aria-label="link"
          href="mailto:enquiry@hkctc.gov.hk"
          className="underline text-[#00E] break-all"
        >
          enquiry@hkctc.gov.hk
        </a>
        ) 以作查詢。一般而言，此措施涵蓋從事獲認可活動的測試實驗所。
      </span>
    ),
  },
  {
    question: "此措施涵蓋什麼類型的工業大廈？",
    answer: (
      <>
        <p>
          此措施適用於在地段合法興建的樓宇，而根據地契條件，該地段除作工業及／或倉庫用途外，不得作任何用途。
        </p>
        <p>
          不過，此措施並不適用於特殊的工廠大廈，例如貨櫃碼頭內的貨倉及香港房屋委員會興建的分層工廠大廈，以及特殊的工業，例如貨物裝卸、造船及修船、存油、煉油及生產相關化學副產品、製造聚苯乙烯塑料、製造及存儲氯氣、氫氣及紡織化工等所用的地段。此措施並不涵蓋「工業／辦公室」兩用樓宇。
        </p>
      </>
    ),
  },
  {
    question: "校正實驗所會否受惠於此措施？",
    answer: (
      <>
        會，此措施一般涵蓋校正實驗所。申請人須提交聲明書，並提供證據（例如認可資格、業務記錄、專家意見），以證明建議的樓宇用途是用作校正實驗所及附屬用途。政府鼓勵測試實驗所獲取香港認可處頒授的認可資格。
      </>
    ),
  },
  {
    question: "醫務化驗所可否申請豁免書而免繳豁免書費用？",
    answer: (
      <>
        此措施並不涵蓋在工業大廈內任何為提供臨牀測試而需要人類或動物接受檢查的實驗所，因為當其他單位仍用作工業活動或存放危險及易燃物品時，大量個人客戶經常到訪會使有關人士承受較高的火警風險，而且根據分區計劃大綱圖註釋，有關用途通常不獲准在工業大廈內進行。新措施一般涵蓋不需要人類或動物在工業大廈內接受檢查的醫務和獸醫化驗所。
      </>
    ),
  },
  {
    question: "認證機構可否申請豁免書而免繳豁免書費用?",
    answer: (
      <>
        此措施並不涵蓋純粹由認證機構所使用而不用作進行任何測試或校正活動的樓宇。如有關樓宇在用作認證的同時，亦作測試及／或校正實驗所用途，則創新科技署可按個別情況作出考慮。
      </>
    ),
  },
  {
    question:
      "我們正計劃在香港設立一所新的測試實驗所，但從未在香港經營該業務，這樣我們會否受惠於此措施？",
    answer: (
      <>
        會，惟你們須首先為擬設立的測試實驗所物色樓宇，並查看土地契約和法定圖則上所屬土地用途地帶的限制，以核實有關樓宇是否屬於新措施所涵蓋的工業大廈。如樓宇業主有意在此措施下申請豁免書以容許作測試實驗所用途，可由本人或其獲授權代表向地政總署提出申請。另請參閱上文問I.1的答覆。
      </>
    ),
  },
  {
    question: "工業大廈的現有租戶中並沒有測試實驗所，業主可否申請免繳費豁免書?",
    answer: (
      <>
        可以。業主可在此措施下申請用途條件豁免書，惟有關用途須為有關用地現時在法定圖則上的所屬土地用途地帶所准許的，或獲得城規會批給有效的規劃許可，或在法定圖則的規定下被視為現有用途。
      </>
    ),
  },
  {
    question: "根據此措施提出申請是否必須具備香港認可處頒授的認可資格？",
    answer: (
      <>
        認可資格可被視為證據，以證明建議改變的用途主要用作測試實驗所及附屬用途。然而，不論實驗所是否有意申請豁免書，政府亦鼓勵實驗所獲取香港認可處頒授的認可資格。
      </>
    ),
  },
];
const faqMap: Record<
  string,
  {
    label: string;
    labelCN: string;
    faqs: Array<{
      question: string;
      answer: JSX.Element;
    }>;
    faqCN: Array<{
      question: string;
      answer: JSX.Element;
    }>;
  }
> = {
  eligibility: {
    label: "Eligibility",
    labelCN: "申請資格",
    faqs: eligibilityQues,
    faqCN: eligibilityQuesCN,
  },
  leasePlanningMatters: {
    label: "Lease & Planning Matters",
    labelCN: "規劃及地契事宜",
    faqs: planningQues,
    faqCN: planningQuesCN,
  },
  applicationApproval: {
    label: "Application & Approval",
    labelCN: "申請和批核",
    faqs: approvalQues,
    faqCN: approvalQuesCN,
  },
  others: {
    label: "Others",
    labelCN: "其他",
    faqs: otherQues,
    faqCN: otherQuesCN,
  },
};

export const NilWaiverFee: React.FC = () => {
  const [activeButton, setActiveButton] = React.useState(
    Object.keys(faqMap)[0]
  );
  const { isPC, language, getPageText, getSingleText, getSingleNode } =
    useSettings();
  const page_text = getPageText(multilingual);

  const {
    title,
    the_measure_is,
    summary,
    enquiries,
    for_enquiries_on_whether,
    for_enquiries_on_application,
    faq,
    disclaimer,
    disclaimer_content,
  } = page_text;
  // const renderedInfo = [eligibilityQues, panningQues, approvalQues, otherQues];

  return (
    <div className="w-full text-justify">
      <div className="mb-[24px]">
        <SquareTitle title={title as string} />
      </div>
      <div className="w-full bg-[#F7F7F5] py-[36px] px-[42px] text-body-m ">
        {the_measure_is as React.ReactNode}
      </div>

      <div className="text-heading-l mt-[24px]">
        {(summary as LanguageResources).title as React.ReactNode}
      </div>
      <ul className="text-body-m mt-[24px]">
        {((summary as LanguageResources).content as React.ReactNode[]).map(
          (c, index) => (
            <React.Fragment key={index}>
              <li>{c}</li>
              <br />
            </React.Fragment>
          )
        )}
      </ul>
      <p className="text-body-m mb-[24px]">
        {(summary as LanguageResources).background_information as string}
      </p>
      <p className="text-body-m mb-[24px]">
        {(summary as LanguageResources).note as string}
      </p>

      <div className="flex flex-row h-[90px] mt-[24px] gap-[24px] items-center">
        <MediaTemplateWithDialog
          title={
            (summary as LanguageResources).legislative_council_brief as string
          }
          mediaLink={"/en/doc/itc-hkctc-17-7-1c-e.pdf"}
          direction="row"
          maskIcon={"PDF.png"}
          date={""}
          mediaType={MEDIA_TYPE.PDF}
          mediaDomain={"hkctc"}
        />
      </div>

      <p className="text-body-m mt-[24px]">
        {(summary as LanguageResources).to_learn_more as string}
      </p>
      <hr className="my-[24px] text-[#E0E0E0]" />

      <div className="text-heading-l">{enquiries as string}</div>
      <div className="mt-[24px] border-[1px] border-[#E0E0E0] py-[24px] px-[36px]">
        <div className="flex flex-row gap-[24px] items-center w-full">
          <img
            className="w-[32px] h-[32px] flex-shrink-0"
            src={`${process.env.PUBLIC_URL}/assets/icons/alert.svg`}
            alt={"alert"}
          />
          <p className="text-body-m flex-grow min-w-0">
            {for_enquiries_on_whether as string}
          </p>
        </div>
        <div className="flex flex-row gap-[24px] items-center w-full mt-[24px]">
          <img
            className="w-[32px] h-[32px] flex-shrink-0"
            src={`${process.env.PUBLIC_URL}/assets/icons/alert.svg`}
            alt={"alert"}
          />
          <p className="text-body-m flex-grow min-w-0">
            {for_enquiries_on_application as string}
            <a
              aria-label="link"
              href="https://www.landsd.gov.hk/en/about-us/contact-us.html"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#00E] break-all"
            >
              https://www.landsd.gov.hk/en/about-us/contact-us.html
            </a>
          </p>
        </div>
      </div>
      <hr className="my-[24px] text-[#E0E0E0]" />
      <div className="flex flex-col gap-[24px]">
        <div className="text-heading-l">
          {(faq as LanguageResources).title as string}
        </div>
        <p className="text-body-m">
          {(faq as LanguageResources).below_are as string}
        </p>
        <div className="flex flex-wrap gap-[8px]">
          {Object.keys(faqMap).map((b, i) => {
            const isActivated = activeButton === b;
            const label = getSingleText(faqMap[b].label, faqMap[b].labelCN);
            return (
              <button
                key={i}
                tabIndex={0}
                role="button"
                style={isActivated ? activatedButtonStyle : normalButtonStyle}
                onClick={() => {
                  setActiveButton(b);
                }}
              >
                <p className="text-highlight-xs">
                  {label.length > 44 && !isPC
                    ? label.slice(0, 44) + "..."
                    : label}
                </p>
              </button>
            );
          })}
        </div>

        <div className="flex flex-col gap-[24px]">
          {(language === Language.EN
            ? faqMap[activeButton].faqs
            : faqMap[activeButton].faqCN
          ).map((com, i) => {
            return (
              <Accordion
                title={`${i + 1}. ${getSingleText(com.question, com.question)}`}
                details={
                  <div className="flex flex-col gap-[24px] !text-body-m">
                    {getSingleNode(com.answer, com.answer)}
                  </div>
                }
              />
            );
          })}
        </div>
      </div>
      <hr className="my-[24px] text-[#E0E0E0]" />
      <div className="text-heading-l mb-[24px]">{disclaimer as string}</div>
      <p className="text-body-m">{disclaimer_content as string}</p>
    </div>
  );
};
