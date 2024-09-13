"use client"
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from 'next/navigation';

const NavBar = () => {
    return (
        <div className="eb-garamond p-[2rem] w-full h-[4rem] flex flex-row justify-between items-start">
            {usePathname() !== "/" &&
                <Link href={"/"}>
                    <div className="flex flex-row justify-start items-start m-0 p-0 space-x-[1rem]">
                        <div className="m-0 p-0 overflow-hidden inline-block align-text- space-x-[0.5rem]">
                            <span className="times-new-roman text-[#fefbf5] text-[40px] font-normal lowercase italic overflow-hidden">SBU</span>
                            <span className="eb-garamond text-[#fefbf5] text-[40px] font-normal lowercase overflow-hidden">KCF</span>
                        </div>

                        <div className="relative w-[2.5rem]">
                            <Image src={"/icon.svg"} width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} alt={""} priority={true} quality={100} />
                        </div>
                    </div>
                </Link>
            }
            {usePathname() === "/" &&
                <div className="w-[20rem] text-[#fffbf5] text-[13px] font-light font-['Nyght Serif'] lowercase tracking-wide">Korean Christian Fellowship is a body of Christian believers who grow together in our spiritual walks at Stony Brook University.</div>
            }
            <div className="flex flex-row justify-center items-center space-x-[25px]">
                <Link className="text-[#fffbf5] text-xl font-light font-['Nyght Serif'] lowercase tracking-wider" href={"/announcements"}>announcements</Link>
                <Link className="text-[#fffbf5] text-xl font-light font-['Nyght Serif'] lowercase tracking-wider" href={"/about"}>about us</Link>
                <Link className="text-[#fffbf5] text-xl font-light font-['Nyght Serif'] lowercase tracking-wider" href={"/archive"}>archive</Link>
            </div>
        </div>
    )
}

export default NavBar;