import { ReactNode } from "react";

export type Theme = "light" | "dark";

export type ThemeContextType = {
  themePanel: Theme;
  changeTheme: (theme: Theme) => void;
};

export type ThemeContextProps = {
  children: ReactNode;
};

export type Params = {
  type?: string;
  project: string;
  queues?: string;
  id?: string;
};
