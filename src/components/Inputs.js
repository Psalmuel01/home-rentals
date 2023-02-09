function Inputs(props) {
  return (
    <div className="inputs">
      <h4>
        {props.name} <span>*</span>
      </h4>
      <input type="text" placeholder={props.placeholder} />
    </div>
  );
}

export default Inputs;
