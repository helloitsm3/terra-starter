import { Link } from "react-router-dom";
import WalletAddress from "../components/WalletAddress";

const Guide = () => {
    return (
        <div className="score-board-container">
            <Link to="/" className="game-menu">
                <div className="game-app-header">
                    <h1>⚔ Goblin War ⚔</h1>
                    <p>Only you can save us from Goblin town</p>
                </div>
            </Link>

            <WalletAddress />

            <p>Guides</p>
        </div>
    );
};

export default Guide;
