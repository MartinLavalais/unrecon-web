import GithubProjects from "@/components/githubList";
import RedirectButton from "@/components/redirectButton";

export default function PortfolioPage() 
{
    return(
        <div className="flex flex-col items-center justify-center min-h-screen p-2 space-y-2 bg-base-100">
            <div className="p-6">
                <h1>Projets clients réalisés</h1>
                <div className="lg:flex">
                    <div className="card bg-base-100 w-96 shadow-sm m-2">
                      <figure className="aspect-16/9">
                        <img
                          src="https://vfdesigner.fr/img/background.png"
                          alt="Logo de VFDesigner" />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">VFDesigner</h2>
                        <p>Durant l'été 2025, un client m'a contacté pour un site vitrine qui le redirige vers son discord. Le site a été développé par moi et est hébergé chez moi.</p>
                        <div className="card-actions justify-end">
                            <RedirectButton link="https://vfdesigner.fr/" text="Voir le site" theme="primary" />
                        </div>
                      </div>
                    </div>
                    <div className="card bg-base-100 w-96 shadow-sm m-2">
                      <figure className="aspect-16/9">
                        <img
                          src="/dark_war.png"
                          alt="Logo du jeu Dark Age" />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">Une petite équipe</h2>
                        <p>Une petite équipe de joueur sur le jeu Dark Age voulait un bot discord permettant la traduction instantané pour que tout le monde puisse communiquer avec tout le monde.</p>
                        <div className="card-actions justify-end"></div>
                      </div>
                    </div>
                    <div className="card bg-base-100 w-96 shadow-sm m-2">
                      <figure className="aspect-16/9">
                        <img
                          src="/logo-seko.png"
                          alt="Logo de SEKO" />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">SEKO</h2>
                        <p>Partenariat entre SEKO et Unrecon depuis 2024. J'héberge leurs serveurs pour leur événement et je suis responsable de l'infrastructure et la sécurité.</p>
                        <div className="card-actions justify-end">
                            <RedirectButton link="https://seko.wstr.fr/" text="Voir leur site" theme="primary" />
                        </div>
                      </div>
                    </div>
                </div>
            </div>
            <GithubProjects />
        </div>
    );
}