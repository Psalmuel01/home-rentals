import Property from "./Property";

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
                <Property />
                <Property />
                <Property />
                <Property />
                <Property />
                <Property />
            </div>
        </div>
    );
}
 
export default Properties;