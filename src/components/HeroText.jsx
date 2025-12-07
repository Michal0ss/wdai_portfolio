import FlipWords from './FlipWords.jsx';
import {motion } from 'motion/react';


const HeroText = () => {
    const wordsmobile = ["expectations", "plans"];
    const wordsdestop = ["Ambitious", "Innovative", "Creative"];
    const variants = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
            {/* Desktop View */}
            <div className="flex-col hidden md:flex c-space">
                <motion.h1 
                    className="text-4xl font-medium"
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    transition={{delay:1}}
                >
                    Hi im Michał</motion.h1>
                <div className="flex flex-col items-start">
                    <motion.p 
                    className="text-5xl font-medium text-neutral-300"
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                        transition={{delay:1.2}}
                    >
                        A Developer, Student <br /> With a Passion for Technology
                    </motion.p>
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                        transition={{delay:1.3}}>
                        <FlipWords words={wordsdestop}
                        className="font-black text-white text-7xl"/>
                    </motion.div>
                    <motion.p 
                        className="text-4xl font-medium text-neutral-300"
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                        transition={{delay:1.4}}>
                        Welcome to my portfolio!
                    </motion.p>
                </div>
            </div>

            {/* Mobile View */}
            <div className='flex flex-col space-y-6 md:hidden'>
                <motion.p className='text-4xl font-medium'
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    transition={{delay:1}}
                > Hi im Michał</motion.p>
                <div>
                    <motion.p className='text-5xl font-black text-neutral-400'
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                        transition={{delay:1.3}}
                    > Building</motion.p>
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                        transition={{delay:1.4}}>
                        <FlipWords words={wordsmobile} className="font-black text-white text-4xl" />
                    </motion.div>
                    <motion.p className='text-2xl font-black text-neutral-300'
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                        transition={{delay:1.5}}>
                        WebApps & Mobile Apps
                    </motion.p>
                </div>
            </div>
        </div>
    );
};
export default HeroText