import { Users, GraduationCap, Award } from "lucide-react";
import "./About.css";
import aboutImage from "/aboutus.jpg"; // First image જેવી interior photo

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about__inner">

        <div className="about__image">
          <img src={aboutImage} alt="Interior Design" />
        </div>

        <div className="about__copy">
          <span className="section-eyebrow">ABOUT US</span>

          <h2>
            Engineering Expertise 
            <br />
            You Can Trust 
          </h2>

          <p>
           At Shilp Engineers, we offer comprehensive engineering, planning, and design services for residential, commercial, and land development projects. Our experienced team ensures every project is executed with precision, compliance, and quality. 
          </p>

          <div className="about__stats">
            <div className="about__stat">
              <Users size={28} />
              <div>
                <strong>10+</strong>
                <span>Years Experience</span>
              </div>
            </div>

            <div className="about__stat">
              <GraduationCap size={28} />
              <div>
                <strong>200+</strong>
                <span>Projects Completed</span>
              </div>
            </div>

            <div className="about__stat">
              <Award size={28} />
              <div>
                <strong>100%</strong>
                <span>Client Satisfaction</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}