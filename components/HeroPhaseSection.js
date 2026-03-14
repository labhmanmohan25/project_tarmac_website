import { useMemo, useState } from "react";
import SegmentedControl from "./SegmentedControl";
import PhaseCarousel from "./PhaseCarousel";

function PostTripCardBase({
  kind,
  title,
  subtitle,
  cta,
  children,
  accent = "suggestion",
  showCta = true,
  sourcesCount,
}) {
  return (
    <div className={`posttrip-card posttrip-card-${accent}`}>
      {null}

      {title ? <p className="posttrip-title">{title}</p> : null}
      {subtitle ? <p className="posttrip-subtitle">{subtitle}</p> : null}

      {children}

      {showCta && cta ? <div className="posttrip-cta">{cta}</div> : null}
      {sourcesCount && <p className="card-sources-scanned">{sourcesCount}</p>}
    </div>
  );
}

function PostTripSplitCard() {
  const peopleCount = 4;

  return (
    <PostTripCardBase
      kind="Content Card"
      title="Split the costs between everyone."
      subtitle="Type your split request and set group size."
      cta="Split Now"
      accent="content"
    >
      <div className="posttrip-input-shell" aria-label="Split request input">
        <span className="posttrip-input-icon" aria-hidden="true">
          #
        </span>
        <span className="posttrip-input-text">
          shared rides · dinners · day trips
        </span>
      </div>

      <div className="posttrip-stepper-row" aria-label="People count stepper">
        <span className="posttrip-stepper-label">People</span>
        <div
          className="posttrip-stepper"
          role="group"
          aria-label="Select people count"
        >
          <span className="posttrip-stepper-btn" aria-hidden="true">
            -
          </span>
          <span className="posttrip-stepper-count">{peopleCount}</span>
          <span className="posttrip-stepper-btn" aria-hidden="true">
            +
          </span>
        </div>
      </div>
    </PostTripCardBase>
  );
}

function PostTripQuestionCard({ title, cta }) {
  return (
    <PostTripCardBase
      kind="Question Card"
      title={title}
      subtitle="Ask once. Tarmac generates next-step options instantly."
      cta={cta}
      accent="question"
    />
  );
}

function PostTripSuggestionCard({ title, subtitle, kind = "Suggestion Card", accent = "suggestion", previewContent, sourcesCount, cta = "View More" }) {
  return (
    <PostTripCardBase kind={kind} title={title} subtitle={subtitle} cta={cta} accent={accent} sourcesCount={sourcesCount}>
      {previewContent && <div className="posttrip-result-preview">{previewContent}</div>}
    </PostTripCardBase>
  );
}

function PreTripCardBase({
  kind,
  title,
  subtitle,
  cta,
  children,
  accent = "question",
  showCta = true,
  sourcesCount,
}) {
  return (
    <div className={`pretrip-card pretrip-card-${accent}`}>
      {null}

      {title ? <p className="pretrip-title">{title}</p> : null}
      {subtitle ? <p className="pretrip-subtitle">{subtitle}</p> : null}

      {children}

      {showCta && cta ? <div className="pretrip-cta">{cta}</div> : null}
      {sourcesCount && <p className="card-sources-scanned">{sourcesCount}</p>}
    </div>
  );
}

function PreTripTypeInputCard() {
  return (
    <PreTripCardBase
      kind="Content Card"
      title="Where do you want to go?"
      subtitle="Start with a mood, destination type, or a city list."
      cta="Generate Ideas"
      accent="content"
    >
      <input
        className="pretrip-type-input"
        type="text"
        defaultValue="warm coast + local food scene + short haul"
        readOnly
        aria-label="Destination type input"
      />
    </PreTripCardBase>
  );
}

function PreTripTextQuestionCard({ title }) {
  return (
    <PreTripCardBase
      kind="Question Card"
      title={title}
      subtitle="Answer once and Tarmac carries it through the full plan."
      cta="Save Answer"
      accent="question"
    >
      <div className="pretrip-input-shell" aria-label="Text input field">
        <span className="pretrip-input-text">Tap to type your answer...</span>
      </div>
    </PreTripCardBase>
  );
}

function PreTripDateQuestionCard({ title }) {
  return (
    <PreTripCardBase
      kind="Question Card"
      title={title}
      subtitle={null}
      cta="Set Dates"
      accent="question"
    >
      <div className="pretrip-chip-row" aria-label="Date range selector">
        <span className="pretrip-chip pretrip-chip-selected">Aug 12</span>
        <span className="pretrip-chip">Aug 20</span>
      </div>
    </PreTripCardBase>
  );
}

function PreTripStepperQuestionCard({ title }) {
  const count = 4;

  return (
    <PreTripCardBase
      kind="Question Card"
      title={title}
      subtitle={null}
      cta="Confirm Group"
      accent="question"
    >
      <div
        className="pretrip-stepper"
        role="group"
        aria-label="People count stepper"
      >
        <span className="pretrip-stepper-btn" aria-hidden="true">
          -
        </span>
        <span className="pretrip-stepper-count">{count}</span>
        <span className="pretrip-stepper-btn" aria-hidden="true">
          +
        </span>
      </div>
    </PreTripCardBase>
  );
}

function PreTripBudgetQuestionCard({ title }) {
  return (
    <PreTripCardBase
      kind="Question Card"
      title={title}
      subtitle={null}
      cta="Set Budget"
      accent="question"
    >
      <div className="pretrip-input-shell" aria-label="Budget input">
        <span className="pretrip-currency">USD</span>
        <span className="pretrip-input-text">4,000</span>
      </div>
    </PreTripCardBase>
  );
}

function PreTripChipsQuestionCard({ title, chips }) {
  const baseChips = chips.slice(0, 4);
  const selectedChips = baseChips.slice(0, 2);
  const customChips = ["Custom"];

  return (
    <PreTripCardBase
      kind="Question Card"
      title={title}
      subtitle="Choose all that apply"
      cta="Apply Preferences"
      accent="question"
    >
      <div
        className="pretrip-chip-input-row"
        aria-label="Add custom preference"
      >
        <div className="pretrip-chip-input">Add preference</div>
        <div className="pretrip-chip-enter" aria-hidden="true">
          Enter
        </div>
      </div>

      <div className="pretrip-chip-row" aria-label="Multi select choices">
        {baseChips.map((chip) => (
          <span
            key={chip}
            className={`pretrip-chip ${selectedChips.includes(chip) ? "pretrip-chip-selected" : ""}`}
          >
            {chip}
          </span>
        ))}

        {customChips.map((chip) => (
          <span
            key={chip}
            className={`pretrip-chip ${selectedChips.includes(chip) ? "pretrip-chip-selected" : ""}`}
          >
            {chip}
          </span>
        ))}
      </div>
    </PreTripCardBase>
  );
}

function PreTripToggleQuestionCard({ title }) {
  return (
    <PreTripCardBase
      kind="Question Card"
      title={title}
      subtitle={null}
      cta="Save Choice"
      accent="question"
    >
      <div className="pretrip-toggle" role="group" aria-label="Yes no toggle">
        <span className="pretrip-toggle-btn">Yes</span>
        <span className="pretrip-toggle-btn">No</span>
      </div>
    </PreTripCardBase>
  );
}

function PreTripPollCard({ title, options, subtext = [] }) {
  const votes = options.map((_, index) => options.length - index);
  const selectedOption = 0;

  const totalVotes = votes.reduce((sum, count) => sum + count, 0);

  const getPercent = (count) => Math.round((count / totalVotes) * 100);

  return (
    <PreTripCardBase
      kind="Poll Card"
      title={title}
      subtitle={null}
      cta={null}
      accent="poll"
      showCta={false}
    >
      <div className="pretrip-poll-options" aria-label="Poll options">
        {options.map((option, index) => (
          <div
            key={option}
            className={`pretrip-poll-option ${selectedOption === index ? "pretrip-poll-option-active" : ""}`}
          >
            <div className="pretrip-poll-option-head">
              <span>{option}</span>
              <span className="pretrip-poll-percent">
                {getPercent(votes[index])}%
              </span>
            </div>

            <div className="pretrip-poll-bar-track" aria-hidden="true">
              <span
                className="pretrip-poll-bar-fill"
                style={{ width: `${getPercent(votes[index])}%` }}
              />
            </div>

            {subtext[index] ? <small>{subtext[index]}</small> : null}
          </div>
        ))}
      </div>
    </PreTripCardBase>
  );
}

function PreTripSuggestionCard({ title, subtitle, warning = false, previewContent, sourcesCount, cta = "View More" }) {
  const defaultSubtitle = warning
    ? "Potential risk detected from route data, seasonality, and travel patterns."
    : "Generated proactively from calendars, trip profile, and live destination signals.";
  return (
    <PreTripCardBase
      kind={warning ? "Warning Card" : "Suggestion Card"}
      title={title}
      subtitle={subtitle || defaultSubtitle}
      cta={cta}
      accent={warning ? "warning" : "suggestion"}
      sourcesCount={sourcesCount}
    >
      {previewContent && <div className="pretrip-result-preview">{previewContent}</div>}
    </PreTripCardBase>
  );
}

function InTripCardBase({
  kind,
  title,
  subtitle,
  cta,
  children,
  accent = "question",
  urgent = false,
  showCta = true,
  sourcesCount,
}) {
  return (
    <div className={`intrip-card intrip-card-${accent}`}>
      {null}

      {title ? <p className="intrip-title">{title}</p> : null}
      {subtitle ? <p className="intrip-subtitle">{subtitle}</p> : null}

      {children}

      {showCta && cta ? (
        <div className={`intrip-cta ${urgent ? "intrip-cta-urgent" : ""}`}>
          {cta}
        </div>
      ) : null}
      {sourcesCount && <p className="card-sources-scanned">{sourcesCount}</p>}
    </div>
  );
}

function InTripTypeInputCard() {
  return (
    <InTripCardBase
      kind="Content Card"
      title="Quick ask while you're moving."
      subtitle="Type once and get immediate options around your current location."
      cta="Search Nearby"
      accent="content"
    >
      <input
        className="intrip-type-input"
        type="text"
        defaultValue="best ramen open right now near me"
        readOnly
        aria-label="In-trip type input"
      />
    </InTripCardBase>
  );
}

