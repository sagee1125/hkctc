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
      C: " No, the time that runs at the top of Tai Mo Shan is slower than the time that runs at the Avenue of Stars.",
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
      ` Therefore, even if two air samples have the same relative humidity (e.g., 50% relative humidity), the actual amount of water vapour in each sample can differ significantly. `,
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
