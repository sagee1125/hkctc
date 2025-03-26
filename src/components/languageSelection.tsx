import React from "react";
import { Language, useSettings } from "../context/SettingsContext";

type LanguageOption = {
  label: string;
  value: Language;
};

export const languageOptions: LanguageOption[] = [
  {
    label: "繁",
    value: Language.ZH_TW,
  },
  {
    label: "简",
    value: Language.ZH_CN,
  },
  {
    label: "EN",
    value: Language.EN,
  },
];

const LanguageSelect: React.FC = () => {
  const { language, handleChangeLang } = useSettings();

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    handleChangeLang(event.target.value as Language);
  };

  return (
    <select
      value={language}
      onChange={handleLanguageChange}
      style={{
        padding: "8px 12px",
        border: "none",
        borderRadius: "0",
        backgroundColor: "transparent",
        fontSize: "16px",
        cursor: "pointer",
        appearance: "none",
        WebkitAppearance: "none", // Safari & Chrome
        MozAppearance: "none", // Firefox
        outline: "none",
      }}
    >
      {languageOptions.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default LanguageSelect;
