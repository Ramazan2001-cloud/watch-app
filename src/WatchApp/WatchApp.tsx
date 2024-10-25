import React, { useState } from 'react';
import Clock from './Clock/Clock';
import Stopwatch from './StopWatch/StopWatch';
import Timer from './Timer/Timer';
import './WatchApp.css';

const WatchApp: React.FC = () => {
    const [mode, setMode] = useState<'clock' | 'stopwatch' | 'timer'>('clock');

    const handleModeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setMode(e.target.value as 'clock' | 'stopwatch' | 'timer');
    };

    return (
        <div className="timer-container">
            <select className="timer-select" value={mode} onChange={handleModeChange}>
                <option value="clock">Clock</option>
                <option value="stopwatch">Stopwatch</option>
                <option value="timer">Timer</option>
            </select>

            {mode === 'clock' && <Clock />}
            {mode === 'stopwatch' && <Stopwatch />}
            {mode === 'timer' && <Timer />}
        </div>
    );
};

export default WatchApp;
