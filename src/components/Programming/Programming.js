import React from 'react';
const programmingSkill = [
    { name: "JavaScript", percent: "60%" },
    { name: "Python", percent: "30%" },
]
const Programming = () => {
    return (
        <>
        <ul className="grid grid-cols-2 gap-10">

            {programmingSkill.map(skill => <li className=" bg-gray-800 rounded-md text-white">
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

export default Programming;