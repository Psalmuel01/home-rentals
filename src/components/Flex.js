import flex1 from "../images/flex1.png";
import flex2 from "../images/flex2.png";
import flex3 from "../images/flex3.png";
import flex4 from "../images/flex4.png";

function Flex() {
  return (
    <div className="flex">
      <div className="flex-gallery">
        <div className="flex-imgs">
          <img style={{ width: "40%" }} src={flex1} alt="" />
          <img src={flex2} alt="" />
        </div>
        <div className="flex-imgs">
          <img style={{ height: "50%" }} src={flex3} alt="" />
          <img style={{ width: "50%" }} src={flex4} alt="" />
        </div>
      </div>
      <div className="flex-text">
        <h2 style={{ marginBottom: 0 }}>
          Flexibility and options to suit your lifestyle.
        </h2>
        <p>
          You need it? We got it. We make finding your next home easy,
          comfortable, and simple. From our happiness guarantee to our selective
          roommate finder option. We provide you the flexibility that you most
          desire.
        </p>
        <div>
          <button>Search Rooms</button>
        </div>
      </div>
    </div>
  );
}

export default Flex;
