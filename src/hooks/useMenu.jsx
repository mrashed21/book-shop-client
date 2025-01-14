import { useEffect, useState } from "react";

const useMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("projectData.json")
      .then((res) => res.json())
      .then((data) => setMenu(data));
  }, []);
  return [menu];
};
export default useMenu;
