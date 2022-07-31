
import React from "react"
import { MyNavbar } from "./Navbar"




export function Home() {

    const Title = <div className="m-6 font-serif leading-loose mx-auto sm:text-9xl text-6xl w-full h-full text-gray-900 font-bold hover:italic tracking-widest flex-auto">VICIOS</div>

    return (
        <>
            <div className="sm:container px-4">
                {< MyNavbar />}
            </div>
            <div className="sm:container px-4">
                {Title}
            </div>
            
        </>
    )
}
