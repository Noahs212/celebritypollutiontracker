import React from 'react';
import './App.css';
import CelebrityBar from './CelebrityBar';

const data = [
    { name: "Michael Jordan", milesTraveled: 2408, profilePicture: "path_to_image" },
    { name: "LeBron James", milesTraveled: 1940, profilePicture: "path_to_image" },
    { name: "Donald Trump", milesTraveled: 5000, profilePicture: "path_to_image" },
    // Add other celebrities data here
];

const sortedData = data.sort((a, b) => b.milesTraveled - a.milesTraveled);

function App() {
    return (
        <div className="App">
            <h1>Celebrity Private Jet Pollution</h1>
            <h2>Year 2023 </h2>
            <h2></h2>
            {sortedData.map((celeb, index) => (
                <CelebrityBar 
                    key={index}
                    rank={index + 1}
                    name={celeb.name}
                    milesTraveled={celeb.milesTraveled}
                    profilePicture={celeb.profilePicture}
                />
            ))}
        </div>
    );
}

export default App;
