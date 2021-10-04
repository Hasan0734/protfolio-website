import React from 'react';
const OtherSkills = [
    { name: "React Native", percent: "20%" },
    { name: "SVG", percent: "20%" },
    { name: "Bootstrap", percent: "95%" },
    { name: "Material UI", percent: "65%" },
    { name: "Tailwind 75%", percent: "65%" },

]
const OtherSkill = () => {
    return (
        <React.Fragment>
            <ul className="grid  sm:grid-cols-2 grid-rows-1 gap-10">

                {OtherSkills.map(skill => <li data-aos="fade-up-right" data-aos-duration="2000" className=" bg-gray-800 rounded-md text-white">
                    <div className="p-4">
                        <h2 className="text-2xl font-semibold">{skill.name}</h2>
                        <div className="text-right">
                            <span className="text-lg bg-green-300 m-2 p-1 px-2 rounded-md font-semibold inline-block text-emerald-600">
                                {skill.percent}
                            </span>
                        </div>
                        <div className={`w-full bg-green-800 h-2 rounded-full`}>
                            <div style={{ width: `${skill.percent}` }} className="bg-green-300 h-2 rounded-full"></div>
                        </div>

                    </div>
                </li>)}
            </ul>
        </React.Fragment>
    );
};

export default OtherSkill;