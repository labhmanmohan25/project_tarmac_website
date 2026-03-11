import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { SITE_LINKS } from "../lib/siteLinks";

const founders = [
  {
    name: "Apurva Biswas",
    role: "CEO & Co-founder",
    bio: "Strategic thinker and product visionary. Former Goldman Sachs FX & Commodities strategist with a passion for solving real-world problems through innovative technology. Drives Tarmac's vision and go-to-market strategy.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUydfdf95dYrdsu_V6ffjmFDYbsdTXvPm4Ig&s",
    pastExperience: "Goldman Sachs - FX & Commodities Strategy",
    tags: ["Ex-Goldman Sachs", "Product Strategy"],
    linkedin: SITE_LINKS.founders.apurva,
  },
  {
    name: "Manmohan Labh",
    role: "CTO & Co-founder",
    bio: "Full-stack systems architect with five years of production engineering excellence at Postman. Specialized in building scalable, high-performance infrastructure. Transforms ambitious ideas into robust, deployable reality.",
    image:
      "https://scontent.fblr20-2.fna.fbcdn.net/v/t39.30808-6/549566201_1367693158053283_5133508394041333681_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_ohc=24hvI5rIdf0Q7kNvwG_w4Fh&_nc_oc=AdlkCQbv17Q-5b0o94_hjpHIFZzeYUilNzOJs--KHWzZTsdOxdEzpZLmLzd1mFptMXCp-7Jvi-Zjg_R9cYqJFAbn&_nc_zt=23&_nc_ht=scontent.fblr20-2.fna&_nc_gid=L3-Gyn0aWCt89NsA2ekA9w&_nc_ss=8&oh=00_Afzp98WjQ0ehFpbwJS1YFur6rncGBNIY_ufbQvUSNASdWw&oe=69B53937",
    pastExperience: "Postman - Backend Architecture & Scalability",
    tags: ["Ex-Postman", "5 yrs Full Stack"],
    linkedin: SITE_LINKS.founders.manmohan,
  },
];

export default function Team() {
  return (
    <>
      <Head>
        <title>Tarmac - Team</title>
        <meta
          name="description"
          content="Meet the team behind Tarmac and the builders creating the travel experience we always wanted."
        />
      </Head>

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
                className="app-title-font"
                style={{
                  fontSize: "clamp(28px, 3.5vw, 42px)",
                  fontWeight: "800",
                  color: "#1c1c1e",
                  lineHeight: 1.0,
                  letterSpacing: "-0.025em",
                  marginBottom: "16px",
                }}
              >
                Built by Travelers,
                <br />
                for Travelers
              </h2>
            </div>

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
                      style={{
                        fontFamily: '"Bricolage Grotesque", sans-serif',
                        fontSize: "28px",
                        fontWeight: "700",
                        color: "#1c1c1e",
                        margin: "0 0 4px 0",
                        textAlign: "center",
                      }}
                    >
                      {founder.name}
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        color: "#F97316",
                        fontFamily: '"Bricolage Grotesque", sans-serif',
                        fontWeight: "600",
                        margin: "0 0 12px 0",
                        textAlign: "center",
                      }}
                    >
                      {founder.role}
                    </p>
                    <p
                      style={{
                        fontSize: "11px",
                        color: "#999",
                        fontFamily: '"DM Sans", sans-serif',
                        marginBottom: "16px",
                        fontWeight: "500",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                        textAlign: "center",
                      }}
                    >
                      {founder.pastExperience}
                    </p>
                    <p
                      style={{
                        fontSize: "14px",
                        color: "#555",
                        lineHeight: 1.7,
                        fontFamily: '"DM Sans", sans-serif',
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
                    <a
                      href={founder.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: "inline-flex",
                        marginTop: "18px",
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
              ))}
            </div>
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
