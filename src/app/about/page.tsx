export default function AboutPage() 
{
    return(
        <div className="flex flex-col items-center justify-center min-h-screen p-6 space-y-6 bg-base-100">
            <div className="hero bg-base-200 min-h-screen">
              <div className="hero-content flex-col lg:flex-row">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                  className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                  <h1 className="text-5xl font-bold">Qui suis-je ?</h1>
                  <p className="py-6">
                    Je m'appel James Benone, 19 ans, de nationalité Suisse et actuellement en étude.
                    Je suis un développeur passionné, j'adore me lancé des défis et apprendre de nouvelle chose.
                    J'aime la musique, sortir avec mes amis et repousser mes limites.
                  </p>
                </div>
              </div>
            </div>
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
              <li>
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="text-success h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-start mb-10 md:text-end">
                  <time className="font-mono italic">2021</time>
                  <div className="text-lg font-black">Début d'apprentissage</div>
                  J'ai commencé un apprentissage au CFPT Informatique dans le domaine du développement d'application.
                </div>
                <hr className="bg-success" />
              </li>
              <li>
                <hr className="bg-success" />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="text-success h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end md:mb-10">
                  <time className="font-mono italic">2023-2025</time>
                  <div className="text-lg font-black">Président des délégués</div>
                  Durant 2 ans, j'ai été le président des délégués. J'étais chargé d'organsier des réunions avec les délégués,
                  De transmettre les information entre la direction et les élèves. Je devais être à l'écoute des élèvesœt trouver un
                  terrain d'entente entre la direction et les élèves sur des sujets divers et variés.
                </div>
                <hr className="bg-success" />
              </li>
              <li>
                <hr className="bg-success" />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="text-success h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end md:mb-10">
                  <time className="font-mono italic">2025</time>
                  <div className="text-lg font-black">Obtention de mon CFC</div>
                  J'ai obtenu mon CFC développement d'application avec mention bien.
                </div>
                <hr className="bg-success" />
              </li>
              <li>
                <hr className="bg-success" />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="text-success h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-start mb-10 md:text-end">
                  <time className="font-mono italic">2025</time>
                  <div className="text-lg font-black">Formation Informaticien E.S.</div>
                  Début de ma formation en Informaticien E.S. au CFPT Informatique.
                </div>
                <hr className="bg-warning" />
              </li>
              <li>
                <hr className="bg-warning" />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end mb-10 md:text-start">
                  <time className="font-mono italic">2027?</time>
                  <div className="text-lg font-black">Obtention du diplôme Informaticien E.S.</div>
                  Mon objectif actuel et d'arrivé jusqu'à là et trouver une entreprise qui pourrait m'accepter pour travailler dans le domaine informatique.
                </div>
              </li>
            </ul>
            <div className="collapse collapse-plus bg-base-300 border border-base-300">
              <input type="radio" name="my-accordion-3" defaultChecked />
              <div className="collapse-title font-semibold">Quels sont mes projets?</div>
              <div className="collapse-content text-sm">
                <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 border-base-300">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Nom</th>
                        <th>Status</th>
                        <th>Date de début</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>Host-Unrecon</th>
                        <td>
                          <div className="inline-grid *:[grid-area:1/1]">
                            <div className="status status-success animate-ping"></div>
                            <div className="status status-success"></div>
                          </div> Actif
                        </td>
                        <td>13/02/2023</td>
                        <td>Service d'hébergement de serveur de jeu et d'application</td>
                      </tr>
                      <tr>
                        <th>Site web</th>
                        <td>
                          <div className="inline-grid *:[grid-area:1/1]">
                            <div className="status status-error"></div>
                          </div> Abandonné
                        </td>
                        <td>27/02/2023</td>
                        <td>Abandonné du à un design désastreux</td>
                      </tr>
                      <tr>
                        <th>KMS</th>
                        <td>
                          <div className="inline-grid *:[grid-area:1/1]">
                            <div className="status status-warning"></div>
                          </div> V2 en cours
                          </td>
                        <td>17/09/2024</td>
                        <td>Key Manager Service</td>
                      </tr>
                      <tr>
                        <th>Drive</th>
                        <td>
                          <div className="inline-grid *:[grid-area:1/1]">
                            <div className="status status-warning"></div>
                          </div> En développement
                        </td>
                        <td>13/11/2024
                        </td>
                        <td>Un drive avec le back-end hébergé sur mon NAS et mon front-end chez Infomaniak</td>
                      </tr>
                      <tr>
                        <th>Bot</th>
                        <td>
                          <div className="inline-grid *:[grid-area:1/1]">
                            <div className="status status-success animate-ping"></div>
                            <div className="status status-success"></div>
                          </div> Actif
                        </td>
                        <td>09/07/2025</td>
                        <td>Bot discord pour de la traduction instantané</td>
                      </tr>
                      <tr>
                        <th>OAuth</th>
                        <td>
                          <div className="inline-grid *:[grid-area:1/1]">
                            <div className="status"></div>
                          </div> Planifié
                        </td>
                        <td>??/??/2025</td>
                        <td>Permet une authentification unique pour toutes les applications</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-300 border border-base-300">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title font-semibold">Quels sont mes compétences?</div>
              <div className="collapse-content text-sm">
                <p>Languages : HTML, CSS, JS, PHP, C#</p>
                <p>Applications utilisés : Adobe Illustrator, Mirmaid, Trello, Suite Office 365</p>
                <p>Capacités : Réfléction et création d'une architecture d'application, gestion de données, capacité de dépannage</p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-300 border border-base-300">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title font-semibold">Quels sont mes qualités?</div>
              <div className="collapse-content text-sm">Sait gardé son calme dans toute situation, Esprit d'équipe, Compétence de gestion d'équipe, apptitude à communiquer, autonome, autodidacte, organisé, sociable, capable de s'adapter</div>
            </div>
        </div>
    );
}