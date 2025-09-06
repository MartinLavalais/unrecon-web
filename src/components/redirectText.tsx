"use client";

import { useRouter } from "next/navigation";

export default function RedirectText({link, text}: {link: string, text: string})
{
    const router = useRouter();

    const handleClick = () => {
        router.push(link);
    }

    return(
        <span onClick={handleClick}>{text}</span>
    );
}