"use client";

import BackButton from "@/components/backButton";

export default function ErrorPage()
{
    return(
        <div className="flex flex-col items-center justify-center min-h-screen p-6 space-y-6 bg-base-100">
            <h1>clea404 | Il n&apos;y a rien ici</h1>
            <BackButton text="Revenir en arrière" />
        </div>
    );
}