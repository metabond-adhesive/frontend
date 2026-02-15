import React, { useEffect, useState, useRef } from 'react';
import { statsData } from '../../data/homeData';
import './Home.css';

const CountUp = ({ end, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let start = 0;
        const endValue = parseInt(end.replace(/\D/g, ''));
        const suffix = end.replace(/[0-9]/g, '');
        const increment = endValue / (duration / 16);

        const timer = setInterval(() => {
            start += increment;
            if (start >= endValue) {
                setCount(endValue);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [end, duration, isVisible]);

    return (
        <span ref={countRef}>
            {count}{end.replace(/[0-9]/g, '')}
        </span>
    );
};

function StatsSection() {
    return (
        <section className="stats-section">
            <div className="container">
                <div className="stats-grid">
                    {statsData.map((stat) => (
                        <div key={stat.id} className="stat-card">
                            <div className="stat-icon">{stat.icon}</div>
                            <h3>
                                <CountUp end={stat.value} />
                            </h3>
                            <p>{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default StatsSection;
