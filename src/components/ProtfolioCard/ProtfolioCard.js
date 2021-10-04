import React from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const ProtfolioCard = ({ data }) => {
    return (
        <div className="bg-gray-800 rounded-md text-white p-5">
            <h1 className="text-white text-2xl pb-4">{data.title}</h1>
            <p className="text-white " style={{height: '170px'}}>{data.info}</p>
            <ul className="flex gap-3 pb-4 text-gray-400 text-xl">
                <li><a href={data.github} target="_blank"><FontAwesomeIcon icon={faGithub} /></a></li>
                <li><a href={data.liveLik} target="_blank"><FontAwesomeIcon icon={faExternalLinkAlt} /></a></li>
            </ul>
            <ul className="flex gap-6">
                {data.technogoly.map(tech => <li className="text-gray-400">{tech}</li>)}
            </ul>
        </div>
    );
};

export default ProtfolioCard;