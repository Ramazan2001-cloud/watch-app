import React, { useEffect, useState } from 'react';
import './Clock.css';

const Clock: React.FC = () => {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            setSeconds(now.getSeconds());
            setMinutes(now.getMinutes());
            setHours(now.getHours());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const hourAngle = (hours % 12) * 30 + minutes * 0.5;
    const minuteAngle = minutes * 6;
    const secondAngle = seconds * 6;

    return (
        <div className="clock">
            {[...Array(12)].map((_, index) => {
                const angle = (index + 1) * 30;
                const x = 80 * Math.sin((angle * Math.PI) / 180);
                const y = -80 * Math.cos((angle * Math.PI) / 180);
                return (
                    <div 
                        key={index} 
                        className="number" 
                        style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
                    >
                        {index + 1}
                    </div>
                );
            })}
            <div className="hand hour-hand" style={{ transform: `rotate(${hourAngle}deg)` }} />
            <div className="hand minute-hand" style={{ transform: `rotate(${minuteAngle}deg)` }} />
            <div className="hand second-hand" style={{ transform: `rotate(${secondAngle}deg)` }} />
            <div className="center" />
        </div>
    );
};

export default Clock;
