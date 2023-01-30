import prop1 from "../images/prop1.svg"
import bed from "../images/bed.svg";

const Property = () => {
    return ( 
        <div className="property">
            <img src={prop1} alt="" />
            <div>
                <h4>2578 Folsom street, San Francisco, CA, 94110</h4>
                <p>Private Room</p>
                <h4>$1200/Month</h4>
            </div>
            <div className="counts">
                <div className="count">
                   <img src={bed} alt="" /><h5>4</h5> 
                </div>
                <div className="count">
                   <img src={bed} alt="" /><h5>4</h5> 
                </div>
                <div className="count">
                   <img src={bed} alt="" /><h5>4</h5> 
                </div>
            </div>
        </div>
     );
}
 
export default Property;