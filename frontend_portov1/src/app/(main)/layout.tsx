"use client"

import FloatingNavDemo from "@/components/navbar/navbar";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { FolderCheck, FolderCode, FolderKanban, Hammer, Home, LucideCircleChevronLeft, Mail, PenToolIcon, PersonStandingIcon, ToolCase, User, Wrench } from "lucide-react";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    const navItems = [
        { name: "Home", url: "/home", icon: Home },
        { name: "About", url: "/home", icon: User },
        { name: "Skills", url: "/home", icon: Hammer },
        { name: "Projects", url: "/home", icon: FolderCode },
        { name: "Contact", url: "/home", icon: Mail },
    ]

    return (
        <>
            <NavBar items={navItems}></NavBar>
            <main>{children}</main>
        </>
    );
}
