
const StartComponent = ({ title, onStart }) => {

    return (
        <div className="game-not-started">
            <h1>{title}</h1>
            <button className="btn" onClick={onStart}>Start Game</button>
        </div>
    );

}

export default StartComponent;
