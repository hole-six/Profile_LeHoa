import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaSatellite } from 'react-icons/fa';

const CinematicBackground = () => {
    // Random stars generation
    const stars = Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        duration: Math.random() * 3 + 2
    }));

    // Define electric paths (SVG coordinates percentages)
    const electricPaths = [
        // Branch 1: Top Left to Center
        "M0,10 Q30,5 50,30 T80,50",
        // Branch 2: Bottom Right to Center
        "M100,90 Q70,95 50,70 T20,50",
        // Branch 3: Random jagged
        "M10,100 L30,80 L20,60 L60,40 L80,20",
    ];

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {/* 1. Twinkling Deep Space */}
            {stars.map((star) => (
                <motion.div
                    key={star.id}
                    className="absolute rounded-full bg-white shadow-[0_0_5px_white]"
                    style={{
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        width: star.size,
                        height: star.size,
                    }}
                    animate={{
                        opacity: [0.2, 1, 0.2],
                        scale: [1, 1.5, 1],
                    }}
                    transition={{
                        duration: star.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}

            {/* 2. Flying Drones / Satellites */}
            <motion.div
                className="absolute text-cyan-400 opacity-60 text-2xl filter drop-shadow-[0_0_10px_cyan]"
                initial={{ x: -100, y: 100, rotate: 0 }}
                animate={{
                    x: ['0vw', '100vw'],
                    y: ['20vh', '60vh', '20vh'],
                    rotate: [0, 360],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
            >
                <FaSatellite />
            </motion.div>

            <motion.div
                className="absolute text-purple-400 opacity-60 text-xl filter drop-shadow-[0_0_10px_purple]"
                initial={{ x: '100vw', y: '80vh' }}
                animate={{
                    x: ['100vw', '-10vw'],
                    y: ['80vh', '10vh'],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 2
                }}
            >
                <FaRocket className="transform rotate-[-45deg]" />
            </motion.div>

            {/* 3. Electric Trees & Crawlers */}
            <svg className="absolute inset-0 w-full h-full opacity-30">
                <defs>
                    <linearGradient id="electricGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(6, 182, 212, 0)" />
                        <stop offset="50%" stopColor="rgba(6, 182, 212, 0.8)" />
                        <stop offset="100%" stopColor="rgba(6, 182, 212, 0)" />
                    </linearGradient>
                </defs>

                {electricPaths.map((path, i) => (
                    <g key={i}>
                        {/* The Glowing Branch */}
                        <motion.path
                            d={path}
                            stroke="url(#electricGradient)"
                            strokeWidth="2"
                            fill="none"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{
                                pathLength: [0, 1, 1, 0],
                                opacity: [0, 1, 1, 0]
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i * 2,
                                repeatDelay: 1
                            }}
                            style={{ filter: "drop-shadow(0 0 5px cyan)" }}
                        />

                        {/* The Crawler (Robot Bug) */}
                        {/* Note: animating along path in SVG directly with Framer Motion is tricky without motion path plugin. 
                Using CSS animateMotion for smooth path following is cleaner here. */}
                        <circle r="0" fill="white">
                            <animateMotion
                                dur={`${6 + i}s`}
                                repeatCount="indefinite"
                                path={path}
                                rotate="auto"
                            >
                                <mpath href={`#path-${i}`} />
                            </animateMotion>
                        </circle>

                        {/* Hidden path for reference if needed, but we used direct path in animateMotion */}
                        <path id={`path-${i}`} d={path} fill="none" stroke="none" />

                        {/* Visible crawler dot */}
                        <circle r="3" fill="#fff" filter="drop-shadow(0 0 8px cyan)">
                            <animateMotion
                                dur={`${4 + i * 2}s`}
                                repeatCount="indefinite"
                                path={path}
                            />
                        </circle>
                    </g>
                ))}
            </svg>
        </div>
    );
};

export default CinematicBackground;
