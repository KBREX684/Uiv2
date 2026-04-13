import { createContext, useContext } from "react";

type LanguageContextType = {
  language: "en" | "zh";
  setLanguage: (lang: "en" | "zh") => void;
};

export const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
});

export const useLanguage = () => useContext(LanguageContext);

export const t = (lang: "en" | "zh", enText: string, zhText: string) => lang === "en" ? enText : zhText;