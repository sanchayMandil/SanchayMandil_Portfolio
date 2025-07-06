import React, { useState } from 'react';
import c0 from '../assests/c0.jpg';
import c1 from '../assests/c1.jpg';
import c2 from '../assests/c2.jpg';
import c3 from '../assests/c3.jpg';

function Certificate() {
    const slides = [
        { img: c0, desc: "1st Rank in GFG Monk Coding Contest" },
        { img: c1, desc: "Successfully completed Foundation of Cloud IoT Edge ML Score 81%" },
        { img: c2, desc: "Successfully completed the Cisco Course Score: 80%" },
        { img: c3, desc: "Successfully completed the Wipro Training" },
    ];
    const [current, setCurrent] = useState(0);

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    return (
        <section className="border-t-2 border-b-2 border-white/30 my-16 py-12 bg-gray-900/20">
            {/* Heading */}
            <h2 className="text-center mb-12">
                <span className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-xl">
                    Certificates
                </span>
                <span className="text-3xl md:text-4xl text-gray-300 mx-2">&</span>
                <br />
                <span className="text-4xl md:text-5xl font-semibold text-blue-300">
                    Achievements
                </span>
            </h2>

            {/* Slider */}
            <div className="flex items-center justify-center gap-4 px-4">
                {/* Previous Button */}
                <button
                    onClick={prevSlide}
                    className="p-3 text-white bg-blue-600 rounded-full hover:bg-blue-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                    aria-label="Previous certificate"
                >
                    ←
                </button>

                {/* Slide Content */}
                <div className="relative w-full max-w-[600px] md:max-w-[800px] h-[300px] md:h-[450px] flex items-center justify-center overflow-hidden rounded-xl shadow-2xl">
                    <img
                        src={slides[current].img}
                        alt={`Certificate ${current + 1}`}
                        className="w-full h-full object-contain transition-transform duration-500 ease-in-out transform hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent text-white text-center py-4 px-6 rounded-b-xl">
                        <p className="text-sm md:text-lg font-medium">{slides[current].desc}</p>
                    </div>
                </div>

                {/* Next Button */}
                <button
                    onClick={nextSlide}
                    className="p-3 text-white bg-blue-600 rounded-full hover:bg-blue-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                    aria-label="Next certificate"
                >
                    →
                </button>
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center mt-6 space-x-3">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrent(idx)}
                        className={`w-1 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                            current === idx
                                ? 'bg-blue-500 scale-125'
                                : 'bg-gray-400 hover:bg-gray-500'
                        }`}
                        aria-label={`Go to certificate ${idx + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}

export default Certificate;