import React from 'react';
import './CelebrityBar.css';
import peopleIcon from './icons8-person-64.png'

const CelebrityBar = ({ rank, name, milesTraveled, profilePicture }) => {
    profilePicture = "./donald.jpg";
    return (
        <div className="celebrityBar">
            <span>{rank}</span>
            <img src={require(`${profilePicture}`)} alt={name} />
            <div className="nameAndBarContainer">
                <span>{name}</span>
                <div className="milesBar">
                    <div style={{ width: `${milesTraveled / 5}px` }} className="milesFill"></div>
                </div>
                <img src={peopleIcon} className="cartoonIcon" />
            </div>
            <span>{Math.floor(milesTraveled/4.76)}</span>
        </div>
    );
}

export default CelebrityBar;
