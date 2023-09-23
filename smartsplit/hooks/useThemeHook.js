import useStore from "../store";
import { BlueTheme, DarkTheme, LightTheme } from "../theme";
import headerStyle from "../styles/headerStyle";

const useTheme = () => {
  const { appTheme } = useStore();

  const getTheme = () => {
    switch (appTheme) {
      case "dark":
        return DarkTheme;
      case "light":
        return LightTheme;
      case "babyBlue":
        return BlueTheme;
    }
  };
  const theme = getTheme();

  const mainHeader = [headerStyle, { color: theme.mainFontColor }];
  const contentField = {
    backgroundColor: theme.contentBackground,
    borderRadius: 10,
    overflow: "hidden",
  };

  return { theme, mainHeader, contentField };
};

export default useTheme;
