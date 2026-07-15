import { GraduationCap, Building2, Users, Award } from "lucide-react";
import "./StatsCta.css";

const stats = [
  { icon: GraduationCap, value: "10+", label: "Years of Experience" },
  { icon: Building2, value: "05", label: "Project Completed" },
  { icon: Users, value: "200+", label: "Happy Clients" },
  { icon: Award, value: "92%", label: "Expert Professionals" },
  
];

export default function StatsCta() {
  return (
    <section className="stats-cta">
      <div className="stats-cta__stats">
        {stats.map((s) => (
          <div className="stats-cta__stat" key={s.label}>
            <s.icon size={30} strokeWidth={1.5} color="var(--red)" />
            <div>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          </div>
        ))}
      </div>
      <a href="#enroll" className="stats-cta__box">
        <span>Let's Build Your Career Together</span>
        <span className="stats-cta__box-btn">Get In Touch →</span>
      </a>
    </section>
  );
}
