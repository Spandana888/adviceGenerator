import React, { useState,useEffect } from "react";
import axios from 'axios';
import desktopPattern from "../images/pattern-divider-desktop.svg";
import diceIcon from "../images/icon-dice.svg"

function AdviceBox() {
 const[advice, setAdvice] = useState([]);
  const [refreshData, setRefreshData] = useState(false);
 
 useEffect(() => {
   const generateAdvice = async () => {
     const response = await axios.get("https://api.adviceslip.com/advice");
     setAdvice(response.data.slip);
   };
   generateAdvice();
 }, [refreshData]);

  return (
    <div className="conatiner">
      <h1>Advice for a day</h1>
      <div className="advice-box">
        <h2>ADVICE #{advice.id}</h2>
        <p>{advice.advice}</p>
        <img src={desktopPattern} alt="desktopPattern" />
      </div>
      <div className="dice-container">
        <div className="dice-background"></div>
          <img
            onClick={() => setRefreshData(!refreshData)}
            src={diceIcon}
            alt="Dice Icon"
          />
      </div>
    </div>
  );
}

export default AdviceBox