function InTripActionQuestionCard({ title, cta }) {
  return (
    <InTripCardBase
      kind="Question Card"
      title={title}
      subtitle={null}
      cta={cta}
      accent="question"
    />
  );
}

function InTripBudgetQuestionCard({ title, cta }) {
  return (
    <InTripCardBase
      kind="Question Card"
      title={title}
      subtitle="Set a budget range and get nearby options filtered by cost."
      cta={cta}
      accent="question"
    >
      <div className="intrip-input-shell" aria-label="Budget range input">
        <span className="intrip-currency">USD</span>
        <span className="intrip-input-text">30 - 80 / day</span>
      </div>
    </InTripCardBase>
  );
}

function InTripSuggestionCard({ title, subtitle, warning = false, urgent = false, previewContent, sourcesCount, cta = "View More" }) {
  const defaultSubtitle = warning
    ? "Live risk signal detected from weather, transport, and timing data."
    : "Context-aware suggestion generated from your location, time window, and group flow.";
  return (
    <InTripCardBase
      kind={warning ? "Warning Card" : "Suggestion Card"}
      title={title}
      subtitle={subtitle || defaultSubtitle}
      cta={cta}
      accent={warning ? "warning" : "suggestion"}
      urgent={urgent}
      sourcesCount={sourcesCount}
    >
      {previewContent && <div className="intrip-result-preview">{previewContent}</div>}
    </InTripCardBase>
  );
}

function InTripPollCard({ title, options, subtext = [] }) {
  const votes = options.map((_, index) => options.length - index);
  const selectedOption = 0;

  const totalVotes = votes.reduce((sum, count) => sum + count, 0);

  const getPercent = (count) => Math.round((count / totalVotes) * 100);

  return (
    <InTripCardBase
      kind="Poll Card"
      title={title}
      subtitle={null}
      cta={null}
      accent="poll"
      showCta={false}
    >
      <div className="intrip-poll-options" aria-label="In-trip poll options">
        {options.map((option, index) => (
          <div
            key={option}
            className={`intrip-poll-option ${selectedOption === index ? "intrip-poll-option-active" : ""}`}
          >
            <div className="intrip-poll-option-head">
              <span>{option}</span>
              <span className="intrip-poll-percent">
                {getPercent(votes[index])}%
              </span>
            </div>

            <div className="intrip-poll-bar-track" aria-hidden="true">
              <span
                className="intrip-poll-bar-fill"
                style={{ width: `${getPercent(votes[index])}%` }}
              />
            </div>

            {subtext[index] ? <small>{subtext[index]}</small> : null}
          </div>
        ))}
      </div>
    </InTripCardBase>
  );
}

function ExpenseCategoryBars({ categories }) {
  return (
    <div className="expense-cat-list">
      {categories.map((cat) => (
        <div key={cat.label} className="expense-cat-row">
          <span className="expense-cat-label">{cat.label}</span>
          <div className="expense-bar-track">
            <div className="expense-bar-fill" style={{ width: `${cat.percent}%`, background: cat.color }} />
          </div>
          <span className="expense-cat-pct">{cat.percent}%</span>
        </div>
      ))}
    </div>
  );
}

function DestinationFitList({ destinations }) {
  return (
    <div className="dest-fit-list">
      {destinations.map((d) => (
        <div key={d.name} className="dest-fit-row">
          <span className="dest-flag">{d.flag}</span>
          <span className="dest-name">{d.name}</span>
          <div className="dest-fit-bar-wrap">
            <div className="dest-fit-bar-fill" style={{ width: `${d.fit}%` }} />
          </div>
          <span className="dest-fit-pct">{d.fit}%</span>
          {d.price && <span className="dest-price">{d.price}</span>}
        </div>
      ))}
    </div>
  );
}

function RestaurantPreview({ name, rating, distance, priceRange, tag }) {
  return (
    <div className="restaurant-preview">
      <div className="restaurant-preview-top">
        <span className="restaurant-name">{name}</span>
        <span className="restaurant-rating">★ {rating}</span>
      </div>
      <div className="restaurant-preview-meta">
        <span>{distance}</span>
        <span className="restaurant-dot">·</span>
        <span>{priceRange}</span>
        {tag && <span className="restaurant-tag">{tag}</span>}
      </div>
    </div>
  );
}

function FlightAlternativeRow({ airline, flightNo, time, duration, price, isRecommended }) {
  return (
    <div className={`flight-alt-row ${isRecommended ? "flight-alt-row-rec" : ""}`}>
      <span className="flight-alt-time">{time}</span>
      <span className="flight-alt-airline">{airline} {flightNo}</span>
      <span className="flight-alt-duration">{duration}</span>
      <span className="flight-alt-price">{price}</span>
      {isRecommended && <span className="flight-alt-badge">Best</span>}
    </div>
  );
}

function MapsLinkButton({ label }) {
  return (
    <div className="maps-link-btn" aria-label="Open in Maps">
      <span className="maps-link-icon">📍</span>
      <span className="maps-link-text">{label}</span>
      <span className="maps-link-arrow">↗</span>
    </div>
  );
}

function StatBadgeRow({ items }) {
  return (
    <div className="stat-badge-row">
      {items.map((item) => (
        <div key={item.label} className="stat-badge">
          <span className="stat-badge-value">{item.value}</span>
          <span className="stat-badge-label">{item.label}</span>
        </div>
      ))}
    </div>
  );
}

const phaseOptions = [
  { value: "pretrip", label: "Pre-Trip" },
  { value: "intrip", label: "In-Trip" },
  { value: "posttrip", label: "Post-Trip" },
];

