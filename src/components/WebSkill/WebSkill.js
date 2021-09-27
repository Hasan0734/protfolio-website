import React from 'react';

const webSkills = [
    { name: "HTML", percent: "90%" },
    { name: "CSS", percent: "80%" },
    { name: "Javascript Dom", percent: "70%" },
    { name: "React", percent: "75%" },
    { name: "Node Js", percent: "65%" },
    { name: "Express Js", percent: "50%" },
    { name: "MongoDB", percent: "55%" },
]
const WebSkill = () => {
    return (
        <>
            <ul className="grid grid-cols-2 gap-10">

                {webSkills.map(skill => <li className=" bg-gray-800 rounded-md text-white">
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
        </>
    );
};

export default WebSkill;