import { faFacebookF, faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ProfileSection.css'
import profilePic from '../../image/profile-pic.png'
import { Link } from 'react-router-dom';
const ProfileSection = ({ handleSectionView }) => {

    return (
        <section className="lg:h-full">
            <div className="flex">
                <div className="hidden sm:block md:hidden lg:block">
                    <div className="text-gray-300 flex lg:flex-col gap-2">
                        <ul className="w-auto lg:ml-16 lg:mt-28 flex lg:flex-col gap-4">
                            <li><a className="hover:bg-gray-700 rounded-md  p-2 mt-2" href="#github"><FontAwesomeIcon icon={faGithub} /></a></li>
                            <li><a className="hover:bg-gray-700 rounded-md  p-2 mt-2 pr-2.5" href="#github"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                            <li><a className="hover:bg-gray-700 rounded-md  p-2 mt-2 pr-3.5" href="#github"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                            <li><a className="hover:bg-gray-700 rounded-md  p-2 mt-2" href="#github"><FontAwesomeIcon icon={faTwitter} /></a></li>
                        </ul>
<<<<<<< HEAD

                        <p className="text-white transform 
=======
                        {/* <p className="uppercase rounded-md lg:transform 
                        bg-gray-700 px-3 lg:-rotate-90 follow-me lg:mt-28 
                        font-semibold text-xl tracking-wide" >Follow Me</p> */}
                        <p  className="text-white transform 
>>>>>>> f2026866599ecb1e11b6d3fe18a464237334c1e6
                      -rotate-90  text-right  mt-28 
                         uppercase rounded-md bg-gray-800 py-1 px-3 font-semibold
                         text-xl tracking-wide skill">Follow Me</p>
                    </div>
                </div>
<<<<<<< HEAD
                <div className="container mx-auto px-4 md:mt-16 lg:mt-48">
=======
                <div className="container mx-auto px-2 md:mt-16 lg:mt-48">
>>>>>>> f2026866599ecb1e11b6d3fe18a464237334c1e6
                    <div className="flex flex-col-reverse sm:flex-row">
                        <div className="font-sans">
                            <p className="text-green-400 text-3xl filter brightness-125">Hello! I am</p>
                            <h1 className="text-white text-8xl font-bold antialiased filter brightness-125 ">Jahid Hasan</h1>
                            <h3 className="text-green-400 text-3xl font-bold filter brightness-125 mt-8">Front End Web Developer</h3>
                            <ul className="text-white filter brightness-125 flex expert-list divide-x divide-green-500 mb-4 sm:text-base text-sm">
                                <li className="mr-3">Web Developer</li>
                                <li className="mr-3 px-3">Programmer</li>
                                <li className="mr-3 px-3">Cyber Security Expert</li>
                            </ul>
                            <button data-aos="fade-left" data-aos-duration="3000"
<<<<<<< HEAD

                                className="bg-green-400 hover:bg-green-500 p-2 text-white rounded-md mr-3 mt-4 font-medium">Get Resume</button>
                            <button data-aos="fade-right" data-aos-duration="3000"
                                onClick={() => handleSectionView('about')} className="rounded-md ring-2 ring-green-400 p-2 mt-4 text-white hover:text-green-400 font-medium">About Me</button>
                        </div>
                        <div className="flex justify-center sm:justify-end md:justify-center my-6 sm:mt-0">
=======
                            
                            className="bg-green-400 hover:bg-green-500 p-2 text-white rounded-md mr-3 mt-4 font-medium">Get Resume</button>
                            <button data-aos="fade-right" data-aos-duration="3000" 
                            onClick={() => handleSectionView('about')} className="rounded-md ring-2 ring-green-400 p-2 mt-4 text-white hover:text-green-400 font-medium">About Me</button>
                        </div>
                        <div className="flex justify-center sm:justify-end md:justify-center mt-5 sm:mt-0">
>>>>>>> f2026866599ecb1e11b6d3fe18a464237334c1e6
                            <img data-aos="fade-up-left" data-aos-duration="3000" className="w-9/12 object-contain" src={profilePic} alt="..." />
                        </div>
                    </div>
                </div>
            </div>
            <svg className="mt-0 sm:-mt-32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00cba9" fill-opacity="1" d="M0,64L40,74.7C80,85,160,107,240,144C320,181,400,235,480,250.7C560,267,640,245,720,229.3C800,213,880,203,960,181.3C1040,160,1120,128,1200,144C1280,160,1360,224,1400,256L1440,288L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
        </section>
    );
};

export default ProfileSection;