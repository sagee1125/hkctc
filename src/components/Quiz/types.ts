// 10 questions
export enum QUIZ {
  ENERGY_UNIT = 0,
  AVENUE_OF_STARS,
  TWO_WIRELESS_SIGNALS,
  ELECTROMAGNETIC_FILED,
  TEMPERATURE_AFFECT,
  ULTRAVIOLET_LIGHT,
  WATER_VAPOUR,
  QUIETEST_PLACE,
  EARTH_MOON,
  KILOGRAM,
}
export type QuizAnswers = {
  A: string;
  B: string;
  C?: string;
};

export enum QuizStage {
  QUESTION_DISPLAY = 0,
  ANSWER_CORRECT,
  ANSWER_WRONG,
}
export type QuizData = {
  question: string;
  theme: "#D9B6F6" | "#D1E39B" | "#BBC9E7" | "#F47B5A";
  quizAnswers: QuizAnswers;
  correctAnser: keyof QuizAnswers;
  explanation: React.ReactNode[];
};
