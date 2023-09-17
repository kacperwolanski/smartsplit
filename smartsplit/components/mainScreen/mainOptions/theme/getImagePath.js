import {
  babyBlueModeIconUrl,
  darkModeIconUrl,
  lightModeIconUrl,
} from "../../../../appConsts";
export const getImagePath = (theme) => {
  switch (theme) {
    case "dark":
      return darkModeIconUrl;
    case "light":
      return lightModeIconUrl;
    case "babyBlue":
      return babyBlueModeIconUrl;
  }
};
