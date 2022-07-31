import React from "react";
import { Home } from "./Home";
import { About } from "./About";
import { Link } from "react-router-dom";


export function MyNavbar() {
        return (
            <>
                <div className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-900 mb-3">
                    <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                            <Link
                                to="/"
                                className="text-sm font-bold font-serif leading-relaxed inline-block mr-4 py-2 uppercase text-white"
                            >
                                VICIOS
                            </Link>
                        </div> 
                        <div>
                            <Link
                                to="/about"
                                className="text-sm font-bold font-serif whitespace-nowrap uppercase text-white"
                            >
                                About
                            </Link>
                        </div>  
                    </div>
                </div>
            </>
        )
    }