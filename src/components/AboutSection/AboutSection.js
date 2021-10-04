import React from 'react';
import aboutPic from '../../image/aboutPic.png';
import './AboutSection.css'
const AboutSection = ({ aboutSection, handleSectionView }) => {

    return (
        <section className="py-36  sm:pt-24 relative " ref={aboutSection}>
            <div className="container mx-auto px-4">
                <div className="flex flex-col sm:flex-row gap-5">
                    <div
                        data-aos="fade-up-right"
                        data-aos-delay="50"
                        data-aos-duration="3000"
                        className="p-5 cursor-pointer flex justify-center row-span-3 ">
                        <img className="rounded-md filter grayscale hover:grayscale-0" src={aboutPic} alt="...." />
                    </div>
                    <div
                        data-aos="fade-up-left"
                        data-aos-delay="50"
                        data-aos-duration="3000"
                        className="text-gray-300 pt-5  lg:pr-52 md:pr-24">
                        <p className="text-justify leading-9 p-2">Hello! I am Jahid Hasan, an interested software develop. I develop web applications. My core competencies are based on JavaScript and I love to do most of the work using JavaScript. I love making the web more open to the world. I did not graduate from CSE. My learning skills are very good and easy to understand. I tried to learn as much as possible on my own and learned from different courses. I am available for any type of job opportunity according to my interests.</p>
                        <button data-aos="fade-left" data-aos-duration="3000" className="bg-green-400 hover:bg-green-500 p-2 text-white rounded-md mr-3 mt-4 font-medium">Get Resume</button>
                        <button data-aos="fade-right" data-aos-duration="3000" onClick={() => handleSectionView('skill')} className="rounded-md ring-2 ring-green-400  p-2  mt-4 text-white hover:text-green-400 font-medium">My Skill</button>

                    </div>

                </div>
            </div>
            <p className="text-white transform rotate-90
              text-right top-1/4 absolute right-0 uppercase 
              rounded-md bg-gray-800 py-1 px-3 font-semibold 
              text-xl tracking-wide about-me hidden sm:block">About Me</p>
        </section>
    );
};

export default AboutSection;