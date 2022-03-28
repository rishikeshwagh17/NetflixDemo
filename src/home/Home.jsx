import "./home.scss";
import Navbar from "../component/navbar/Navbar"
import Featured from "../component/featured/Featured"
const home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured type="movie"/>

    </div>
  )
}

export default home