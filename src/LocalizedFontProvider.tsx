import { FC, ReactNode } from "react";
import { useTranslation } from "react-i18next";

type FontFamily = {
  fa: string;
  en: string;
};
type LanguageFonts = {
  [key: string]: FontFamily;
};
const languageFonts: LanguageFonts = {
  fa: {
    fa: "iranyekan",
    en: "libertinus",
  },
  en: {
    fa: "iranyekan",
    en: "libertinus",
  },
};
interface LocalizedFontProviderProps {
  children: ReactNode;
}

const LocalizedFontProvider: FC<LocalizedFontProviderProps> = ({
  children,
}) => {
  const { i18n } = useTranslation();
  const font: FontFamily = languageFonts[i18n.language] || {
    fa: "iranyekan",
    en: "libertinus",
  };
  return (
    <div style={{ fontFamily: i18n.language === "fa" ? font.fa : font.en }}>
      {children}
    </div>
  );
};

export default LocalizedFontProvider;
