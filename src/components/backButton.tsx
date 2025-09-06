"use client";

import { useRouter } from "next/navigation";

export default function RedirectButton({text}: {text: string}) {
    const router = useRouter();

    const handleClick = () => {
        router.back();
    }

    return(
        <button className={`btn btn-neutral m-2`} onClick={handleClick}>{text}</button>
    )
}