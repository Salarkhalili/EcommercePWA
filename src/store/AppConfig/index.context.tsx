import { createContext, FC, useState } from "react";
import {
  Theme,
  ThemeContextProps,
  ThemeContextType,
} from "../../types/appConfig";

export const ThemeContext = createContext<ThemeContextType | null | undefined>(
  null
);

const ThemeProvider: FC<ThemeContextProps> = (props) => {
  const { children } = props;
  const [themePanel, setThemeMode] = useState<Theme>("light");

  return (
    <ThemeContext.Provider value={{ themePanel, changeTheme: setThemeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
