import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useRoutes } from "react-router-dom";

import { ConfigProvider, theme } from "antd";
import enUS from "antd/lib/locale/en_US";
import faIR from "antd/lib/locale/fa_IR";
import { ThemeContext } from "./store/AppConfig/index.context";
import { router } from "./routes";
import { ThemeContextType } from "./types/appConfig";
import { store } from "./helper/localStorage";

const { defaultAlgorithm, darkAlgorithm } = theme;

function ThemeWrapper() {
  const renderRoutes = useRoutes(router);
  const [locale, setLocale] = useState<string>("fa");
  const { themePanel } = useContext(ThemeContext) as ThemeContextType;
  const { i18n } = useTranslation();

  useEffect(() => {
    setLocale(i18n.language);
    store("lang", i18n.language);
  }, [i18n.language]);

  return (
    <ConfigProvider
      locale={locale === "fa" ? faIR : enUS}
      direction={locale === "fa" ? "rtl" : "ltr"}
      theme={{
        algorithm: themePanel === "dark" ? darkAlgorithm : defaultAlgorithm,
      }}
    >
      {renderRoutes}
    </ConfigProvider>
  );
}

export default ThemeWrapper;
