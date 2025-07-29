"use client"

import React from "react";
import { HoverBorderGradient } from "../../../components/ui/hover-border-gradient";

export default function Home() {
    return (
        <>
            <div className="bg-black min-h-screen place-content-center place-items-center px-5 text-center text-white flex flex-col gap-2">
                <div className="text-2xl font-medium">Engineering My Path in Software and AI</div>
                <div className="font-light px-10">Hi, I'm Farhan Ramadhan
                    Software Engineer & AI Engineer</div>
                <div className="flex gap-2 pt-3">
                    <HoverBorderGradient className="font-light">See More</HoverBorderGradient>
                    <HoverBorderGradient className="font-light">Connect With Me</HoverBorderGradient>
                </div>
            </div>
        </>
    );
}