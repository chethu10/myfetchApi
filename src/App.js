// import { useState } from "react";
import "./App.css";
import Coins from "./components/fetchdata/Coins";


function App() {
  // const [res, setRes] = useState([]);
  // const [coin, setCoin] = useState({});
  // const [isLoading, setIsLoading] = useState(false);

  // const fetchHandler = async () => {
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       "X-RapidAPI-Key": "1896d899c8msh3cf329e1b4d612ap19ded8jsn086e2cd6fb80",
  //       "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  //     },
  //   };
  //   setIsLoading(true);

  //   const data = await fetch(
  //     "https://coinranking1.p.rapidapi.com/coins",
  //     options
  //   )
  //     .then((response) => response.json())
  //     .then(({ data: { coins } }) => {
  //       setRes(coins);
  //       setIsLoading(false)
  //     })
  //     .catch((error) => console.error(error));
  //   console.log("HEre", data);
    
    
  //   return data;
  // };

  // const differentHandler = async (uuid) => {
  //   console.log("UUID", uuid);
  //   const options = {
  //     method: "GET",
  //     params: { referenceCurrencyUuid: uuid, timePeriod: "24h" },
  //     headers: {
  //       "X-RapidAPI-Key": "1896d899c8msh3cf329e1b4d612ap19ded8jsn086e2cd6fb80",
  //       "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  //     },
  //   };
    

  //   const data = await fetch(
  //     "https://coinranking1.p.rapidapi.com/coin/" + uuid,
  //     options
  //   )
  //     .then((response) => response.json())
  //     .then(({ data: { coin } }) => {
  //       return coin;
  //     })
  //     .catch((error) => console.error(error));
  //   console.log("separate", data);
  //   setCoin(data);
  //   return data;
  // };
  // return (
  //   <div className="all">
      
  //     <button className="but" onClick={fetchHandler}  disabled={isLoading}>Fetched Data</button>
  //      {isLoading && <Loding/>}
  //     {res.map((item) => {
  //       return (
  //         <div className="app">
  //           <div><h1 onClick={() => differentHandler(item.uuid)}>{item.name}</h1></div>
  //          <div>{item.uuid===coin["uuid"]&& <p>{coin['uuid']}</p>}</div>
  //          <img className="iconUrl" src={item.iconUrl} alt=""/>
  //         </div >
  //       );
  //     })}
  //   </div>
  // );
  return(
  <div className="app">
    <Coins/>
    </div>
  )
}
export default App;
