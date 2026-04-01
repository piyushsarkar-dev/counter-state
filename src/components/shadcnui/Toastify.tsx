import { useTheme } from "next-themes";
import { ToastContainer } from "react-toastify";

const Toastify = () => {
  const { theme } = useTheme();
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={2500}
    />
  );
};

export default Toastify;
