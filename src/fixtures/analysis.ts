import {
    FaFile,
    FaClipboardList,
    FaUser,
    FaStore
} from "react-icons/fa";
import { IAnalysis } from "@/interfaces/analysis";

export const analysis: IAnalysis[] = [
    {
        name: "Projects",
        count: 3,
        icon: FaFile,
    },
    {
        name: "Requests",
        count: 3456,
        icon: FaClipboardList,
    },
    {
        name: "Users",
        count: 3,
        icon: FaUser,
    },
    {
        name: "Storage",
        count: "128/500 GB",
        icon: FaStore,
    }
]