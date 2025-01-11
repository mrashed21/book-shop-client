import useMenu from "../../hooks/useMenu";

const Menu = () => {
  const [menu] = useMenu();
  const filter = menu.filter((item) => item.category === "Computer");
  return (
    <div>
      <p>{menu.length}</p>
      <p>{filter.length}</p>
    </div>
  );
};

export default Menu;
