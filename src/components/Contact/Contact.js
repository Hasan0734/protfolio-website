import React from 'react';

const Contact = () => {
    return (
        <section className="py-36  sm:pt-24 relative ">
            <div className="container mx-auto px-4">
                <div className="flex sm:flex-row flex-col gap-2">
                    <div className="text-white pr-0 sm:pr-12 w-auto sm:w-2/4">
                        <p className="text-lg">I am interested in working with any company that thinks my skill will be helpful for them. If you are looking for someone like me, please let me know. Or you can just 'say hi' to me.</p>
                        <button
                         className="bg-green-400 hover:bg-green-500 p-2 text-white rounded-md mr-3 mt-10 font-medium">Contact Me</button>
                    </div>
                    <div className="sm:mt-0 mt-10 sm:border-0 border-t sm:pt-0 pt-5">
                        <ul className="text-white">
                            <li className="mb-4">
                                <h3 className="text-3xl font-bold">Email</h3>
                                <p className="text-lg text-gray-300">jahid0734@gmail.com <span className="text-gray-400">(Recommended)</span></p>
                            </li>
                            <li className="mb-4">
                                <h3 className="text-3xl font-bold">Social</h3>
                                <p className="text-lg text-gray-300">Facebook/Twitter-@jahid0734 <span className="text-gray-400">(Slow Response)</span></p>
                            </li>
                            <li className="mb-4">
                                <h3 className="text-3xl font-bold">Phone</h3>
                                <p className="text-lg text-gray-300">+8801743782856 <span className="text-gray-400">(Recommended)</span></p>
                            </li>
                            <li className="mb-4">
                                <h3 className="text-3xl font-bold">Address</h3>
                                <p className="text-lg text-gray-300">Chandpur, Fulbaria, Mymensingh, Bangladesh-2216</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <p className=" hidden sm:block text-white transform rotate-90  text-right top-1/4  absolute right-0 uppercase
               
               rounded-md bg-gray-800 py-1 px-3 font-semibold text-xl tracking-wide about-me">Contact</p>
        </section>
    );
};

export default Contact