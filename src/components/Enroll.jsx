import { useEffect, useState } from "react";
import api from "../api/axios";
import "./Enroll.css";

export default function Enroll() {
  const [courses, setCourses] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", phone: "", course: "", message: "" });
  const [submitStatus, setSubmitStatus] = useState("idle"); // idle | sending | sent | error

  useEffect(() => {
    api.get("/courses").then((res) => setCourses(res.data.data)).catch(() => {});
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus("sending");
    try {
      await api.post("/enrollments", form);
      setSubmitStatus("sent");
      setForm({ name: "", email: "", phone: "", course: "", message: "" });
    } catch {
      setSubmitStatus("error");
    }
  };

  return (
    <section id="enroll" className="enroll">
      <div className="container enroll__inner">
        <div className="enroll__copy">
          <span className="section-eyebrow">Enrollment</span>
          <h2>Start Your Next Batch</h2>
          <p>Fill the form and our counsellor will contact you within 24 hours.</p>
        </div>

        <form className="enroll__form" onSubmit={handleSubmit}>
          <div className="enroll__row">
            <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required />
            <input name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} required />
          </div>
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
          />
          <select name="course" value={form.course} onChange={handleChange} required>
            <option value="">Select a Course</option>
            {courses.map((c) => (
              <option key={c._id} value={c._id}>
                {c.title}
              </option>
            ))}
          </select>
          <textarea
            name="message"
            placeholder="Message (optional)"
            rows="3"
            value={form.message}
            onChange={handleChange}
          />
          <button type="submit" className="btn btn-primary" disabled={submitStatus === "sending"}>
            {submitStatus === "sending" ? "Sending…" : "Submit Enquiry"}
          </button>
          {submitStatus === "sent" && <p className="enroll__note">Thanks! We'll reach out soon.</p>}
          {submitStatus === "error" && (
            <p className="enroll__note enroll__note--error">
              Something went wrong. Please check the backend server is running.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
