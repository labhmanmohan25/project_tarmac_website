import BubbleCarousel from "./BubbleCarousel";

const bubbleDestinations = [
  {
    landmark: "Eiffel Tower",
    country: "France",
    image:
      "https://images.unsplash.com/photo-1431274172761-fca41d930114?w=900&q=80",
  },
  {
    landmark: "Mount Fuji",
    country: "Japan",
    image:
      "https://images.unsplash.com/photo-1491884662610-dfcd28f30cfb?w=900&q=80",
  },
  {
    landmark: "Great Wall",
    country: "China",
    image:
      "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=900&q=80",
  },
  {
    landmark: "Taj Mahal",
    country: "India",
    image:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=900&q=80",
  },
  {
    landmark: "Statue of Liberty",
    country: "United States",
    image:
      "https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?w=900&q=80",
  },
  {
    landmark: "Pyramids of Giza",
    country: "Egypt",
    image:
      "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=900&q=80",
  },
  {
    landmark: "Sydney Opera House",
    country: "Australia",
    image:
      "https://images.unsplash.com/photo-1528072164453-f4e8ef0d475a?w=900&q=80",
  },
  {
    landmark: "Machu Picchu",
    country: "Peru",
    image:
      "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=900&q=80",
  },
  {
    landmark: "Santorini Cliffs",
    country: "Greece",
    image:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=900&q=80",
  },
];

export default function DestinationsSection() {
  return (
    <section
      id="destinations"
      className="destinations-section"
      style={{ background: "#eeebe6", padding: "0 48px" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          className="destinations-heading"
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "24px",
          }}
        >
          <div style={{ maxWidth: "560px", margin: "0 auto", textAlign: "center" }}>
            <h2
              className="app-title-font app-type-heading"
              style={{
                fontSize: "clamp(28px, 3.4vw, 40px)",
                color: "#1c1c1e",
                marginBottom: "8px",
              }}
            >
              Wherever You Go Next...
            </h2>
          </div>
        </div>

        <BubbleCarousel items={bubbleDestinations} />
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .destinations-section {
            padding: 0 16px !important;
          }

          .destinations-heading {
            margin-bottom: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
