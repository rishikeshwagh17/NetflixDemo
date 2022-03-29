import "./home.scss";
import Navbar from "../component/navbar/Navbar";
import Featured from "../component/featured/Featured";
import List from "../component/list/List"
const home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured type="Movies" />
      <List/>
      <List/>
      <List/>
      <List/>
    </div>
  );
};

export default home;
