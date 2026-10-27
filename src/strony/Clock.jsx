import { useState, useEffect } from "react";

function Clock() {
    const [timeNow, setTimeNow] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeNow(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const userTime = timeNow.toLocaleTimeString();
    const userDate = timeNow.toLocaleDateString();

    //pjsk pdt
    

    return (
        <>
            <p className="time">{userTime}</p>
            <p className="date">{userDate}</p>
        </>
    );
}

export default Clock;