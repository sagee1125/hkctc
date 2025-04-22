import React, { useState } from "react";
import {
  normalButtonStyle,
  activatedButtonStyle,
  SquareTitle,
  Accordion,
  type MediaTemplateWithDialogProps,
  MediaTemplateWithDialog,
} from "../../../../components";
import { Language, useSettings } from "../../../../context";
import { MEDIA_TYPE } from "../../../../const";

const supportingOrg: Array<{
  title: string;
  urlPath: string;
}> = [
  {
    title: "ACML",
    urlPath: "ACML.png",
  },
  {
    title: "HKICA",
    urlPath: "HKICA.png",
  },
  {
    title: "HKIE",
    urlPath: "HKIE.png",
  },
  {
    title: "HKTIC",
    urlPath: "HKTIC.png",
  },
  {
    title: "HKAML",
    urlPath: "HKAML.png",
  },
  {
    title: "QF",
    urlPath: "QF.png",
  },
];

export const AwardScheme21to22Preview: React.FC<{
  handleOpenAssessmentPanel: () => void;
}> = ({ handleOpenAssessmentPanel }) => {
  const { isPC, language, processText, convertReactNode } = useSettings();
  const isEn = language === Language.EN;

  const multilingual = {
    en: {
      title:
        "Testing & Certification Manpower Development Award Scheme 2021-2022",
      result_announce: "[Results announced on 22 December 2021]",
      hkctc_launches_first: `HKCTC launches the first “Testing and Certification Manpower Development
          Award Scheme” (the Award Scheme) in 2021 to recognise testing and
          certification (T&C) bodies which attach great importance to talent
          training and manpower development, as well as to encourage T&C
          practitioners to strive for improvement and professional development.`,
      supporting_organisations: "Supporting Organisations",
      timeline: "Timeline",
      date: "Date",
      event: "Event",
      timeline_list: [
        {
          date: "7 Jun 2021",
          event: "Application open",
        },
        {
          date: "31 Aug 2021, 6:00 pm",
          event: "Application close",
        },
        {
          date: "Sep - Nov 2021",
          event: "Application Assessment",
        },
        {
          date: "Oct 2021",
          event:
            "Notification for interviews to Excellent T&C Professional Award shortlisted applicants",
        },
        {
          date: "Nov 2021",
          event: "Announcement of award results",
        },
        {
          date: "Dec 2021",
          event: "Award presentation ceremony",
        },
      ],

      testing_manpower_award:
        "I. Testing and Certification Manpower Development Corporate Award",
      award_recognises_accredited: `This Award recognises accredited T&C bodies’ achievements in manpower
          and professional development of T&C practitioners.`,

      testing_manpower_award_btn: [
        "Benefits",
        "Eligibility",
        "Assessment Criteria",
        "Selection Process",
      ],

      testing_manpower_award_content: {
        awardees_be: "Awardees will be -",
        present_with_trophy:
          "Presented with a Trophy and an Award Certificate;",
        permit_use_logo: `Permitted to use the logo for the Gold Award and the Platinum Award
              as appropriate on their websites and promotional materials (Please
              refer to the Guidelines on the Use of the Logos under the Testing
              and Certification Manpower Development Corporate Award at Annex of
              the`,
        guild_note: " Guidance Notes",
        bracket: ");",
        invite_attend_presentation:
          " Invited to attend the presentation ceremony and publicity events.",

        applicant_be: "Applicant entities must be -",
        accredited_by_hkas: `Accredited by the Hong Kong Accreditation Service (HKAS) or other
              accreditation bodies having Mutual Recognition Arrangements with
              HKAS; and`,
        locate_in_hk: `Located in Hong Kong with testing and certification services
              provided locally.`,
        test_refer_service: `Testing and certification services refer to testing, calibration,
            inspection and/or certification services.`,

        applicant_entity_fulfill: `Applicant entities which fulfill at least three Criteria under each of
            the following four Areas are qualified for the Award, subject to the
            provision of valid and credible supporting documents -`,
        assessmentCriteriaGrid: [
          {
            color: "trustfulBlue",
            title: "Area A",
            content:
              "Commitment to T&C practitioners’ training and development",
          },
          {
            color: "elegancePurple",
            title: "Area B",
            content:
              "Corporate support to enhance T&C practitioners’ Competence and professionalism",
          },
          {
            color: "growthfulGreen",
            title: "Area C",
            content: "Caring for T&C practitioners",
          },
          {
            color: "energeticOrange",
            title: "Area D",
            content: "Communication with T&C practitioners",
          },
        ],
        activity_carry_out: `Activities carried out and achievements made during the period from 1
            January 2020 up to the date of application would be considered for the
            Award.`,
        awardees_demonstrated: `Those awardees who have demonstrated exceptional achievements in
            manpower and professional development of T&C practitioners in specific
            aspect may receive special commendation.`,
      },

      stagesGridOne: {
        stage_1: "Stage 1",
        stage_1_content:
          "HKCTC Secretariat will conduct an initial screening on the applications",
        stage_2: "Stage 2",
        stage_2_assessment: "Independent Assessment Panel",
        stage_2_will_shortlist:
          "will consider and, shortlisting as the circumstances require, interview applicants with a view to selecting the awardees",
      },

      testing_profession_award:
        "II. Excellent Testing and Certification Professional Award",
      award_commends_individual: `This Award commends individual T&C practitioners who have demonstrated
          excellence in various aspects, including but not limited to the
          followings:`,
      purse_continue_learning: `Pursuing continuous learning and professional development by
              acquiring new skills, capabilities as well as relevant academic and
              professional qualifications after joining the T&C industry;`,
      make_contribution: `Making outstanding contribution s to improving service quality or
              productivity; etc`,
      testing_profession_award_content: {
        awardees_be: "Awardees will be -",
        present_with_trophy:
          "Presented with a Trophy and an Award Certificate;",
        invite_attend_presentation:
          " Invited to attend the presentation ceremony and publicity events.",
        applicant_practitioners_be: "Applicant practitioners must be -",
        nominate_by_test: `Nominated by a testing and certification body which is accredited by
              the Hong Kong Accreditation Service (HKAS) or other accreditation
              bodies having Mutual Recognition Arrangements with HKAS;`,
        employee_of_nominate: `An employee of the nominating testing and certification body for at
              least 1 year; and`,
        locate_in_hk: `Located in Hong Kong with major duty to carry out testing,
              calibration, inspection and/or certification service.`,
        two_subgroup: "There are two subgroups under the Award -",
        junior_profession: "Junior Professional:",
        tc_practitioners_appoint: `Testing and certification (T&C) practitioners who have joined
              the T&C industry for at least 1 year and are appointed in a
              junior/entry rank position in an accredited T&C body; and`,
        middle_management: "Middle Management:",
        tc_practitioners_join: `T&C practitioners who have joined the T&C industry for at
              least 5 years and are appointed in a managerial position in an
              accredited T&C body.`,

        merits_application:
          "Merits of each application will be assessed on one of the following aspects -",
        commitment_continue_learning: `Commitment to continuous learning and professional development by
              acquiring new skills, capabilities as well as relevant academic and
              professional qualifications after joining the testing and
              certification industry;`,
        impact_of_contributions: `Impact/significance of contributions made to improving service
              quality or productivity of the nominating testing and certification
              body (e.g. adopting innovation and/or new technology in service
              delivery).`,
        stagesGridTwo: {
          stage_1: "Stage 1",
          stage_1_content:
            "HKCTC Secretariat will conduct an initial screening on the applications",
          stage_2: "Stage 2",
          stage_2_assessment: "Assessment Panel ",
          stage_2_will_shortlist:
            "will shortlist and interview applicant practitioners, and select the awardees",
        },
      },
      faq: "Frequently Asked Questions",
      question_btn: [
        "General",
        "Testing and Certification Manpower Development Corporate Award",
        "Excellent Testing and Certification Professional Award",
      ],
      question_general_list: [
        {
          title:
            "Is there any submission or processing fee for the Award Scheme?",
          content: "No. Participation is free of charge.",
        },
        {
          title:
            "Can we submit the application form and supplementary documents separately?",
          content:
            "No. Completed application form must be submitted together with supplementary documents before the application deadline.",
        },
        {
          title:
            "Can we submit applications for both Testing and Certification Manpower Development Corporate Award and Excellent Testing and Certification Professional Award?",
          content:
            "Yes. Testing and certification bodies can apply for Testing and Certification Manpower Development Corporate Award as well as nominate testing and certification practitioners for the Excellent Testing and Certification Professional Award, subject to meeting the eligibility requirements of the Awards.",
        },
        {
          title: "Is there a fixed number of awardees?",
          content: "There is no pre-set number of awardees for both Awards.",
        },
      ],
      question_tc_manpower_list: [
        {
          title: "Why should our company apply for the Award?",
          content:
            "The Award recognises your company’s achievements and efforts made in the manpower and professional development of testing and certification practitioners, demonstrating to the community that talent is much treasured by your company. It thus projects a good corporate image for your company that helps attract and retain talent.",
        },
        {
          title:
            "Our company group consists of several accredited testing and certification bodies. Do we need to submit a separate application for each accredited testing and certification body in our group?",
          content:
            "Applicant entities may include accredited testing and certification bodies of the same group in one application if such testing and certification bodies are under the same management and apply the same company policy. In that case, information provided in the application should cover all T&C bodies specified in the application, and the application would be assessed holistically based on the same activities and achievements made by all testing and certification bodies specified in the application.",
        },
        {
          title:
            "Do we need to submit supporting information for each Criteria fulfilled?",
          content:
            "Yes. Evidence, supporting documents or examples should be provided for every Criteria claimed to be fulfilled in the application form.",
        },
        {
          title:
            "What kind of supporting documents are required for fulfilling the assessment Criteria?",
          content:
            "Supporting documents may take the form of acknowledge letters, internal office memos, photographs, staff manuals, emails, receipts, corporate publications, posters and certificate copies, etc. Consent must be obtained from the parties concerned for disclosure of personal data in the documents.",
        },
        {
          title:
            "If an activity of our company was conducted in 2019, could we use this to support our application?",
          content:
            "No. Only those activities and achievements made during the period from 1 January 2020 up to the date of application would be considered for the Award.",
        },
        {
          title:
            "What is the effective period for the use of the logos under the Corporate Award?",
          content:
            "Awardees of the Testing and Certification Manpower Development Corporate Award will be permitted to use the Corporate Award Logo from the date of public announcement of the award results. The specific date would be announced in due course.",
        },
        {
          title:
            "Do we need to submit samples of our promotional materials using the Corporate Award Logo to the HKCTC Secretariat for prior approval?",
          content: (
            <p>
              No. However, all promotional materials bearing the Corporate Award
              Logo must be legal, decent, healthy, honest, and trustful and must
              not contain any content of unlawful, defamatory, discrimination,
              insulting or otherwise objectionable nature.
              <br />
              <br />
              Please refer to the “Guidelines on the Use of the Testing and
              Certification Manpower Development Corporate Award Logo” at the
              Annex to the&nbsp;
              <a
                aria-label="Guidance Notes"
                className="underline text-[#00E]"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.hkctc.gov.hk/en/event/mpaward/doc/mpaward-2023-24-Guidance-Notes_ENG.pdf"
              >
                Guidance Notes
              </a>
              &nbsp;for details about the use of the Corporate Award Logo.
            </p>
          ),
        },
      ],
      question_tc_profession_list: [
        {
          title:
            "As a self-employed testing and certification practitioner, may I nominate myself for the Award?",
          content:
            "No. Applicant practitioner must be nominated by an accredited testing and certification body and is an employee of that nominating testing and certification body for at least one year.",
        },
        {
          title:
            "Can a testing and certification body nominate more than one testing and certification practitioner?",
          content:
            "Yes, as long as the nominees fulfil the eligibility requirement for the Award. There is no restriction on the number of employees nominated by a testing and certification body.",
        },
        {
          title:
            "Can a testing and certification body nominate an ex-employee?",
          content:
            "No. Testing and certification practitioners can only be nominated by their current employers.",
        },
      ],
      application: "Application",
      application_data: {
        guide_note: "Guidance Notes",
        app_form_tc_manpower:
          "Application Form - Testing and Certification Manpower Development Corporate Award (Form T&C MP01)",
        app_form_tc_profession:
          "Application Form - Excellent Testing and Certification Professional Award (Form T&C MP02)",
      },

      publications: "Publications",
      publications_data: {
        pamphlet: "Pamphlet",
        congratulatory_msg: "Congratulatory Messages for the Award Scheme",
        highlight: "Highlights of the Ceremony",
      },

      award_ceremony_list: "List of Awardees/ Award Ceremony",
      award_ceremony_list_long: "List of Awardees/ Award Ceremony 2021-2022",
    },
    cn: {
      title: "2021-22年度檢測認證人力發展嘉許計劃",
      result_announce: "[得獎名單已於2021年12月22日公佈]",
      hkctc_launches_first: `香港檢測和認證局於2021年首次推出「檢測認證人力發展嘉許計劃」，以表揚重視培訓人才及積極發展人力的檢測認證機構，並鼓勵檢測認證從業員不斷提升和發展專業。`,
      timeline: "時間表",
      supporting_organisations: "支持機構",
      date: "日期",
      event: "活動",
      timeline_list: [
        {
          date: "2021年6月1日",
          event: "開始接受申請",
        },
        {
          date: "2021年8月31日下午6時",
          event: "截止申請",
        },
        {
          date: "2021年9月至11月",
          event: "評審申請",
        },
        {
          date: "2021年10月",
          event: "向「卓越檢測認證專業人員獎」的入選申請人發出面試通知",
        },
        {
          date: "2021年11月",
          event: "公布得獎結果",
        },
        {
          date: "2021年12月",
          event: "頒獎典禮",
        },
      ],

      testing_manpower_award: "I. 檢測認證人力發展機構獎",
      award_recognises_accredited: `本獎項表揚在推動檢測認證從業員的人力和專業發展方面表現出色的獲認可檢測認證機構。`,

      testing_manpower_award_btn: ["獎勵", "申請資格", "評審準則", "遴選程序"],

      testing_manpower_award_content: {
        awardees_be: "得獎機構會–",
        present_with_trophy: "獲頒獎狀；",
        permit_use_logo: `獲准在其網站和宣傳品上使用機構獎的標誌（請參閱載於`,
        guild_note: "申請指南",
        bracket: `的附件上的機構獎標誌使用指引);`,
        invite_attend_presentation: " 獲邀參加頒獎典禮及宣傳活動。",

        applicant_be: "申請機構必須符合以下條件：",
        accredited_by_hkas: `獲香港認可處或其他與香港認可處訂立相互承認安排的認可機構認可；以及`,
        locate_in_hk: `設於香港並在本地提供檢測和認證服務。`,
        test_refer_service: `檢測和認證服務是指測試、校正、檢驗及／或認證服務。`,

        applicant_entity_fulfill: `申請機構於下列四個範疇中，每個範疇符合最少三項準則，即合資格獲得獎項，惟須提供有效可靠的證明文件。`,
        assessmentCriteriaGrid: [
          {
            color: "trustfulBlue",
            title: "範疇 A",
            content: "致力推動檢測認證從業員的培訓和發展(Commitment）",
          },
          {
            color: "elegancePurple",
            title: "範疇 B",
            content:
              "企業提供支援以提升檢測認證從業員的能力和專業水平(Competence）",
          },
          {
            color: "growthfulGreen",
            title: "範疇 C",
            content: "關懷檢測認證從業員(Care）",
          },
          {
            color: "energeticOrange",
            title: "範疇 D",
            content: "與檢測認證從業員溝通（Communication）",
          },
        ],
        activity_carry_out: `在2020年1月1日至申請日期之間從事的活動和取得的成就，方會被納入有關獎項的考慮範圍。`,
        awardees_demonstrated: `如得獎機構於特定範疇上，在推動檢測認證從業員的人力和專業發展有特殊成就，評審小組可因應合適情況向其頒發特別嘉許獎。`,
      },
      stagesGridOne: {
        stage_1: "第一階段",
        stage_1_content: "香港檢測和認證局秘書處檢查和核實申請及證明文件",
        stage_2: "第二階段",
        stage_2_assessment: "評審小組",
        stage_2_will_shortlist: "審核申請並考慮得獎名單",
      },

      testing_profession_award: "II. 卓越檢測認證專業人員獎",
      award_commends_individual: `本獎項旨在表揚於以下其中一方面表現優秀的個別檢測認證從業員：`,
      purse_continue_learning: `投身檢測和認證業後透過獲取新技能、能力及相關學術和專業資格，持續進修和追求專業發展；或`,
      make_contribution: `在提升服務質素／生產力方面有卓越貢獻。`,
      testing_profession_award_content: {
        awardees_be: "得獎者會–",
        present_with_trophy: "獲頒獎座和獎狀；",
        invite_attend_presentation: "獲邀參加頒獎典禮及宣傳活動。",
        applicant_practitioners_be: "申請從業員必須符合以下條件：",
        nominate_by_test: `由檢測認證機構提名，而該機構須獲香港認可處或其他與香港認可處訂立相互承認安排的認可機構認可；`,
        employee_of_nominate: `受僱於作出提名的檢測認證機構至少一年；以及`,
        locate_in_hk: `於香港工作並主要負責進行測試、校正、檢驗及／或認證服務。`,
        two_subgroup: "本獎項設有兩個組別：",
        junior_profession: "初級專業人員：",
        tc_practitioners_appoint: `投身檢測和認證業至少一年，並於獲認可檢測認證機構擔任初級／入職職級職位的業界從業員；以及`,
        middle_management: "中級管理人員：",
        tc_practitioners_join: `投身檢測和認證業至少五年，並於獲認可檢測認證機構擔任管理職位的業界從業員。`,

        merits_application: "每份申請均會按以下其中一個範疇進行評審：",
        commitment_continue_learning: `投身檢測和認證業後致力取得新技能、能力及學術和專業資格，持續進修和追求專業發展；`,
        impact_of_contributions: `在提升提名檢測認證機構的服務質素或生產力方面（例如透過創新及／或採用新科技）作出具影響力／重要的貢獻。`,
        stagesGridTwo: {
          stage_1: "第一階段",
          stage_1_content: "香港檢測和認證局秘書處對申請進行初步甄選",
          stage_2: "第二階段",
          stage_2_assessment: "評審小組",
          stage_2_will_shortlist: "對申請人進行遴選及面試，並甄選得獎者",
        },
      },
      faq: "常見問題",
      question_btn: [
        "一般常見問題",
        "檢測認證人力發展機構獎",
        "卓越檢測認證專業人員獎",
      ],
      question_general_list: [
        {
          title: "參加嘉許計劃是否需要繳付申請或手續費？",
          content: "不需要。參加嘉許計劃費用全免。",
        },
        {
          title: "申請表格與證明文件可分開遞交嗎？",
          content:
            "不可以。請把填妥的申請表連同有關證明文件於截止申請日期前一拼遞交。",
        },
        {
          title:
            "可否同時申請「檢測認證人力發展機構獎」和「卓越檢測認證專業人員獎」？",
          content:
            "可以。檢測認證機構可同時申請「檢測認證人力發展機構獎」以及提名檢測認證從業員參加「卓越檢測認證專業人員獎」，惟須符合獎項的申請資格。",
        },
        {
          title: "有預設的得獎者數目嗎？",
          content: "兩類獎項均沒有預設的得獎者數目。",
        },
      ],
      question_tc_manpower_list: [
        {
          title: "為何檢測認證機構要參加「檢測認證人力發展機構獎」？",
          content:
            "獎項表揚檢測認證機構在推動檢測認證從業員的人力和專業發展方面的出色表現和所作出的努力，向社會展示機構對人才的重視。得獎機構可藉此建立良好形象，從而協助吸引和挽留業界人才。",
        },
        {
          title:
            "我們公司集團旗下有幾間認可檢測認證機構，須要逐一為每間認可檢測認證機構遞交申請嗎？",
          content:
            "申請機構可於申請中包括隸屬同一集團的多間檢測認證機構，惟有關機構須隸屬同一管理，並實行相同的政策。在此情況下，申請表格所提供的資料應涵蓋所有指明的檢測認證機構。有關申請會按申請表格內所有指明的檢測認證機構相同從事的活動和取得的成就作整體評審。",
        },
        {
          title: "申請機構須要就每項準則提供證明文件嗎？",
          content:
            "申請機構須就每項聲稱符合的準則提供相關證據、證明文件或示例。",
        },
        {
          title: "要符合評審準則，須遞交哪些證明文件？",
          content:
            "證明文件可包括確認函、公司內部備忘錄、相片、員工手冊、電郵、收據、企業刊物、海報和證書副本等。披露文件內的個人資料之前，必須獲相關人士同意。",
        },
        {
          title: "公司於2019年舉行的活動，可用來支持獎項申請嗎？",
          content:
            "不可以。只有在2020年1月1日至申請日期之間從事的活動和取得的成就，方會被納入獎項的考慮範圍。",
        },
        {
          title: "何時可以使用機構獎標誌？",
          content:
            "「檢測認證人力發展機構獎」的得獎機構由得獎結果公布當日起，可獲准開始使用機構獎標誌，具體日期將於稍後公布。",
        },
        {
          title:
            "得獎機構於各類宣傳品上使用機構獎標誌前，是否需要向香港檢測和認證局遞交樣本以供審閱？",
          content: (
            <p>
              不須要，惟所有展示機構獎標誌的宣傳品的內容必須合法、意識良好、健康、誠實和真確，並且不得含有任何非法、誹謗、歧視或侮辱他人或其他不良的成分。
              <br />
              <br />
              有關使用機構獎標誌的詳情，請參閱載於
              <a
                aria-label="申請指南"
                className="underline text-[#00E]"
                target="_blank"
                rel="noopener noreferrer"
                href={
                  isEn
                    ? "https://www.hkctc.gov.hk/en/event/mpaward/pamphlet-2023-24.pdf"
                    : "https://www.hkctc.gov.hk/tc/event/mpaward/GuidanceNotes_Chi.pdf"
                }
              >
                申請指南
              </a>
              附件的「檢測認證人力發展機構獎標誌使用指引」。
            </p>
          ),
        },
      ],
      question_tc_profession_list: [
        {
          title: "身為自僱的檢測認證從業員，我可以提名自己參加獎項嗎？",
          content:
            "不可以。申請從業員必須由獲認可檢測認證機構提名，並受僱於有關提名檢測認證機構至少一年。",
        },
        {
          title: "檢測認證機構可提名多於一個檢測認證從業員參加獎項嗎?",
          content:
            "可以，只要被提名的從業員符合獎項的申請資格。檢測認證機構可提名的員工數目並無限制。",
        },
        {
          title: "檢測認證機構可提名前僱員參加獎項嗎？",
          content: "不可以。檢測認證從業員只可由其現任僱主提名參加獎項。",
        },
      ],
      application: "申請文件",
      application_data: {
        guide_note: "申請指南",
        app_form_tc_manpower:
          "申請表格 – 檢測認證人力發展機構獎（表格T&C MP01）",
        app_form_tc_profession:
          "申請表格 – 卓越檢測認證專業人員獎（表格T&C MP02）",
      },

      publications: "Publications",
      publications_data: {
        pamphlet: "小冊子",
        congratulatory_msg: "嘉許計劃感言",
        highlight: "典禮精華輯錄",
      },

      award_ceremony_list: "得獎名單/ 頒獎典禮",
      award_ceremony_list_long: "2021-2022年度得獎名單/ 頒獎典禮",
    },
  };
  const page_text = isEn ? multilingual.en : multilingual.cn;

  const stagesGridTwo = [
    {
      title: page_text.testing_profession_award_content.stagesGridTwo.stage_1,
      content:
        page_text.testing_profession_award_content.stagesGridTwo
          .stage_1_content,
    },
    {
      title: page_text.testing_profession_award_content.stagesGridTwo.stage_2,
      content: (
        <>
          <span
            className="underline cursor-pointer"
            tabIndex={0}
            role="button"
            onClick={handleOpenAssessmentPanel}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleOpenAssessmentPanel();
              }
            }}
            aria-label={
              page_text.testing_profession_award_content.stagesGridTwo
                .stage_2_assessment
            }
          >
            {
              page_text.testing_profession_award_content.stagesGridTwo
                .stage_2_assessment
            }
          </span>
          &nbsp;
          {
            page_text.testing_profession_award_content.stagesGridTwo
              .stage_2_will_shortlist
          }
        </>
      ),
    },
  ];

  const stagesGridOne = [
    {
      title: page_text.stagesGridOne.stage_1,
      content: page_text.stagesGridOne.stage_1_content,
    },
    {
      title: page_text.stagesGridOne.stage_2,
      content: (
        <>
          <span
            className="underline cursor-pointer"
            tabIndex={0}
            role="button"
            onClick={handleOpenAssessmentPanel}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleOpenAssessmentPanel();
              }
            }}
            aria-label={page_text.stagesGridOne.stage_2_assessment}
          >
            {page_text.stagesGridOne.stage_2_assessment}
          </span>
          &nbsp;
          {page_text.stagesGridOne.stage_2_will_shortlist}
        </>
      ),
    },
  ];

  const awardOneBtn = page_text.testing_manpower_award_btn;
  const awardMapOne: Record<string, React.ReactNode> = {
    [awardOneBtn[0]]: (
      <>
        <p>{page_text.testing_manpower_award_content.awardees_be}</p>
        <br />
        <ul>
          <li className="mb-[1em]">
            {page_text.testing_manpower_award_content.present_with_trophy}
          </li>
          <li className="mb-[1em]">
            {page_text.testing_manpower_award_content.permit_use_logo}
            <a
              aria-label={page_text.testing_manpower_award_content.guild_note}
              className="underline text-[#00E]"
              target="_blank"
              rel="noreferrer"
              href={
                isEn
                  ? "https://www.hkctc.gov.hk/en/event/mpaward/doc/mpaward-2023-24-Guidance-Notes_ENG.pdf"
                  : "https://www.hkctc.gov.hk/tc/event/mpaward/GuidanceNotes_Chi.pdf"
              }
            >
              {page_text.testing_manpower_award_content.guild_note}
            </a>
            {page_text.testing_manpower_award_content.bracket}
          </li>
          <li>
            {
              page_text.testing_manpower_award_content
                .invite_attend_presentation
            }
          </li>
        </ul>
      </>
    ),
    [awardOneBtn[1]]: (
      <>
        <p>{page_text.testing_manpower_award_content.applicant_be}</p>
        <br />
        {/* defined in App.css */}
        <div className="al">
          <li>{page_text.testing_manpower_award_content.accredited_by_hkas}</li>
          <br />
          <li>{page_text.testing_manpower_award_content.locate_in_hk}</li>
        </div>
        <br />
        <p>{page_text.testing_manpower_award_content.test_refer_service}</p>
      </>
    ),
    [awardOneBtn[2]]: (
      <>
        <p>
          {processText(
            page_text.testing_manpower_award_content.applicant_entity_fulfill
          )}
        </p>
        <div
          className={`grid grid-cols-${isPC ? "2" : "1"} gap-[24px] my-[24px]`}
        >
          {page_text.testing_manpower_award_content.assessmentCriteriaGrid.map(
            (item: any, index: number) => (
              <div
                key={index}
                className={`border-2 border-inherit flex flex-col justify-center p-[48px] gap-[8px] h-${
                  isPC ? "[216px]" : "auto"
                }`}
              >
                <p className={`text-${item.color} underline !text-heading-s`}>
                  {processText(item.title)}
                </p>
                <p className="!text-body-m">{processText(item.content)}</p>
              </div>
            )
          )}
        </div>
        <div>
          {processText(
            page_text.testing_manpower_award_content.activity_carry_out
          )}
          <br />
          <br />
          {processText(
            page_text.testing_manpower_award_content.awardees_demonstrated
          )}
        </div>
      </>
    ),
    [awardOneBtn[3]]: (
      <div className={`grid grid-cols-${isPC ? "2" : "1"} gap-[24px]`}>
        {stagesGridOne.map((item, index) => (
          <div
            key={index}
            className={`bg-${
              index !== 0 ? "newPrimary" : "white"
            } border-2 border-inherit flex flex-col justify-center p-[48px] gap-[8px] h-[216px]`}
          >
            <div
              className={`text-${
                index === 0 ? "newPrimary" : "white"
              } underline !text-heading-s`}
            >
              {processText(item.title)}
            </div>
            <div
              className={`text-${index === 0 ? "black" : "white"} !text-body-m`}
            >
              {convertReactNode(item.content)}
            </div>
          </div>
        ))}
      </div>
    ),
  };
  const awardMapTwo: Record<string, React.ReactNode> = {
    [awardOneBtn[0]]: (
      <>
        <p>{page_text.testing_profession_award_content.awardees_be}</p>
        <br />
        <ul>
          <li className="mb-[1em]">
            {page_text.testing_profession_award_content.present_with_trophy}
          </li>
          <li>
            {
              page_text.testing_profession_award_content
                .invite_attend_presentation
            }
          </li>
        </ul>
      </>
    ),
    [awardOneBtn[1]]: (
      <>
        <p>
          {
            page_text.testing_profession_award_content
              .invite_attend_presentation
          }
        </p>
        {/* defined in App.css */}
        <div className="al">
          <li>{page_text.testing_profession_award_content.nominate_by_test}</li>
          <br />
          <li>
            {page_text.testing_profession_award_content.employee_of_nominate}
          </li>
          <br />
          <li>{page_text.testing_profession_award_content.locate_in_hk}</li>
          <br />
          <p>{page_text.testing_profession_award_content.two_subgroup}</p>
        </div>
        <div className="al">
          <li>
            <span className="!text-highlight-m">
              {page_text.testing_profession_award_content.junior_profession}
            </span>
            &nbsp;
            {
              page_text.testing_profession_award_content
                .tc_practitioners_appoint
            }
          </li>
          <br />
          <li>
            <span className="!text-highlight-m">
              {page_text.testing_profession_award_content.middle_management}
            </span>
            &nbsp;
            {page_text.testing_profession_award_content.tc_practitioners_join}
          </li>
        </div>
      </>
    ),
    [awardOneBtn[2]]: (
      <>
        <div className="al">
          {page_text.testing_profession_award_content.merits_application}
          <br />
          <br />
          <li>
            {
              page_text.testing_profession_award_content
                .commitment_continue_learning
            }
          </li>
          <br />
          <li>
            {page_text.testing_profession_award_content.impact_of_contributions}
          </li>
        </div>
      </>
    ),
    [awardOneBtn[3]]: (
      <div className={`grid grid-cols-${isPC ? "2" : "1"} gap-[24px]`}>
        {stagesGridTwo.map((item, index) => (
          <div
            key={index}
            className={`bg-${
              index !== 0 ? "newPrimary" : "white"
            } border-2 border-inherit flex flex-col justify-center p-[48px] gap-[8px] h-[216px]`}
          >
            <div
              className={`text-${
                index === 0 ? "newPrimary" : "white"
              } underline !text-heading-s`}
            >
              {processText(item.title)}
            </div>
            <div
              className={`text-${index === 0 ? "black" : "white"} !text-body-m`}
            >
              {convertReactNode(item.content)}
            </div>
          </div>
        ))}
      </div>
    ),
  };

  const questionBtn = page_text.question_btn;
  const questionCategoriesMap: Record<
    string,
    Array<{ title: string; content: React.ReactNode }>
  > = {
    [questionBtn[0]]: page_text.question_general_list,
    [questionBtn[1]]: page_text.question_tc_manpower_list,
    [questionBtn[2]]: page_text.question_tc_profession_list,
  };

  const applicationData: Array<{
    title: string;
    link: string;
  }> = [
    {
      title: page_text.application_data.guide_note,
      link: "/en/event/mpaward/GuidanceNotes.pdf",
    },
    {
      title: page_text.application_data.app_form_tc_manpower,

      link: "/en/event/mpaward/MP01.pdf",
    },
    {
      title: page_text.application_data.app_form_tc_profession,
      link: "/en/event/mpaward/MP02.pdf",
    },
  ];

  const publicationData: MediaTemplateWithDialogProps[] = [
    {
      title: page_text.publications_data.pamphlet,
      maskIcon: "PDF.png",
      date: "",
      mediaType: MEDIA_TYPE.PDF,
      mediaLink: "/en/event/mpaward/pamphlet.pdf",
      mediaDomain: "hkctc",
    },
    {
      title: page_text.publications_data.congratulatory_msg,
      maskIcon: "VIDEO.png",
      date: "",
      mediaType: MEDIA_TYPE.VIDEO,
      mediaLink: "/videos/en/MPAward_Congratulatory_Video-EN.mp4",
      mediaDomain: "hkctc",
    },
    {
      title: page_text.publications_data.highlight,
      maskIcon: "VIDEO.png",
      date: "",
      mediaType: MEDIA_TYPE.VIDEO,
      mediaLink: "/videos/tc/MPAward_Highlight.mp4",
      mediaDomain: "hkctc",
    },
  ];

  const [activeAwardOneButton, setActiveAwardOneButton] = useState<number>(0);
  const [activeAwardTwoButton, setActiveAwardTwoButton] = useState<number>(0);
  const [questionCategory, setQuestionCategory] = useState<number>(0);

  return (
    <div className="w-full">
      <SquareTitle title={processText(page_text.title)} />
      <div className="text-highlight-l my-[24px] text-[#666]">
        {processText(page_text.result_announce)}
      </div>
      <div className="text-body-m mb-[24px] text-justify">
        {processText(page_text.hkctc_launches_first)}
      </div>
      <hr />

      <div className="text-heading-l my-[24px]" id="supporting_organizations">
        {processText(page_text.supporting_organisations)}
      </div>
      <div className="grid grid-cols-3 gap-[48px] p-[24px]">
        {supportingOrg.map((org, index) => {
          const { title, urlPath } = org;
          return (
            <div
              key={index}
              className={`${isPC ? "w-[200px] h-[70px]" : "w-full h-auto"}`}
            >
              <img
                className="object-contain"
                src={
                  process.env.PUBLIC_URL +
                  "/assets/eventsLanding/awardScheme/" +
                  urlPath
                }
                alt={title}
                aria-hidden="true"
              />
            </div>
          );
        })}
      </div>
      <hr className="my-[24px]" />

      <p
        className="text-heading-l my-[24px]"
        id="timeline"
        role="heading"
        aria-level={10}
      >
        {processText(page_text.timeline)}
      </p>
      <div className="w-full grid grid-cols-2 border-[1px] border-[#E0E0E0] mb-[24px]">
        <div className="text-highlight-m px-[10px] py-[15px] bg-[#E0E0E0] flex items-center justify-start">
          {processText(page_text.date)}
        </div>
        <div className="text-highlight-m px-[10px] py-[15px] bg-[#E0E0E0] flex items-center justify-start">
          {processText(page_text.event)}
        </div>
        {page_text.timeline_list.map((item: any, index: number) => {
          const { date, event } = item;
          return (
            <React.Fragment key={index}>
              <div className="text-body-m px-[10px] py-[15px] flex items-center justify-start border-t border-gray-300">
                {processText(date)}
              </div>
              <div className="text-body-m px-[10px] py-[15px] flex items-center justify-start border-t border-gray-300">
                {processText(event)}
              </div>
            </React.Fragment>
          );
        })}
      </div>

      <div className="text-heading-l">
        {processText(page_text.testing_manpower_award)}
      </div>
      <p className="text-body-m mt-[24px] text-justify">
        {processText(page_text.award_recognises_accredited)}
      </p>

      <div className="flex flex-wrap gap-[8px] my-[24px] text-justify">
        {awardOneBtn.map((btn: string, index: number) => {
          const isActivated = index === activeAwardOneButton;
          const buttonText = processText(btn);
          return (
            <button
              key={index}
              style={isActivated ? activatedButtonStyle : normalButtonStyle}
              onClick={() => {
                setActiveAwardOneButton(index);
              }}
              aria-label={buttonText}
            >
              {buttonText}
            </button>
          );
        })}
      </div>

      <div className="pb-[24px] text-body-m">
        {convertReactNode(awardMapOne[awardOneBtn[activeAwardOneButton]])}
      </div>

      <div className="text-heading-l">
        {processText(page_text.testing_profession_award)}
      </div>
      <div className="text-body-m mt-[24px]">
        {processText(page_text.award_commends_individual)}
        <br />
        <br />
        <ul>
          <li>{processText(page_text.purse_continue_learning)}</li>
          <li>{processText(page_text.make_contribution)}</li>
        </ul>
      </div>

      <div className="flex flex-wrap gap-[8px] my-[24px]">
        {awardOneBtn.map((btn: string, index: number) => {
          const isActivated = index === activeAwardTwoButton;
          const buttonText = processText(btn);
          return (
            <button
              key={index}
              style={isActivated ? activatedButtonStyle : normalButtonStyle}
              onClick={() => {
                setActiveAwardTwoButton(index);
              }}
              aria-label={buttonText}
            >
              {buttonText}
            </button>
          );
        })}
      </div>

      <div className="mb-[24px] text-body-m">
        {convertReactNode(awardMapTwo[awardOneBtn[activeAwardTwoButton]])}
      </div>

      <hr />

      <p className="text-heading-l mt-[24px]" role="heading" aria-level={10}>
        {processText(page_text.faq)}
      </p>
      <div className="flex flex-wrap gap-[8px] my-[24px]">
        {questionBtn.map((btn: string, index: number) => {
          const isActivated = index === questionCategory;
          const label = processText(btn);
          return (
            <button
              key={index}
              style={isActivated ? activatedButtonStyle : normalButtonStyle}
              onClick={() => {
                setQuestionCategory(index);
              }}
              aria-label={label}
            >
              {label.length > 48 && !isPC ? label.slice(0, 48) + "..." : label}
            </button>
          );
        })}
      </div>

      <div className="w-full flex flex-col gap-[8px]">
        {questionCategoriesMap[questionBtn[questionCategory]].map(
          (q, index) => (
            <Accordion
              key={index}
              title={`${index + 1}. ${processText(q.title)}`}
              details={
                <div className="!text-body-m">
                  {convertReactNode(q.content)}
                </div>
              }
            />
          )
        )}
      </div>

      <p className="text-heading-l my-[24px]" role="heading" aria-level={10}>
        {processText(page_text.application)}
      </p>

      <div className="w-full flex flex-col gap-[24px]">
        {applicationData.map((item, index) => {
          const { title, link } = item;
          return (
            <div key={index} className="w-full flex flex-row gap-[24px]">
              <MediaTemplateWithDialog
                title={processText(title)}
                maskIcon={"PDF.png"}
                date={""}
                mediaLink={link}
                mediaType={MEDIA_TYPE.PDF}
                mediaDomain={"hkctc"}
                direction={"row"}
              />
            </div>
          );
        })}
      </div>
      <p className="text-heading-l my-[24px]" role="heading" aria-level={10}>
        {processText(page_text.publications)}
      </p>
      <div className={`w-full grid grid-cols-${isPC ? 2 : 1} gap-[24px]`}>
        {publicationData.map((item, index) => {
          const {
            title,
            imagePath,
            date = "",
            maskIcon,
            mediaType,
            mediaLink,
            mediaDomain,
          } = item;
          return (
            <div key={index} className="w-full flex flex-row gap-[24px]">
              <MediaTemplateWithDialog
                title={processText(title)}
                maskIcon={maskIcon}
                date={date}
                mediaLink={mediaLink}
                mediaType={mediaType}
                mediaDomain={mediaDomain}
                direction={"row"}
                imagePath={"eventsLanding/awardScheme/" + imagePath}
              />
            </div>
          );
        })}
      </div>
      <hr className="my-[24px]" />
      <div className="text-heading-l mb-[24px]">
        {processText(page_text.award_ceremony_list)}
      </div>
      <a
        className="flex flex-row items-center h-[90px] gap-[24px] cursor-pointer"
        href="/events-promotion/award-scheme2122"
        aria-label={processText(page_text.award_ceremony_list)}
      >
        <img
          className="w-[130px] h-full object-contain flex-shrink-0"
          src={process.env.PUBLIC_URL + "/assets/eventsLanding/2021-2022.png"}
          alt={processText(page_text.award_ceremony_list_long)}
          aria-hidden="true"
        />
        <div
          className={`text-black py-[8px] ${
            isPC ? "pr-[16px] text-highlight-m" : "text-highlight-s"
          }`}
        >
          {processText(page_text.award_ceremony_list_long)}
        </div>
        <svg
          aria-hidden="true"
          className="flex-shrink-0"
          xmlns="https://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <g clipPath="url(#clip0_2682_55750)">
            <path
              d="M4.70996 16L12.71 8L4.70996 0L3.28996 1.42L9.86996 8L3.28996 14.58L4.70996 16Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_2682_55750">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </a>
    </div>
  );
};
