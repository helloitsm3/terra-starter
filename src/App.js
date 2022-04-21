import "./App.css";

import { useEffect, useState } from "react";
import GameMenu from "./components/GameMenu";
import { ConnectWallet } from "./components/ConnectWallet";
import { useWallet, useConnectedWallet, WalletStatus } from "@terra-money/wallet-provider";

function App() {
    const { status } = useWallet();
    const [speed, setSpeed] = useState(null);
    const [updating, setUpdating] = useState(true);
    // const connectedWallet = useConnectedWallet();

    useEffect(() => {
        const prefetch = async () => {
            // if (connectedWallet) {
            //     console.log("Connected wallet is", connectedWallet.terraAddress);
            //     console.log("Connected on network", connectedWallet.network.name, "with chainID", connectedWallet.network.chainID);
            //     setSpeed((await query.getSpeed(connectedWallet)).speed);
            //     setScores((await query.getScores(connectedWallet)).scores);
            //     console.log("Scores and speed are", scores, speed);
            // }
            setUpdating(false);
        };
        prefetch();
    }, []);

    const onClickSetScore = async (score) => {
        setUpdating(true);
        // await execute.setScore(connectedWallet, score);
        // setScores((await query.getScores(connectedWallet)).scores);
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

    return (
        <div className="App">
            <header className="app-header-container">
                {/* <div style={{ display: "inline" }}>
                    SPEED: {speed} {updating ? "(updating . . .)" : ""}
                </div> */}

                <div className="game-app-header">
                    <h1>⚔ Goblin War ⚔</h1>
                    <p>Only you can save us from Goblin town</p>
                </div>

                {status === WalletStatus.WALLET_CONNECTED && (
                    <div>
                        <GameMenu />
                        <button onClick={inputScore} type="button" className="cta-button connect-wallet-button">
                            Set score manually
                        </button>
                    </div>
                )}

                <ConnectWallet />
            </header>
        </div>
    );
}

export default App;
