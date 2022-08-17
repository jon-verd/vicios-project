
import React from "react"
import { MyNavbar } from "./Navbar"
import chair from './Documentation/VICIOS/sarah-dorweiler-fr0J5-GIVyg-unsplash.jpg'
import hangers from './Documentation/VICIOS/andrej-lisakov-Yy4sN6QzboU-unsplash.jpg'


export function Title() {
    return (
        <>
            <div className="m-6 font-serif leading-loose mx-auto sm:text-9xl text-6xl w-full h-full text-gray-900 font-bold hover:italic tracking-widest flex-auto">
                    VICIOS
            </div>
        </>
    )
} 
    
export function SectionOne() {
    return (
        <div className="p-3 my-6">
            <div className="container -2xl">
                <img className=" object-left-bottom scale-100 -translate-y-8 box-border md:box-content" src={hangers} alt="Empty Clothing Hangers"/>
            </div>
            <div className="container -md">
                <img className=" object-right-bottom scale-25 translate-x-8 box-border md:box-content" src={chair} alt='Chair with clothes'/>
            </div>
            
        </div>
    )
}

export function Home() {


    return (
        <>
            <div className="sm:container px-4">
                {<Title/>}
                {<SectionOne/>}
            </div>
            
        </>
    )
}
