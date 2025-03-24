import { QUIZ, type QuizData } from "./types";

// 10 questions
export const quizInteractionMap: Record<QUIZ, QuizData> = {
  [QUIZ.ENERGY_UNIT]: {
    question: "What is the unit of energy in an electricity bill?",
    theme: "#D1E39B",
    quizAnswers: {
      A: "kWh",
      B: "kW",
      C: "J",
    },
    correctAnser: "A",
    explanation: [
      "The kilowatt-hour, abbreviated as kWh, is the cornerstone of electricity consumption measurement. It represents the amount of energy used by an appliance with a power rating of 1 kilowatt for one hour.",
    ],
  },
  [QUIZ.AVENUE_OF_STARS]: {
    question:
      "Is the time that runs at the top of Tai Mo Shan the same as the time that runs at the Avenue of Stars?",
    theme: "#D9B6F6",
    quizAnswers: {
      A: "Yes, they are the same.",
      B: "No, the time that runs at the top of Tai Mo Shan is faster than the time that runs at the Avenue of Stars.",
      C: "No, the time that runs at the top of Tai Mo Shan is slower than the time that runs at the Avenue of Stars.",
    },
    correctAnser: "B",
    explanation: [
      `According to Einstein's theory of general relativity, a massive object will warp the 4-dimensional space-time around it. Time, being a component of the 4 dimensional space-time, will flow at a different rate depending on the strength of the gravitational field. This is the origin of the gravitational time dilation. Therefore, the stronger the gravitational field, the slower the run of time. At the top of Tai Mo Shan, time will run several nanoseconds faster per day than at the Avenue of Stars.`,
    ],
  },
  [QUIZ.TWO_WIRELESS_SIGNALS]: {
    question:
      "Two wireless signals are transmitted through the air at frequencies of 100 MHz and 100 GHz, respectively. Which signal is at a higher frequency?",
    theme: "#BBC9E7",
    quizAnswers: {
      A: "100 MHz",
      B: "100 GHz",
    },
    correctAnser: "B",
    explanation: [
      `SI prefixes are defined by the International System of Units (SI). Megahertz (MHz) is equal to 1 x 106 Hz (one million hertz), while gigahertz (GHz) is equal to 1 x 109 Hz (one billion hertz). The unit of GHz is therefore 1,000 times larger than the unit of MHz.`,
    ],
  },
  [QUIZ.ELECTROMAGNETIC_FILED]: {
    question:
      "Which of the following methods provides a more accurate measurement of the electromagnetic field strength emitted by a mobile phone base station?",
    theme: "#F47B5A",
    quizAnswers: {
      A: "Using a calibrated electromagnetic field strength meter",
      B: "Using a signal strength meter app on a smartphone",
    },
    correctAnser: "A",
    explanation: [
      `A more accurate method for measuring the strength of the electromagnetic field emitted by a mobile phone base station is to use a calibrated electromagnetic field meter. It is crucial to employ appropriately calibrated equipment, as calibration ensures an unbroken chain of measurement linking the measured parameter to the International System of Units (SI). This concept, known as measurement traceability, helps guarantee the reliability and accuracy of the readings. `,
    ],
  },
  [QUIZ.TEMPERATURE_AFFECT]: {
    question: "How does temperature affect physical properties of materials?",
    theme: "#D1E39B",
    quizAnswers: {
      A: "Temperature can alter properties such as density, electrical conductivity, and elasticity.",
      B: `When heated, materials gain "superpowers" that allow them to fly or turn invisible.`,
      C: "Nothing has changed.",
    },
    correctAnser: "A",
    explanation: [
      "Temperature can change the properties of materials, such as their density, conductivity, and elasticity. For example, metals generally expand when heated, which is an important consideration in engineering and construction to prevent structural issues. ",
    ],
  },

  [QUIZ.ULTRAVIOLET_LIGHT]: {
    question: "Does ultraviolet light violet in colour?",
    theme: "#D9B6F6",
    quizAnswers: {
      A: "Yes",
      B: "No",
    },
    correctAnser: "B",
    explanation: [
      `Ultraviolet (UV) light resides in the realm of invisible radiation, with wavelengths ranging from 100 to 400 nanometers. In contrast, visible light spans approximately 380 to 830 nanometers, a spectrum our eyes can detect. Interestingly, while UV light itself is invisible, the lamps used to emit it also produce a small amount of light in the blue-violet region of the visible spectrum. This portion is what we perceive as a bluish glow when we see UV germicidal lamps in action. So, while ultraviolet light remains hidden from our sight, it cleverly reveals itself through this blue-violet hue!`,
    ],
  },
  [QUIZ.WATER_VAPOUR]: {
    question:
      "Is the amount of water vapour in a 25 °C, 50% relative humidity air sample the same as that in a 30 °C, 50% relative humidity air sample?",
    theme: "#BBC9E7",
    quizAnswers: {
      A: "Yes",
      B: "No",
    },
    correctAnser: "B",
    explanation: [
      `Humidity refers to the amount of water vapour present in the air. Air has a limited capacity to hold water vapour, which is defined by the saturation vapour pressure. Relative humidity is the ratio of the actual vapour pressure in an air sample to the saturation vapour pressure, expressed as a percentage. It is important to note that saturation vapour pressure varies with air temperature. As temperature increases, the saturation vapour pressure also increases.`,
      `Therefore, even if two air samples have the same relative humidity (e.g., 50% relative humidity), the actual amount of water vapour in each sample can differ significantly. `,
    ],
  },

  [QUIZ.QUIETEST_PLACE]: {
    question: "Where is the quietest place on Earth?",
    theme: "#F47B5A",
    quizAnswers: {
      A: "The anechoic chamber at Orfield Laboratories in Minneapolis, Minnesota",
      B: "The bottom of the Mariana Trench",
      C: "Your classroom",
    },
    correctAnser: "A",
    explanation: [
      "The quietest place on Earth is the anechoic test chamber at Orfield Laboratories in Minneapolis, Minnesota, USA. In tests conducted on 19 November 2021, the ambient sound level inside the room was measured at -24.9 decibels, making it the current holder of the Guinness World Record for the quietest place on Earth. ",
    ],
  },
  [QUIZ.EARTH_MOON]: {
    question: "Do you weigh differently on Earth compared to the Moon?",
    theme: "#D1E39B",
    quizAnswers: {
      A: "Yes",
      B: "No",
    },
    correctAnser: "A",
    explanation: [
      <p>
        Weight is the force applied by gravity on an object. On Earth, the
        acceleration due to gravity is approximately 9.8 m s-2, therefore a 1 kg
        mass weighs about 9.8 N. On the Moon, the acceleration due to gravity is
        approximately 1.6 m s-2, resulting in a weight of about 1.6 N for the
        same 1 kg mass.
        <br />
        <br />
        On the Moon, you would weigh about one-sixth of what you do on Earth due
        to its weaker gravity.
      </p>,
      [
        `So, if you weigh 60 kg on Earth, you'd only weigh
        about one-sixth of what you do on Earth due to its weaker gravity. So,
        if you weigh 60 kg on Earth, you'd only weigh about 10 kg on the Moon.
        Just imagine how light you’d feel while bouncing across the lunar
        surface!`,
      ],
    ],
  },
  [QUIZ.KILOGRAM]: {
    question: "What is a kilogram (kg)?",
    theme: "#BBC9E7",
    quizAnswers: {
      A: "A kilogram is the base unit of mass in the International System of Units (SI)",
      B: "A kilogram is a mystical stone defining the weigh",
      C: "A kilogram is a unit used by aliens to weigh their spaceships",
    },
    correctAnser: "A",
    explanation: [
      <p>
        The kilogram is the base unit of mass in International System of Units
        (SI) and defined by fixing the numerical value of the Planck constant h
        to 6.62607015 x 10-34 m2 kg s-1.
        <br />
        The international prototype of the kilogram (IPK) with the weight of 1
        kg is a piece of platinum-iridium alloy kept in BIPM in Paris. Copies of
        the IPK were dispatched to signatories of the Metre Convention as their
        national mass standards. Hong Kong received a copy of IPK with copy no.
        75 in 1993.
      </p>,
      `In 2018, to ensure the kilogram's long-term stability, the definition
        shifted to rely on h, a fundamental constant that connects the worlds of
        quantum mechanics and everyday mass. Since 2019, the kilogram has been
        defined by fixing the value of h in joule-seconds (J s), where joules
        are linked to mass, distance, and time. This new definition not only
        modernizes our understanding of mass but also deepens our connection to
        the quantum universe.`,
    ],
  },
};

