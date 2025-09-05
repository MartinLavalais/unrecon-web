"use client";

import { useRouter } from "next/navigation";

export default function FooterLink({link, text}: {link: string, text: string}) {
    const router = useRouter();

    const handleClick = () => {
        router.push(link);
    }

    return(
        <a className="link link-hover" onClick={handleClick}>{text}</a>
    );
}