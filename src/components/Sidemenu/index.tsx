"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { sideMenus } from "@/fixtures/sidemenus";
import { ISideMenu } from "@/interfaces/sidemenu";

const Sidebar = () => {
    const pathname = usePathname();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };

    return (
        <>
            <button 
                onClick={toggleSidebar} 
                className="md:hidden text-black-300 fixed left-3 z-50">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>

            <aside 
                className={`bg-white shadow-lg w-custom-sidebar transition-transform duration-300 fixed inset-y-0 left-0 z-40 md:relative md:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <div className="flex items-center p-6">
                    <img 
                        src="/images/logo.png" 
                        alt="Logo" 
                        className="h-8 w-8 mr-2" 
                    />
                    <h1 className="font-averta text-[16.89px] leading-[19.8px] tracking-[-0.02em] text-custom-purple text-center">
                        Nucleus
                    </h1>
                </div>
                <ul className="mt-4 space-y-2 p-4">
                    {sideMenus.map((menu: ISideMenu) => {
                        const Icon = menu.icon;
                        const isActive = pathname === menu.url;
                        return (
                            <li key={menu.name}>
                                <a 
                                    href={menu.url} 
                                    className={`flex items-center p-4 ${isActive ? 'text-custom-purple bg-[#F3F0FF]' : 'text-[#D0D2DA]'} hover:bg-[#F3F0FF] hover:text-custom-purple hover:rounded-full ${isActive ? 'rounded-full' : '' }`}
                                >
                                    {Icon && <Icon className="text-lg" />}
                                    <span className="ml-3">{menu.name}</span>
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </aside>

            {isSidebarOpen && (
                <div 
                    className="fixed inset-0 bg-black opacity-50 z-30 md:hidden" 
                    onClick={toggleSidebar}
                />
            )}
        </>
    );
};

export default Sidebar;
