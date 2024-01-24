import React, { useState } from 'react';
import { useMotionValue, useTransform } from 'framer-motion';
import { motion } from 'framer-motion';

const Card = () => {
    const [cardTitle, setCardTitle] = useState('Fashion Stylish');
    const [cardSubTitle, setCardSubTitle] = useState('Your order made our day. We hope that makes yours! Your support means the world. We would love it if you shared a snap on social media. Please tag us.');
    const [buttonText, setButtonText] = useState('Order Now');
    const [price, setPrice] = useState('$135.00');

    // Move these hook calls inside the functional component
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [30, -30]);
    const rotateY = useTransform(x, [100, -100], [30, -30]);
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    return (
        <div style={{ perspective: 2000 }}>
            <motion.div
                style={{ x, y, rotateX, rotateY, z: 100 }}
                drag
                dragElastic={0.18}
                dragConstraints={{
                    top: -windowHeight + 100,
                    left: -windowWidth + 100,
                    right: windowWidth - 100,
                    bottom: windowHeight - 100,
                }}
                whileTap={{ cursor: 'grabbing' }}
                className='w-[426px] min-h-[600px] bg-[#e3e2df] rounded-[30px] border-[4px] border-white px-[40px] py-[25px] cursor-grab relative'
            >
                {/* Card Logo */}
                <div className='mb-6'></div>
                {/* Card Title */}
                <h1 className='text-5xl mb-6 font-extrabold'>{cardTitle}</h1>
                {/* Card Sub Title */}
                <p className='max-w-[300px] text-[#000] mb-6'>{cardSubTitle}</p>
                {/* Button & Price Wrapper */}
                <div className='flex items-center gap-x-[20px] mb-12'>
                    <button className='bg-[#617453] text-white text-base font-medium py-[16px] px-[40px] rounded-lg'>
                        {buttonText}
                    </button>
                    <div className='text-[24px] font-bold text-[#000] '>{price}</div>
                </div>
            </motion.div>
        </div>
    );
};

export default Card;
