import useLocalStorage from "./useLocalStorage";

const useDarkMode = (key, initialValue) => {
  const [isDarkMode, setDarkMode] = useLocalStorage(key, initialValue);

  const handleClick = (updatedValue) => {
    setDarkMode(updatedValue);
  };

  return [isDarkMode, setDarkMode, handleClick];
};

export default useDarkMode;
