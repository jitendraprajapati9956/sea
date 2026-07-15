import { useEffect, useState } from "react";
import api from "../api/axios";
import "./Courses.css";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [status, setStatus] = useState("loading"); // loading | ready | error

  useEffect(() => {
    api
      .get("/courses")
      .then((res) => {
        setCourses(res.data.data);
        setStatus("ready");
      })
      .catch(() => setStatus("error"));
  }, []);

  return (
    <section id="courses" className="courses">
      <div className="container">
        <div className="courses__head">
          <div>
            <span className="section-eyebrow">Course Catalogue</span>
            <h2 className="courses__title">Programs We Offer</h2>
          </div>
          <p className="courses__sub">
            Every course is structured like a real project — practical drawings, live
            software labs, and a completion certificate.
          </p>
        </div>

        {status === "loading" && <p className="courses__state">Loading courses…</p>}
        {status === "error" && (
          <p className="courses__state">
            Could not load courses. Make sure the backend server is running on port 5000.
          </p>
        )}

        <div className="courses__grid">
          {courses.map((c, i) => (
            <article className="course-card" key={c._id}>
              <div className="course-card__head">
                <span>CE-{101 + i}</span>
                <span>{c.level}</span>
              </div>
              <h3>{c.title}</h3>
              <p>{c.description}</p>
              <ul className="course-card__meta">
                <li>{c.duration}</li>
                <li>₹{c.fee}</li>
              </ul>
              <a href="#enroll" className="course-card__link">
                Enroll →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
