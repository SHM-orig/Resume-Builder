import { useContext } from "react";
import { ResumeContext } from "../context/ResumeContext";
import html2pdf from "html2pdf.js";

export default function Resume() {
  const ctx = useContext(ResumeContext);
  if (!ctx) return null;

  const { general, experiences, projects, education, skills, languages } = ctx;

  function downloadPDF() {
    const element = document.getElementById("resume")!;

    html2pdf(element, {
      margin: 10,
      filename: "resume.pdf",
      image: { type: "jpeg" as const, quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: {
        unit: "px" as const,
        format: "a4" as const,
        orientation: "portrait" as const,
      },
    });
  }

  return (
    <div className="container mt-5 mb-5">
      {/* DOWNLOAD BUTTON */}
      <div className="text-end mb-3">
        <button className="btn btn-success" onClick={downloadPDF}>
          Download CV
        </button>
      </div>

      <div
        id="resume"
        className="bg-white p-5 shadow-lg"
        style={{ maxWidth: "900px", margin: "auto", borderRadius: "10px" }}
      >
        {/* HEADER */}
        <div className="mb-4">
          <h1 className="fw-bold mb-0">{general?.name}</h1>

          <h5 className="text-muted">{general?.role}</h5>

          <div className="text-muted small mt-2">
            {general?.location} • {general?.phone} • {general?.email}
          </div>

          <div className="mt-2 small">
            <a href={general?.linkedin} className="me-3">
              LinkedIn
            </a>

            <a href={general?.github} className="me-3">
              Github
            </a>

            <a href={general?.website}>Website</a>
          </div>

          <p className="mt-3">{general?.summary}</p>
        </div>

        {/* EXPERIENCE */}
        <div className="mb-4">
          <h5 className="border-bottom pb-2 fw-bold">EXPERIENCE</h5>

          {experiences.map((exp: any, i: number) => (
            <div key={i} className="mt-3">
              <div className="d-flex justify-content-between">
                <strong>{exp.company}</strong>

                <small className="text-muted">
                  {exp.start} - {exp.end}
                </small>
              </div>

              <div className="text-muted">
                {exp.role} • {exp.location}
              </div>

              <div className="small mt-1">{exp.description}</div>
            </div>
          ))}
        </div>

        {/* PROJECTS */}
        <div className="mb-4">
          <h5 className="border-bottom pb-2 fw-bold">PROJECTS</h5>

          {projects.map((p: any, i: number) => (
            <div key={i} className="mt-3">
              <strong>{p.name}</strong>

              <div className="small">
                <a href={p.deploy} className="me-3">
                  Live Link
                </a>

                <a href={p.repo}>Github</a>
              </div>

              <div className="small mt-1">{p.description}</div>
            </div>
          ))}
        </div>

        {/* EDUCATION */}
        <div className="mb-4">
          <h5 className="border-bottom pb-2 fw-bold">EDUCATION</h5>

          {education.map((e: any, i: number) => (
            <div key={i} className="mt-3">
              <div className="d-flex justify-content-between">
                <strong>{e.institution}</strong>

                <small className="text-muted">
                  {e.start} - {e.end}
                </small>
              </div>

              <div className="small text-muted">
                {e.degree} • {e.field}
              </div>
            </div>
          ))}
        </div>

        {/* SKILLS */}
        <div className="mb-4">
          <h5 className="border-bottom pb-2 fw-bold">SKILLS</h5>

          <div className="d-flex flex-wrap gap-2 mt-2">
            {skills.map((s: any, i: number) => (
              <span
                key={i}
                className="badge bg-light text-dark border"
                style={{ fontSize: "13px", padding: "6px 10px" }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* LANGUAGES */}
        <div>
          <h5 className="border-bottom pb-2 fw-bold">LANGUAGES</h5>

          <ul className="mt-2">
            {languages.map((l: any, i: number) => (
              <li key={i}>
                {l.language} — {l.level}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
