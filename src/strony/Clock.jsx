import { useState, useEffect } from "react";

function Clock() {
    const [timeNow, setTimeNow] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeNow(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formattedTime = timeNow.toLocaleTimeString();
    // const formattedDate = timeNow.toLocaleDateString();

    return (
        <div className="clock">
            <p className="time">{formattedTime}</p>
            {/* <p>{formattedDate}</p> */}
        </div>
    );
}

export default Clock;