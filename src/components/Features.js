import List from "./List";
import apartment from "../images/apartment.svg";
import vector1 from "../images/vector1.svg";
import vector2 from "../images/vector2.svg";
import vector3 from "../images/vector3.svg";
import vector4 from "../images/vector4.svg";
import vector5 from "../images/vector5.svg";
import vector6 from "../images/vector6.svg";

function Features() {
  return (
    <div className="features">
    <div>
      <h2>
        Minimum Living Cost Takes Care Of Everything
        <div className="text-line"></div>
      </h2>
    </div>
      <div className="features-area">
        <img src={apartment} alt="" />
        <div className="list-details">
          <List img={vector1} text="Pay As Little As Possible" />
          <List img={vector2} text="Enjoy wisdom of community!" />
          <List img={vector3} text="Let's somebody else take care of Landlord!" />
          <List img={vector4} text="Enjoy peaceful Environment!" />
          <List img={vector5} text="Stay Safe! Save Money!" />
          <List img={vector6} text="Pay for what you use!" />
        </div>
      </div>
    </div>
  );
}

export default Features;
