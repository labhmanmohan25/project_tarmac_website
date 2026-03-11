const avatars = [
  {
    background:
      "radial-gradient(circle at 35% 30%, #f7d8c7 0 18%, transparent 19%), linear-gradient(180deg, #3b2220 0%, #70473e 34%, #d59a7d 35%, #efc6af 100%)",
  },
  {
    background:
      "radial-gradient(circle at 42% 28%, #f5d2bf 0 17%, transparent 18%), linear-gradient(180deg, #6f3025 0%, #a94d38 32%, #e2a786 33%, #f3cfba 100%)",
  },
  {
    background:
      "radial-gradient(circle at 45% 30%, #f6d8c9 0 18%, transparent 19%), linear-gradient(180deg, #2c1b1a 0%, #5c342d 30%, #c98c72 31%, #edc3ad 100%)",
  },
  {
    background:
      "radial-gradient(circle at 46% 28%, #f3d1bf 0 17%, transparent 18%), linear-gradient(180deg, #1b1b1c 0%, #343436 32%, #b98568 33%, #e8bea7 100%)",
  },
];

export default function AvatarGroup({
  dark = false,
  countText = "+1K",
  label,
  showLabel = true,
}) {
  const textLabel = label ?? (dark ? "travelers" : "community members");

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <div style={{ display: "flex" }}>
        {avatars.map(({ background }, i) => (
          <div
            key={i}
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background,
              border: `2px solid ${dark ? "#111111" : "#eeebe6"}`,
              marginLeft: i > 0 ? "-12px" : "0",
              position: "relative",
              zIndex: 4 - i,
              boxShadow: dark
                ? "0 4px 14px rgba(0,0,0,0.32)"
                : "0 4px 12px rgba(28,28,30,0.08)",
            }}
          />
        ))}
        <div
          style={{
            width: "48px",
            height: "40px",
            borderRadius: "999px",
            background: dark ? "#f1e8e1" : "#eadbd3",
            color: "#4a3030",
            border: `2px solid ${dark ? "#111111" : "#eeebe6"}`,
            marginLeft: "-12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            zIndex: 0,
            fontSize: "17px",
            fontWeight: "500",
            fontFamily: '"DM Sans", sans-serif',
            letterSpacing: "-0.03em",
          }}
        >
          {countText}
        </div>
      </div>
      {showLabel ? (
        <p
          style={{
            fontSize: "12px",
            color: dark ? "rgba(255,255,255,0.55)" : "#888",
            fontFamily: '"DM Sans", sans-serif',
          }}
        >
          <span
            style={{ fontWeight: "700", color: dark ? "white" : "#1c1c1e" }}
          >
            {countText.replace("+", "")}
          </span>{" "}
          {textLabel}
        </p>
      ) : null}
    </div>
  );
}
