import { useState } from "react";
import Loding from "../../Loding";
import Coin from "./Coin";
import "../../App.css"

function Coins() {
  const [coins, setRes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [coin, setCoin] = useState({});
  const [selectedCoin, setSelectedCoin]=useState("");

  const fetchCoins = async () => {
    setIsLoading(true);
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "1896d899c8msh3cf329e1b4d612ap19ded8jsn086e2cd6fb80",
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
    };

    const data = await fetch(
      "https://coinranking1.p.rapidapi.com/coins",
      options
    )
      .then((response) => response.json())
      .then(({ data: { coins } }) => {
        setRes(coins);
        setIsLoading(false);
        
      })
      .catch((error) => console.error(error));
    return data;
  };

  const fetchCoin = async (data) => {
    // const coin = { };
    // coin.price=price
    // coin.uuid=uuid
    // setCoin(coin);
    // console.log(coin)
    setIsLoading(true);
setSelectedCoin(data)
    console.log("in coins", data);
    const options = {
      method: "GET",
      params: { referenceCurrencyUuid: data, timePeriod: "24h" },
      headers: {
        "X-RapidAPI-Key": "1896d899c8msh3cf329e1b4d612ap19ded8jsn086e2cd6fb80",
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
    };

    await fetch("https://coinranking1.p.rapidapi.com/coin/" + data, options)
      .then((response) => response.json())
      .then(({ data: { coin } }) => {
        setCoin(coin);
        setIsLoading(false);
        setSelectedCoin("")
      })
      .catch((error) => console.error(error));
  };

  return (
    <div >
      <button  onClick={fetchCoins} disabled={isLoading}>
        Fetch Data
      </button>
      {isLoading && <Loding />}
      {/* {<Coin coins={coins}/>} */}
      <div className="hhh">
        {coins.map((item,i) => {
          return (
            <div className="coin" key={i}>
              <Coin
                handleCoinClick={(data,price) => fetchCoin(data,price)}
                key={item.uuid}
                details={item}
                coin={coin}
                loder={isLoading}
                selectedCoin={selectedCoin}

                
              />
              
              
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Coins;