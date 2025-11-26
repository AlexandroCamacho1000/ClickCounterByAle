import React from "react";
import '../stylesheets/Counter.css'

function Counter({ clicks }) {
  
  // displays the current click count
  return (
    <div className="click-counter">
      {clicks}
    </div>
  )
}

export default Counter;
