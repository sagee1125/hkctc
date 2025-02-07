export const seminarsAndWorkshopsList = [
  // 1
  {
    img: "SeminarOnESGSustainability.png", // if no img, keep ''
    title:
      "Seminar on Environmental, Social and Governance (ESG) and Sustainability",
    date: "11 April 2024",
    content: (
      <p>
        Environmental, Social and Governance (ESG) has been gaining lots of
        attention in the commercial world in the recent years. There is a
        growing trend whereby business entities attach great importance towards
        responsible and sustainable practices.
        <br />
        <br />
        In this seminar, speakers from the testing and certification (T&C)
        industry, academic and commercial sectors will share on how T&C services
        may facilitate business entities in addressing the ESG and
        sustainability challenges. The topics to be covered include managing ESG
        related data, responding to regulatory reporting requirements,
        evaluating ESG performance, etc.
        <br />
        <br />
        Topics of the Seminar include:
      </p>
    ),
    topics: [
      {
        thumbnail: "", // read from file: seminarsAndWorkshopsThumbnails
        title: "Managing Carbon Emission Data and Implementing ESG...",
        type: "pdf",
      },
      {
        thumbnail: "",
        title: "Unlocking your climate potential to respond to the...",
        type: "pdf",
      },
      {
        thumbnail: "",
        title: "EU Corporate Sustainability Reporting Directive (CSRD)...",
        type: "pdf",
      },
      {
        thumbnail: "",
        title: "Swire Properties’ Sustainable Development (SD) 2030...",
        type: "pdf",
      },
      {
        thumbnail: "",
        title: "How the TIC industry helps organizations to achieve...",
        type: "pdf",
      },
    ],
  },

  // 2
  {
    img: "", // if no img, keep ''
    title: "Research and Development of Chinese Medicines 2021",
    date: "10 December 2021",
    content: (
      <p>
        The Council co-organised the Seminar on Research and Development of
        Chinese Medicines 2021 with the Committee on Research and Development of
        Chinese Medicines.
        <br />
        <br />
        This is the ninth Chinese medicines seminar to be organised by the
        Committee in conjunction with the Council, the Department of Health and
        the Hospital Authority. The Seminar amied to share knowledge on
        technology trends and R&D experience of Chinese medicines, facilitate
        communication among stakeholders in the field, and deepen understanding
        of the development of Chinese medicines in Hong Kong, the Mainland and
        internationally.
        <br />
        <br />
        This year’s seminar included plenary lectures, sharing and discussion
        sessions covering various important topics, such as Chinese Medicine
        Hospital and clinical and applied research in Chinese medicines,
        gynaecology and research, as well as sharing session of young
        investigators from the Chinese medicine research practical training
        programme.
      </p>
    ),
    topics: [
      {
        thumbnail: "", // if this pdf is from https://www.hkctc.gov.hk, no need to store the thumbnail, we can fetch the first page; otherwise we should save the img to file: seminarsAndWorkshopsThumbnails
        title: "Programme",
        type: "pdf",
      },
    ],
  },
];
