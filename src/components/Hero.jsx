import { useEffect, useState } from "react";
import { PenTool, HardHat, GraduationCap } from "lucide-react";
import "./Hero.css";

const highlights = [
  { icon: PenTool, title: "AutoCAD Drafting", desc: "Precision 2D drawing & site plans" },
  { icon: HardHat, title: "Site Training", desc: "Real construction site practice" },
  { icon: GraduationCap, title: "Certification", desc: "Industry-recognized completion" },
];

const heroImages = [
  "/homebanner.jpg",
  "/1.jpg",
  "/2.jpg",
  "/3.jpg",
  "/4.jpg",
];
export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section id="home" className="hero">
      <div className="hero__bg"
        style={{
          backgroundImage: `url(${heroImages[currentImage]})`,
        }} >

        <div className="hero__overlay" />
      </div>

      <div className="container hero__content">
        <span className="hero__tag">Architecture  | Construction | Interior Design |    Land Survey | Project Consultancy  </span>
        <h1 className="hero__title">
          Complete
          <br />
          <span className="hero__title-accent"> Engineering   </span>
          <br />
          & Design Solutions
        </h1>
        <p className="hero__desc">
          Shilp Engineers provides end-to-end engineering and construction solutions—from planning and structural design to surveying, project supervision, interiors, and turnkey construction. We combine technical expertise with practical execution to deliver quality projects.
        </p>
        {/* <div className="hero__strip">
          <div className="container hero__strip-inner">
            {highlights.map((h) => (
              <div className="hero__strip-item" key={h.title}>
                <h.icon size={30} strokeWidth={1.5} color="#e42313" />
                <div>
                  <h4>{h.title}</h4>
                  <p>{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div> */}
        {/* <div className="hero__actions">
          <a href="#courses" className="btn btn-primary">
            Explore Courses
          </a>
          <a href="#enroll" className="btn btn-outline">
            Enroll Now
          </a>

        </div> */}

      </div>


    </section>
  );
}
