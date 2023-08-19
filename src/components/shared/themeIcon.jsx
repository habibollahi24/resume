import { BsFillSunFill, BsMoonFill } from "react-icons/bs";
import useTheme from "./../../hooks/useThme";

const ThemeIcon = () => {
   const [theme, onThemeHandler] = useTheme();
   return (
      <div
         onClick={onThemeHandler}
         className="text-gray-700  text-2xl bg-gray-200 rounded-full p-2 cursor-pointer"
      >
         {theme === "dark" ? <BsMoonFill /> : <BsFillSunFill />}
      </div>
   );
};

export default ThemeIcon;
