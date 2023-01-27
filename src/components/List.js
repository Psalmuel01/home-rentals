function List(props) {
  return (
    <div className="list">
      <div className="vector">
        <img src={props.img} alt="" />
      </div>
      <h4>{props.text}</h4>
    </div>
  );
}

export default List;
