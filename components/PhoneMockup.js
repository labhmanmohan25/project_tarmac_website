function WhatsAppChatScreen({ currentDestination, destinationIndex = 0 }) {
  const randomNames = [
    "Emma",
    "Jake",
    "Sarah",
    "Alex",
    "Maya",
    "Liam",
    "Sofia",
    "Chris",
  ];
  const randomName1 = randomNames[destinationIndex % randomNames.length];
  const randomName2 = randomNames[(destinationIndex + 1) % randomNames.length];

  const tripTitle = currentDestination
    ? `${currentDestination.country} Trip`
    : "Trip Planning";

  return (
    <>
      <div
        style={{
          background: "#1c1c1e",
          padding: "10px 16px",
          marginTop: "6px",
        }}
      >
        <p
          style={{
            fontFamily: '"DM Sans", sans-serif',
            fontSize: "12px",
            fontWeight: "600",
            color: "white",
            margin: 0,
          }}
        >
          {tripTitle}
        </p>
        <p
          style={{
            fontFamily: '"DM Sans", sans-serif',
            fontSize: "8px",
            color: "rgba(255,255,255,0.5)",
            margin: "2px 0 0 0",
          }}
        >
          3 members
        </p>
      </div>

      <div
        style={{
          flex: 1,
          padding: "12px 12px",
          background: "#ffffff",
          height: "360px",
          overflowY: "auto",
        }}
      >
        <div style={{ marginBottom: "12px" }}>
          <p
            style={{
              fontSize: "7.5px",
              fontWeight: "600",
              color: "#666",
              margin: "0 0 4px 0",
              fontFamily: '"DM Sans", sans-serif',
            }}
          >
            {randomName1}
          </p>
          <div
            style={{
              background: "#f0f0f0",
              borderRadius: "8px",
              padding: "6px 10px",
              maxWidth: "180px",
            }}
          >
            <p
              style={{
                fontSize: "8.5px",
                color: "#1c1c1e",
                margin: 0,
                fontFamily: '"DM Sans", sans-serif',
                lineHeight: 1.3,
              }}
            >
              This destination looks perfect for us! Amazing culture and beaches
              🌴
            </p>
            <p
              style={{
                fontSize: "7px",
                color: "#999",
                margin: "2px 0 0 0",
                textAlign: "right",
                fontFamily: '"DM Sans", sans-serif',
              }}
            >
              2:15 PM
            </p>
          </div>
        </div>

        <div style={{ marginBottom: "16px" }}>
          <p
            style={{
              fontSize: "7.5px",
              fontWeight: "600",
              color: "#666",
              margin: "0 0 4px 0",
              fontFamily: '"DM Sans", sans-serif',
            }}
          >
            {randomName2}
          </p>
          <div
            style={{
              background: "#f0f0f0",
              borderRadius: "8px",
              padding: "6px 10px",
              maxWidth: "180px",
            }}
          >
            <p
              style={{
                fontSize: "8.5px",
                color: "#1c1c1e",
                margin: 0,
                fontFamily: '"DM Sans", sans-serif',
                lineHeight: 1.3,
              }}
            >
              Totally agree! Let&apos;s book this asap. Tarmac can handle all
              the details 🎯
            </p>
            <p
              style={{
                fontSize: "7px",
                color: "#999",
                margin: "2px 0 0 0",
                textAlign: "right",
                fontFamily: '"DM Sans", sans-serif',
              }}
            >
              2:16 PM
            </p>
          </div>
        </div>

        {currentDestination && (
          <div
            style={{
              background: "white",
              borderRadius: "14px",
              overflow: "hidden",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              marginTop: "8px",
              width: "220px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <div
              style={{
                height: "130px",
                background: currentDestination.gradient,
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "8px",
                  right: "8px",
                  background: "rgba(0,0,0,0.4)",
                  borderRadius: "6px",
                  padding: "2px 6px",
                  fontSize: "8px",
                  fontFamily: '"DM Sans", sans-serif',
                  color: "white",
                  fontWeight: "600",
                }}
              >
                ⭐ {currentDestination.rating}
              </div>
            </div>
            <div style={{ padding: "10px 12px" }}>
              <p
                style={{
                  fontSize: "13px",
                  fontWeight: "700",
                  color: "#1c1c1e",
                  marginBottom: "2px",
                  fontFamily: '"DM Sans", sans-serif',
                }}
              >
                {currentDestination.name}
              </p>
              <p
                style={{
                  fontSize: "9px",
                  color: "#999",
                  marginBottom: "8px",
                  fontFamily: '"DM Sans", sans-serif',
                }}
              >
                {currentDestination.country}
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <p
                    style={{
                      fontSize: "8px",
                      color: "#aaa",
                      margin: 0,
                      fontFamily: '"DM Sans", sans-serif',
                    }}
                  >
                    From
                  </p>
                  <p
                    style={{
                      fontSize: "12px",
                      fontWeight: "700",
                      color: "#1c1c1e",
                      margin: "2px 0 0 0",
                      fontFamily: '"DM Sans", sans-serif',
                    }}
                  >
                    {currentDestination.price}
                  </p>
                </div>
                <button
                  style={{
                    background: "#1c1c1e",
                    color: "white",
                    border: "none",
                    borderRadius: "10px",
                    padding: "5px 12px",
                    fontSize: "9px",
                    fontWeight: "600",
                    cursor: "pointer",
                    fontFamily: '"DM Sans", sans-serif',
                  }}
                >
                  Explore
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div
        style={{
          background: "#f8f8f8",
          padding: "8px 12px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          borderTop: "1px solid #e0e0e0",
        }}
      >
        <input
          type="text"
          placeholder="Message..."
          style={{
            flex: 1,
            background: "white",
            borderRadius: "12px",
            border: "1px solid #e0e0e0",
            padding: "5px 10px",
            fontSize: "8px",
            color: "#1c1c1e",
            fontFamily: '"DM Sans", sans-serif',
            outline: "none",
          }}
        />
        <button
          style={{
            background: "#1c1c1e",
            color: "white",
            border: "none",
            borderRadius: "50%",
            width: "20px",
            height: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            fontSize: "10px",
          }}
        >
          →
        </button>
      </div>
    </>
  );
}

function DarkAppScreen() {
  return (
    <>
      <div style={{ padding: "10px 16px 14px", marginTop: "6px" }}>
        <p
          style={{
            fontFamily: '"DM Sans", sans-serif',
            fontSize: "10px",
            color: "rgba(255,255,255,0.5)",
            marginBottom: "4px",
          }}
        >
          Active Trip
        </p>
        <p
          style={{
            fontFamily: '"Bricolage Grotesque", sans-serif',
            fontSize: "18px",
            fontWeight: "800",
            color: "white",
            lineHeight: 1.1,
          }}
        >
          Tokyo Adventure
        </p>
        <p
          style={{
            fontFamily: '"DM Sans", sans-serif',
            fontSize: "9px",
            color: "rgba(255,255,255,0.5)",
            marginTop: "2px",
          }}
        >
          Day 3 of 8 · ¥ Budget on track
        </p>

        <div
          style={{
            background: "rgba(255,255,255,0.1)",
            borderRadius: "4px",
            height: "4px",
            marginTop: "10px",
          }}
        >
          <div
            style={{
              background: "linear-gradient(90deg, #F97316, #FB923C)",
              borderRadius: "4px",
              height: "4px",
              width: "38%",
            }}
          />
        </div>

        <div
          style={{
            background: "rgba(249, 115, 22, 0.15)",
            border: "1px solid rgba(249, 115, 22, 0.3)",
            borderRadius: "10px",
            padding: "8px 10px",
            marginTop: "12px",
            display: "flex",
            gap: "8px",
            alignItems: "flex-start",
          }}
        >
          <span style={{ fontSize: "12px" }}>⚡</span>
          <div>
            <p
              style={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: "9.5px",
                fontWeight: "600",
                color: "white",
              }}
            >
              Flight Update
            </p>
            <p
              style={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: "8.5px",
                color: "rgba(255,255,255,0.6)",
              }}
            >
              NRT → JFK delayed 45 min · Auto-rerouted
            </p>
          </div>
        </div>

        <p
          style={{
            fontFamily: '"DM Sans", sans-serif',
            fontSize: "9px",
            color: "rgba(255,255,255,0.4)",
            marginTop: "12px",
            marginBottom: "6px",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Today&apos;s Plan
        </p>
        {[
          {
            time: "09:00",
            name: "Tsukiji Market Tour",
            icon: "🍣",
            done: true,
          },
          { time: "13:00", name: "Shibuya Crossing", icon: "🏙", done: false },
          {
            time: "19:00",
            name: "Dinner: Nobu Tokyo",
            icon: "🥢",
            done: false,
          },
        ].map((item) => (
          <div
            key={item.name}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 0",
              borderBottom: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            <span style={{ fontSize: "12px", opacity: item.done ? 0.4 : 1 }}>
              {item.icon}
            </span>
            <div style={{ flex: 1 }}>
              <p
                style={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: "9.5px",
                  fontWeight: "500",
                  color: item.done ? "rgba(255,255,255,0.3)" : "white",
                  textDecoration: item.done ? "line-through" : "none",
                }}
              >
                {item.name}
              </p>
              <p
                style={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: "8px",
                  color: "rgba(255,255,255,0.3)",
                }}
              >
                {item.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          background: "rgba(255,255,255,0.04)",
          borderTop: "0.5px solid rgba(255,255,255,0.08)",
          display: "flex",
          justifyContent: "space-around",
          padding: "7px 0 12px",
        }}
      >
        {["Home", "Trip", "Expenses", "Profile"].map((label, i) => (
          <div key={label} style={{ textAlign: "center" }}>
            <p
              style={{
                fontSize: "8.5px",
                fontWeight: i === 1 ? "600" : "400",
                color: i === 1 ? "#F97316" : "rgba(255,255,255,0.35)",
                fontFamily: '"DM Sans", sans-serif',
              }}
            >
              {label}
            </p>
            {i === 1 && (
              <div
                style={{
                  width: "4px",
                  height: "4px",
                  background: "#F97316",
                  borderRadius: "50%",
                  margin: "2px auto 0",
                }}
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default function PhoneMockup({
  variant = "default",
  currentDestination,
  destinationIndex = 0,
}) {
  return (
    <div
      style={{
        width: "260px",
        height: "536px",
        background: variant === "dark" ? "#1a1a2e" : "#ffffff",
        borderRadius: "42px",
        border: `7px solid ${variant === "dark" ? "#2a2a3e" : "#1c1c1e"}`,
        boxShadow:
          variant === "dark"
            ? "0 0 0 1px #3a3a5c, 0 40px 80px rgba(0,0,0,0.5)"
            : "0 0 0 1.5px #3a3a3c, 0 32px 72px rgba(0,0,0,0.28)",
        overflow: "hidden",
        position: "relative",
        flexShrink: 0,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "84px",
          height: "24px",
          background: "#1c1c1e",
          borderRadius: "12px",
          zIndex: 10,
        }}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "6px 18px 0",
          fontSize: "10px",
          fontWeight: "600",
          color: variant === "dark" ? "rgba(255,255,255,0.8)" : "#1c1c1e",
          fontFamily: '"DM Sans", sans-serif',
        }}
      >
        <span>9:41</span>
        <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
          <svg width="13" height="8" viewBox="0 0 14 9">
            <rect
              x="0"
              y="5.5"
              width="2.5"
              height="3.5"
              rx="0.5"
              fill={variant === "dark" ? "rgba(255,255,255,0.8)" : "#1c1c1e"}
            />
            <rect
              x="3.5"
              y="3.5"
              width="2.5"
              height="5.5"
              rx="0.5"
              fill={variant === "dark" ? "rgba(255,255,255,0.8)" : "#1c1c1e"}
            />
            <rect
              x="7"
              y="1.5"
              width="2.5"
              height="7.5"
              rx="0.5"
              fill={variant === "dark" ? "rgba(255,255,255,0.8)" : "#1c1c1e"}
            />
            <rect
              x="10.5"
              y="0"
              width="2.5"
              height="9"
              rx="0.5"
              fill={variant === "dark" ? "rgba(255,255,255,0.8)" : "#1c1c1e"}
            />
          </svg>
          <svg width="20" height="10" viewBox="0 0 25 12" fill="none">
            <rect
              x="0.5"
              y="0.5"
              width="20"
              height="11"
              rx="3"
              stroke={variant === "dark" ? "rgba(255,255,255,0.8)" : "#1c1c1e"}
              strokeWidth="1"
            />
            <rect
              x="2"
              y="2"
              width="14"
              height="8"
              rx="1.5"
              fill={variant === "dark" ? "rgba(255,255,255,0.8)" : "#1c1c1e"}
            />
          </svg>
        </div>
      </div>

      {variant === "dark" ? (
        <DarkAppScreen />
      ) : (
        <WhatsAppChatScreen
          currentDestination={currentDestination}
          destinationIndex={destinationIndex}
        />
      )}
    </div>
  );
}
