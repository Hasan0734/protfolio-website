
import React from 'react';
import ProtfolioCard from '../ProtfolioCard/ProtfolioCard';
import { protfolioData } from '../ProtfolioData/ProtfolioData';

const Protfolio = () => {
 
    return (
        <section className="py-36 sm:pt-24 relative">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:pl-16">
                    {protfolioData.map((data, index) => <ProtfolioCard data ={data} key={index}></ProtfolioCard>)}
                </div>
            </div>
            <p className="text-white transform -rotate-90  text-right top-72 absolute uppercase rounded-md bg-gray-800 py-1 px-3 font-semibold text-xl tracking-wide skill hidden sm:block">Protfolio</p>
               
        </section>
    );
};

export default Protfolio;