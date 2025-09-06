"use client"; // si tu es dans l'app directory de Next.js 13+

import { useEffect, useState } from "react";

export default function GithubProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch("https://api.github.com/users/MartinLavalais/repos");
        if (!res.ok) {
          throw new Error(`Erreur HTTP : ${res.status}`);
        }
        const data = await res.json();
        console.log(data);
        setProjects(data);
      } catch (error) {
        console.error("Erreur lors de la récupération :", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  if (loading) return 
    <div className="flex w-52 flex-col gap-4">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
    </div>;

  return (
    <section>
      <h2>Mes projets GitHub</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {projects.map((project) => (
          <li
            key={project["id"]}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "1rem",
              marginBottom: "1rem",
            }}
          >
            <h3>
              <a
                href={project["html_url"]}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#0366d6", textDecoration: "none" }}
              >
                {project["name"]}
              </a>
            </h3>
            <p>{project["description"] || "Pas de description"}</p>
            <small>⭐ {project["stargazers_count"]} | 🍴 {project["forks_count"]}</small>
          </li>
        ))}
      </ul>
    </section>
  );
}
