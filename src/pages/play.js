import React, { useState, useEffect, useRef } from "react";

const Play = () => {
    const maxTime = 30;
    const divRef = useRef();
    const [playing, setPlaying] = useState(false);
    const [timeLeft, setTimeLeft] = useState(maxTime);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft((prev) => (prev <= 0 ? (prev = maxTime) : (prev -= 1)));
        }, 1000);

        return () => clearInterval(interval);
    }, [divRef?.current]);

    const renderZerglings = () => {
        if (divRef?.current) {
            return [...Array(4).keys()].map((zg, index) => (
                <img
                    onClick={togglePlay}
                    key={index}
                    src="/pepe.png"
                    style={{
                        position: "absolute",
                        height: "100px",
                        top: Math.floor(Math.random() * (divRef?.current?.offsetHeight - 550)) + 250,
                        left: Math.floor(Math.random() * (divRef?.current?.offsetWidth - 250)) + 250,
                        transform: "translate(-50%, -50%)",
                    }}
                />
            ));
        }

        return undefined;
    };

    const togglePlay = () => {
        let audio = new Audio("/Zergling_explodes.mp3");
        audio.volume = 0.2;
        audio.play();
    };

    return (
        <div className="score-board-container">
            <div className="play-header-container">
                <span>Score: 21</span>
                <span>Fight!</span>
                <span>Time left: {timeLeft} s</span>
            </div>

            <div className="play-container" ref={divRef}>
                <img src="Marine.png" id="marine-img" alt="" />

                {renderZerglings()}
            </div>
        </div>
    );
};

export default Play;
