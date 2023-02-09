import Inputs from "./Inputs";

function AddProperty() {
  return (
    <div className="add-property">
      <h3>
        Your Property With Us And Be Confident That Your Room Will be Filled Out
      </h3>
      <div className="add">
        <h2>Add A New property</h2>
        <div>
          <Inputs name="Samuu" placeholder="Enter nickname" />
          <Inputs name="Name" placeholder="Enter Name" />
        </div>
      </div>
    </div>
  );
}

export default AddProperty;
