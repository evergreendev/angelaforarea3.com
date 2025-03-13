import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";

const Nav = () => {
    return <>
        <div className="w-full bg-blue-600">
            <div className="max-w-screen-lg mx-auto">

            </div>
        </div>
        <div className="bg-gray-100 text-blue-600 w-full flex flex-wrap justify-between sticky top-0 z-20 shadow-md">
            <div
                className="z-10 py-2 px-6 font-body w-full max-w-screen-xl mx-auto items-center justify-between text-xl flex ">
{/*                <Link className="mr-5 size-10 flex items-center justify-around"
                                             href="">
                    <FontAwesomeIcon icon={faFacebook} size="lg" width="24px"/>
                </Link>*/}
                <div className="ml-auto space-x-8">
                    <Link href="https://secure.anedot.com/angela-for-area-3/donate"
                          className="rounded hover:bg-orange2-500 text-cream-500 border-2 p-3 py-1 bg-orange1-500 border-orange1-500">Donate</Link>
                    <Link href="/support"
                          className="rounded hover:bg-blue-600 text-cream-500 border-2 p-3 py-1 bg-blue-500 border-blue-600">Support</Link>
                </div>

            </div>
        </div>
    </>
}

export default Nav;
