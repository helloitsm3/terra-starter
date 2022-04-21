import { useState } from "react";
import { Link } from "react-router-dom";
import WalletAddress from "../components/WalletAddress";

const Leaderboard = () => {
    const [scores, setScores] = useState([
        ["terra1lqu0yqdqr2qwv40w9mk5v25s2sr4udy7830hvy", "2100"],
        ["terra1lqu0yqdqr2qwv40w9mk5v25s2sr4udy7830ase", "1933"],
        ["terra1lqu0yqdqr2qwv40w9mk5v25s2sr4udy7831kj2", "100"],
        ["terra1lqu0yqdqr2qwv40w9mk5v25s2sr4udy7834k3j", "50"],
        ["terra1lqu0yqdqr2qwv40w9mk5v25s2sr4udy7830aks", "25"],
    ]);

    const renderScoreboard = () => {
        if (scores) {
            return (
                <div className="score-board-container">
                    <Link to="/" className="game-menu">
                        <div className="game-app-header">
                            <h1>⚔ Goblin War ⚔</h1>
                            <p>Only you can save us from Goblin town</p>
                        </div>
                    </Link>

                    <WalletAddress />

                    <h3>Scoreboard</h3>
                    <div>
                        {/* Map through scores */}
                        {scores.map((score, index) => {
                            console.log(scores[0].slice(0, 5));
                            return (
                                <div key={index}>
                                    {/* Format score[0] : score[1] */}
                                    {/* Slice score[0] to first 5 and last 4 digits */}
                                    <span>
                                        {score[0].slice(0, 5) + "..." + score[0].slice(-4)} : {score[1].toString().padStart(2, "0")}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            );
        }
    };
    return <div>{renderScoreboard()}</div>;
};

export default Leaderboard;
