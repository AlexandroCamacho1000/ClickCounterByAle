import React from "react";
import '../stylesheets/Button.css'

function Button({ text, isClickButton, handleClick }) {

  // decide button style and handles click
  return (
    <button
      className={isClickButton ? "click-button" : "reset-button"}
      onClick={handleClick}
    >
      {text}
    </button>
  )
}

export default Button;
