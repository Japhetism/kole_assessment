"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { sideMenus } from "@/fixtures/sidemenus";
import { ISideMenu } from "@/interfaces/sidemenu";

const Sidebar = () => {
    
    const pathname = usePathname();

    return (
        <aside className="bg-white shadow-lg w-custom-sidebar h-custom-sidebar">
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
    );
};

export default Sidebar;
