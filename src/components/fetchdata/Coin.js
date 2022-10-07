import PropCoin from "./PropCoin";
import "../../App.css";
import Loding from "../../Loding";

function Coin(props) {
  const item = props.details;

  return (
    <div className="Card">
      <PropCoin
        handleClick={(uuid, price) => props.handleCoinClick(uuid, price)}
        name={item.name}
        uuid={item.uuid}
        iconUrl={item.iconUrl}
        symbol={item.symbol}
        price={item.price}
      />

      <div>
        
        {item.uuid === props.coin.uuid && (
          <>
            <p className="uuid">{props.coin.uuid} </p>
            <p className="uuid">{props.coin.price} </p>
          </>
          
        )}
        {props.loder && props.selectedCoin===item.uuid && <Loding />}
      </div>
    </div>
  );
}
export default Coin;
