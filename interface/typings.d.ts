/*Global Components*/

import { ReactNode } from "react";

// Pop-up dialog
export interface DialogPopUpSingle {
    header: string;
    content: string;
    openStatus: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    handleOpen: React.MouseEventHandler<HTMLButtonElement>;
    submitHandler: React.Dispatch<React.SetStateAction<boolean>>;
}

/*Login Section*/

// Credentials variables
export interface AuthComponent {
    username: string;
    password: string;
    openStatus: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    handleOpen: React.MouseEventHandler<HTMLButtonElement>;
    submitHandler: React.Dispatch<React.SetStateAction<boolean>>;
}

/*Dashboard Section*/

// Topbar
export interface TopbarProp {
    sidebarOpen: string | boolean | undefined;
    setSidebarOpen: (arg0: boolean) => void;
}

// Sidebar
export interface SidebarProp {
    sidebarOpen: boolean;
    setSidebarOpen: (arg: boolean) => void;
}

export interface SidebarLinkGroup {
    children: (handleClick: () => void, open: boolean) => ReactNode;
    activeCondition: boolean;
}
