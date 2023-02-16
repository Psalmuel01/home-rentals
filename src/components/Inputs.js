function Inputs(props) {
  return (
    <div className="inputs">
      <h5>
        {props.name} <span>*</span>
      </h5>
      <textarea placeholder={props.placeholder} rows={props.rows}></textarea>
    </div>
  );
}

export default Inputs;
