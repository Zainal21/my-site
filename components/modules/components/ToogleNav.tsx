import { FiMoon, FiSun } from "react-icons/fi";
import { useEffect, useState } from "react";
import { RoundedButtonBox } from "../../design-system";
import { useTheme } from "@/context/ThemeContext";

const ToggleNav: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <RoundedButtonBox
      title={`Toggle ${theme === "dark" ? "Dark Mode" : "Light Theme"} (T)`}
      onClick={() => toggleTheme()}
    >
      {theme === "dark" ? <FiSun /> : <FiMoon />}
    </RoundedButtonBox>
  );
};

export default ToggleNav;
