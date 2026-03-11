export default function SegmentedControl({ options, selected, onChange }) {
  return (
    <>
      <div
        className="segmented-control"
        style={{
          display: "inline-flex",
          background: "white",
          border: "1.5px solid #e0ddd8",
          borderRadius: "12px",
          padding: "4px",
          gap: "4px",
        }}
      >
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => onChange(option.value)}
            className="segmented-control-btn"
            style={{
              padding: "10px 20px",
              fontSize: "13px",
              fontWeight: "600",
              fontFamily: '"DM Sans", sans-serif',
              border: "none",
              borderRadius: "8px",
              background: selected === option.value ? "#1c1c1e" : "transparent",
              color: selected === option.value ? "white" : "#666",
              cursor: "pointer",
              transition: "all 0.2s ease",
              whiteSpace: "nowrap",
            }}
          >
            {option.label}
          </button>
        ))}
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          .segmented-control {
            width: max-content;
          }

          .segmented-control-btn {
            padding: 9px 14px !important;
            font-size: 12px !important;
          }
        }
      `}</style>
    </>
  );
}
