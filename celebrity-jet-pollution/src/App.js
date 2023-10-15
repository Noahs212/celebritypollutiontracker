import React from 'react';
import './App.css';
import CelebrityBar from './CelebrityBar';

import hackgtlogo from './hackgtlogo.png';
import flightaware from './flightaware.png';

const data = [
    { name: "Michael Jordan", milesTraveled: 248, profilePicture: "./PFP/Michael_Jordan.jpg" },
    { name: "Kylie Jenner", milesTraveled: 983, profilePicture: "./PFP/Kylie_Jenner.jpg" },
    { name: "Donald Trump", milesTraveled: 5296, profilePicture: "./PFP/Donald_Trump.jpg" },
    { name: "Eric Schmidt", milesTraveled: 1211, profilePicture: "./PFP/Eric_Schmidt.jpg" },
    { name: "Jay Z", milesTraveled: 1045, profilePicture: "./PFP/Jay_Z.jpg" },
    { name: "Travis Scott", milesTraveled: 994, profilePicture: "./PFP/Travis_Scott.jpg" },
    { name: "Alex Rodriguez", milesTraveled: 898, profilePicture: "./PFP/Alex_Rodriguez.jpg" },
    { name: "Drake", milesTraveled: 886, profilePicture: "./PFP/Drake.jpg" },
    { name: "Luke Bryan", milesTraveled: 858, profilePicture: "./PFP/Luke_Bryan.jpg" },
    { name: "Kim Kardashian", milesTraveled: 832, profilePicture: "./PFP/Kim_Kardashian.jpg" },
    { name: "Steve Wynn", milesTraveled: 814, profilePicture: "./PFP/Steve_Wynn.jpg" },
    { name: "Floyd Mayweather", milesTraveled: 769, profilePicture: "./PFP/Floyd_Mayweather.jpg" },
    { name: "Mark Zuckerberg", milesTraveled: 733, profilePicture: "./PFP/Mark_Zuckerberg.jpg" },
    { name: "Makr Cuban", milesTraveled: 644, profilePicture: "./PFP/Mark_Cuban.jpg" },
    { name: "Blake Shelton", milesTraveled: 641, profilePicture: "./PFP/Blake_Shelton.jpg" },
    { name: "Steven Spielberg", milesTraveled: 574, profilePicture: "./PFP/Steven_Spielberg.jpg" },
    { name: "Mark Wahlberg", milesTraveled: 543, profilePicture: "./PFP/Mark_Wahlberg.jpg" },
    { name: "Steve Balmer", milesTraveled: 480, profilePicture: "./PFP/Steve_Balmer.jpg" },
    { name: "Ron Perelman", milesTraveled: 473, profilePicture: "./PFP/Ron_Perelman.jpg" },
    { name: "Larry Ellison", milesTraveled: 462, profilePicture: "./PFP/Larry_Ellison.jpg" },
    { name: "Oprah Winfrey", milesTraveled: 436, profilePicture: "./PFP/Oprah_Winfrey.jpg" },
    { name: "Elon Musk", milesTraveled: 407, profilePicture: "./PFP/Elon_Musk.jpg" },
    { name: "Jerry Jones", milesTraveled: 403, profilePicture: "./PFP/Jerry_Jones.jpg" },
    { name: "Peter Thiel", milesTraveled: 378, profilePicture: "./PFP/Peter_Thiel.jpg" },
    { name: "Bill Gates", milesTraveled: 664, profilePicture: "./PFP/Bill_Gates.jpg" },
    { name: "Mark Benioff", milesTraveled: 353, profilePicture: "./PFP/Mark_Benioff.jpg" },
    { name: "Matt Damon", milesTraveled: 341, profilePicture: "./PFP/Matt_Damon.jpg" },
    { name: "George Lucas", milesTraveled: 832, profilePicture: "./PFP/George_Lucas.jpg" },
    { name: "P. Diddy", milesTraveled: 338, profilePicture: "./PFP/P_Diddy.jpg" },
    { name: "Lady Gaga", milesTraveled: 326, profilePicture: "./PFP/Lady_Gaga.jpg" },
    { name: "Sergey Brin", milesTraveled: 308, profilePicture: "./PFP/Sergey_Brin.jpg" },
    { name: "Michael Bloomberg", milesTraveled: 640, profilePicture: "./PFP/Michael_Bloomberg.jpg" },
    { name: "Rupert Murdoch", milesTraveled: 281, profilePicture: "./PFP/Rupert_Murdoch.jpg" },
    { name: "Phil Knight", milesTraveled: 261, profilePicture: "./PFP/Phil_Knight.jpg" },
    { name: "Tom Cruise", milesTraveled: 226, profilePicture: "./PFP/Tom_Cruise.jpg" },
    { name: "Kenny Chesney", milesTraveled: 245, profilePicture: "./PFP/Kenny_Chesney.jpg" },
    { name: "Ron DeSantis", milesTraveled: 215, profilePicture: "./PFP/Ron_Desantis.jpg" },
    { name: "Tommy Hilfiger", milesTraveled: 204, profilePicture: "./PFP/Tommy_Hilfiger.jpg" },
    { name: "Dan Bilzerian", milesTraveled: 177, profilePicture: "./PFP/Dan_Bilzerian.jpg" },
    { name: "Jim Carrey", milesTraveled: 176, profilePicture: "./PFP/Jim_Carrey.jpg" },
    { name: "Kid Rock", milesTraveled: 161, profilePicture: "./PFP/Kid_Rock.jpg" },
    { name: "Harrison Ford", milesTraveled: 102, profilePicture: "./PFP/Harrison_Ford.jpg" },
    { name: "Dr. Phil", milesTraveled: 85, profilePicture: "./PFP/Dr_Phil.jpg" },
    { name: "David Geffen", milesTraveled: 72, profilePicture: "./PFP/David_Geffen.jpg" },
    { name: "Elton John", milesTraveled: 68, profilePicture: "./PFP/Elton_John.jpg" },
    { name: "Judge Judy", milesTraveled: 67, profilePicture: "./PFP/Judge_Judy.jpg" },
    { name: "Jeff Bezos", milesTraveled: 18, profilePicture: "./PFP/Jeff_Bezos.jpg" },

    // Add other celebrities data here
];

const sortedData = data.sort((a, b) => b.milesTraveled - a.milesTraveled);

function App() {
    return (
      <div className='bigdiv'>
        <header className='app-header'>
          <img src={hackgtlogo} alt = "HackGT Logo" className='hackgt'/>
          <img src={flightaware} alt = "aero api logo" className='header-image'/>
        </header>
        <div className="App">
            <h1> ✈️ Celebrity Private Jet Pollution</h1>
            <div className="year-section">
                <h2>Year 2023</h2>
                <h4>(In units of the average person's yearly CO2 footprint 🧍‍♀️ = 4.76 tons of CO2)</h4>
            </div>
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
      </div>
    );
}

export default App;

