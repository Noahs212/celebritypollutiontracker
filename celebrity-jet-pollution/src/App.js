import React from 'react';
import './App.css';
import CelebrityBar from './CelebrityBar';

const data = [
    { name: "Michael Jordan", milesTraveled: 248, profilePicture: "path_to_image" },
    { name: "Kylie Jenner", milesTraveled: 983, profilePicture: "path_to_image" },
    { name: "Donald Trump", milesTraveled: 5296, profilePicture: "Donald_Trump_official_portrait.jpg" },
    { name: "Eric Schmidt", milesTraveled: 1211, profilePicture: "path_to_image" },
    { name: "Jay Z", milesTraveled: 1045, profilePicture: "path_to_image" },
    { name: "Travis Scott", milesTraveled: 994, profilePicture: "path_to_image" },
    { name: "Alex Rodriguez", milesTraveled: 898, profilePicture: "path_to_image" },
    { name: "Drake", milesTraveled: 886, profilePicture: "path_to_image" },
    { name: "Luke Bryan", milesTraveled: 858, profilePicture: "path_to_image" },
    { name: "Kim Kardashian", milesTraveled: 832, profilePicture: "path_to_image" },
    { name: "Steve Wynn", milesTraveled: 814, profilePicture: "path_to_image" },
    { name: "Floyd Mayweather", milesTraveled: 769, profilePicture: "path_to_image" },
    { name: "Mark Zuckerberg", milesTraveled: 733, profilePicture: "path_to_image" },
    { name: "Makr Cuban", milesTraveled: 644, profilePicture: "path_to_image" },
    { name: "Blake Shelton", milesTraveled: 641, profilePicture: "path_to_image" },
    { name: "Steven Spielberg", milesTraveled: 574, profilePicture: "path_to_image" },
    { name: "Mark Wahlberg", milesTraveled: 543, profilePicture: "path_to_image" },
    { name: "Steve Balmer", milesTraveled: 480, profilePicture: "path_to_image" },
    { name: "Ron Perelman", milesTraveled: 473, profilePicture: "path_to_image" },
    { name: "Larry Ellison", milesTraveled: 462, profilePicture: "path_to_image" },
    { name: "Oprah Winfrey", milesTraveled: 436, profilePicture: "path_to_image" },
    { name: "Elon Musk", milesTraveled: 407, profilePicture: "path_to_image" },
    { name: "Jerry Jones", milesTraveled: 403, profilePicture: "path_to_image" },
    { name: "Peter Thiel", milesTraveled: 378, profilePicture: "path_to_image" },
    { name: "Bill Gates", milesTraveled: 664, profilePicture: "path_to_image" },
    { name: "Mark Benioff", milesTraveled: 353, profilePicture: "path_to_image" },
    { name: "Matt Damon", milesTraveled: 341, profilePicture: "path_to_image" },
    { name: "George Lucas", milesTraveled: 832, profilePicture: "path_to_image" },
    { name: "P. Diddy", milesTraveled: 338, profilePicture: "path_to_image" },
    { name: "Lady Gaga", milesTraveled: 326, profilePicture: "path_to_image" },
    { name: "Sergey Brin", milesTraveled: 308, profilePicture: "path_to_image" },
    { name: "Michael Bloomberg", milesTraveled: 640, profilePicture: "path_to_image" },
    { name: "Rupert Murdoch", milesTraveled: 281, profilePicture: "path_to_image" },
    { name: "Phil Knight", milesTraveled: 261, profilePicture: "path_to_image" },
    { name: "Tom Cruise", milesTraveled: 226, profilePicture: "path_to_image" },
    { name: "Kenny Chesney", milesTraveled: 245, profilePicture: "path_to_image" },
    { name: "Ron DeSantis", milesTraveled: 215, profilePicture: "path_to_image" },
    { name: "Tommy Hilfiger", milesTraveled: 204, profilePicture: "path_to_image" },
    { name: "Dan Bilzerian", milesTraveled: 177, profilePicture: "path_to_image" },
    { name: "Jim Carrey", milesTraveled: 176, profilePicture: "path_to_image" },
    { name: "Kid Rock", milesTraveled: 161, profilePicture: "path_to_image" },
    { name: "Harrison Ford", milesTraveled: 102, profilePicture: "path_to_image" },
    { name: "Dr. Phil", milesTraveled: 85, profilePicture: "path_to_image" },
    { name: "David Geffen", milesTraveled: 72, profilePicture: "path_to_image" },
    { name: "Elton John", milesTraveled: 68, profilePicture: "path_to_image" },
    { name: "Judge Judy", milesTraveled: 67, profilePicture: "path_to_image" },
    { name: "Jeff Bezos", milesTraveled: 18, profilePicture: "path_to_image" },

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
