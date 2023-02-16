import bed from "../images/bed.svg";
import shower from "../images/shower.svg";
import size from "../images/size.svg";

function Property(props) {
  return (
    <div className="property">
      <img src={props.img} alt="" />
      <div className="property-text">
        <h4>2578 Folsom street, San Francisco, CA, 94110</h4>
        <p>Private Room</p>
        <h4 style={{ marginBottom: 0 }}>$1200/Month</h4>
      </div>
      <div className="counts">
        <div className="count">
          <img src={bed} alt="" />
          <h5>4</h5>
        </div>
        <div className="count">
          <img src={shower} alt="" />
          <h5>4</h5>
        </div>
        <div className="count">
          <img src={size} alt="" />
          <h5>4</h5>
        </div>
      </div>
    </div>
  );
}

export default Property;
