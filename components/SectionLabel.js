export default function SectionLabel({ text, dark = false, accent = false }) {
  return (
    <p
      style={{
        fontSize: "11px",
        fontWeight: "600",
        letterSpacing: "0.16em",
        textTransform: "uppercase",
        color: accent ? "#F97316" : dark ? "rgba(255,255,255,0.4)" : "#999",
        marginBottom: "16px",
        fontFamily: '"DM Sans", sans-serif',
      }}
    >
      {text}
    </p>
  );
}