const phaseCardsConfig = {
  pretrip: [
    {
      title: "Where do you want to go?",
      description: "Pre-Trip Content Card",
      chatMessages: [
        { name: "Riya", text: "coastal 🌊 please!!" },
        { name: "Jake", text: "not too far though" },
      ],
      renderCard: () => <PreTripTypeInputCard />,
    },
    {
      title: "Where do you want to go?",
      description: "Pre-Trip Question Card",
      chatMessages: [
        { name: "Sam", text: "Thailand??" },
        { name: "Riya", text: "or Bali 🏝️" },
        { name: "Jake", text: "either works for me" },
      ],
      renderCard: () => (
        <PreTripTextQuestionCard title="Where do you want to go?" />
      ),
    },
    {
      title: "When are you thinking of traveling?",
      description: "Pre-Trip Question Card",
      chatMessages: [
        { name: "Jake", text: "Aug 12 works!!" },
        { name: "Riya", text: "Aug 20 is free too" },
      ],
      renderCard: () => (
        <PreTripDateQuestionCard title="When are you thinking of traveling?" />
      ),
    },
    {
      title: "How many people are joining?",
      description: "Pre-Trip Question Card",
      chatMessages: [
        { name: "Sam", text: "all 4 of us right?" },
        { name: "Jake", text: "yep Priya's in 🙌" },
      ],
      renderCard: () => (
        <PreTripStepperQuestionCard title="How many people are joining?" />
      ),
    },
    {
      title: "What's your total budget?",
      description: "Pre-Trip Question Card",
      chatMessages: [
        { name: "Riya", text: "$1k each, doable?" },
        { name: "Sam", text: "works for me" },
      ],
      renderCard: () => (
        <PreTripBudgetQuestionCard title="What's your total budget?" />
      ),
    },
    {
      title: "How do you prefer to get around?",
      description: "Pre-Trip Question Card",
      chatMessages: [
        { name: "Jake", text: "flights obv" },
        { name: "Riya", text: "road trip if we rent?" },
      ],
      renderCard: () => (
        <PreTripChipsQuestionCard
          title="How do you prefer to get around?"
          chips={["Flights", "Train", "Road Trip", "Ferry"]}
        />
      ),
    },
    {
      title: "Where do you like to stay?",
      description: "Pre-Trip Question Card",
      chatMessages: [
        { name: "Sam", text: "Airbnb, more space" },
        { name: "Jake", text: "agreed 🏠" },
      ],
      renderCard: () => (
        <PreTripChipsQuestionCard
          title="Where do you like to stay?"
          chips={["Hostel", "Hotel", "Airbnb", "Camping"]}
        />
      ),
    },
    {
      title: "Any dietary restrictions?",
      description: "Pre-Trip Question Card",
      chatMessages: [
        { name: "Jake", text: "Priya's vegan right?" },
        { name: "Sam", text: "yeah add it in" },
      ],
      renderCard: () => (
        <PreTripChipsQuestionCard
          title="Any dietary restrictions?"
          chips={["Vegan", "Vegetarian", "Halal", "Gluten-free", "None"]}
        />
      ),
    },
    {
      title: "What kind of trip is this?",
      description: "Pre-Trip Question Card",
      chatMessages: [
        { name: "Riya", text: "food AND adventure 🙏" },
        { name: "Jake", text: "culture too!!" },
      ],
      renderCard: () => (
        <PreTripChipsQuestionCard
          title="What kind of trip is this?"
          chips={["Adventure", "Relaxation", "Culture", "Food"]}
        />
      ),
    },
    {
      title: "Do you have loyalty points or coupons?",
      description: "Pre-Trip Question Card",
      chatMessages: [
        { name: "Jake", text: "I have Marriott points" },
        { name: "Sam", text: "use them!!" },
      ],
      renderCard: () => (
        <PreTripToggleQuestionCard title="Do you have loyalty points or coupons?" />
      ),
    },
    {
      title: "Want me to check everyone's calendars?",
      description: "Pre-Trip Question Card",
      chatMessages: [
        { name: "Riya", text: "yes pleeease 📅" },
        { name: "Sam", text: "good idea" },
      ],
      renderCard: () => (
        <PreTripToggleQuestionCard title="Want me to check everyone's calendars?" />
      ),
    },
    {
      title: "Should I build a packing checklist?",
      description: "Pre-Trip Question Card",
      chatMessages: [
        { name: "Sam", text: "omg yes" },
        { name: "Jake", text: "finally, someone organised 😂" },
      ],
      renderCard: () => (
        <PreTripToggleQuestionCard title="Should I build a packing checklist?" />
      ),
    },
    {
      title: "Beach or mountains?",
      description: "Pre-Trip Poll Card",
      chatMessages: [
        { name: "Riya", text: "beach vote 🏖️" },
        { name: "Jake", text: "mountains!! come on" },
      ],
      renderCard: () => (
        <PreTripPollCard
          title="Beach or mountains?"
          options={["Beach", "Mountains"]}
        />
      ),
    },
    {
      title: "Which of these 3 destinations?",
      description: "Pre-Trip Poll Card",
      chatMessages: [
        { name: "Sam", text: "Bali no contest" },
        { name: "Riya", text: "Lisbon is so good tho 🏛️" },
      ],
      renderCard: () => (
        <PreTripPollCard
          title="Which of these 3 destinations?"
          options={["Bali", "Almaty", "Lisbon"]}
        />
      ),
    },
    {
      title: "Early flight or later flight?",
      description: "Pre-Trip Poll Card",
      chatMessages: [
        { name: "Jake", text: "later flight, not a morning person 😅" },
        { name: "Sam", text: "same 😭" },
      ],
      renderCard: () => (
        <PreTripPollCard
          title="Early flight or later flight?"
          options={["Early Flight", "Later Flight"]}
          subtext={["Cheaper + longer day", "Less rush + shorter day"]}
        />
      ),
    },
    {
      title: "Swap the museum? Adds 2 hrs and cost but highly rated.",
      description: "Pre-Trip Poll Card",
      chatMessages: [
        { name: "Riya", text: "keep it, reviews are incredible" },
      ],
      renderCard: () => (
        <PreTripPollCard
          title="Swap the museum? Adds 2 hrs and cost but highly rated."
          options={["Keep It", "Swap It"]}
        />
      ),
    },
    {
      title: "Adventure day or relaxed day for the last stretch?",
      description: "Pre-Trip Poll Card",
      chatMessages: [
        { name: "Jake", text: "adventure!! we sleep at home" },
        { name: "Sam", text: "agreed 🙌" },
      ],
      renderCard: () => (
        <PreTripPollCard
          title="Adventure day or relaxed day for the last stretch?"
          options={["Adventure Day", "Relaxed Day"]}
        />
      ),
    },
    {
      title: "Here are dates when everyone is free.",
      description: "Pre-Trip Suggestion Card",
      chatMessages: [
        { name: "Sam", text: "Aug 12 LET'S GO 🚀" },
        { name: "Riya", text: "locking this in" },
      ],
      renderCard: () => (
        <PreTripSuggestionCard
          title="Here are dates when everyone is free."
          subtitle="Pulled from 4 calendars and cross-matched against your travel window."
          previewContent="Aug 12–20 (all 4 free) · Sep 3–10 (all 4 free) · Aug 19–27 (3 of 4 free)"
          sourcesCount="4 calendars scanned"
          cta="Lock These Dates"
        />
      ),
    },
    {
      title: "Your group is split. Running a poll.",
      description: "Pre-Trip Suggestion Card",
      chatMessages: [
        { name: "Jake", text: "Bali > everything" },
        { name: "Riya", text: "voted Lisbon 🏛️" },
      ],
      renderCard: () => (
        <PreTripSuggestionCard
          title="Your group is split. Running a poll."
          subtitle="Detected from group chat discussion — launched a tie-breaker poll automatically."
          previewContent="Bali vs Lisbon — 2v2 tie · Poll sent to group · Closes in 24h"
          sourcesCount="Group chat thread analyzed"
          cta="See Poll"
        />
      ),
    },
    {
      title: "You went to beach last trip. Here are mountain options.",
      description: "Pre-Trip Suggestion Card",
      chatMessages: [
        { name: "Sam", text: "Swiss Alps?? yes please 🏔️" },
      ],
      renderCard: () => (
        <PreTripSuggestionCard
          title="You went to beach last trip. Here are mountain options."
          subtitle="Ranked by variety score, distance from last trip type, and group preferences."
          previewContent={<DestinationFitList destinations={[{flag:"🇨🇭",name:"Swiss Alps",fit:91,price:"€1,800"},{flag:"🇯🇵",name:"Hokkaido",fit:87,price:"€1,200"},{flag:"🇵🇪",name:"Cusco",fit:84,price:"€1,500"}]} />}
          sourcesCount="Trip history · 80+ mountain destinations"
          cta="Show Me"
        />
      ),
    },
    {
      title: "It's summer, 10 days - long-haul is out. Here's what fits.",
      description: "Pre-Trip Suggestion Card",
      chatMessages: [
        { name: "Riya", text: "Mykonos or Dubrovnik?" },
        { name: "Jake", text: "Azores is underrated" },
      ],
      renderCard: () => (
        <PreTripSuggestionCard
          title="It's summer, 10 days — long-haul is out. Here's what fits."
          subtitle="Filtered for max 4-hour flights, July–August availability, and your budget range."
          previewContent="Max 4h flight · 23 qualifying destinations · Top 3: Mykonos · Dubrovnik · Azores"
          sourcesCount="Flight data · seasonal filters applied"
          cta="See Destinations"
        />
      ),
    },
    {
      title: "Festival happening during your travel window.",
      description: "Pre-Trip Suggestion Card",
      chatMessages: [
        { name: "Sam", text: "Sziget!! I've wanted to go 🎉" },
        { name: "Jake", text: "Budapest + festival = yes" },
      ],
      renderCard: () => (
        <PreTripSuggestionCard
          title="Festival happening during your travel window."
          subtitle="Detected from public event calendars matching your planned dates."
          previewContent={<>
            <div className="pretrip-event-card">
              <span className="pretrip-event-name">Sziget Festival</span>
              <span className="pretrip-event-location">Budapest · Aug 14–20</span>
            </div>
            <div style={{marginTop:'5px',fontSize:'10px',color:'#484238',fontFamily:'"DM Sans",sans-serif'}}>Tickets from €280 · Flights +20% during dates · Book early</div>
          </>}
          sourcesCount="12 event calendars scanned"
          cta="Tell Me More"
        />
      ),
    },
    {
      title: "Very few vegan spots at destination Z.",
      description: "Pre-Trip Warning Card",
      chatMessages: [
        { name: "Riya", text: "yeah I need more options tbh" },
      ],
      renderCard: () => (
        <PreTripSuggestionCard
          title="Very few vegan options at this destination."
          subtitle="Checked restaurant databases and food review platforms for this route."
          previewContent="Marrakesh: 4 vegan restaurants only (3 tourist-facing) · vs Lisbon: 140+ vegan options"
          sourcesCount="Google Places · HappyCow · 3 food platforms"
          cta="Find Alternatives"
          warning
        />
      ),
    },
    {
      title: "Here are 5 destinations ranked by fit.",
      description: "Pre-Trip Suggestion Card",
      chatMessages: [
        { name: "Jake", text: "Tbilisi 85%! let's go" },
        { name: "Sam", text: "Lisbon is obvious tho" },
      ],
      renderCard: () => (
        <PreTripSuggestionCard
          title="Here are 5 destinations ranked by fit."
          subtitle="Scored against your group's preferences, budget, travel style, and timing."
          previewContent={<DestinationFitList destinations={[{flag:"🇵🇹",name:"Lisbon",fit:94,price:"€1,400"},{flag:"🇲🇽",name:"Oaxaca",fit:89,price:"€1,600"},{flag:"🇬🇪",name:"Tbilisi",fit:85,price:"€950"},{flag:"🇻🇳",name:"Da Nang",fit:82,price:"€1,100"},{flag:"🇲🇦",name:"Marrakesh",fit:78,price:"€1,200"}]} />}
          sourcesCount="47 filters · 200+ destinations ranked"
          cta="Vote Now"
        />
      ),
    },
    {
      title: "Here's a rough itinerary draft.",
      description: "Pre-Trip Suggestion Card",
      chatMessages: [
        { name: "Riya", text: "coast on Day 4–5 🌊" },
      ],
      renderCard: () => (
        <PreTripSuggestionCard
          title="Here's a rough itinerary draft."
          subtitle="Built from destination data, group preferences, and your available days."
          previewContent="Day 1: Arrive + neighborhood walk · Day 2–3: City highlights · Day 4–5: Coast · Day 6: Culture + food · Day 7: Depart"
          sourcesCount="Trip preferences · local event data"
          cta="Review Itinerary"
        />
      ),
    },
    {
      title: "Found a ski resort in budget - added to itinerary.",
      description: "Pre-Trip Suggestion Card",
      chatMessages: [
        { name: "Jake", text: "Niseko!!!! 🎿" },
        { name: "Sam", text: "adding this rn" },
      ],
      renderCard: () => (
        <PreTripSuggestionCard
          title="Found a ski resort in budget — added to itinerary."
          subtitle="Matched against your stated budget range and Day 4 free slot."
          previewContent="Niseko Grand Hirafu · Day 4 · Lift pass ¥8,500/day · Within your ¥10,000 activity budget"
          sourcesCount="8 resort booking sources"
          cta="View Update"
        />
      ),
    },
    {
      title: "Every restaurant has a vegan option. Checked.",
      description: "Pre-Trip Suggestion Card",
      chatMessages: [
        { name: "Riya", text: "this is everything 🙏" },
      ],
      renderCard: () => (
        <PreTripSuggestionCard
          title="Every restaurant has a vegan option. Checked."
          subtitle="Cross-referenced your itinerary against live menu data for each stop."
          previewContent="Kyoya · Ain Soph Ripple · T's Tantan · Nagi Shokudo · + 8 more along your route"
          sourcesCount="Google Places · HappyCow · menus scanned"
          cta="See Restaurants"
        />
      ),
    },
    {
      title: "That flight has a high cancellation rate.",
      description: "Pre-Trip Warning Card",
      chatMessages: [
        { name: "Sam", text: "34%?? no thanks" },
        { name: "Jake", text: "swap to LH1234" },
      ],
      renderCard: () => (
        <PreTripSuggestionCard
          title="That flight has a high cancellation rate."
          subtitle="Based on 90-day historic data for this specific route and carrier."
          previewContent={<>
            <StatBadgeRow items={[{label:"Cancel rate",value:"34%"},{label:"Avg delay",value:"48 min"},{label:"On-time",value:"52%"}]} />
            <div style={{marginTop:'5px',fontSize:'10px',color:'#484238',fontFamily:'"DM Sans",sans-serif'}}>2 better alternatives available: LH1234 (8% cancel) · BA456 (11% cancel)</div>
          </>}
          sourcesCount="FlightAware · 90 days of route data"
          cta="Compare Flights"
          warning
        />
      ),
    },
    {
      title: "That timing cuts close. Here's what a 30-min delay does.",
      description: "Pre-Trip Warning Card",
      chatMessages: [
        { name: "Riya", text: "need more layover time" },
        { name: "Jake", text: "not worth the risk" },
      ],
      renderCard: () => (
        <PreTripSuggestionCard
          title="That timing cuts close. Here's what a 30-min delay does."
          subtitle="Modeled against historical delay data and your connection time."
          previewContent="Layover: 55 min · After 30-min delay: 25 min to gate · Minimum required: 45 min · Miss probability: 67%"
          sourcesCount="FlightAware · OAG schedule data"
          cta="Show Impact"
          warning
        />
      ),
    },
    {
      title: "New event announced - free slot in your itinerary.",
      description: "Pre-Trip Suggestion Card",
      chatMessages: [
        { name: "Sam", text: "Primavera in Kyoto?? yes!!" },
        { name: "Jake", text: "Day 3 afternoon is free" },
      ],
      renderCard: () => (
        <PreTripSuggestionCard
          title="New event announced — free slot in your itinerary."
          subtitle="Detected from live event feeds matching your destination and travel dates."
          previewContent="Primavera Sound Kyoto · Nov 7 · Free slot: Day 3 afternoon · Tickets from €60"
          sourcesCount="8 event calendar feeds"
          cta="Add to Plan"
        />
      ),
    },
    {
      title: "Flight prices dropped. Good time to book.",
      description: "Pre-Trip Suggestion Card",
      chatMessages: [
        { name: "Sam", text: "$318!! booking NOW 🚨" },
        { name: "Riya", text: "everyone do it rn" },
      ],
      renderCard: () => (
        <PreTripSuggestionCard
          title="Flight prices dropped. Good time to book."
          subtitle="Monitored across 3 booking platforms over the past 14 days."
          previewContent="NYC → BCN: was $480 → now $318 (–34%) · Price windows typically last 3–5 days"
          sourcesCount="Google Flights · Skyscanner · Kayak"
          cta="Book Now"
        />
      ),
    },
    {
      title: "Delay and cancel trends on this route, past few weeks.",
      description: "Pre-Trip Warning Card",
      chatMessages: [
        { name: "Jake", text: "Tue/Wed it is then, noted" },
      ],
      renderCard: () => (
        <PreTripSuggestionCard
          title="Delay and cancel trends on this route, past few weeks."
          subtitle="Pulled from live flight data for this specific route over the past 30 days."
          previewContent={<StatBadgeRow items={[{label:"Delay rate",value:"14%"},{label:"Cancel rate",value:"6%"},{label:"Best day",value:"Tue/Wed"}]} />}
          sourcesCount="FlightAware · 30 days · 180+ flights"
          cta="See Trends"
          warning
        />
      ),
    },
  ],
  intrip: [
    {
      title: "Quick ask while you're moving.",
      description: "In-Trip Content Card",
      chatMessages: [
        { name: "Sam", text: "finding us dinner 🍜" },
        { name: "Riya", text: "I'm starving" },
      ],
      renderCard: () => <InTripTypeInputCard />,
    },
    {
      title: "Best food stalls locals actually eat at around here?",
        description: "In-Trip Suggestion Card",
      chatMessages: [
        { name: "Jake", text: "NOT tourist traps plz" },
        { name: "Sam", text: "real local spots only" },
      ],
      renderCard: () => (
          <InTripSuggestionCard
            title="Best food stalls locals actually eat at around here?"
            subtitle="Ranked from local food blogs, recent repeat-customer reviews, and walk-time from your location."
            previewContent={
              <>
                <RestaurantPreview
                  name="Torikado Alley Stalls"
                  rating="4.8"
                  distance="6 min walk"
                  priceRange="¥900 avg"
                  tag="Late-night local pick"
                />
                <div style={{marginTop:'6px',fontSize:'10px',color:'#30413b',fontFamily:'"DM Sans",sans-serif'}}>Yakitori Row · 11 vendors · busiest with locals after 20:00</div>
              </>
            }
            sourcesCount="3 local food blogs · 240 recent reviews"
            cta="Let's Go"
        />
      ),
    },
    {
      title: "Need a restroom nearby?",
        description: "In-Trip Suggestion Card",
      chatMessages: [
        { name: "Riya", text: "🆘 help needed lol" },
        { name: "Jake", text: "😂😂 running" },
      ],
      renderCard: () => (
          <InTripSuggestionCard
          title="Need a restroom nearby?"
            subtitle="Nearest verified public facilities based on live open-hours, foot-access, and cleanliness reports."
            previewContent={
              <>
                <MapsLinkButton label="Shibuya Stream Restrooms · 120 m · Level 2" />
                <div style={{marginTop:'6px',fontSize:'10px',color:'#30413b',fontFamily:'"DM Sans",sans-serif'}}>Open now · Accessible stall available · 2 min queue estimate</div>
              </>
            }
            sourcesCount="City facilities data · live mall hours"
            cta="Take Me There"
        />
      ),
    },
    {
      title: "Shopping spots near me?",
        description: "In-Trip Suggestion Card",
      chatMessages: [
        { name: "Sam", text: "let's goooo 🛍️" },
        { name: "Jake", text: "budget?? lol" },
      ],
      renderCard: () => (
          <InTripSuggestionCard
          title="Shopping spots near me?"
            subtitle="Picked from your radius, price mix, and stores with the strongest recent local footfall."
            previewContent={
              <>
                <MapsLinkButton label="Cat Street Shops · 450 m · Harajuku" />
                <div style={{marginTop:'6px',fontSize:'10px',color:'#30413b',fontFamily:'"DM Sans",sans-serif'}}>Vintage · sneakers · design stores · 18 top-rated stops in one stretch</div>
              </>
            }
            sourcesCount="18 nearby stores compared"
            cta="Let's Go"
        />
      ),
    },
    {
      title: "Where can I just wander with no plan?",
      description: "In-Trip Question Card",
      chatMessages: [
        { name: "Riya", text: "best feature honestly" },
        { name: "Sam", text: "yes just wander!!" },
      ],
      renderCard: () => (
        <InTripActionQuestionCard
          title="Where can I just wander with no plan?"
          cta="Surprise Me"
        />
      ),
    },
    {
      title: "Help me do a food tour here.",
      description: "In-Trip Suggestion Card",
      chatMessages: [
        { name: "Jake", text: "I'm SO in 🍢" },
        { name: "Riya", text: "planning as we walk" },
      ],
      renderCard: () => (
        <InTripSuggestionCard
          title="Help me do a food tour here."
          subtitle="Built as a walkable route using crowd timing, signature dishes, and stop-to-stop distance."
          previewContent="Stop 1: Gyoza alley · Stop 2: standing sushi · Stop 3: taiyaki window · 42 min total walk"
          sourcesCount="12 food stops ranked"
          cta="Start Tour"
        />
      ),
    },
    {
      title: "Best ferry tours - where do locals buy tickets?",
      description: "In-Trip Suggestion Card",
      chatMessages: [
        { name: "Sam", text: "don't want to overpay" },
      ],
      renderCard: () => (
        <InTripSuggestionCard
          title="Best ferry tours - where do locals buy tickets?"
          subtitle="Filtered for operator-direct pricing, local boarding points, and today's departure availability."
          previewContent={
            <>
              <MapsLinkButton label="Sumida River Cruise Pier · 700 m · Direct counter" />
              <div style={{marginTop:'6px',fontSize:'10px',color:'#30413b',fontFamily:'"DM Sans",sans-serif'}}>Operator price ¥1,200 · reseller avg ¥1,650 · next local-favorite departure 16:40</div>
            </>
          }
          sourcesCount="4 operators · direct ticket counters checked"
          cta="See Tours"
        />
      ),
    },
    {
      title: "Find me budget workation spots.",
      description: "In-Trip Question Card",
      chatMessages: [
        { name: "Jake", text: "needs good wifi tho" },
        { name: "Riya", text: "and coffee ☕" },
      ],
      renderCard: () => (
        <InTripBudgetQuestionCard
          title="Find me budget workation spots."
          cta="Show Spots"
        />
      ),
    },
    {
      title: "Tsukiji Market opens in 20 min - 3-min walk.",
      description: "In-Trip Suggestion Card",
      chatMessages: [
        { name: "Sam", text: "GO GO GO 🏃" },
        { name: "Jake", text: "already walking!!" },
      ],
      renderCard: () => (
        <InTripSuggestionCard
          title="Tsukiji Market opens in 20 min — 3-min walk."
          subtitle="Context-aware suggestion based on your location and time window."
          previewContent={<>
            <MapsLinkButton label="Tsukiji Outer Market · 230 m · Chuo City, Tokyo" />
            <div style={{marginTop:'6px',fontSize:'10px',color:'#30413b',fontFamily:'"DM Sans",sans-serif'}}>Open 05:30–14:00 · Best before 09:00 · Tuna auction tickets available</div>
          </>}
          sourcesCount="4 sources · live hours verified"
          cta="Take Me There"
        />
      ),
    },
    {
      title: "Scuba diving this afternoon. Conditions rough.",
      description: "In-Trip Warning Card",
      chatMessages: [
        { name: "Riya", text: "snorkeling instead?" },
        { name: "Jake", text: "kayaking sounds better" },
      ],
      renderCard: () => (
        <InTripSuggestionCard
          title="Scuba diving this afternoon. Conditions rough."
          previewContent={<>
            <StatBadgeRow items={[{label:"Wind",value:"28 km/h"},{label:"Visibility",value:"4 m"},{label:"Swell",value:"1.8 m"}]} />
            <div style={{marginTop:'6px',fontSize:'10px',color:'#30413b',fontFamily:'"DM Sans",sans-serif'}}>3 alternatives: Snorkeling (50m) · Kayaking (200m) · Glass-bottom boat (300m)</div>
          </>}
          sourcesCount="Live weather + 2 dive forecast services"
          cta="See Alternatives"
          warning
        />
      ),
    },
    {
      title: "Missed a stop. Adjusted rest of day.",
      description: "In-Trip Suggestion Card",
      chatMessages: [
        { name: "Sam", text: "Yanaka walk sounds amazing" },
      ],
      renderCard: () => (
        <InTripSuggestionCard
          title="Missed a stop. Adjusted rest of day."
          subtitle="Plan auto-updated based on your current location and time."
          previewContent="Removed: teamLab Planets (60 min) → Added: Ueno Park + Yanaka evening walk"
          sourcesCount="Real-time itinerary sync"
          cta="View Updated Plan"
        />
      ),
    },
    {
      title: "Local event 10 minutes from you tonight.",
      description: "In-Trip Suggestion Card",
      chatMessages: [
        { name: "Jake", text: "free entry?? 🎷" },
        { name: "Sam", text: "we're going" },
      ],
      renderCard: () => (
        <InTripSuggestionCard
          title="Local event 10 minutes from you tonight."
          subtitle="Context-aware suggestion generated from your location and tonight's schedule."
          previewContent={<>
            <div className="intrip-event-row">
              <span className="intrip-event-name">Shinjuku Jazz Festival</span>
              <span className="intrip-event-time">19:30–22:00</span>
            </div>
            <div style={{marginTop:'4px',fontSize:'10px',color:'#30413b',fontFamily:'"DM Sans",sans-serif'}}>Free entry · 0.8 km from current location · Outdoor stage</div>
          </>}
          sourcesCount="14 local event sources"
          cta="Tell Me More"
        />
      ),
    },
    {
      title: "Flight delayed 2 hours. Here's what to do nearby.",
      description: "In-Trip Warning Card",
      chatMessages: [
        { name: "Riya", text: "sky lounge it is 💆" },
        { name: "Jake", text: "ramen then books 😂" },
      ],
      renderCard: () => (
        <InTripSuggestionCard
          title="Flight delayed 2 hours. Here's what to do nearby."
          previewContent="Sky Lounge T3 (Day pass ¥2,200) · Matsuya Ramen (5 min walk) · Tsutaya Books (2 min walk)"
          sourcesCount="Terminal 3 venue data · live delay feed"
          cta="Show Options"
          warning
        />
      ),
    },
    {
      title: "Flight cancelled. Next available options.",
      description: "In-Trip Warning Card",
      chatMessages: [
        { name: "Sam", text: "JAL 18:40, booking it" },
        { name: "Jake", text: "nightmare but sorted" },
      ],
      renderCard: () => (
        <InTripSuggestionCard
          title="Flight cancelled. Next available options."
          previewContent={<>
            <FlightAlternativeRow airline="JAL" flightNo="823" time="18:40" duration="3h 10m" price="¥4,200" isRecommended={true} />
            <FlightAlternativeRow airline="ANA" flightNo="756" time="19:20" duration="3h 25m" price="¥3,800" />
          </>}
          sourcesCount="3 airlines · live seat availability"
          cta="See Flights"
          warning
          urgent
        />
      ),
    },
    {
      title: "Walking 3 hours. Cafe 4 minutes away.",
      description: "In-Trip Suggestion Card",
      chatMessages: [
        { name: "Riya", text: "% Arabica is so good ☕" },
        { name: "Sam", text: "my feet say yes" },
      ],
      renderCard: () => (
        <InTripSuggestionCard
          title="Walking 3 hours. Cafe 4 minutes away."
          subtitle="Proactive break suggestion based on your movement data and nearby options."
          previewContent={<RestaurantPreview name="% Arabica Kyoto" rating="4.8" distance="280 m" priceRange="¥600 avg" tag="Local favourite" />}
          sourcesCount="Activity tracker · 6 nearby cafes compared"
          cta="Take Me There"
        />
      ),
    },
    {
      title: "This restaurant comes up in local picks near you.",
      description: "In-Trip Suggestion Card",
      chatMessages: [
        { name: "Jake", text: "Ichiran solo booths!!" },
        { name: "Sam", text: "let's go 🍜" },
      ],
      renderCard: () => (
        <InTripSuggestionCard
          title="This restaurant comes up in local picks near you."
          subtitle="Surfaced from local food blogs, Google local guides, and recent reviews."
          previewContent={<RestaurantPreview name="Ichiran Ramen Shibuya" rating="4.7" distance="0.4 km" priceRange="¥1,200 avg" tag="3 local food picks" />}
          sourcesCount="Google reviews · 3 local food blogs"
          cta="See Details"
        />
      ),
    },
    {
      title: "Weather turning. Outdoor activity may not work.",
      description: "In-Trip Warning Card",
      chatMessages: [
        { name: "Riya", text: "teamLab actually 🎨" },
        { name: "Jake", text: "switching plans" },
      ],
      renderCard: () => (
        <InTripSuggestionCard
          title="Weather turning. Outdoor activity may not work."
          previewContent="Rain from 15:00 · 3 indoor alternatives: teamLab (0.3 km) · Mori Art Museum (0.5 km) · Nezu Museum (0.8 km)"
          sourcesCount="3 weather services · live forecast"
          cta="Find Alternatives"
          warning
        />
      ),
    },
    {
      title: "Unplanned spot nearby with strong reviews. Detour?",
      description: "In-Trip Suggestion Card",
      chatMessages: [
        { name: "Sam", text: "vintage Tokyo, yes 🗼" },
      ],
      renderCard: () => (
        <InTripSuggestionCard
          title="Unplanned spot nearby with strong reviews. Detour?"
          subtitle="Discovered from Google Local Guides, travel blogs, and your activity pattern."
          previewContent={<RestaurantPreview name="Yanaka Cemetery Walk" rating="4.6" distance="15 min walk" priceRange="Free entry" tag="Vintage Tokyo" />}
          sourcesCount="Google Local Guides · 5 travel blogs"
          cta="Let's Go"
        />
      ),
    },
    {
      title: "Swap afternoon activity or push to tomorrow?",
      description: "In-Trip Poll Card",
      chatMessages: [
        { name: "Jake", text: "tomorrow, tired lol" },
        { name: "Riya", text: "+1 push it" },
      ],
      renderCard: () => (
        <InTripPollCard
          title="Swap afternoon activity or push to tomorrow?"
          options={["Swap It", "Tomorrow"]}
        />
      ),
    },
    {
      title: "Group split on dinner - two options near you.",
      description: "In-Trip Poll Card",
      chatMessages: [
        { name: "Sam", text: "Sushi Den 🙋" },
        { name: "Jake", text: "voted!! 🍣" },
      ],
      renderCard: () => (
        <InTripPollCard
          title="Group split on dinner - two options near you."
          options={["Sushi Den", "Spice Bazaar"]}
          subtext={["350 m away", "600 m away"]}
        />
      ),
    },
  ],
  posttrip: [
    {
      icon: "🧾",
      title: "Split the costs between everyone.",
      description: "Post-Trip Content Card",
      chatMessages: [
        { name: "Riya", text: "finally sorting this 💸" },
        { name: "Jake", text: "I think I'm owed money 😅" },
      ],
      renderCard: () => <PostTripSplitCard />,
    },
    {
      icon: "💡",
      title: "Suggested next trips based on this one.",
      description: "Post-Trip Proactive Suggestion",
      chatMessages: [
        { name: "Sam", text: "already ready for next one!" },
        { name: "Jake", text: "same time next year? 🌏" },
      ],
      renderCard: () => (
        <PostTripSuggestionCard
          title="Suggested next trips based on this one."
          kind="Next Trip Suggestion"
          accent="explore"
          subtitle="Matched from your group's pace, spend pattern, food preferences, and activity mix."
          previewContent={<DestinationFitList destinations={[{flag:"🇰🇷",name:"Seoul",fit:91,price:"€1,150"},{flag:"🇹🇼",name:"Taipei",fit:88,price:"€980"},{flag:"🇵🇹",name:"Porto",fit:84,price:"€1,320"}]} />}
          sourcesCount="Trip history · 120+ destinations compared"
          cta="See Picks"
        />
      ),
    },
    {
      icon: "💡",
      title: "Trip done. Full expense report ready.",
      description: "Post-Trip Proactive Suggestion",
      chatMessages: [
        { name: "Riya", text: "¥71k each, not bad!" },
        { name: "Sam", text: "worth every yen 🙏" },
      ],
      renderCard: () => (
        <PostTripSuggestionCard
          title="Trip done. Full expense report ready."
          kind="Suggestion Card"
          accent="suggestion"
          subtitle="Compiled from receipts, card logs, and the shared group timeline."
          previewContent="7 days · 4 people · ¥284,000 total · ¥71,000 avg / person"
          sourcesCount="36 receipts processed"
          cta="View Report"
        />
      ),
    },
    {
      icon: "💡",
      title: "Reviewed group chat. Here's what everyone spent.",
      description: "Post-Trip Proactive Suggestion",
      chatMessages: [
        { name: "Jake", text: "food 38%, obviously 🍜" },
        { name: "Sam", text: "we ate so well" },
      ],
      renderCard: () => (
        <PostTripSuggestionCard
          title="Reviewed group chat. Here's what everyone spent."
          kind="Expense Insight"
          accent="finance"
          subtitle="Cross-referenced 3 payment apps and group chat logs."
          previewContent={<ExpenseCategoryBars categories={[{label:"Food",percent:38,color:"#f59e42"},{label:"Transport",percent:24,color:"#4ea9f5"},{label:"Stay",percent:20,color:"#9b72ef"},{label:"Other",percent:18,color:"#6cb28e"}]} />}
          sourcesCount="1 group chat · 42 transactions"
          cta="See Breakdown"
        />
      ),
    },
    {
      icon: "💡",
      title: "Based on this trip, 3 destinations you'd love next.",
      description: "Post-Trip Proactive Suggestion",
      chatMessages: [
        { name: "Riya", text: "Da Nang next 🌊" },
        { name: "Jake", text: "or Tbilisi!!" },
      ],
      renderCard: () => (
        <PostTripSuggestionCard
          title="Based on this trip, 3 destinations you'd love next."
          kind="Next Trip Suggestion"
          accent="explore"
          subtitle="Ranked by trip style match, pace, budget, and group preferences."
          previewContent={<DestinationFitList destinations={[{flag:"🇵🇹",name:"Lisbon",fit:92,price:"€1,400"},{flag:"🇻🇳",name:"Da Nang",fit:88,price:"€1,100"},{flag:"🇬🇪",name:"Tbilisi",fit:86,price:"€950"}]} />}
          sourcesCount="140+ destinations compared"
          cta="Show Destinations"
        />
      ),
    },
    {
      icon: "💡",
      title: "Visited 11 places across 7 days. Route map ready.",
      description: "Post-Trip Proactive Suggestion",
      chatMessages: [
        { name: "Sam", text: "11 places in 7 days 🤯" },
        { name: "Riya", text: "we actually did all of that" },
      ],
      renderCard: () => (
        <PostTripSuggestionCard
          title="Visited 11 places across 7 days. Route map ready."
          kind="Trip Summary"
          accent="suggestion"
          subtitle="Built from your shared location history and activity logs."
          previewContent="Shibuya · Tsukiji · Harajuku · Kyoto · Nara · Osaka · Arashiyama +4 more"
          sourcesCount="11 stops · 7 days logged"
          cta="View Route Map"
        />
      ),
    },
    {
      icon: "💡",
      title: "Most expensive day was Day 4. Breakdown ready.",
      description: "Post-Trip Proactive Suggestion",
      chatMessages: [
        { name: "Jake", text: "Day 4 was worth it" },
        { name: "Sam", text: "that dinner 😭" },
      ],
      renderCard: () => (
        <PostTripSuggestionCard
          title="Most expensive day was Day 4. Breakdown ready."
          kind="Expense Insight"
          accent="finance"
          subtitle="Pulled from card statements and group receipts for Day 4."
          previewContent="Dinner ¥8,400 · Taxi ¥2,100 · Museum ¥1,500 · Shopping ¥4,200"
          sourcesCount="16 transactions on Day 4"
          cta="See Day 4"
        />
      ),
    },
    {
      icon: "💡",
      title: "Group rated adventure highest. Next picks weighted that way.",
      description: "Post-Trip Proactive Suggestion",
      chatMessages: [
        { name: "Riya", text: "4.8 adventure!! 🎉" },
        { name: "Jake", text: "next trip needs zip lines" },
      ],
      renderCard: () => (
        <PostTripSuggestionCard
          title="Group rated adventure highest. Next picks weighted that way."
          kind="Suggestion Card"
          accent="suggestion"
          subtitle="Analyzed ratings from all 4 members across 11 activities."
          previewContent={<StatBadgeRow items={[{label:"Adventure",value:"4.8"},{label:"Food",value:"4.6"},{label:"Culture",value:"4.2"},{label:"Relax",value:"3.5"}]} />}
          sourcesCount="44 activity ratings reviewed"
          cta="Plan Next Trip"
        />
      ),
    },
  ],
};

