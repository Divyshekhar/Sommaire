import NavLink from "./nav-link";
import { FileText } from "lucide-react";
import { Button } from "../ui/button";
export default function Header() {
    const isLoggedin = false;
    return (
        <>
            <nav className="container flex item-center justify-between py-4 lg:ph-8 px-2 mx-auto">
                <div className="flex lg:flex-1">
                    <NavLink href={"/"}
                        className="flex item-center gap-1"
                    >
                        <FileText className="w-5 h-5 lg:w-8 lg:h-8 text-gray-900 hover:rotate-12 transform transition duration-200 ease-in-out " />

                        <span className="font-extrabold lg:text-xl text-gray-900">Sommaire</span>
                    </NavLink>
                </div>
                <div className="flex lg: justify-center gap-4 lg:gap-12 lg:items-center">
                    <NavLink href={"/#pricing"}>
                        Pricing
                    </NavLink>
                    {isLoggedin ?
                        <NavLink href={"/dashboard"}>
                            Your Summaries
                        </NavLink> : <></>}
                </div>
                <div className="flex lg: justify-end lg: flex-1">
                    {isLoggedin ?
                        <div className="flex gap-2 items-center">
                            <NavLink href={"/upload"}>Upload a PDF</NavLink>
                            <div>
                                Pro
                            </div>
                            <Button>Sign Out</Button>
                        </div>
                        : 
                        <div className="pt-1">
                            <NavLink href={"/sign-in"}>Sign In</NavLink>
                        </div>
                    }
                </div>

            </nav>
        </>
    )
}