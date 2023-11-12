import React from "react";
import { Watch } from "./component/Watch";
import "./component/com.css";

function App() {
  return (
    <div className="parent">
      <h1 className="h1">Watches</h1>;
      <div className="main">
        <Watch
          title="Diesel"
          category="Watch men"
          desc="Diesel Analog Black Dial (Big dial) Men's Watch-DZ7395"
          price="85,969"
        />
        <Watch
          title="Olevs"
          category="Watch men"
          desc="OLEVS Chronograph Analogue Men's Luxury Watch (Blue Dial)"
          price="55,699"
        />
        <Watch
          title="Rado"
          category="Watch Women's"
          desc="Rado Original Boyfriend Analog Silver Dial Women's Watch-ES3838"
          price="2,39,999"
        />
        <Watch
          title="Seiko"
          category="Watch Women's"
          desc="Seiko Lord Quartz Black Dial Chronograph Date Watch for Women's SPC103P1"
          price="1,55,000"
        />
        <Watch
          title="Titan"
          category="Watch Men's"
          desc="Titan Neo Analog Silver Dial Men's Watch-NN1733KM03/NR1733KM03"
          price="25,899"
        />
        <Watch
          title="Fossil"
          category="Watch Men's"
          desc="Fossil Analog White Dial Men's Watch-FS4795"
          price="95,999"
        />
        <Watch
          title="Timex"
          category="Watch Women's"
          desc="TIMEX Analog Blue Dial Women's Watch-TWHG03SMU10"
          price="99,999"
        />
        <Watch
          title="HUNRUY"
          category="Watch Women's"
          desc="HUNRUY Analog Women's Watch ( Dial Silver-And-Gold Colored Strap)"
          price="45,999"
        />
        <Watch
          title="Fossil"
          category="Watch Women's"
          desc="Fossil Riley Analog Rose Gold Dial Women's Watch - ES2811"
          price="69,999"
        />
      </div>
    </div>
  );
}

export default App;
