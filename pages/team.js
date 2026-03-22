import Header from "../components/Header";
import SEO from "../components/SEO";
import Footer from "../components/Footer";
import LazySection from "../components/LazySection";
import { SITE_LINKS } from "../lib/siteLinks";

const founders = [
  {
    name: "Apurva Biswas",
    role: "CEO & Co-founder",
    bio: "A former Associate in FX & Commodities Strategy at Goldman Sachs and an IIT engineering alum, Apurva leads Tarmac's overall vision, design, and business strategy. An obsessive traveler herself, she drives the mission to build the ultimate AI companion that eliminates friction for both solo explorers and friend groups.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUydfdf95dYrdsu_V6ffjmFDYbsdTXvPm4Ig&s",
    pastExperience: "Goldman Sachs - FX & Commodities Strategy",
    tags: ["Ex-Goldman Sachs", "IIT Alum"],
    linkedin: SITE_LINKS.founders.apurva,
  },
  {
    name: "Manmohan Labh",
    role: "CTO & Co-founder",
    bio: "An IITian and former Senior Software Engineer at Postman with over five years of experience building scalable systems, Manmohan architects Tarmac's proprietary Spatial RAG engine. He is also a GYTI award winner for his patent-pending EEG medical bed invention.",
    image:
      "https://scontent.fblr20-2.fna.fbcdn.net/v/t39.30808-6/549566201_1367693158053283_5133508394041333681_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_ohc=24hvI5rIdf0Q7kNvwG_w4Fh&_nc_oc=AdlkCQbv17Q-5b0o94_hjpHIFZzeYUilNzOJs--KHWzZTsdOxdEzpZLmLzd1mFptMXCp-7Jvi-Zjg_R9cYqJFAbn&_nc_zt=23&_nc_ht=scontent.fblr20-2.fna&_nc_gid=L3-Gyn0aWCt89NsA2ekA9w&_nc_ss=8&oh=00_Afzp98WjQ0ehFpbwJS1YFur6rncGBNIY_ufbQvUSNASdWw&oe=69B53937",
    pastExperience: "Postman - Senior Software Engineer",
    tags: ["Ex-Postman", "GYTI Award Winner"],
    linkedin: SITE_LINKS.founders.manmohan,
  },
];

const TEAM_JSON_LD = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Apurva Biswas",
    jobTitle: "CEO & Co-founder",
    worksFor: { "@type": "Organization", name: "Tarmac" },
    sameAs: "https://www.linkedin.com/in/apurva-biswas",
    description:
      "A former Associate in FX & Commodities Strategy at Goldman Sachs and an IIT engineering alum, Apurva leads Tarmac's overall vision, design, and business strategy.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Manmohan Labh",
    jobTitle: "CTO & Co-founder",
    worksFor: { "@type": "Organization", name: "Tarmac" },
    sameAs: "https://www.linkedin.com/in/manmohanlabh",
    description:
      "An IITian and former Senior Software Engineer at Postman with over five years of experience building scalable systems, Manmohan architects Tarmac's proprietary Spatial RAG engine.",
  },
];

export default function Team() {
  return (
    <>
      <SEO
        title="Team Tarmac | Founders Apurva Biswas & Manmohan Labh"
        description="Meet the founders behind Tarmac. College buddies and engineering veterans from Goldman Sachs and Postman, building the future of AI travel."
        keywords="tarmac team, tarmac founders, apurva biswas, manmohan labh, ai travel startup founders"
        canonical="/team"
        ogType="profile"
        jsonLd={TEAM_JSON_LD}
      />

      <Header />

      <section
        id="team"
        className="team-section"
        style={{
          background: "#ffffff",
          padding: "160px 48px 80px 48px",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gap: "80px",
              alignItems: "flex-start",
              justifyItems: "center",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <h2
                className="app-title-font app-type-heading"
                style={{
                  fontSize: "clamp(28px, 3.5vw, 42px)",
                  color: "#1c1c1e",
                  marginBottom: "16px",
                }}
              >
                Built for <em>Travelers</em>,
                <br />
                by <em>Travelers</em>
              </h2>
            </div>

            <LazySection minHeight={520}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "48px",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                {founders.map((founder) => (
                  <div
                    key={founder.name}
                    style={{
                      padding: "0",
                      display: "flex",
                      flexDirection: "column",
                      gap: "16px",
                      alignItems: "center",
                      maxWidth: "600px",
                      width: "100%",
                      justifyContent: "center",
                    }}
                  >
                    <div>
                      <p
                        className="app-type-heading"
                        style={{
                          fontSize: "28px",
                          fontWeight: "500",
                          color: "#1c1c1e",
                          margin: "0 0 4px 0",
                          textAlign: "center",
                        }}
                      >
                        {founder.name}
                      </p>
                      <p
                        className="app-type-subheading"
                        style={{
                          fontSize: "16px",
                          color: "#F97316",
                          fontWeight: "500",
                          margin: "0 0 12px 0",
                          textAlign: "center",
                        }}
                      >
                        {founder.role}
                      </p>
                      <p
                        className="app-type-label"
                        style={{
                          color: "#999",
                          marginBottom: "16px",
                          fontWeight: "500",
                          textAlign: "center",
                        }}
                      >
                        {founder.pastExperience}
                      </p>
                      <p
                        className="app-type-body"
                        style={{
                          color: "#555",
                          marginBottom: "16px",
                          maxWidth: "500px",
                          textAlign: "center",
                        }}
                      >
                        {founder.bio}
                      </p>
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "8px",
                          justifyContent: "center",
                        }}
                      >
                        {founder.tags.map((tag) => (
                          <span
                            key={tag}
                            style={{
                              fontSize: "11px",
                              color: "#666",
                              background: "#f9f7f3",
                              borderRadius: "100px",
                              padding: "4px 12px",
                              fontFamily: '"DM Sans", sans-serif',
                              border: "1px solid #e8e4de",
                              fontWeight: "500",
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div
                        style={{
                          marginTop: "18px",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <a
                          href={founder.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            display: "inline-flex",
                            color: "#0a66c2",
                            fontFamily: '"DM Sans", sans-serif',
                            fontSize: "14px",
                            fontWeight: "600",
                            textDecoration: "none",
                          }}
                        >
                          Connect on LinkedIn
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </LazySection>

            <p
              className="app-type-body"
              style={{
                color: "#888",
                fontSize: "15px",
                maxWidth: "560px",
                margin: "0 auto",
                textAlign: "center",
                lineHeight: "1.7",
                paddingTop: "8px",
              }}
            >
              Apurva and Manmohan have been building technology together for eight years. During college, they co-built a project that won the India-Australia Circular Economy Hackathon. They left their corporate careers in January 2026 to go all-in on solving the broken travel experience.
            </p>
          </div>
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 768px) {
          .team-section {
            padding: 108px 16px 56px 16px !important;
          }
        }
      `}</style>

      <Footer />
    </>
  );
}
