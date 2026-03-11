export default function SectionLabel({ text, dark = false, accent = false }) {
  return (
    <p
      className="app-type-label"
      style={{
        color: accent ? "#F97316" : dark ? "rgba(255,255,255,0.4)" : "#999",
        marginBottom: "16px",
      }}
    >
      {text}
    </p>
  );
}
