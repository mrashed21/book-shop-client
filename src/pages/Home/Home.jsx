import Banner from "../../components/home/banner/Banner";
import Menu from "../Menu/Menu";
import Category from "./Category";

const Home = () => {
  return (
    <>
      <Banner />
      <sectionq className="w-10/12 mx-auto">
        <Category />
      </sectionq>
      <Menu/>
    </>
  );
};

export default Home;
