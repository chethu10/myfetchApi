import "../../App.css";

function PropCoin(props) {
  
  return (
    <div>
      <div
        onClick={() => {
          props.handleClick(props.uuid, props.price);
        }}
      >
        <div className="coinname"> {props.name}</div>
        <div className="symbol">("{props.symbol}")</div>
        {/* <div className="price">{props.price}</div> */}
        <img className="img" src={props.iconUrl} alt="" />
      </div>
    </div>
  );
}
export default PropCoin;
