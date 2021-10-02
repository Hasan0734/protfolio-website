import React, { useRef } from 'react';
import AboutSection from '../AboutSection/AboutSection';
import Contact from '../Contact/Contact';
import InterestSection from '../InterestSection/InterestSection';
import Navbar from '../Navbar/Navbar';
import ProfileSection from '../ProfileSection/ProfileSection';
import Protfolio from '../Protfolio/Protfolio';
import SkillSection from '../SkillSection/SkillSection';

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