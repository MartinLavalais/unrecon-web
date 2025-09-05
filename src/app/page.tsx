"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const navigateToAbout = () => {
    router.push("/about");
  }

  const navigateToPortfolio = () => {
    router.push("/portfolio");
  }

  const navigateToUnrecon = () => {
    router.push("https://www.unrecon.ch/");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 space-y-6 bg-base-100">
      <div className="hero bg-base-200 min-h-screen p-6">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Bienvenue !</h1>
            <p className="py-6">
              Je suis James Benone, et bienvenue sur mon site web.
              Vous retrouverez ci-dessous, des liens pour se renseigner sur moi et voir mon portfolio.
            </p>
            <button className="btn btn-neutral m-2" onClick={navigateToAbout}>À propos de moi</button>
            <button className="btn btn-neutral m-2" onClick={navigateToPortfolio}>Portfolio</button>
          </div>
        </div>
      </div>
      <figure className="diff aspect-16/9" tabIndex={0}>
        <div className="diff-item-1" role="img" tabIndex={0}>
          <img alt="Logo de l'entreprise" src="/unrecon-background-2.jpg" />
        </div>
        <div className="diff-item-2" role="img">
          <img
            alt="Logo de l'entreprise en dorée"
            src="/unrecon-background-3.jpg" />
        </div>
        <div className="diff-resizer"></div>
      </figure>
      <div className="card card-border bg-neutral text-neutral-content w-96">
        <div className="card-body">
          <h2 className="card-title">Unrecon</h2>
          <p>Unrecon.ch est un site web que j'ai commencé à développer pendant mon temps libre lors de ma formation, vous pouvez aller sur le site via le bouton ci-dessous.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={navigateToUnrecon}>Voir le site</button>
          </div>
        </div>
      </div>
    </div>
  );
}
