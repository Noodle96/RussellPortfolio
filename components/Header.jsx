import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        Russell<span className="text-accent">.</span>
                    </h1>
                </Link>
                {/* desktop nav and  hire me button  */}
                <div className="hidden xl:flex items-center gap-8"> {/* change to lg:flex*/}
                    <Nav />
                    <Link href="/contact">
                        <Button className="ml-8">Hire Me</Button>
                    </Link>
                </div>

                {/* mobile nav */}
                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    )
}

export default Header