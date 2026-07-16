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
import architectImg from "../assets/1.jpeg";
import aImg from "../assets/3.jpeg";
import constructionImg from "../assets/construction.jpg";
import engineeringImg from "../assets/surveying work.jpg";
import courseImg from "../assets/course.jpg";

import "./Services.css";

const services = [
  {
    image: architectImg,
    title: "Structure design",
    details: [
      "Steel Structure",
      "RCC Structure",
    ],
  },
  {
    image: constructionImg,
    title: "Consultancy",
    details: [
      "Residential Project",
      "Commercial Project",
      "Industrial Project",
    ],
  },
  {
    image: engineeringImg,
    title: "Surveying Work",
    details: [
      "Land measurement",
      "Contour Survey",
      "Ploting Work",
      "Leveling Work",
    ],
  },
  {
    image: aImg,
    title: "Engineering Services",
    details: [
      "Quantity Eestimation",
      "Project Reports",
      "Structure design",
      "Planning work",
      "Site Supervision",
    ],
  },
  {
    image: courseImg,
    title: "Interior & Exterior Design",
    details: [
      "Interior Design",
      "Exterior Design",
    ],
  },
];

export default function Services() {
  const [showAll, setShowAll] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const visibleServices = showAll ? services : services.slice(0, 5);

  return (
    <section className="services" id="services">

      <div className="container services__head">

        <div>
          <span className="section-eyebrow">WHAT WE DO</span>
          <h2 className="services__title">OUR SERVICES</h2>
        </div>

        <div className="services__right">

          <p className="services__sub">
            Instead of a long bullet list, divide them into categories.
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

        {!selectedService ? (

          services.map((service) => (
            <div
              className="service-card"
              key={service.title}
              onClick={() => setSelectedService(service)}
            >
              <img
                src={service.image}
                size={42}
                strokeWidth={1.5}
                className="service-card__icon"
              />
              <h3>{service.title}</h3>

              <p>{service.details.join(" | ")}</p>
            </div>
          ))

        ) : (

          <div className="service-details">

            <button
              className="back-btn"
              onClick={() => setSelectedService(null)}
            >
              ← Back
            </button>

            <h2 className="detail-title">{selectedService.title}</h2>

            <div className="details-grid">
              {selectedService.details.map((item) => (
                <div className="detail-card" key={item}>
                  <img
                    src={selectedService.image}
                    alt={selectedService.title}
                    className="service-card__icon"
                  />

                  <h3>{item}</h3>

                  <p>
                    Professional {item} services with modern planning and quality
                    execution.
                  </p>

                </div>
              ))}
            </div>

          </div>

        )}

      </div>

    </section>
  );
}