import React, { useEffect, useState } from 'react';
import './Stopwatch.css';

const Stopwatch: React.FC = () => {
    const [stopwatchTime, setStopwatchTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isRunning) {
            interval = setInterval(() => setStopwatchTime(prev => prev + 1), 1000);
        }
        return () => clearInterval(interval);
    }, [isRunning]);

    const startStopwatch = () => setIsRunning(true);
    const stopStopwatch = () => setIsRunning(false);
    const resetStopwatch = () => { 
        setIsRunning(false);
        setStopwatchTime(0); 
    };

    return (
        <div className="stopwatch">
            <div className="large-center">{stopwatchTime}s</div>
            <div className="controls">
                <button onClick={startStopwatch}>Start</button>
                <button onClick={stopStopwatch}>Stop</button>
                <button onClick={resetStopwatch}>Reset</button>
            </div>
        </div>
    );
};

export default Stopwatch;
