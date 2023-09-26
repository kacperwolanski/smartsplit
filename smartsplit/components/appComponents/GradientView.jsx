import React from "react";
import useTheme from "../../hooks/useThemeHook";
import { LinearGradient } from "expo-linear-gradient";

const GradientView = ({ children }) => {
  const { theme } = useTheme();
  return (
    <LinearGradient
      colors={theme.mainBackground}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      {children}
    </LinearGradient>
  );
};

export default GradientView;
