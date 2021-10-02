import React from 'react';
const tools = [
    { name: "Git", percent: "70%" },
    { name: "Photoshop", percent: "75%" },
    { name: "Illustrator", percent: "55%" },
    { name: "Figma", percent: "55%" },
    { name: "XD", percent: "55%" },
    { name: "MS Word", percent: "75%" },
    { name: "MS Excel", percent: "55%" },
    { name: "Powerpoint", percent: "25%" },
]
const Tools = () => {
    return (
        <>
        <ul className="grid  sm:grid-cols-2 grid-rows-1 gap-10">

            {tools.map(skill => <li data-aos="fade-up-right" data-aos-duration="2000" className=" bg-gray-800 rounded-md text-white">
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

export default Tools;