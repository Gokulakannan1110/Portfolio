import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        {/* ABOUT SECTION */}
        <section id="about" className="section section-alt">
          <div className="wrapper">
            <h2 className="section-title">
              About <span style={{ color: "#22d3ee" }}>Me</span>
            </h2>

            <h3
              style={{
                fontSize: "20px",
                fontWeight: 700,
                marginBottom: "16px",
              }}
            >
              Python Full Stack Developer!
            </h3>

            <p className="section-text">
              I am a passionate Python full stack developer who enjoys building
              modern web applications using HTML, CSS, JavaScript, React,
              Python, and Django. The focus is on clean layouts, responsive
              designs, and smooth user experiences that work well across
              different devices.
            </p>

            <p className="section-text" style={{ marginTop: "12px" }}>
              On the backend, Python, object-oriented programming, and the
              Django framework are used to organise logic, work with databases,
              and keep the overall structure clear and maintainable. There is
              also active learning and practice around building RESTful
              features so that different parts of an application can
              communicate in a simple and predictable way.
            </p>

            <p className="section-text" style={{ marginTop: "12px" }}>
              On the frontend, JavaScript and React help turn ideas into
              interactive interfaces while keeping the HTML structure and CSS
              styling neat and consistent. Problems are broken into smaller
              pieces, the logic is planned step by step, and then
              straightforward solutions are implemented so that teams can
              easily read and extend the code.
            </p>

            <p className="section-text" style={{ marginTop: "12px" }}>
              Every project is treated as a chance to grow. Whether it is
              improving a Django view, refining a REST-related feature, or
              polishing a React component, the goal is always to write reliable
              code that is user focused, readable, and ready to scale with
              future requirements.
            </p>

            {/* PERSONAL DETAILS */}
            <div
              style={{
                marginTop: "24px",
                padding: "16px 18px",
                borderRadius: "12px",
                border: "1px solid rgba(148,163,184,0.4)",
                backgroundColor: "rgba(15,23,42,0.9)",
              }}
            >
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: 700,
                  marginBottom: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                }}
              >
                Personal Details
              </h3>
              <ul style={{ listStyle: "none", fontSize: "14px", padding: 0 }}>
                <li style={{ marginBottom: "6px" }}>
                  <span style={{ color: "#94a3b8" }}>Name:&nbsp;</span>
                  <span>Gokulakannan</span>
                </li>
                <li style={{ marginBottom: "6px" }}>
                  <span style={{ color: "#94a3b8" }}>Date of Birth:&nbsp;</span>
                  <span>October 11, 2002</span>
                </li>
                <li style={{ marginBottom: "6px" }}>
                  <span style={{ color: "#94a3b8" }}>Address:&nbsp;</span>
                  <span>
                    Kothaval Chavadi St, West Saidapet, Chennai, Tamil Nadu
                    600015
                  </span>
                </li>
                <li style={{ marginBottom: "6px" }}>
                  <span style={{ color: "#94a3b8" }}>Phone:&nbsp;</span>
                  <span>+91&nbsp;63693&nbsp;28277</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="section">
          <div className="wrapper">
            <h2 className="section-title">Skills</h2>

            {/* Technical + Professional columns */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(0, 1.4fr) minmax(0, 1fr)",
                gap: "40px",
                marginTop: "24px",
              }}
            >
              {/* TECHNICAL SKILLS */}
              <div>
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: 700,
                    marginBottom: "16px",
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                  }}
                >
                  Technical Skills
                </h3>

                {[
                  { name: "HTML", level: "Advanced" },
                  { name: "CSS", level: "Advanced" },
                  { name: "JavaScript", level: "Advanced" },
                  { name: "Python", level: "Advanced" },
                  { name: "Object-Oriented Programming (OOP)", level: "Advanced" },
                  { name: "REST API (Django/JSON)", level: "Advanced" },
                  { name: "Django", level: "Advanced" },
                ].map((skill) => (
                  <div key={skill.name} style={{ marginBottom: "16px" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "4px",
                        fontSize: "14px",
                      }}
                    >
                      <span>{skill.name}</span>
                      <span style={{ color: "#22d3ee" }}>{skill.level}</span>
                    </div>
                    <div
                      style={{
                        height: "6px",
                        borderRadius: "999px",
                        backgroundColor: "#020617",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          width: "90%",
                          height: "100%",
                          borderRadius: "999px",
                          background:
                            "linear-gradient(90deg, #22d3ee, #a855f7, #fb923c)",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* PROFESSIONAL SKILLS */}
              <div>
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: 700,
                    marginBottom: "16px",
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                  }}
                >
                  Professional Skills
                </h3>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                    gap: "20px",
                  }}
                >
                  {[
                    {
                      label: "Problem Solving",
                      note: "Enjoys breaking complex issues into simple steps and finding reliable fixes.",
                    },
                    {
                      label: "Communication",
                      note: "Comfortable explaining technical ideas clearly to both devs and non‑tech people.",
                    },
                    {
                      label: "Creativity",
                      note: "Explores different approaches for cleaner UI and better user journeys.",
                    },
                    {
                      label: "Teamwork",
                      note: "Works well in groups, shares knowledge, and supports others during delivery.",
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      style={{
                        backgroundColor: "rgba(15,23,42,0.9)",
                        borderRadius: "16px",
                        padding: "18px 12px",
                        textAlign: "center",
                        border: "1px solid rgba(148,163,184,0.25)",
                      }}
                    >
                      <div
                        style={{
                          width: "70px",
                          height: "70px",
                          borderRadius: "999px",
                          margin: "0 auto 10px",
                          border: "4px solid #22d3ee",
                          borderTopColor: "#a855f7",
                          borderLeftColor: "#fb923c",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "13px",
                            color: "#e5e7eb",
                            maxWidth: "80%",
                          }}
                        >
                          Strong
                        </span>
                      </div>
                      <div
                        style={{
                          fontSize: "14px",
                          fontWeight: 600,
                        }}
                      >
                        {item.label}
                      </div>
                      <div
                        style={{
                          fontSize: "12px",
                          marginTop: "4px",
                          color: "#cbd5f5",
                        }}
                      >
                        {item.note}[web:235][web:241]
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="section section-alt">
          <div className="wrapper">
            <h2 className="section-title">
              Latest <span style={{ color: "#22d3ee" }}>Projects</span>
            </h2>

            <div
              style={{
                marginTop: "24px",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "24px",
              }}
            >
              {/* Banking Management System */}
              <article
                style={{
                  borderRadius: "16px",
                  padding: "18px 16px",
                  backgroundColor: "rgba(15,23,42,0.95)",
                  border: "1px solid rgba(148,163,184,0.4)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <div
                  style={{
                    fontSize: "13px",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "#38bdf8",
                  }}
                >
                  Project 01
                </div>
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: 700,
                    marginTop: "2px",
                  }}
                >
                  Banking Management System
                </h3>
                <p
                  style={{
                    fontSize: "13px",
                    color: "#cbd5f5",
                    marginTop: "4px",
                  }}
                >
                  A banking web application focused on managing accounts,
                  transactions, and customer details with a clean interface and
                  secure workflows. Built to practise full stack concepts,
                  validations, and structured data handling.
                </p>
                <p
                  style={{
                    fontSize: "12px",
                    color: "#9ca3af",
                    marginTop: "6px",
                  }}
                >
                  Tech used: Python, Django, HTML, CSS, JavaScript, and MySQL database with Django models.
                </p>
              </article>

              {/* Employee Management System */}
              <article
                style={{
                  borderRadius: "16px",
                  padding: "18px 16px",
                  backgroundColor: "rgba(15,23,42,0.95)",
                  border: "1px solid rgba(148,163,184,0.4)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <div
                  style={{
                    fontSize: "13px",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "#38bdf8",
                  }}
                >
                  Project 02
                </div>
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: 700,
                    marginTop: "2px",
                  }}
                >
                  Employee Management System
                </h3>
                <p
                  style={{
                    fontSize: "13px",
                    color: "#cbd5f5",
                    marginTop: "4px",
                  }}
                >
                  A system to handle employee records, roles, and attendance with
                  an easy-to-use interface. Designed to practise CRUD
                  operations, REST-style endpoints, and organised project
                  structure.
                </p>
                <p
                  style={{
                    fontSize: "12px",
                    color: "#9ca3af",
                    marginTop: "6px",
                  }}
                >
                  Tech used: Python, Django, HTML, CSS, JavaScript, and MySQL database with Django models.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="section">
          <div className="wrapper">
            <h2 className="section-title">
              Contact <span style={{ color: "#22d3ee" }}>Me</span>
            </h2>

            <p className="section-text">
              Seeking a full-time opportunity to contribute my expertise in Python, Django, and React within a dynamic company. I am eager to deliver impactful solutions and grow alongside your team — feel free to connect with me through the options below.
            </p>

            <div
              style={{
                marginTop: "18px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                fontSize: "14px",
              }}
            >
              {/* Email */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span
                  style={{
                    width: "26px",
                    height: "26px",
                    borderRadius: "999px",
                    backgroundColor: "#0ea5e9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    fontSize: "14px",
                  }}
                >
                  @
                </span>
                <a
                  href="mailto:mcagokulakannan@gmail.com"
                  style={{ color: "#e5e7eb" }}
                >
                  mcagokulakannan@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span
                  style={{
                    width: "26px",
                    height: "26px",
                    borderRadius: "999px",
                    backgroundColor: "#22c55e",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    fontSize: "14px",
                  }}
                >
                  ☎
                </span>
                <a href="tel:+916369328277" style={{ color: "#e5e7eb" }}>
                  +91&nbsp;63693&nbsp;28277
                </a>
              </div>

              {/* GitHub */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span
                  style={{
                    width: "26px",
                    height: "26px",
                    borderRadius: "999px",
                    backgroundColor: "#111827",
                    border: "1px solid #e5e7eb",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    fontSize: "14px",
                  }}
                >
                  GH
                </span>
                <a
                   href="https://github.com/Gokulakannan1110"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#e5e7eb" }}
                >
                  github.com/your-github-username
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
