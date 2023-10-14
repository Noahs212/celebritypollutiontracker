import React from 'react';
import './CelebrityBar.css';

const CelebrityBar = ({ rank, name, milesTraveled, profilePicture }) => {
    return (
        <div className="celebrityBar">
            <span>{rank}</span>
            <img src={profilePicture} alt={name} />
            <span>{name}</span>
            <div className="milesBar">
                <div style={{ width: `${milesTraveled / 5}px` }} className="milesFill"></div>
            </div>
            <span>{milesTraveled}</span>
        </div>
    );
}

export default CelebrityBar;
