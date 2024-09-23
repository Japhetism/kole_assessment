import { ISideMenu } from "@/interfaces/sidemenu";
import {
    FaUser,
    FaMoneyBillWave,
    FaFileInvoice,
    FaCog,
    FaQuestionCircle,
    FaSignOutAlt,
    FaHome
} from "react-icons/fa";

export const sideMenus: ISideMenu[] = [
    {
        name: "Home",
        url: "/home",
        icon: FaHome
    },
    {
        name: "Profile",
        url: "/profile",
        icon: FaUser
    },
    {
        name: "Billings",
        url: "/billings",
        icon: FaMoneyBillWave
    },
    {
        name: "Invoices",
        url: "/invoice",
        icon: FaFileInvoice
    },
    {
        name: "Settings",
        url: "/settings",
        icon: FaCog
    },
    {
        name: "Help",
        url: "/help",
        icon: FaQuestionCircle
    },
    {
        name: "Logout",
        url: "/logout",
        icon: FaSignOutAlt
    },
];