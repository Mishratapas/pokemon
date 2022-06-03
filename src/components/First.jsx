import bg from "../images/bg.jpg";
import "./First.css";
// import Dialog from "./Dialog";
import ByBox from "./ByBox";

const First = () => {
  return (
    <div>
      <img className="bg" src={bg} alt="" height="300px" width="300px" />
      <ByBox />
    </div>
  );
};

export default First;
