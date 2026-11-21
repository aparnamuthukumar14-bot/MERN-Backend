
import React from "react";
import "./Portal.css";

function Portal() {

  const portalItems = [
    {
      icon: "🎓",
      title: "Students",
      description: "Student information, academic details and student support services.",
      link: "#students"
    },
    {
      icon: "🏢",
      title: "Departments",
      description: "Explore academic departments and their programmes.",
      link: "#departments"
    },
    {
      icon: "👨‍🏫",
      title: "Faculty",
      description: "Meet our teaching staff and academic professionals.",
      link: "#faculty"
    },
    {
      icon: "💼",
      title: "Placement",
      description: "Career guidance, recruitment and placement opportunities.",
      link: "#placement"
    },
    {
      icon: "📋",
      title: "Administration",
      description: "College administration and student-related services.",
      link: "#administration"
    },
    {
      icon: "📚",
      title: "Library",
      description: "Library resources, books and digital learning materials.",
      link: "#library"
    }
  ];

  return (
    <div className="portal-page">

      {/* Portal Banner */}
      <section className="portal-hero">
        <div className="container">
          <span>BRIGHT VALLEY COLLEGE</span>
          <h1>College Management Portal</h1>
          <p>
            One platform connecting students, faculty,
            departments and college services.
          </p>
        </div>
      </section>

      {/* Portal Cards */}
      <section className="section">
        <div className="container">

          <div className="portal-heading">
            <span>ONE PLATFORM, MANY SERVICES</span>
            <h2 className="section-title">
              Explore Our College Portal
            </h2>
            <p className="section-subtitle">
              Access important academic and administrative
              information through one unified platform.
            </p>
          </div>

          <div className="portal-grid">

            {portalItems.map((item, index) => (
              <a
                href={item.link}
                className="portal-card"
                key={index}
              >
                <div className="portal-icon">
                  {item.icon}
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <span className="portal-card-link">
                  Explore Section →
                </span>
              </a>
            ))}

          </div>

        </div>
      </section>

      {/* Information Sections */}
      <section className="portal-details">
        <div className="container">

          <div className="portal-detail" id="students">
            <span>🎓</span>
            <div>
              <h2>Student Services</h2>
              <p>
                Access student profiles, academic records,
                attendance information, examination details
                and student support services.
              </p>
            </div>
          </div>

          <div className="portal-detail" id="departments">
            <span>🏢</span>
            <div>
              <h2>Academic Departments</h2>
              <p>
                Explore departments, courses, programmes
                and academic activities offered by the college.
              </p>
            </div>
          </div>

          <div className="portal-detail" id="faculty">
            <span>👨‍🏫</span>
            <div>
              <h2>Faculty Information</h2>
              <p>
                Find faculty profiles, teaching responsibilities
                and academic support information.
              </p>
            </div>
          </div>

          <div className="portal-detail" id="placement">
            <span>💼</span>
            <div>
              <h2>Placement Services</h2>
              <p>
                Discover career guidance, training programmes,
                recruitment activities and placement updates.
              </p>
            </div>
          </div>

          <div className="portal-detail" id="administration">
            <span>📋</span>
            <div>
              <h2>Administration</h2>
              <p>
                Find academic calendars, announcements,
                important notices and administrative information.
              </p>
            </div>
          </div>

          <div className="portal-detail" id="library">
            <span>📚</span>
            <div>
              <h2>Library Services</h2>
              <p>
                Explore library resources, reading materials,
                digital learning resources and library information.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Portal;
