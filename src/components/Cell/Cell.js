import React from 'react';
import './Cell.css';

const Cell = ({value, handleClick}) => {
    return ( 
        <button className="cell" onClick={handleClick}>{value}</button>
     );
}
 
export default Cell;