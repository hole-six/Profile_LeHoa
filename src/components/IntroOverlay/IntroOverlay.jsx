import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSpider } from 'react-icons/fa';

const IntroOverlay = ({ onComplete }) => {
    const [step, setStep] = useState('start'); // start, drop, text, thunder, exit

    useEffect(() => {
        // Timeline orchestration
        const timeline = [
            { time: 500, action: () => setStep('drop') },     // 0.5s: Spider drops
            { time: 2000, action: () => setStep('text') },    // 2.0s: Text appears
            { time: 3500, action: () => setStep('thunder') }, // 3.5s: Thunder strikes
            { time: 4500, action: () => setStep('exit') },    // 4.5s: Spider leaves
            { time: 5500, action: () => onComplete() }        // 5.5s: Finish
        ];

        const timers = timeline.map(item => setTimeout(item.action, item.time));
        return () => timers.forEach(clearTimeout);
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
        >
            {/* Thunder Flash Overlay */}
            <AnimatePresence>
                {step === 'thunder' && (
                    <motion.div
                        className="absolute inset-0 bg-white"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 0.8, 0, 0.4, 0] }}
                        transition={{ duration: 0.3 }}
                    />
                )}
            </AnimatePresence>

            {/* Rain Effect (CSS) */}
            <div className="absolute inset-0 rain-container opacity-20 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="rain-drop"
                        style={{
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 2}s`,
                            animationDuration: `${0.5 + Math.random()}s`
                        }}
                    />
                ))}
            </div>

            {/* The Thread */}
            <motion.div
                className="absolute top-0 w-0.5 bg-gradient-to-b from-gray-800 to-cyan-500"
                style={{ left: '50%', height: '50%' }}
                initial={{ height: 0 }}
                animate={{
                    height: step === 'start' ? 0 : (step === 'exit' ? 0 : '45%')
                }}
                transition={{
                    type: "spring",
                    stiffness: 50,
                    damping: 10,
                    duration: step === 'exit' ? 0.5 : 2
                }}
            />

            {/* The Cyber Spider */}
            <motion.div
                className="absolute left-1/2 -translate-x-1/2"
                initial={{ top: '-10%' }}
                animate={{
                    top: step === 'start' ? '-10%' : (step === 'exit' ? '-20%' : '45%')
                }}
                transition={{
                    type: "spring",
                    stiffness: 50,
                    damping: 10,
                    duration: step === 'exit' ? 0.5 : 2
                }}
            >
                <div className="relative">
                    {/* Glowing Body */}
                    <div className="relative z-10 text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]">
                        <FaSpider size={80} />
                    </div>
                    {/* Red Eyes */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex justify-center items-center gap-2 z-20 pt-2">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                    </div>
                </div>
            </motion.div>

            {/* Glitch Text */}
            <AnimatePresence>
                {(step === 'text' || step === 'thunder') && (
                    <motion.div
                        className="absolute top-[60%] left-1/2 -translate-x-1/2 text-center"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 2, filter: 'blur(10px)' }}
                    >
                        <h1 className="text-6xl md:text-8xl font-black text-white glitch-text" data-text="HOLE_SIX">
                            HOLE_SIX
                        </h1>
                        <motion.p
                            className="text-cyan-400 mt-4 text-xl tracking-[0.5em] font-mono"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            FULLSTACK DEVELOPER
                        </motion.p>
                    </motion.div>
                )}
            </AnimatePresence>

        </motion.div>
    );
};

export default IntroOverlay;
