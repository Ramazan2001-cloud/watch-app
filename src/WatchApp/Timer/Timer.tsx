import React, { useState, useEffect } from 'react';
import './Timer.css';

const Timer: React.FC = () => {
    const [timerHours, setTimerHours] = useState(0);
    const [timerMinutes, setTimerMinutes] = useState(0);
    const [timerSeconds, setTimerSeconds] = useState(0);
    const [timerTimeLeft, setTimerTimeLeft] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isRunning && timerTimeLeft > 0) {
            interval = setInterval(() => setTimerTimeLeft(prev => prev - 1), 1000);
        } else if (timerTimeLeft === 0) {
            setIsRunning(false);
        }
        return () => clearInterval(interval);
    }, [isRunning, timerTimeLeft]);

    const startTimer = () => {
        if (!isRunning) {
            const totalSeconds = timerHours * 3600 + timerMinutes * 60 + timerSeconds;
            if (timerTimeLeft === 0 && totalSeconds > 0) {
                setTimerTimeLeft(totalSeconds);
            }
            setIsRunning(true);
        }
    };

    const stopTimer = () => setIsRunning(false);
    const resetTimer = () => {
        setTimerTimeLeft(0);
        setTimerHours(0);
        setTimerMinutes(0);
        setTimerSeconds(0);
        setIsRunning(false);
    };

    const formatTime = (seconds: number) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    };

    return (
        <div className="timer">
            <div className="time-display">{formatTime(timerTimeLeft)}</div>
            <div className="controls">
                <div className="input-group">
                    <label htmlFor="hours">Hours:</label>
                    <input
                        type="number"
                        id="hours"
                        className="time-input"
                        value={timerHours}
                        onChange={(e) => setTimerHours(Math.max(0, Number(e.target.value)))}
                        placeholder="0"
                        min={0}
                        max={99}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="minutes">Minutes:</label>
                    <input
                        type="number"
                        id="minutes"
                        className="time-input"
                        value={timerMinutes}
                        onChange={(e) => setTimerMinutes(Math.max(0, Number(e.target.value)))}
                        placeholder="0"
                        min={0}
                        max={59}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="seconds">Seconds:</label>
                    <input
                        type="number"
                        id="seconds"
                        className="time-input"
                        value={timerSeconds}
                        onChange={(e) => setTimerSeconds(Math.max(0, Number(e.target.value)))}
                        placeholder="0"
                        min={0}
                        max={59}
                    />
                </div>
                <button onClick={startTimer}>Start</button>
                <button onClick={stopTimer}>Stop</button>
                <button onClick={resetTimer}>Reset</button>
            </div>
        </div>
    );
};

export default Timer;
