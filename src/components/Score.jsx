import { Link } from "react-router-dom";

export default function Score({ points, onStart }) {

    

    return (
        <div className="game-not-started">
            <h2>Score: {points}</h2>
            <div>
                <button className="btn" onClick={onStart}>Play Again</button>
                <Link to="/">
                    <button className="btn">Main menu</button>
                </Link>
            </div>
        </div>
    );

}