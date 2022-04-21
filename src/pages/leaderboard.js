import { Link } from "react-router-dom";
import * as query from "../contract/query";
import { useState, useEffect } from "react";
import * as execute from "../contract/execute";
import WalletAddress from "../components/WalletAddress";
import { useConnectedWallet } from "@terra-money/wallet-provider";

const Leaderboard = () => {
    const [scores, setScores] = useState();
    const [updating, setUpdating] = useState(true);
    const connectedWallet = useConnectedWallet();

    useEffect(async () => {
        if (connectedWallet) {
            console.log("Connected wallet is", connectedWallet.terraAddress);
            console.log("Connected on network", connectedWallet.network.name, "with chainID", connectedWallet.network.chainID);

            setScores((await query.getScores(connectedWallet)).scores);
        }
    }, [connectedWallet]);

    const onClickSetScore = async (score) => {
        setUpdating(true);
        await execute.setScore(connectedWallet, score);
        setScores((await query.getScores(connectedWallet)).scores);
        setUpdating(false);
    };

    const inputScore = () => {
        // Get input using prompt
        const score = prompt("Enter a new score");
        if (score) {
            // convert score to int
            const scoreInt = parseInt(score);
            if (scoreInt) {
                onClickSetScore(scoreInt);
            }
        }
    };

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

                    <button onClick={inputScore} type="button" className="cta-button connect-wallet-button set-score-btn">
                        Set score manually
                    </button>
                </div>
            );
        }
    };
    return <div>{renderScoreboard()}</div>;
};

export default Leaderboard;
