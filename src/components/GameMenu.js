import { Link } from "react-router-dom";

const menu_button = [
    { name: "Play", link: "/play" },
    { name: "Leaderboard", link: "/leaderboard" },
    { name: "How to play", link: "/guides" },
];

const GameMenu = () => {
    const renderMenu = () => {
        return menu_button.map((mb, index) => {
            const { name, link } = mb;
            return (
                <Link to={link} key={index} className="game-menu">
                    <span className="game-menu-text">{name}</span>
                </Link>
            );
        });
    };
    return <div className="game-menu-container">{renderMenu()}</div>;
};

export default GameMenu;
