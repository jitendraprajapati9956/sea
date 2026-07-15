import { useState } from "react";
import "./Featured.css";

import project1 from "/aboutus.jpg";
import project2 from "/aboutus.jpg";
import project3 from "/aboutus.jpg";
import project4 from "/aboutus.jpg";
import project5 from "/aboutus.jpg";
import project6 from "/aboutus.jpg";
import project7 from "/aboutus.jpg";
import project8 from "/aboutus.jpg";

const projects = [
  {
    image: project1,
    title: "Modern Residence",
    category: "Residential",
  },
  {
    image: project2,
    title: "Luxury Villa",
    category: "Residential",
  },
  {
    image: project3,
    title: "Commercial Building",
    category: "Commercial",
  },
  {
    image: project4,
    title: "Interior Project",
    category: "Interior",
  },
  {
    image: project5,
    title: "Office Space",
    category: "Commercial",
  },
  {
    image: project6,
    title: "Hospital Design",
    category: "Institutional",
  },
  {
    image: project7,
    title: "School Building",
    category: "Educational",
  },
  {
    image: project8,
    title: "Apartment Complex",
    category: "Residential",
  },
];

export default function Featured() {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll
    ? projects
    : projects.slice(0, 5);

  return (
    <section id="work" className="featured">
      <div className="container featured__head">
        <div>
          <span className="section-eyebrow">OUR WORK</span>
          <h2 className="featured__title">
            FEATURED PROJECTS
          </h2>
        </div>

        <button
          className="featured__link"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll
            ? "Show Less ←"
            : "View All Projects →"}
        </button>
      </div>

      <div className="featured__grid">
        {visibleProjects.map((project, index) => (
          <div className="project-card">
            <img src={project.image} alt={project.title} />

            <div className="project-overlay">
              <h3>{project.title}</h3>
              <span>{project.category}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}