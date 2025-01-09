import Banner from "../../components/home/banner/Banner";
import Category from "./Category";

const Home = () => {
  return (
    <>
      <Banner />
      <sectionq className="w-10/12 mx-auto">
        <Category />
      </sectionq>
    </>
  );
};

export default Home;
