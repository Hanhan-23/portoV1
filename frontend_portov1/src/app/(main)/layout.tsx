"use client"

import FloatingNavDemo from "@/components/navbar/navbar";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { motion } from "motion/react";
import { LampContainer } from "../../components/ui/lamp";
import { FolderCode, Hammer, Home, Mail, User} from "lucide-react";

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
