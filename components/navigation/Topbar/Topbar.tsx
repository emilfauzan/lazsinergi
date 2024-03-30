"use client"
import React from 'react'
import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
    List,
    ListItem,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import LocalHospitalRoundedIcon from '@mui/icons-material/LocalHospitalRounded';
import Diversity2RoundedIcon from '@mui/icons-material/Diversity2Rounded';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import MosqueRoundedIcon from '@mui/icons-material/MosqueRounded';
import TextSnippetRoundedIcon from '@mui/icons-material/TextSnippetRounded';
import PaymentsRoundedIcon from '@mui/icons-material/PaymentsRounded';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import LAZSlogoname from "@/public/images/companyLogo/LAZSlogoname.png";

type GenerateHrefFunction = (programType: string) => string;
type GenerateHref2Function = (layananType: string) => string;
interface NavListMenuProps {
    generateHref: GenerateHrefFunction;
}
interface NavListMenu2Props {
    generateHref2: GenerateHref2Function;
}

const generateHref: GenerateHrefFunction = (programType) => {
    return `/program/${programType}`;
};
const generateHref2: GenerateHref2Function = (layananType) => {
    return `/layanan/${layananType}`;
};

const navListMenuItems = [
    {
        title: "Pendidikan",
        description: "Find the perfect solution for your needs.",
        icon: SchoolRoundedIcon,
        href: "pendidikan"
    },
    {
        title: "Kesehatan",
        description: "Meet and learn about our dedication",
        icon: LocalHospitalRoundedIcon,
        href: "kesehatan"
    },
    {
        title: "Kemanusiaan",
        description: "Find the perfect solution for your needs.",
        icon: Diversity2RoundedIcon,
        href: "kemanusiaan"
    },
    {
        title: "Ekonomi",
        description: "Learn how we can help you achieve your goals.",
        icon: TrendingUpRoundedIcon,
        href: "ekonomi"
    },
    {
        title: "Dakwah",
        description: "Reach out to us for assistance or inquiries",
        icon: MosqueRoundedIcon,
        href: "dakwah"
    },
];

const navListMenuItems2 = [
    {
        title: "Laporan Keuangan",
        description: "Find the perfect solution for your needs.",
        icon: TextSnippetRoundedIcon,
        href: "laporan"
    },
    {
        title: "Rekening Lengkap",
        description: "Meet and learn about our dedication",
        icon: PaymentsRoundedIcon,
        href: "rekening"
    },
];

const NavListMenu: React.FC<NavListMenuProps> = ({ generateHref }) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    const renderItems = navListMenuItems.map(
        ({ icon, title, description, href }, key) => (
            <Link href={generateHref(href)} key={key} >
                <MenuItem className="flex items-center gap-3 rounded-lg" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
                        {" "}
                        {React.createElement(icon, {
                            strokeWidth: 2,
                            className: "h-6 text-gray-900 w-6",
                        })}
                    </div>
                    <div>
                        <Typography
                            variant="h6"
                            color="blue-gray"
                            className="flex items-center text-sm font-bold" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                        >
                            {title}
                        </Typography>
                        <Typography
                            variant="paragraph"
                            className="text-xs !font-medium text-blue-gray-500" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                        >
                            {description}
                        </Typography>
                    </div>
                </MenuItem>
            </Link >
        ),
    );

    return (
        <React.Fragment >
            <Menu
                open={isMenuOpen}
                handler={setIsMenuOpen}
                offset={{ mainAxis: 20 }}
                placement="bottom"
                allowHover={true}
            >
                <MenuHandler>
                    <Typography as="div" variant="small" className="font-medium" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        <ListItem
                            className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
                            selected={isMenuOpen || isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen((cur) => !cur)} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                        >
                            Program
                            <KeyboardArrowDownRoundedIcon
                                strokeWidth={2.5}
                                className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                            <KeyboardArrowDownRoundedIcon
                                strokeWidth={2.5}
                                className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </ListItem>
                    </Typography>
                </MenuHandler>
                <MenuList className="hidden max-w-screen-xl rounded-xl lg:block" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <ul className="grid grid-cols-1 gap-y-2 outline-none outline-0">
                        {renderItems}
                    </ul>
                </MenuList>
            </Menu>
            <div className="block lg:hidden">
                <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
            </div>
        </React.Fragment>
    )
}

