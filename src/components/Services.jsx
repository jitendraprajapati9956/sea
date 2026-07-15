import { useState } from "react";
import {
  DraftingCompass,
  Building2,
  HardHat,
  Map,
  Sofa,
  Printer,
  MapPinned,
  Calculator,
  Compass,
  Cuboid,
} from "lucide-react";

import "./Services.css";

const services = [
  {
    icon: DraftingCompass,
    title: "Structural Designer",
    desc: "RCC & Steel Structural Design using STAAD Pro, ETABS and IS Codes.",
  },
  {
    icon: Building2,
    title: "Consultant Engineer",
    desc: "Professional civil engineering consultancy.",
  },
  {
    icon: HardHat,
    title: "Supervision Works",
    desc: "Complete site supervision and quality control.",
  },
  {
    icon: Map,
    title: "Land Surveyor",
    desc: "Accurate land surveying and layout marking.",
  },
  {
    icon: Sofa,
    title: "Interior Designer",
    desc: "Modern interior planning and design.",
  },
  {
    icon: Printer,
    title: "Plotting Works",
    desc: "CAD plotting and large-format printing.",
  },
  {
    icon: MapPinned,
    title: "Land Developers",
    desc: "Residential & commercial land development.",
  },
  {
    icon: Calculator,
    title: "Estimates",
    desc: "BOQ, rate analysis and quantity estimation.",
  },
  {
    icon: Compass,
    title: "N.A. Planner",
    desc: "Non-Agricultural planning & approvals.",
  },
  {
    icon: Cuboid,
    title: "3D Designer",
    desc: "3D elevation, rendering and walkthrough.",
  },
];

export default function Services() {
  const [showAll, setShowAll] = useState(false);

  const visibleServices = showAll ? services : services.slice(0, 3);

  return (
    <section className="services" id="services">

      <div className="container services__head">

        <div>
          <span className="section-eyebrow">WHAT WE DO</span>
          <h2 className="services__title">OUR SERVICES</h2>
        </div>

        <div className="services__right">

          <p className="services__sub">
            We offer end-to-end civil engineering,
            consultancy and design solutions.
          </p>

          <button
            className="view-btn"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "View All Services"}
          </button>

        </div>

      </div>

      <div className="container services__grid">

        {visibleServices.map((service) => (
          <div className="service-card" key={service.title}>

            <service.icon
              className="service-card__icon"
              size={42}
              strokeWidth={1.5}
            />

            <h3>{service.title}</h3>

            <p>{service.desc}</p>

          </div>
        ))}

      </div>

    </section>
  );
}