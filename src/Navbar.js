import React from "react";
import { Home } from "./Home";
import { About } from "./About";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { ReactDOM } from "react";
import { Nav } from "react-bootstrap";



//  This bit of code was my first attempt at making a function clock,it failed for several reasons. I might still use this to edit the clock in the future (remove seconds) so I will keep it for now.
// export function CurrentTime() {   
//         let date = new Date(); 
//         let hh = date.getHours();
//         let mm = date.getMinutes();
//         let ss = date.getSeconds();
//         let session = "AM";

//         if(hh == 0){
//             hh = 12;
//         }
//         if(hh > 12){
//             hh = hh - 12;
//             session = "PM";
//         }

//         hh = (hh < 10) ? "0" + hh : hh;
//         mm = (mm < 10) ? "0" + mm : mm;
//         ss = (ss < 10) ? "0" + ss : ss;

//         let time = hh + ":" + mm + ":" + ss + " " + session;

//         document.getElementById("clock").innerText = time; 
//         // let rootTime = ReactDOM.createRoot(document.getElementById("clock"));
//         // rootTime = time

//         let t = setTimeout(function(){ CurrentTime() }, 1000);

// };

export function NavClock() {
    const [clockState, setClockState] = useState()

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setClockState(date.toLocaleTimeString());
        }, 1000);
    }, []);

    return(
        <div className="py-3 md:py-5 -md:invisible font-serif font-bold hover:italic text-xl">
            {clockState}
        </div>
    )

}

export default function MyNavbar() {
    const [navbar, setNavbar] = useState(false);



    return (
        <nav className="w-full opacity-100 shadow">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <Link to="/">
                            <h2 className="text-2xl font-serif font-bold hover:italic">VICIOS</h2>
                        </Link>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <NavClock/>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className= "font-serif font-bold hover:italic">
                                <Link to="/shop">SHOP</Link>
                            </li>
                            <li className= "font-serif font-bold hover:italic">
                                <Link to="/catalog">CATALOG</Link>
                            </li>
                            <li className= "font-serif font-bold hover:italic">
                                <Link to="/about">STUDIO</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}




// Original NavBar for reference.
// export function MyNavbar() {
//         return (
//             <>
//                 <div className="relative flex flex-wrap items-center justify-start bg-gray-900 mb-3">
//                     <div className="container mx-auto flex flex-wrap justify-end">
//                         <div className="w-full sticky flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
//                             <Link
//                                 to="/"
//                                 className="text-sm font-bold font-serif leading-relaxed inline-block m-1 uppercase text-white"
//                             >
//                                 VICIOS
//                             </Link>
//                         </div> 
//                         <div>
//                             <Link
//                                 to="/about"
//                                 className="text-sm font-bold font-serif whitespace-nowrap uppercase text-white"
//                             >
//                                 About
//                             </Link>
//                         </div>  
//                     </div>
//                 </div>
//             </>
//         )
//     }