const NavListMenu2: React.FC<NavListMenu2Props> = ({ generateHref2 }) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const renderItems = navListMenuItems2.map(
        ({ icon, title, description, href }, key) => (
            <Link href={generateHref2(href)} key={key}>
                <MenuItem className="flex items-center gap-3 rounded-lg" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
                        {" "}
                        {React.createElement(icon, {
                            strokeWidth: 2,
                            className: "h-6 text-gray-900 w-6",
                        })}
                    </div>
                    <div>
                        <Typography
                            variant="h6"
                            color="blue-gray"
                            className="flex items-center text-sm font-bold" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                        >
                            {title}
                        </Typography>
                        <Typography
                            variant="paragraph"
                            className="text-xs !font-medium text-blue-gray-500" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                        >
                            {description}
                        </Typography>
                    </div>
                </MenuItem>
            </Link>
        ),
    );

    return (
        <React.Fragment>
            <Menu
                open={isMenuOpen}
                handler={setIsMenuOpen}
                offset={{ mainAxis: 20 }}
                placement="bottom"
                allowHover={true}
            >
                <MenuHandler>
                    <Typography as="div" variant="small" className="font-medium" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        <ListItem
                            className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
                            selected={isMenuOpen || isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen((cur) => !cur)} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                        >
                            Layanan
                            <KeyboardArrowDownRoundedIcon
                                strokeWidth={2.5}
                                className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                            <KeyboardArrowDownRoundedIcon
                                strokeWidth={2.5}
                                className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </ListItem>
                    </Typography>
                </MenuHandler>
                <MenuList className="hidden max-w-screen-xl rounded-xl lg:block" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <ul className="grid grid-cols-1 gap-y-2 outline-none outline-0">
                        {renderItems}
                    </ul>
                </MenuList>
            </Menu>
            <div className="block lg:hidden">
                <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
            </div>
        </React.Fragment>
    );
}

function NavList() {
    const pathname = usePathname();

    return (
        <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <Link href={"/"}
                className={`group relative flex items-center 
${pathname === "/dashboard/home"}`}>
                <Typography
                    as="a"
                    variant="small"
                    color="blue-gray"
                    className="font-medium" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}            >
                    <ListItem className="flex items-center gap-2 py-2 pr-4 duration-300 ease-in-out" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>Beranda</ListItem>
                </Typography>
            </Link>
            <Link href={"/dashboard/about"}
                className={`group relative flex items-center 
${pathname === "/dashboard/about"}`}>
                <Typography
                    as="a"
                    variant="small"
                    color="blue-gray"
                    className="font-medium" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}            >
                    <ListItem className="flex items-center gap-2 py-2 pr-4 duration-300 ease-in-out" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>Tentang Kami</ListItem>
                </Typography>
            </Link>
            <NavListMenu generateHref={generateHref} />
            <Link href={"/dashboard/zakat"}
                className={`group relative flex items-center 
${pathname === "/dashboard/zakat"}`}>
                <Typography
                    as="a"
                    variant="small"
                    color="blue-gray"
                    className="font-medium" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}            >
                    <ListItem className="flex items-center gap-2 py-2 pr-4 duration-300 ease-in-out" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        Zakat
                    </ListItem>
                </Typography>
            </Link>
            <NavListMenu2 generateHref2={generateHref2} />
        </List>
    );
}

const Topbar = () => {

    const [openNav, setOpenNav] = React.useState(false);
    const pathname = usePathname();

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    return (
        <>
            <Navbar suppressHydrationWarning={true} className="mx-auto max-w-screen-xl px-4 py-2" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <div className="flex items-center justify-between text-blue-gray-900">
                    <Link href={"/"}
                        className={`group relative flex items-center gap-2.5 rounded-full px-4 py-2 font-medium duration-300 ease-in-out hover:bg-blue-gray-100/50 
${pathname === "/dashboard/home"}`}>
                        <Image
                            src={LAZSlogoname}
                            width={32}
                            height={32}
                            alt="Company Logo"
                        />
                    </Link>
                    <div className="hidden lg:block">
                        <NavList />
                    </div>
                    <IconButton
                        variant="text"
                        color="blue-gray"
                        className="lg:hidden"
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <CloseIcon className="h-6 w-6" strokeWidth={2} />
                        ) : (
                            <MenuIcon className="h-6 w-6" strokeWidth={2} />
                        )}
                    </IconButton>
                </div>
                <Collapse open={openNav}>
                    <NavList />
                </Collapse>
            </Navbar>
        </>
    )
}

export default Topbar