import Inputs from "./Inputs";

function AddProperty() {
  return (
    <div className="add-property">
      <h4>
        Your Property With Us And Be Confident That Your Room Will be Filled Out
      </h4>
      <div className="add">
        <h3>Add A New property</h3>
        <div className="inputs-list">
          <Inputs name="Name" placeholder="Enter Name" rows="1" />
          <Inputs name="Address" placeholder="Enter Address" rows="1" />
          <Inputs name="Unit Number" placeholder="Enter Unit" rows="1" />
          <Inputs name="City" placeholder="Select City" rows="1" />
          <Inputs name="State" placeholder="Select State" rows="1" />
          <Inputs name="Room Type" placeholder="Select Room Type" rows="1" />
          <Inputs name="Price" placeholder="Enter Price" rows="1" />
          <Inputs name="Room Type" placeholder="Select Room Type" rows="1" />
          <Inputs name="Name" placeholder="Enter Name" rows="1" />
          <Inputs name="Name" placeholder="Enter Name" rows="3" />
        </div>
        <div className="upload">
          <h4>Upload Photos</h4>
          <div className="img-box">
            <h5>
              Drag your images here, or <span>browse</span>
            </h5>
            <p style={{ fontSize: "xx-small" }}>Supported: JPG, JPEG, PNG</p>
          </div>
        </div>
        <button>Add New Property</button>
      </div>
    </div>
  );
}

export default AddProperty;
