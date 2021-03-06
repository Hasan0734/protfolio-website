import React, { useRef } from 'react';
import AboutSection from '../AboutSection/AboutSection';
import Protfolio from '../Protfolio/Protfolio';

import Contact from '../Contact/Contact';
import Navbar from '../Navbar/Navbar';
import ProfileSection from '../ProfileSection/ProfileSection';
import SkillSection from '../SkillSection/SkillSection';
import InterestSection from '../InterestSection/InterestSection'

const Home = () => {
    const aboutSection = useRef(null);
    const skillSection = useRef(null);

    const handleSectionView = (section) => {
       if (section === 'about') {
        aboutSection.current.scrollIntoView(true)
       }else if (section === 'skill') {
           skillSection.current.scrollIntoView(true)
       }

    }
    return (
        <div >
            <Navbar handleSectionView={handleSectionView}></Navbar>
            <ProfileSection handleSectionView={handleSectionView}></ProfileSection>
            <AboutSection aboutSection={aboutSection} handleSectionView={handleSectionView}></AboutSection>
            <SkillSection skillSection={skillSection}></SkillSection>
            <InterestSection></InterestSection>
            <Protfolio></Protfolio>
            <Contact></Contact>
        </div>
    );
};

export default Home;