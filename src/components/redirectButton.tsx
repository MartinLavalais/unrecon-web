"use client";

import { useRouter } from "next/navigation";

export default function RedirectButton({link, text, theme}: {link: string, text: string, theme: string}) {
    const router = useRouter();

    const handleClick = () => {
        router.push(link);
    }

    return(
        <button className={`btn btn-${theme} m-2`} onClick={handleClick}>{text}</button>
    )
}