import React from 'react';
import bloggin from '../../image/icon/bloging.svg';
import traveling from '../../image/icon/traveling.svg';
import hiking from '../..//image/icon/hiking.svg';
import swimming from '../../image/icon/swiming.svg'
const interesting = [
    { icon: bloggin, title: 'Bloggin' },
    { icon: traveling, title: 'Traveling' },
    { icon: hiking, title: 'Mountian Hiking' },
    { icon: swimming, title: 'Swimming' },
]
const InterestSection = () => {
    return (
        <section className="py-36  sm:pt-24 relative ">
            <div className="container mx-auto px-4">
                <div className="flex flex-col sm:flex-row gap-8 pr-0 sm:pr-24 justify-center sm:justify-start">
                    {interesting.map((interest, index) => (<div 
                    data-aos-duration="3000"
                    data-aos={index === 0 ? 'fade-up-right' : index === 1 ? 'fade-down-left': index === 2 ? 'fade-up-right' : index === 3 && 'fade-down-left' }
                     className="py-11 px-6 bg-gray-800 rounded">

                        <img className="w-2/6 mx-auto" src={interest.icon} alt="..." />
                        <h3 className="text-white text-center text-2xl font-bold pt-2">{interest.title}</h3>
                    </div>
                    ))}
                </div>
            </div>
            <p
                className="
                hidden sm:block
            text-white transform rotate-90  
            text-right top-1/4 
            absolute right-0 uppercase
             rounded-md bg-gray-800 py-1 px-3
              font-semibold text-xl tracking-wide
               about-me">Love To Do</p>

        </section>
    );
};

export default InterestSection;