export const quizInteractionCNMap: Record<QUIZ, QuizData> = {
  [QUIZ.ENERGY_UNIT]: {
    question: "電費單中的能量單位是什麼？",
    theme: "#D1E39B",
    quizAnswers: {
      A: "kWh",
      B: "kW",
      C: "J",
    },
    correctAnser: "A",
    explanation: [
      "千瓦特小時，縮寫為kWh，是電力消費測量的基石。它表示一個功率為一千瓦特的電器在一個小時內所消耗的能量。 ",
    ],
  },
  [QUIZ.AVENUE_OF_STARS]: {
    question: "大帽山山頂的時間和星光大道的時間是一樣的嗎？ ",
    theme: "#D9B6F6",
    quizAnswers: {
      A: "在這兩個位置的時間流逝速度會相同。",
      B: "在大帽山的山頂，時間流逝速度會比在星光大道快。",
      C: "在大帽山的山頂，時間流逝速度會比在星光大道慢。",
    },
    correctAnser: "B",
    explanation: [
      `根據愛因斯坦的廣義相對論，一個大質量物體會扭曲它周圍的四維時空。作為四維時空其中一維度的時間，會根據引力場的強度以不同的速率流逝。這就是引力時間膨脹的基本原理。
      
      因此，引力場越強，時間運行得越慢。在大帽山山頂，每天流逝的時間相比在星光大道快數個納秒。`,
    ],
  },
  [QUIZ.TWO_WIRELESS_SIGNALS]: {
    question:
      "兩個無線訊號分別以 100 MHz 和 100 GHz 的頻率透過空氣傳輸，那個訊號的頻率比較高？ ",
    theme: "#BBC9E7",
    quizAnswers: {
      A: "100 MHz",
      B: "100 GHz",
    },
    correctAnser: "B",
    explanation: [
      `國際單位制 (SI) 定義了SI 詞頭，兆赫 (MHz) 等於 1 x 106 Hz（一百萬赫），而吉赫 (GHz) 等於 1 x 109 Hz（十億赫），因此，GHz 單位比 MHz 單位大了 1,000 倍。 `,
    ],
  },
  [QUIZ.ELECTROMAGNETIC_FILED]: {
    question: "下列哪一種方法可以更精確地測量手機基站所發射出的電磁場強度？ ",
    theme: "#F47B5A",
    quizAnswers: {
      A: "使用已校正的電磁場強度計",
      B: "使用智慧型手機上的訊號強度計應用程序 ",
    },
    correctAnser: "A",
    explanation: [
      `要更準確地測量手機基站所發射出的電磁場強度，必須使用校正過的電磁場計。使用適當校正的設備至關重要，因為校正確保了測量參數與國際單位制（SI）之間保持不間斷的測量鏈。這一概念被稱為測量可追溯性，有助於保證測量結果的可靠性和準確性。 `,
    ],
  },
  [QUIZ.TEMPERATURE_AFFECT]: {
    question: "溫度如何影響物質的物理性質？ ",
    theme: "#D1E39B",
    quizAnswers: {
      A: "溫度可以改變如密度、導電性和彈性等性質。",
      B: `當被加熱時，物料獲得「超能力」，使它們能夠飛行或變得隱形。`,
      C: "沒有任何變化。 ",
    },
    correctAnser: "A",
    explanation: [
      "溫度可以改變物質的物理性質，如它們的密度、導電性和彈性。例如，金屬在加熱時通常會膨脹，這是工程和建築領域需要考慮的重要因素，以防止出現結構問題。",
    ],
  },

  [QUIZ.ULTRAVIOLET_LIGHT]: {
    question: "紫外線是紫色嗎？ ",
    theme: "#D9B6F6",
    quizAnswers: {
      A: "是",
      B: "否",
    },
    correctAnser: "B",
    explanation: [
      `紫外線 (UV) 位於不可見光的範圍內，波長範圍在 100 至 400 納米之間。相比之下，可見光的波長範圍約為 380 至 830 納米，這個範圍是我們眼睛可以看得到的。有趣的是，雖然紫外線本身是不能被我們眼睛所看見，但用於發射紫外線的燈具會產生少量屬於可見光譜的藍紫色區域的光。當我們看到紫外線殺菌燈運作時，我們便會看到藍紫色的光芒。因此，雖然紫外線並不在我們的可見光譜之內，但它透過這種藍紫色調呈現在我們眼前！ `,
    ],
  },
  [QUIZ.WATER_VAPOUR]: {
    question:
      "25 °C、50 % 相對濕度的空氣樣本和 30 °C、50 % 相對濕度的空氣樣本，它們的水蒸氣含量相同嗎？ ",
    theme: "#BBC9E7",
    quizAnswers: {
      A: "是",
      B: "否 ",
    },
    correctAnser: "B",
    explanation: [
      `濕度是指空氣內水蒸氣的含量。空氣只能容納有限的水蒸氣，其最大容量是以飽和水蒸氣壓來定義。相對濕度就是以飽和水蒸氣壓的百分比來表示的水蒸氣壓水平。飽和水蒸氣壓會隨著空氣溫度的變化而改變。當空氣溫度升高，飽和水蒸氣壓也會相應升高。`,
      `因此，即使兩個空氣樣本的相對濕度（例如50% 相對濕度）相同，每個樣本中的實際水蒸氣含量也存在顯著差異。`,
    ],
  },

  [QUIZ.QUIETEST_PLACE]: {
    question: "哪裡是地球上最安靜的地方？",
    theme: "#F47B5A",
    quizAnswers: {
      A: "美國明尼蘇達州的奧菲爾德實驗室內的消聲室",
      B: "馬里亞納海溝的底部",
      C: "你的課室",
    },
    correctAnser: "A",
    explanation: [
      "地球上最安靜的地方是奧菲爾德實驗室內的消聲室，它位於美國明尼蘇達州的明尼亞波里斯。在2021年11月19日進行的測試中，消聲室內所錄得的背景噪音為-24.9分貝，使其成為健力士世界紀錄的保持者。",
    ],
  },
  [QUIZ.EARTH_MOON]: {
    question: "你在地球上的體重和在月球上會不同嗎？",
    theme: "#D1E39B",
    quizAnswers: {
      A: "會",
      B: "不會",
    },
    correctAnser: "A",
    explanation: [
      <p>
        重量是重力對物體施加的力。在地球上，重力加速率約為 9.8 m/s²，因此 1
        千克(kg)的質量約重 9.8 牛頓(N)。在月球上，重力加速率約為 1.6
        m/s²，同樣的 1 千克質量重約 1.6 牛頓。
        <br />
        <br />
        在月球上，由於重力較弱，你的體重大約是地球的六分之一。
      </p>,
      [
        `所以，如果你在地球上重 60 千克，那麼在月球上你只有大約 10 千克。想像一下在月球表面彈跳時你會感覺多麼輕盈！ `,
      ],
    ],
  },
  [QUIZ.KILOGRAM]: {
    question: "何為千克（kg）?",
    theme: "#BBC9E7",
    quizAnswers: {
      A: "千克是國際單位制（SI）中的基本質量單位",
      B: "千克是一種神秘的石頭，用來定義重量",
      C: "千克是外星人用來測量他們太空船的單位",
    },
    correctAnser: "A",
    explanation: [
      <p>
        國際單位制的質量單位為千克，它是以普朗克常數(h)來定義。其數值為
        6.62607015 x 10-34 kg m2 s-1。
        <br />
        國際千克原型(IPK)由鉑銥合金製成，並保存在位於巴黎的國際度量衡局(BIPM)中。IPK的複製本被分配給《米制公約》的簽署成員作為其經濟體的質量標準。香港於1993年獲得了千克原器第75號複製本。
      </p>,
      `在 2018 年，為了確保千克的長期穩定性，千克的定義修改為基於 h，一個將量子力學與日常質量聯繫起來的物理常數。自 2019 年起，千克是通過固定 h 的值（以焦耳秒 J s 為單位）來定義，其中焦耳與質量、距離和時間相關聯。這一新的定義不僅使我們對質量的理解更加現代化，還加深了我們與量子世界的聯繫。 `,
    ],
  },
};
