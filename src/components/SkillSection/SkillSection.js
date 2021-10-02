import React, { useState } from 'react';
import OtherSkill from '../OtherSkill/OtherSkill';
import Programming from '../Programming/Programming';
import Tools from '../Tools/Tools';
import WebSkill from '../WebSkill/WebSkill';
import './SkillSection.css'
const SkillSection = ({ skillSection }) => {
    const [web, setWeb] = useState(true);
    const [others, setOthers] = useState(false);
    const [programming, setProgramming] = useState(false);
    const [tools, setTools] = useState(false);


    const handleSkill = (e) => {
        const name = e.target.innerText;
        const lowerCase = name.toLowerCase();
        if (lowerCase === "web") {
            setWeb(true);
            setOthers(false);
            setProgramming(false);
            setTools(false);
        } else if (lowerCase === 'others') {
            setWeb(false);
            setOthers(true);
            setProgramming(false);
            setTools(false);
        } else if (lowerCase === 'programming') {
            setWeb(false);
            setOthers(false);
            setProgramming(true);
            setTools(false);
        } else if (lowerCase === 'tools') {
            setWeb(false);
            setOthers(false);
            setProgramming(false);
            setTools(true);
        }


    }
    return (
        <section className="py-36 sm:pt-24 relative" ref={skillSection}>
<<<<<<< HEAD
            <div className="container mx-auto px-4">
                <div className="pl-16">
                    <ul className="flex flex-wrap">
                        <li className="m-2">
                            <button onClick={handleSkill}
                                className={`${web && 'bg-green-300'} font-semibold ring-2 ring-green-300 text-white py-1 px-4 rounded-sm `}
                            >Web</button>
                        </li>
                        <li className="m-2">
                            <button
                                onClick={handleSkill}
                                className={`${others && 'bg-green-300'} font-semibold ring-2 ring-green-300 text-white py-1 px-4 rounded-sm `}
                            >Others</button>
                        </li>
                        <li className="m-2">
                            <button
                                onClick={handleSkill}
                                className={`${programming && 'bg-green-300'} font-semibold ring-2 ring-green-300 text-white py-1 px-4 rounded-sm `}
                            >Programming</button>
                        </li>
                        <li className="m-2">
                            <button
                                onClick={handleSkill}
                                className={`${tools && 'bg-green-300'} font-semibold ring-2 ring-green-300 text-white py-1 px-4 rounded-sm `}
=======
            <div className="container mx-auto px-2">
                <div className="pl-16">
                    <ul className="flex ">
                        <li>
                            <button onClick={handleSkill}
                                className={`${web && 'bg-green-300'} font-semibold ring-2 ring-green-300 text-white py-1 px-4 rounded-sm mx-2`}
                            >Web</button>
                        </li>
                        <li>
                            <button
                                onClick={handleSkill}
                                className={`${others && 'bg-green-300'} font-semibold ring-2 ring-green-300 text-white py-1 px-4 rounded-sm mx-2`}
                            >Others</button>
                        </li>
                        <li>
                            <button
                                onClick={handleSkill}
                                className={`${programming && 'bg-green-300'} font-semibold ring-2 ring-green-300 text-white py-1 px-4 rounded-sm mx-2`}
                            >Programming</button>
                        </li>
                        <li>
                            <button
                                onClick={handleSkill}
                                className={`${tools && 'bg-green-300'} font-semibold ring-2 ring-green-300 text-white py-1 px-4 rounded-sm mx-2`}
>>>>>>> f2026866599ecb1e11b6d3fe18a464237334c1e6
                            >Tools</button>
                        </li>
                    </ul>
                </div>
                <div className=" mt-4 pl-16 ml-2 py-16 pr-16">
                    {web && <WebSkill></WebSkill>}
                    {others && <OtherSkill></OtherSkill>}
                    {programming && <Programming></Programming>}
                    {tools && <Tools></Tools>}
                </div>
            </div>
<<<<<<< HEAD
            <p className="text-white transform 
             -rotate-90  text-right top-72 absolute 
              uppercase rounded-md bg-gray-800 py-1 px-3 font-semibold
               text-xl tracking-wide skill hidden sm:block">My Skill</p>
=======
            <p
                className="text-white transform 
             -rotate-90  text-right top-72 absolute 
              uppercase rounded-md bg-gray-800 py-1 px-3 font-semibold
               text-xl tracking-wide skill">My Skill</p>
>>>>>>> f2026866599ecb1e11b6d3fe18a464237334c1e6

        </section>
    );
};

export default SkillSection;