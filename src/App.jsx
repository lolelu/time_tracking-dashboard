import "./App.css";
import Tracker from "./Tracker/Tracker";
import { useEffect, useState } from "react";
import Profile from "./Profile";

function App() {
  const getData = () => {
    fetch(
      "data.json",

      {
        headers: {
          "Content-Type": "application/json",

          Accept: "application/json",
        },
      }
    )
      .then(function (response) {
        return response.json();
      })

      .then(function (myJson) {
        console.log(myJson);
        setData(myJson);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const [data, setData] = useState([]);

  const [timeframe, setTimeframe] = useState("daily");

  return (
    <div className="container mx-auto space-y-4   p-6 font-main text-lg">
      <Profile />
      <button className="bg-slate-300" onClick={() => setTimeframe("daily")}>
        Daily
      </button>
      <button className="bg-slate-300" onClick={() => setTimeframe("weekly")}>
        Weekly
      </button>
      <button className="bg-slate-300" onClick={() => setTimeframe("monthly")}>
        Monthly
      </button>
      {data &&
        data.length > 0 &&
        data.map((item, key) => (
          <Tracker content={item} timeframe={timeframe} />
        ))}
    </div>
  );
}

export default App;
