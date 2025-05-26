"use client";

import Link from "next/link";
import Image from "next/image";
import {useState} from "react";
import {Menu} from "lucide-react";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar flex justify-between px-5 py-4 mx-auto w-11/12 xl:w-11/12 2xl:w-10/12 items-center">
            <ul className={'lg:flex hidden gap-x-5 font-[600] w-[45%] text:sm lg:text-sm 2xl:text-lg'}>
                <li><Link href="/public">Home</Link></li>
                <li className={'text-secondary'}><Link href="/public">Partners</Link></li>
                <li><Link href="/public">How to play</Link></li>
                <li><Link href="/public">FAQs</Link></li>
            </ul>
            <div>
                <Image
                    src={'/assets/svg/logo.svg'}
                    alt={'logo'}
                    className={'!relative w-full text-black '}
                    fill
                />
            </div>
            <ul className={'hidden lg:flex gap-x-7  w-[45%] justify-end items-center'}>
                <li>
                    <Link href="/public">
                        <Image
                            src={'/assets/svg/socials/x.svg'}
                            alt={'x'}
                            width={20}
                            height={20}
                        />
                    </Link>
                </li>
                <li>
                    <Link href="/public">
                        <Image
                            src={'/assets/svg/socials/tiktok.svg'}
                            alt={'tiktok'}
                            width={20}
                            height={20}
                        />
                    </Link>
                </li>
                <li>
                    <Link href="/public">
                        <Image
                            src={'/assets/svg/socials/youtube.svg'}
                            alt={'youtube'}
                            width={20}
                            height={20}
                        />
                    </Link>
                </li>
                <li>
                    <Link href="/public">
                        <Image
                            src={'/assets/svg/socials/instagram.svg'}
                            alt={'instagram'}
                            width={20}
                            height={20}
                        />
                    </Link>
                </li>
            </ul>
            <div className="text-white lg:hidden font-bold text-2xl">

                <Menu size={32} color="white" onClick={() => setIsOpen(!isOpen)}/>

            </div>

            {/* Dropdown Menu (Sliding Down) */}
            <div
                className={`absolute  top-full left-0 w-full  text-black  transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} `}>
                <ul className={`py-2 w-11/12 mx-auto  shadow-lg rounded-lg `}>
                    <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                        <Link href="/#about" onClick={() => setIsOpen(false)}>About</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                        <Link href="/#services" onClick={() => setIsOpen(false)}>Services</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                        <Link href="/faq">FAQs</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                        <Link href="/contactus">Contact</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                        <a href={'https://documenter.getpostman.com/view/1327929/2sB2iwFaAU'}
                           target={'_blank'}>Documentation</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                        <Link href={'https://pensol.uniswitchng.com'}
                              className="buttonBoxShadow bg-custom-primary text-white bg-[#009444] w-fit px-10 py-1.5 2xl:py-3 rounded-lg">
                            Login
                        </Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                        <Link href={'/signup'}
                              className="buttonBoxShadow bg-custom-primary text-white bg-[#009444] w-fit px-10 py-1.5 2xl:py-3 rounded-lg">
                            Sign Up
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
