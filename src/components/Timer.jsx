import { useState, useEffect } from "react";

export default function Timer({ onTimeOver}) {

    const [time, setTime] = useState(50);

    useEffect(() => {
        if (time <= 0){
            onTimeOver();
            return;
        } 

        const interval = setInterval(() => {
            setTime((t) => t - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [time]);

    return (
        <div className="timer">
            <h2>Time: {time}</h2>
        </div>
    );

}