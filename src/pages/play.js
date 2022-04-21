import React, { useState, useEffect, useRef } from "react";

const Play = () => {
    const maxTime = 30;
    const divRef = useRef();
    const [playing, setPlaying] = useState(false);
    const [timeLeft, setTimeLeft] = useState(maxTime);
    const [audio] = useState(new Audio("/Zergling_explodes.mp3"));

    useEffect(() => {
        audio.volume = 0.2;
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
                        top: Math.floor((index + 1) * 0.2 * divRef?.current?.offsetHeight),
                        left: Math.floor((index + 1) * 0.2 * divRef?.current?.offsetWidth),
                    }}
                />
            ));
        }

        return undefined;
    };

    const togglePlay = () => {
        if (playing) {
            audio.play();
        }

        setPlaying(!playing);
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
