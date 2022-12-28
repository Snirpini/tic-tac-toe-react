import React from 'react'
import "./RestartButton.css"

const RestartButton = ({onClick: handleClick}) => {
    return ( 
        <button className="restartButton" onClick={handleClick}>Restart</button>
     );
}
 
export default RestartButton;