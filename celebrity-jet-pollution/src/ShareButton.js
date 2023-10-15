import React from 'react';

function Copy() {
    let url = document.location.href;
    // console.log(url);
    navigator.clipboard.writeText(url);
    alert("Copied the link: " + url);
}

const ShareButton = () => {
    return (
        <button onClick={Copy}>Share</button>
    );
}

export default ShareButton;
