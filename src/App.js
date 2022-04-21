import "./App.css";

import * as query from "./contract/query";
import GameMenu from "./components/GameMenu";
import * as execute from "./contract/execute";
import WalletAddress from "./components/WalletAddress";

import { useEffect, useState } from "react";
import { ConnectWallet } from "./components/ConnectWallet";
import { useWallet, useConnectedWallet, WalletStatus } from "@terra-money/wallet-provider";

function App() {
    const { status } = useWallet();
    const [speed, setSpeed] = useState(null);
    const [updating, setUpdating] = useState(true);
    const connectedWallet = useConnectedWallet();

    useEffect(() => {
        const prefetch = async () => {
            if (connectedWallet) {
                console.log("Connected wallet is", connectedWallet.terraAddress);
                console.log("Connected on network", connectedWallet.network.name, "with chainID", connectedWallet.network.chainID);

                setSpeed((await query.getSpeed(connectedWallet)).speed);
            }
            setUpdating(false);
        };
        prefetch();
    }, [connectedWallet]);

    return (
        <main className="App">
            <header className="app-header-container">
                {/* <div style={{ display: "inline" }}>
                    SPEED: {speed} {updating ? "(updating . . .)" : ""}
                </div> */}

                <div className="game-app-header">
                    <h1>⚔ Goblin War ⚔</h1>
                    <p>Only you can save us from Goblin town</p>
                </div>

                <WalletAddress />

                {status === WalletStatus.WALLET_CONNECTED && (
                    <div>
                        <GameMenu />
                    </div>
                )}

                <ConnectWallet />
            </header>
        </main>
    );
}

export default App;
