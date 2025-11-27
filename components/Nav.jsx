"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { name: "home", path: "/" },
    { name: "services", path: "/services" },
    { name: "resume", path: "/resume" },
    { name: "work", path: "/work" },
    { name: "contact", path: "/contact" },
];
const Nav = () => {
    const pathname = usePathname();
    const isActive = (path) => {
        if (path === "/") {
            return pathname === "/";
        }
        // activo si estoy EXACTAMENTE en path o en un subpath, ej: /work, /work/01, /work/lo-que-sea
        return pathname === path || pathname.startsWith(`${path}/`);
    };
    return (
        <nav className="flex gap-8">
            {links.map((link, index) => {
                return (
                    <Link
                        href={link.path}
                        key={index}
                        className={`${isActive(link.path) && "text-accent border-b-2"}
                                    capitalize font-medium hover:text-accent-hover transition-all`}
                    >

                        {link.name}
                    </Link>
                );
            })}
        </nav>
    )
}

export default Nav