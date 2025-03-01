import { useState } from "react"
import InfoBox from "./InfoBox"
import SearchBox from "./SearchBox"


export default function WeatherApp() {
    let [weatherInfo, setWeayherInfo] = useState({
        city: "Goa",
        feelsLike: 24.3,
        temp: 23.33,
        tempMin: 18.04,
        tempMax: 23.45,
        humidity: 47,
        weather: "haze",
      });


      let updateInfo = (result) => {
        setWeayherInfo(result);
      }
    return(
        <div className="WeatherApp">
            <h3>Weather App by Diksha </h3>

              <SearchBox updateInfo={updateInfo}/>
              <InfoBox info={weatherInfo}/>
          
        </div>
    )
}