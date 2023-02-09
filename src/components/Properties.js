import Property from "./Property";
import prop1 from "../images/prop1.svg";
import prop2 from "../images/prop2.svg";
import prop3 from "../images/prop3.svg";
import prop4 from "../images/prop4.svg";
import prop5 from "../images/prop5.svg";
import prop6 from "../images/prop6.svg";

function Properties() {
  return (
    <div className="properties">
      <div className="prop">
        <h2>
          List Of Properties
          <div className="text-line"></div>
        </h2>
        <button>View All Property</button>
      </div>
      <div className="property-list">
        <Property img={prop1} />
        <Property img={prop2} />
        <Property img={prop3} />
        <Property img={prop4} />
        <Property img={prop5} />
        <Property img={prop6} />
      </div>
      <div className="pagination">
        <div className="controls">First</div>
        <div className="controls">1</div>
        <div className="controls">2</div>
        <div className="controls">3</div>
        <div className="controls">Next</div>
      </div>
    </div>
  );
}

export default Properties;
