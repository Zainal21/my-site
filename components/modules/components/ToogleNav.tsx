import { FiMoon, FiSun } from "react-icons/fi";
import { RoundedButtonBox } from "@/components/design-system/components";
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
