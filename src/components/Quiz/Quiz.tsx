import React, { useEffect, useState } from "react";
import { ArrowForwardIos } from "@mui/icons-material";
import { t2s } from "chinese-s2t";
import { QUIZ, QuizStage, type QuizAnswers } from "./types";
import { quizInteractionCNMap, quizInteractionMap } from "./const";
import { Language, useSettings } from "../../context";

const multilingual = {
  en: {
    next_question: "NEXT QUESTION",
    try_again: "TRY AGAIN",
    correct: `Correct!`,
    false_answer: "False",
    pls_try_again: `Please try again!`,
    quick_quiz: `QUICK QUIZ`,
  },
  cn: {
    next_question: "下一題",
    try_again: `再試一次`,
    correct: `正確!`,
    false_answer: "錯誤",
    pls_try_again: `請再試一次！`,
    quick_quiz: `快速測驗`,
  },
};

export const Quiz: React.FC = () => {
  // show random quiz
  const [quiz, setQuiz] = useState<QUIZ>(Math.floor(Math.random() * 10));

  const [currentAnswer, setCurrentAnswer] = useState<keyof QuizAnswers | null>(
    null
  );
  const {
    isPC,
    language,
    getPageText,
    getSingleText,
    processText,
    convertReactNode,
  } = useSettings();
  const page_text = getPageText(multilingual);

  const {
    next_question,
    try_again,
    correct,
    false_answer,
    pls_try_again,
    quick_quiz,
  } = page_text;
  // State to track whether quizInteractionMap has been loaded
  const [isLoaded, setIsLoaded] = useState(false);
  const [quizStage, setQuizStage] = useState<QuizStage>(
    QuizStage.QUESTION_DISPLAY
  );

  const [explanationPage, setExplanationPage] = useState<0 | 1>(0);

  const quizData =
    language === Language.EN
      ? quizInteractionMap[quiz]
      : quizInteractionCNMap[quiz];
  const showPaginator = quizData.explanation.length > 1;
  useEffect(() => {
    // Check if quizInteractionMap is ready (assuming it is static in your case,
    // but if it's async, you might want to check for async loading completion)
    const checkDataLoaded = () => {
      if (quizData?.theme) {
        setIsLoaded(true);
      }
    };

    checkDataLoaded();
  }, [quizData]); // Re-check when quiz changes

  return (
    <>
      {isLoaded && (
        <div
          className={`w-full ${
            isPC
              ? "aspect-[380/480] bg-center bg-contain"
              : "h-[480px] bg-center bg-cover"
          } bg-no-repeat relative transition-opacity duration-1000 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/quiz/quiz_${
              quiz + 1
            }.png)`,
            position: "relative",
            color: quizData.theme,
          }}
        >
          <div
            className="absolute inset-0 border-[12px] box-border"
            style={{
              borderColor: quizData.theme,
              pointerEvents: "none",
            }}
          />
          <div className="p-[12px] w-full h-full">
            <div className="py-[22px] px-[16px] w-full h-full">
              {quizStage === QuizStage.QUESTION_DISPLAY && (
                <div>
                  <p
                    style={{
                      fontSize: isPC ? "14px" : "12px",
                      fontStyle: "normal",
                      fontWeight: 700,
                    }}
                  >
                    {getSingleText(quick_quiz as string, quick_quiz as string)}
                  </p>
                  <p className={`py-[8px] text-heading-${isPC ? "l" : "m"}`}>
                    {getSingleText(
                      quizData.question as string,
                      quizData.question as string
                    )}
                  </p>
                  <div className="flex flex-col">
                    {Object.entries(quizData.quizAnswers).map(
                      (answer, index) => {
                        const optionCharacter = answer[0] as keyof QuizAnswers;
                        const chosen = currentAnswer === optionCharacter;
                        return (
                          <div
                            key={index}
                            className="flex flex-row gap-[8px] my-[8px] items-center cursor-pointer"
                            onClick={() => {
                              setCurrentAnswer(optionCharacter);
                            }}
                          >
                            <div
                              className="h-[56px] w-[56px] relative"
                              style={{
                                boxSizing: "border-box",
                                border: "6px solid #FFFFFF",
                              }}
                            >
                              <div
                                className={`absolute inset-0 transition-all ease-out duration-200`}
                                style={{
                                  backgroundColor: chosen
                                    ? quizData.theme
                                    : "transparent",
                                  opacity: chosen ? 1 : 0,
                                  width: "24px",
                                  height: "24px",
                                  margin: "auto", // Center it inside the box
                                  zIndex: "10",
                                  transform: chosen ? "scale(1.2)" : "scale(1)",
                                  transition: "all 0.2s ease-out",
                                }}
                              />
                            </div>
                            <p
                              className={`text-[${
                                quizData.theme
                              }] text-heading-${isPC ? "s" : "xs"} w-[260px]`}
                            >
                              {optionCharacter}.&nbsp;
                              {processText(answer[1])}
                            </p>
                          </div>
                        );
                      }
                    )}
                  </div>

                  <div
                    className={`absolute right-0 bottom-0 pb-6 pt-4 pl-4 pr-6`}
                    style={{
                      backgroundColor: quizData.theme,
                      cursor: !currentAnswer ? "not-allowed" : "pointer",
                    }}
                    onClick={() => {
                      if (!currentAnswer) return;
                      setQuizStage(
                        currentAnswer === quizData.correctAnser
                          ? QuizStage.ANSWER_CORRECT
                          : QuizStage.ANSWER_WRONG
                      );
                    }}
                  >
                    <ArrowForwardIos className="text-[#fff]" />
                  </div>
                </div>
              )}

              {quizStage === QuizStage.ANSWER_CORRECT && (
                <div className="flex flex-col justify-between w-full h-full">
                  <div>
                    <div className="flex flex-row gap-[8px] items-center">
                      <div
                        className="h-[56px] w-[56px] relative"
                        style={{
                          boxSizing: "border-box",
                          border: "6px solid #FFFFFF",
                        }}
                      >
                        <svg
                          xmlns="https://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill={quizData.theme}
                          className="absolute inset-0 m-auto"
                        >
                          <path
                            d="M7.57987 22.2903L0.693405 15.7889L3.17684 12.9521L7.22718 17.5767L7.6254 18.0314L7.9974 17.555L20.3116 1.78538L20.6867 2.2159L20.6884 2.21793L23.331 5.31882L7.57987 22.2903Z"
                            fill={quizData.theme}
                            stroke={quizData.theme}
                          />
                        </svg>
                      </div>
                      <p className={`text-[${quizData.theme}] text-heading-l`}>
                        {correct as string}
                      </p>
                    </div>
                    <div className="py-[8px] text-highlight-s h-[260px] overflow-hidden">
                      {convertReactNode(quizData.explanation[explanationPage])}
                    </div>
                  </div>
                  <div className="flex flex-col">
                    {showPaginator && (
                      <div className="py-[8px] flex flex-row justify-center gap-[8px]">
                        <div
                          className="p-[10px]"
                          style={{
                            cursor:
                              explanationPage === 0 ? "not-allowed" : "pointer",
                          }}
                          onClick={() => {
                            setExplanationPage(0);
                          }}
                        >
                          <svg
                            xmlns="https://www.w3.org/2000/svg"
                            width="15"
                            height="24"
                            viewBox="0 0 15 24"
                            className={`transition-fill ${
                              explanationPage === 0
                                ? "fill-[#666666]"
                                : "fill-white"
                            }`}
                          >
                            <path
                              d="M14.3076 2.2107L12.2023 0.105347L0.307617 12L12.2023 23.8946L14.3076 21.7893L4.51832 12L14.3076 2.2107Z"
                              className={`transition-fill ${
                                explanationPage === 0
                                  ? "fill-[#666666]"
                                  : "fill-white"
                              }`}
                            />
                          </svg>
                        </div>
                        <div
                          className="p-[10px]"
                          style={{
                            cursor:
                              explanationPage !== 0 ? "not-allowed" : "pointer",
                          }}
                          onClick={() => {
                            setExplanationPage(1);
                          }}
                        >
                          <svg
                            xmlns="https://www.w3.org/2000/svg"
                            width="15"
                            height="24"
                            viewBox="0 0 15 24"
                            className={`transition-fill ${
                              explanationPage !== 0
                                ? "fill-[#666666]"
                                : "fill-white"
                            }`}
                          >
                            <path
                              d="M0.69336 21.7893L2.79871 23.8947L14.6934 12L2.79871 0.105359L0.693361 2.21071L10.4827 12L0.69336 21.7893Z"
                              className={`transition-fill ${
                                explanationPage !== 0
                                  ? "fill-[#666666]"
                                  : "fill-white"
                              }`}
                            />
                          </svg>
                        </div>
                      </div>
                    )}

                    <div
                      className={`grid grid-cols-2 gap-[16px] text-heading-${
                        isPC ? "s" : "xs"
                      } pb-[24px]`}
                    >
                      <div
                        className="text-white w-full py-[12px] px-auto text-center cursor-pointer"
                        style={{
                          backgroundColor: quizData.theme,
                        }}
                        onClick={() => {
                          setQuiz(Math.floor(Math.random() * 10));
                          setCurrentAnswer(null);
                          setQuizStage(QuizStage.QUESTION_DISPLAY);
                        }}
                      >
                        {next_question as string}
                      </div>
                      <div
                        className="w-full py-auto flex flex-row gap-[8px] justify-center items-center cursor-pointer"
                        onClick={() => {
                          setCurrentAnswer(null);
                          setQuizStage(QuizStage.QUESTION_DISPLAY);
                        }}
                      >
                        <svg
                          xmlns="https://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M15.9653 20.3056C15.9318 20.2578 15.8701 20.2427 15.8162 20.2653C14.8059 20.6606 13.7391 20.8645 12.644 20.8645C9.89861 20.8645 7.31001 19.563 5.71623 17.3929C3.55434 14.4501 3.6109 10.4096 5.83448 7.50449L6.88585 8.94194C6.9167 8.98222 6.96811 8.99733 7.01696 8.98978C7.0658 8.97467 7.10436 8.93438 7.11207 8.88655L7.92182 4.0405C7.9321 3.97757 7.88582 3.91463 7.81899 3.89953L2.87313 3.11157C2.82172 3.09647 2.77288 3.11913 2.74717 3.16696C2.7189 3.20724 2.72146 3.26262 2.7523 3.30038L3.83711 4.78315C0.145713 8.80852 -0.198756 14.8906 3.02736 19.2861C5.24323 22.307 8.83952 24.1069 12.6517 24.1069C14.4332 24.1069 16.1503 23.7293 17.7493 22.9791C17.7827 22.964 17.8058 22.9313 17.8161 22.8935C17.8264 22.8608 17.8161 22.823 17.7955 22.7903L15.9678 20.3056H15.9653Z"
                            fill="white"
                          />
                          <path
                            d="M21.7442 20.502C25.4908 16.4733 25.8582 10.361 22.6076 5.92421C20.3926 2.90837 16.7977 1.10693 12.987 1.10693C11.2293 1.10693 9.46914 1.49493 7.8914 2.23566C7.85799 2.25078 7.83231 2.28353 7.8246 2.31377C7.81432 2.35408 7.82202 2.38432 7.84514 2.41708L9.66959 4.90382C9.70299 4.95169 9.76465 4.97436 9.81861 4.95169C10.8285 4.54857 11.8949 4.35205 12.9895 4.35205C15.7313 4.35205 18.3215 5.64706 19.9147 7.82643C22.0989 10.8045 22.0218 14.8709 19.7451 17.786L18.6324 16.2617C18.6042 16.2214 18.5502 16.2063 18.5014 16.2138C18.4526 16.229 18.414 16.2693 18.4063 16.3171L17.5969 21.1672C17.5917 21.1999 17.5969 21.2302 17.6174 21.2629C17.638 21.2856 17.6663 21.3032 17.6997 21.3108L22.6462 22.0994C22.6462 22.0994 22.659 22.1069 22.6667 22.1069C22.7104 22.1069 22.7515 22.0843 22.7747 22.0439C22.8004 22.0036 22.8004 21.9482 22.7695 21.9104L21.7442 20.5045V20.502Z"
                            fill="white"
                          />
                        </svg>
                        <p>{try_again as string}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {quizStage === QuizStage.ANSWER_WRONG && (
                <div className="flex flex-col w-full h-full">
                  <div className="flex flex-row gap-[8px] items-center">
                    <div
                      className="h-[56px] w-[56px] relative"
                      style={{
                        boxSizing: "border-box",
                        border: "6px solid #FFFFFF",
                      }}
                    >
                      <svg
                        xmlns="https://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill={quizData.theme}
                        className="absolute inset-0 m-auto"
                      >
                        <path
                          d="M19 19L12 12L19 19ZM12 12L5 5L12 12ZM12 12L19 5L12 12ZM12 12L5 19L12 12Z"
                          fill={quizData.theme}
                          stroke={quizData.theme}
                        />
                        <path
                          d="M19 19L12 12M12 12L5 5M12 12L19 5M12 12L5 19"
                          fill={quizData.theme}
                          stroke={quizData.theme}
                          strokeWidth="6"
                          strokeLinecap="square"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <p className={`text-[${quizData.theme}] text-heading-l`}>
                      {false_answer as string}
                    </p>
                  </div>
                  <div className="py-[8px] text-highlight-s">
                    {pls_try_again as string}
                  </div>

                  <div
                    className={`grid grid-cols-2 gap-[16px] text-heading-${
                      isPC ? "s" : "xs"
                    } pb-[24px]`}
                  >
                    <div
                      className="text-white w-full py-[12px] px-auto text-center cursor-pointer"
                      style={{
                        backgroundColor: quizData.theme,
                      }}
                      onClick={() => {
                        setQuiz(Math.floor(Math.random() * 10));
                        setCurrentAnswer(null);
                        setQuizStage(QuizStage.QUESTION_DISPLAY);
                      }}
                    >
                      {next_question as string}
                    </div>
                    <div
                      className="w-full py-auto flex flex-row gap-[8px] justify-center items-center cursor-pointer"
                      onClick={() => {
                        setCurrentAnswer(null);
                        setQuizStage(QuizStage.QUESTION_DISPLAY);
                      }}
                    >
                      <svg
                        xmlns="https://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M15.9653 20.3056C15.9318 20.2578 15.8701 20.2427 15.8162 20.2653C14.8059 20.6606 13.7391 20.8645 12.644 20.8645C9.89861 20.8645 7.31001 19.563 5.71623 17.3929C3.55434 14.4501 3.6109 10.4096 5.83448 7.50449L6.88585 8.94194C6.9167 8.98222 6.96811 8.99733 7.01696 8.98978C7.0658 8.97467 7.10436 8.93438 7.11207 8.88655L7.92182 4.0405C7.9321 3.97757 7.88582 3.91463 7.81899 3.89953L2.87313 3.11157C2.82172 3.09647 2.77288 3.11913 2.74717 3.16696C2.7189 3.20724 2.72146 3.26262 2.7523 3.30038L3.83711 4.78315C0.145713 8.80852 -0.198756 14.8906 3.02736 19.2861C5.24323 22.307 8.83952 24.1069 12.6517 24.1069C14.4332 24.1069 16.1503 23.7293 17.7493 22.9791C17.7827 22.964 17.8058 22.9313 17.8161 22.8935C17.8264 22.8608 17.8161 22.823 17.7955 22.7903L15.9678 20.3056H15.9653Z"
                          fill="white"
                        />
                        <path
                          d="M21.7442 20.502C25.4908 16.4733 25.8582 10.361 22.6076 5.92421C20.3926 2.90837 16.7977 1.10693 12.987 1.10693C11.2293 1.10693 9.46914 1.49493 7.8914 2.23566C7.85799 2.25078 7.83231 2.28353 7.8246 2.31377C7.81432 2.35408 7.82202 2.38432 7.84514 2.41708L9.66959 4.90382C9.70299 4.95169 9.76465 4.97436 9.81861 4.95169C10.8285 4.54857 11.8949 4.35205 12.9895 4.35205C15.7313 4.35205 18.3215 5.64706 19.9147 7.82643C22.0989 10.8045 22.0218 14.8709 19.7451 17.786L18.6324 16.2617C18.6042 16.2214 18.5502 16.2063 18.5014 16.2138C18.4526 16.229 18.414 16.2693 18.4063 16.3171L17.5969 21.1672C17.5917 21.1999 17.5969 21.2302 17.6174 21.2629C17.638 21.2856 17.6663 21.3032 17.6997 21.3108L22.6462 22.0994C22.6462 22.0994 22.659 22.1069 22.6667 22.1069C22.7104 22.1069 22.7515 22.0843 22.7747 22.0439C22.8004 22.0036 22.8004 21.9482 22.7695 21.9104L21.7442 20.5045V20.502Z"
                          fill="white"
                        />
                      </svg>
                      <p>{try_again as string}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