function shuffleCards(cards) {
  const shuffled = [...cards];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [
      shuffled[randomIndex],
      shuffled[index],
    ];
  }

  return shuffled;
}

export default function HeroPhaseSection() {
  const [selectedPhase, setSelectedPhase] = useState("pretrip");
  const randomizedPhaseCardsConfig = useMemo(
    () => ({
      pretrip: shuffleCards(phaseCardsConfig.pretrip),
      intrip: shuffleCards(phaseCardsConfig.intrip),
      posttrip: shuffleCards(phaseCardsConfig.posttrip),
    }),
    []
  );
  const activePhaseCards =
    randomizedPhaseCardsConfig[selectedPhase] || randomizedPhaseCardsConfig.pretrip;

  return (
    <section
      className="hero-phase-section"
      style={{
        background: "#eeebe6",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <style jsx>{`
        @media (max-width: 768px) {
          .hero-phase-section {
            minHeight: calc(100vh - 64px);
          }
        }

        @media (min-width: 769px) {
          .hero-phase-section {
            minHeight: calc(100vh - 72px);
          }
        }
      `}</style>

      <div
        className="hero-phase-inner"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 48px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          flex: 1,
          marginTop: "100px",
        }}
      >
        <h1
          className="hero-main-title app-title-font app-type-heading"
          style={{
            fontSize: "clamp(42px, 6.6vw, 74px)",
            color: "#171717",
            margin: "0 0 14px",
            textAlign: "center",
            alignSelf: "center",
            fontStyle: "normal",
          }}
        >
          <span style={{ whiteSpace: "nowrap", marginLeft: "-0.25em" }}>
            Your Trips,{" "}
            <span
              style={{
                fontStyle: "italic",
                textDecoration: "underline",
                textDecorationThickness: "2px",
                textUnderlineOffset: "0.12em",
              }}
            >
              Curated
            </span>
          </span>
          <br />
          Start to Finish.
        </h1>
        <div
          className="hero-segment-wrap"
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "0px",
            width: "100%",
            flexShrink: 0,
            marginTop: "20px",
          }}
        >
          <SegmentedControl
            options={phaseOptions}
            selected={selectedPhase}
            onChange={setSelectedPhase}
          />
        </div>

        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingBottom: "0",
          }}
        >
          <PhaseCarousel
            slides={activePhaseCards}
            showPhoneMockup
            chatResetKey={selectedPhase}
          />
        </div>
      </div>

      <style jsx global>{`
        .pretrip-card {
          width: 100%;
          border-radius: 14px;
          padding: 13px;
          border: 2px solid transparent;
          display: flex;
          flex-direction: column;
          gap: 7px;
          position: relative;
          --card-surface: #ffffff;
          --angle: 0turn;
          --card-c1: #50bfff;
          --card-c2: #5f8dfb;
          --card-c3: #9ee8ff;
          --card-c4: #4f8fff;
          background:
            linear-gradient(var(--card-surface), var(--card-surface))
              padding-box,
            conic-gradient(
                from var(--angle),
                var(--card-surface) 0deg,
                var(--card-c1) 55deg,
                var(--card-c2) 120deg,
                var(--card-c3) 210deg,
                var(--card-c4) 300deg,
                var(--card-surface) 360deg
              )
              border-box;
          animation: gradientBorder 14s linear infinite;
          box-shadow: 0 8px 20px rgba(26, 22, 14, 0.06);
        }

        .pretrip-card-content {
          --card-c1: #50bfff;
          --card-c2: #5f8dfb;
          --card-c3: #9ee8ff;
          --card-c4: #4f8fff;
        }

        .pretrip-card-question {
          --card-c1: #ff89c4;
          --card-c2: #cf7aff;
          --card-c3: #ffb6dc;
          --card-c4: #f067d9;
        }

        .pretrip-card-poll {
          --card-c1: #ff89c4;
          --card-c2: #cf7aff;
          --card-c3: #ffb6dc;
          --card-c4: #f067d9;
        }

        .pretrip-card-suggestion {
          --card-c1: #f8d16e;
          --card-c2: #e7a647;
          --card-c3: #fde7ab;
          --card-c4: #f0c16d;
        }

        .pretrip-card-warning {
          --card-c1: #f8d16e;
          --card-c2: #e7a647;
          --card-c3: #fde7ab;
          --card-c4: #f0c16d;
        }

        .pretrip-card-top {
          display: flex;
          justify-content: flex-start;
        }

        .pretrip-kind {
          font-family: "DM Sans", sans-serif;
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 0.09em;
          text-transform: uppercase;
          border-radius: 999px;
          padding: 3px 8px;
          background: #ece8df;
          color: #665844;
        }

        .pretrip-card-content .pretrip-kind {
          background: #f2e3bf;
          color: #755a20;
        }

        .pretrip-card-poll .pretrip-kind {
          background: #f1eadb;
          color: #5e5140;
        }

        .pretrip-card-suggestion .pretrip-kind {
          background: #d9e8fb;
          color: #2d5b96;
        }

        .pretrip-card-warning .pretrip-kind {
          background: #f8d4cb;
          color: #8c3d31;
        }

        .pretrip-title {
          margin: 1px 0 0;
          font-family: "Bricolage Grotesque", sans-serif;
          font-size: 14px;
          line-height: 1.15;
          letter-spacing: -0.015em;
          color: #1c1c1e;
        }

        .pretrip-subtitle {
          margin: 0;
          font-family: "DM Sans", sans-serif;
          font-size: 10px;
          line-height: 1.4;
          color: #625d53;
        }

        .pretrip-result-preview {
          margin-top: 2px;
          border-radius: 8px;
          background: rgba(255, 252, 245, 0.9);
          border: 1px solid rgba(104, 96, 84, 0.18);
          padding: 6px 9px;
          font-family: "DM Sans", sans-serif;
          font-size: 10px;
          line-height: 1.4;
          color: #484238;
        }

        .pretrip-input-shell {
          margin-top: 2px;
          border: 1px dashed #cfbf9f;
          border-radius: 8px;
          padding: 7px 9px;
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 252, 245, 0.85);
          flex-wrap: wrap;
        }

        .pretrip-type-input {
          margin-top: 2px;
          width: 100%;
          border: 1px solid #cfbf9f;
          border-radius: 8px;
          padding: 7px 10px;
          background: #fdf8f0;
          font-family: "DM Sans", sans-serif;
          font-size: 10px;
          color: #4f4b43;
          outline: none;
          box-sizing: border-box;
        }

        .pretrip-currency {
          font-family: "DM Sans", sans-serif;
          font-size: 10px;
          font-weight: 700;
          border-radius: 999px;
          padding: 2px 7px;
          background: #ececf1;
          color: #4c4c55;
        }

        .pretrip-input-text {
          font-family: "DM Sans", sans-serif;
          font-size: 10px;
          color: #4f4b43;
        }

        .pretrip-stepper {
          display: inline-flex;
          align-items: stretch;
          align-self: flex-start;
          width: fit-content;
          border: 1px solid #d8cab0;
          border-radius: 999px;
          background: #fdf8f0;
          overflow: hidden;
          margin-top: 2px;
          height: 28px;
        }

        .pretrip-stepper-btn {
          border: none;
          width: 28px;
          height: 28px;
          background: #f0e9d9;
          color: #513d1f;
          font-size: 14px;
          font-weight: 600;
          line-height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: default;
          flex-shrink: 0;
        }

        .pretrip-stepper-count {
          width: 32px;
          height: 28px;
          line-height: 28px;
          text-align: center;
          font-family: "DM Sans", sans-serif;
          font-size: 11px;
          font-weight: 700;
          color: #1f1d19;
          flex-shrink: 0;
        }

        .pretrip-chip-row {
          margin-top: 2px;
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .pretrip-chip-input-row {
          margin-top: 2px;
          display: flex;
          gap: 6px;
        }

        .pretrip-chip-input {
          flex: 1 1 auto;
          min-width: 0;
          border: 1px solid #d6d1c6;
          border-radius: 8px;
          background: #fdf8f0;
          color: #37342f;
          padding: 6px 8px;
          font-family: "DM Sans", sans-serif;
          font-size: 10px;
        }

        .pretrip-chip-enter {
          border: none;
          border-radius: 8px;
          background: #1c1c1e;
          color: #ffffff;
          padding: 0 10px;
          display: inline-flex;
          align-items: center;
          font-family: "DM Sans", sans-serif;
          font-size: 10px;
          font-weight: 700;
          cursor: default;
        }

        .pretrip-chip {
          border: none;
          border-radius: 999px;
          padding: 5px 9px;
          border: 1px solid #d6d1c6;
          background: #fdf8f0;
          color: #49443d;
          font-family: "DM Sans", sans-serif;
          font-size: 10px;
          font-weight: 600;
          display: inline-flex;
          cursor: default;
        }

        .pretrip-chip-selected {
          border-color: #1c1c1e;
          background: #1c1c1e;
          color: #ffffff;
        }

        .pretrip-toggle {
          margin-top: 2px;
          display: flex;
          width: 100%;
          background: #ece8e0;
          border-radius: 999px;
          padding: 3px;
          gap: 3px;
        }

        .pretrip-toggle-btn {
          border: none;
          border-radius: 999px;
          flex: 1 1 0;
          min-width: 0;
          padding: 5px 12px;
          background: transparent;
          color: #4c4740;
          text-align: center;
          font-family: "DM Sans", sans-serif;
          font-size: 10px;
          font-weight: 700;
          cursor: default;
        }

        .pretrip-poll-options {
          margin-top: 4px;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .pretrip-poll-option {
          border: 1px solid #d6bea0;
          border-radius: 8px;
          background: #fdf8f0;
          padding: 7px 9px;
          text-align: left;
          display: flex;
          flex-direction: column;
          gap: 3px;
          font-family: "DM Sans", sans-serif;
          font-size: 10px;
          color: #4d4333;
          cursor: default;
        }

        .pretrip-poll-option-active {
          border-color: #1c1c1e;
          box-shadow: 0 0 0 2px rgba(28, 28, 30, 0.16);
        }

        .pretrip-poll-option-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
        }

        .pretrip-poll-percent {
          font-size: 9px;
          color: #5e5140;
          font-weight: 700;
        }

        .pretrip-poll-bar-track {
          margin-top: 3px;
          width: 100%;
          height: 6px;
          border-radius: 999px;
          background: #e6ddd0;
          overflow: hidden;
        }

        .pretrip-poll-bar-fill {
          display: block;
          height: 100%;
          border-radius: 999px;
          background: linear-gradient(90deg, #1c1c1e 0%, #4d4333 100%);
        }

        .pretrip-poll-option small {
          font-size: 10px;
          color: #6a5a44;
        }

        .pretrip-cta {
          margin-top: auto;
          width: 100%;
          border: none;
          border-radius: 8px;
          padding: 8px 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #1c1c1e;
          color: #ffffff;
          font-family: "DM Sans", sans-serif;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          cursor: default;
        }

        .intrip-card {
          width: 100%;
          border-radius: 14px;
          padding: 13px;
          border: 2px solid transparent;
          display: flex;
          flex-direction: column;
          gap: 7px;
          position: relative;
          --card-surface: #ffffff;
          --angle: 0turn;
          --card-c1: #50bfff;
          --card-c2: #5f8dfb;
          --card-c3: #9ee8ff;
          --card-c4: #4f8fff;
          background:
            linear-gradient(var(--card-surface), var(--card-surface))
              padding-box,
            conic-gradient(
                from var(--angle),
                var(--card-surface) 0deg,
                var(--card-c1) 55deg,
                var(--card-c2) 120deg,
                var(--card-c3) 210deg,
                var(--card-c4) 300deg,
                var(--card-surface) 360deg
              )
              border-box;
          animation: gradientBorder 14s linear infinite;
          box-shadow: 0 8px 20px rgba(18, 37, 30, 0.08);
        }

        .intrip-card-content {
          --card-c1: #50bfff;
          --card-c2: #5f8dfb;
          --card-c3: #9ee8ff;
          --card-c4: #4f8fff;
        }

        .intrip-card-question {
          --card-c1: #ff89c4;
          --card-c2: #cf7aff;
          --card-c3: #ffb6dc;
          --card-c4: #f067d9;
        }

        .intrip-card-suggestion {
          --card-c1: #f8d16e;
          --card-c2: #e7a647;
          --card-c3: #fde7ab;
          --card-c4: #f0c16d;
        }

        .intrip-card-warning {
          --card-c1: #f8d16e;
          --card-c2: #e7a647;
          --card-c3: #fde7ab;
          --card-c4: #f0c16d;
        }

        .intrip-card-poll {
          --card-c1: #ff89c4;
          --card-c2: #cf7aff;
          --card-c3: #ffb6dc;
          --card-c4: #f067d9;
        }

        .intrip-card-top {
          display: flex;
          justify-content: flex-start;
        }

        .intrip-kind {
          font-family: "DM Sans", sans-serif;
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 0.09em;
          text-transform: uppercase;
          border-radius: 999px;
          padding: 3px 8px;
          background: #e4efe9;
          color: #316151;
        }

        .intrip-card-suggestion .intrip-kind {
          background: #d9e9fb;
          color: #2a548b;
        }

        .intrip-card-warning .intrip-kind {
          background: #f9d8cf;
          color: #8a3e32;
        }

        .intrip-card-poll .intrip-kind {
          background: #f1eadb;
          color: #5e5140;
        }

        .intrip-title {
          margin: 1px 0 0;
          font-family: "Bricolage Grotesque", sans-serif;
          font-size: 14px;
          line-height: 1.15;
          letter-spacing: -0.015em;
          color: #16201c;
        }

        .intrip-subtitle {
          margin: 0;
          font-family: "DM Sans", sans-serif;
          font-size: 10px;
          line-height: 1.4;
          color: #4c5f58;
        }

        .intrip-result-preview {
          margin-top: 2px;
          border-radius: 8px;
          background: rgba(255, 252, 245, 0.9);
          border: 1px solid rgba(72, 95, 88, 0.22);
          padding: 6px 9px;
          font-family: "DM Sans", sans-serif;
          font-size: 10px;
          line-height: 1.4;
          color: #30413b;
        }

        .intrip-input-shell {
          margin-top: 2px;
          border: 1px dashed #afd0c1;
          border-radius: 8px;
          padding: 7px 9px;
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 252, 245, 0.85);
          flex-wrap: wrap;
        }

        .intrip-type-input {
          margin-top: 2px;
          width: 100%;
          border: 1px solid #afd0c1;
          border-radius: 8px;
          padding: 7px 10px;
          background: rgba(255, 252, 250, 0.9);
          font-family: "DM Sans", sans-serif;
          font-size: 10px;
          color: #2e3a36;
          outline: none;
          box-sizing: border-box;
        }

        .intrip-currency {
          font-family: "DM Sans", sans-serif;
          font-size: 10px;
          font-weight: 700;
          border-radius: 999px;
          padding: 2px 7px;
          background: #e7ecf1;
          color: #42505f;
        }

        .intrip-input-text {
          font-family: "DM Sans", sans-serif;
          font-size: 10px;
          color: #2e3a36;
        }

        .intrip-poll-options {
          margin-top: 4px;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .intrip-poll-option {
          border: 1px solid #d6bea0;
          border-radius: 8px;
          background: #fdf8f0;
          padding: 7px 9px;
          text-align: left;
          display: flex;
          flex-direction: column;
          gap: 3px;
          font-family: "DM Sans", sans-serif;
          font-size: 10px;
          color: #4d4333;
          cursor: default;
        }

        .intrip-poll-option-active {
          border-color: #1c1c1e;
          box-shadow: 0 0 0 2px rgba(28, 28, 30, 0.16);
        }

        .intrip-poll-option-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
        }

        .intrip-poll-percent {
          font-size: 9px;
          color: #5e5140;
          font-weight: 700;
        }

        .intrip-poll-bar-track {
          margin-top: 3px;
          width: 100%;
          height: 6px;
          border-radius: 999px;
          background: #e6ddd0;
          overflow: hidden;
        }

        .intrip-poll-bar-fill {
          display: block;
          height: 100%;
          border-radius: 999px;
          background: linear-gradient(90deg, #1c1c1e 0%, #4d4333 100%);
        }

        .intrip-poll-option small {
          font-size: 10px;
          color: #6a5a44;
        }

        .intrip-cta {
          margin-top: auto;
          width: 100%;
          border: none;
          border-radius: 8px;
          padding: 8px 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #133f34;
          color: #ffffff;
          font-family: "DM Sans", sans-serif;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          cursor: default;
        }

        .intrip-cta-urgent {
          background: #891f1f;
          font-weight: 800;
          letter-spacing: 0.06em;
        }

        .posttrip-card {
          width: 100%;
          border-radius: 14px;
          padding: 13px;
          border: 2px solid transparent;
          display: flex;
          flex-direction: column;
          gap: 7px;
          position: relative;
          --card-surface: #ffffff;
          --angle: 0turn;
          --card-c1: #50bfff;
          --card-c2: #5f8dfb;
          --card-c3: #9ee8ff;
          --card-c4: #4f8fff;
          background:
            linear-gradient(var(--card-surface), var(--card-surface))
              padding-box,
            conic-gradient(
                from var(--angle),
                var(--card-surface) 0deg,
                var(--card-c1) 55deg,
                var(--card-c2) 120deg,
                var(--card-c3) 210deg,
                var(--card-c4) 300deg,
                var(--card-surface) 360deg
              )
              border-box;
          animation: gradientBorder 14s linear infinite;
          box-shadow: 0 8px 20px rgba(26, 22, 14, 0.06);
        }

        .posttrip-card-content {
          --card-c1: #50bfff;
          --card-c2: #5f8dfb;
          --card-c3: #9ee8ff;
          --card-c4: #4f8fff;
        }

        .posttrip-card-question {
          --card-c1: #ff89c4;
          --card-c2: #cf7aff;
          --card-c3: #ffb6dc;
          --card-c4: #f067d9;
        }

        .posttrip-card-suggestion {
          --card-c1: #f8d16e;
          --card-c2: #e7a647;
          --card-c3: #fde7ab;
          --card-c4: #f0c16d;
        }

        .posttrip-card-finance {
          --card-c1: #50bfff;
          --card-c2: #5f8dfb;
          --card-c3: #9ee8ff;
          --card-c4: #4f8fff;
        }

        .posttrip-card-explore {
          --card-c1: #ff89c4;
          --card-c2: #cf7aff;
          --card-c3: #ffb6dc;
          --card-c4: #f067d9;
        }

        @keyframes gradientBorder {
          from {
            --angle: 0turn;
          }
          to {
            --angle: 10turn;
          }
        }

        @property --angle {
          syntax: "<angle>";
          inherits: true;
          initial-value: 0turn;
        }

        .posttrip-card-top {
          display: flex;
          justify-content: flex-start;
        }

        .posttrip-kind {
          font-family: "DM Sans", sans-serif;
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 0.09em;
          text-transform: uppercase;
          border-radius: 999px;
          padding: 3px 8px;
          background: #f1eadb;
          color: #715f3b;
        }

        .posttrip-card-finance .posttrip-kind {
          background: #ddf1e3;
          color: #2e6a43;
        }

        .posttrip-card-explore .posttrip-kind {
          background: #dfe9fb;
          color: #294f8a;
        }

        .posttrip-title {
          margin: 1px 0 0;
          font-family: "Bricolage Grotesque", sans-serif;
          font-size: 14px;
          line-height: 1.15;
          letter-spacing: -0.015em;
          color: #1c1c1e;
        }

        .posttrip-subtitle {
          margin: 0;
          font-family: "DM Sans", sans-serif;
          font-size: 10px;
          line-height: 1.4;
          color: #6a6357;
        }

        .posttrip-result-preview {
          margin-top: 2px;
          border-radius: 8px;
          background: rgba(255, 252, 245, 0.9);
          border: 1px solid rgba(107, 95, 75, 0.2);
          padding: 6px 9px;
          font-family: "DM Sans", sans-serif;
          font-size: 10px;
          line-height: 1.4;
          color: #4d4333;
        }

        .posttrip-input-shell {
          margin-top: 2px;
          border: 1px dashed #d6bea0;
          border-radius: 8px;
          padding: 7px 9px;
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 252, 245, 0.85);
        }

        .posttrip-input-icon {
          width: 17px;
          height: 17px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          font-weight: 800;
          color: #62431d;
          background: #f4e5cc;
          flex-shrink: 0;
        }

        .posttrip-input-text {
          font-family: "DM Mono", monospace;
          font-size: 9px;
          color: #5e5140;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .posttrip-stepper-row {
          margin-top: 2px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
        }

        .posttrip-stepper-label {
          font-family: "DM Sans", sans-serif;
          font-size: 9px;
          font-weight: 700;
          color: #6a5a44;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        .posttrip-stepper {
          display: inline-flex;
          align-items: center;
          border: 1px solid #dac6a5;
          border-radius: 999px;
          background: #fdf8f0;
          overflow: hidden;
        }

        .posttrip-stepper-btn {
          border: none;
          width: 25px;
          height: 25px;
          background: #f7f0e3;
          color: #584221;
          font-size: 13px;
          font-weight: 700;
          line-height: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: default;
        }

        .posttrip-stepper-count {
          min-width: 28px;
          text-align: center;
          font-family: "DM Sans", sans-serif;
          font-size: 10px;
          font-weight: 700;
          color: #1f1d19;
        }

        .posttrip-cta {
          margin-top: auto;
          width: 100%;
          border: none;
          border-radius: 8px;
          padding: 8px 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #1c1c1e;
          color: #ffffff;
          font-family: "DM Sans", sans-serif;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          cursor: default;
        }

        .card-sources-scanned {
          margin: 1px 0 0;
          font-family: "DM Sans", sans-serif;
          font-size: 8px;
          color: #9b9588;
          letter-spacing: 0.02em;
          text-align: right;
        }

        .expense-cat-list {
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin-top: 2px;
        }

        .expense-cat-row {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .expense-cat-label {
          font-family: "DM Sans", sans-serif;
          font-size: 9px;
          font-weight: 600;
          color: #4d4333;
          min-width: 52px;
        }

        .expense-bar-track {
          flex: 1;
          height: 4px;
          background: rgba(0,0,0,0.07);
          border-radius: 999px;
          overflow: hidden;
        }

        .expense-bar-fill {
          height: 100%;
          border-radius: 999px;
        }

        .expense-cat-pct {
          font-family: "DM Sans", sans-serif;
          font-size: 9px;
          font-weight: 700;
          color: #5a5040;
          min-width: 24px;
          text-align: right;
        }

        .dest-fit-list {
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin-top: 2px;
        }

        .dest-fit-row {
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .dest-flag {
          font-size: 11px;
          flex-shrink: 0;
          line-height: 1;
        }

        .dest-name {
          font-family: "DM Sans", sans-serif;
          font-size: 9px;
          font-weight: 600;
          color: #1c1c1e;
          min-width: 50px;
        }

        .dest-fit-bar-wrap {
          flex: 1;
          height: 4px;
          background: rgba(0,0,0,0.07);
          border-radius: 999px;
          overflow: hidden;
        }

        .dest-fit-bar-fill {
          height: 100%;
          border-radius: 999px;
          background: linear-gradient(90deg, #3a7bd5 0%, #5ba4ef 100%);
        }

        .dest-fit-pct {
          font-family: "DM Sans", sans-serif;
          font-size: 9px;
          font-weight: 700;
          color: #2d5b96;
          min-width: 24px;
          text-align: right;
        }

        .dest-price {
          font-family: "DM Sans", sans-serif;
          font-size: 8px;
          color: #7a7060;
          min-width: 34px;
          text-align: right;
        }

        .restaurant-preview {
          margin-top: 2px;
          background: rgba(255,252,245,0.9);
          border: 1px solid rgba(72,95,88,0.15);
          border-radius: 8px;
          padding: 6px 9px;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .restaurant-preview-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .restaurant-name {
          font-family: "DM Sans", sans-serif;
          font-size: 10px;
          font-weight: 700;
          color: #1c1c1e;
        }

        .restaurant-rating {
          font-family: "DM Sans", sans-serif;
          font-size: 9px;
          font-weight: 700;
          color: #d97706;
        }

        .restaurant-preview-meta {
          display: flex;
          align-items: center;
          gap: 4px;
          font-family: "DM Sans", sans-serif;
          font-size: 9px;
          color: #5a5a5a;
        }

        .restaurant-dot {
          color: #c0b8ae;
        }

        .restaurant-tag {
          background: #e8f4ec;
          color: #276842;
          border-radius: 999px;
          padding: 1px 6px;
          font-size: 8px;
          font-weight: 700;
          margin-left: 2px;
        }

        .flight-alt-row {
          display: flex;
          align-items: center;
          gap: 5px;
          background: rgba(255,252,245,0.9);
          border: 1px solid rgba(104,96,84,0.15);
          border-radius: 7px;
          padding: 5px 8px;
          margin-top: 3px;
        }

        .flight-alt-row-rec {
          border-color: rgba(41,109,180,0.4);
          background: rgba(240,248,255,0.95);
        }

        .flight-alt-time {
          font-family: "DM Mono", monospace;
          font-size: 10px;
          font-weight: 700;
          color: #1c1c1e;
          min-width: 32px;
        }

        .flight-alt-airline {
          font-family: "DM Sans", sans-serif;
          font-size: 9px;
          color: #4a4a55;
          flex: 1;
        }

        .flight-alt-duration {
          font-family: "DM Sans", sans-serif;
          font-size: 9px;
          color: #8a8a8a;
        }

        .flight-alt-price {
          font-family: "DM Sans", sans-serif;
          font-size: 9px;
          font-weight: 700;
          color: #1c6a3e;
        }

        .flight-alt-badge {
          background: #1c5c96;
          color: #fff;
          font-size: 7px;
          font-weight: 800;
          letter-spacing: 0.05em;
          border-radius: 999px;
          padding: 2px 5px;
          text-transform: uppercase;
        }

        .maps-link-btn {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          background: rgba(255,252,245,0.9);
          border: 1px solid rgba(72,95,88,0.2);
          border-radius: 7px;
          padding: 5px 8px;
          margin-top: 2px;
          cursor: default;
        }

        .maps-link-icon {
          font-size: 10px;
          flex-shrink: 0;
        }

        .maps-link-text {
          font-family: "DM Sans", sans-serif;
          font-size: 9px;
          color: #1a3d6e;
          font-weight: 600;
          flex: 1;
        }

        .maps-link-arrow {
          font-size: 9px;
          color: #4a7ab5;
        }

        .stat-badge-row {
          display: flex;
          gap: 5px;
          margin-top: 2px;
          flex-wrap: wrap;
        }

        .stat-badge {
          display: flex;
          flex-direction: column;
          align-items: center;
          background: rgba(255,252,245,0.9);
          border: 1px solid rgba(104,96,84,0.15);
          border-radius: 7px;
          padding: 5px 8px;
          flex: 1;
          min-width: 44px;
        }

        .stat-badge-value {
          font-family: "DM Mono", monospace;
          font-size: 11px;
          font-weight: 700;
          color: #1c1c1e;
          line-height: 1;
        }

        .stat-badge-label {
          font-family: "DM Sans", sans-serif;
          font-size: 8px;
          color: #7a7060;
          margin-top: 2px;
          text-align: center;
        }

        .intrip-event-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
        }

        .intrip-event-name {
          font-family: "DM Sans", sans-serif;
          font-size: 11px;
          font-weight: 700;
          color: #16201c;
        }

        .intrip-event-time {
          font-family: "DM Mono", monospace;
          font-size: 10px;
          color: #2d5c48;
          background: rgba(41,92,72,0.1);
          border-radius: 999px;
          padding: 2px 8px;
        }

        .pretrip-event-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
        }

        .pretrip-event-name {
          font-family: "DM Sans", sans-serif;
          font-size: 11px;
          font-weight: 700;
          color: #1c1c1e;
        }

        .pretrip-event-location {
          font-family: "DM Mono", monospace;
          font-size: 9px;
          color: #4c4740;
          background: rgba(80,70,55,0.1);
          border-radius: 999px;
          padding: 2px 8px;
        }

        @media (max-width: 768px) {
          .hero-phase-section {
            padding: 0 0 56px;
          }

          .hero-phase-inner {
            padding: 0 16px !important;
          }

          .hero-segment-wrap {
            justify-content: center !important;
          }

          .posttrip-title {
            font-size: 21px;
          }
        }
      `}</style>
    </section>
  );
}
