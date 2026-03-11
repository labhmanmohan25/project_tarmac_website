import { useState } from "react";
import SegmentedControl from "./SegmentedControl";
import PhaseCarousel from "./PhaseCarousel";

function PostTripCardBase({
  kind,
  title,
  subtitle,
  cta,
  children,
  accent = "suggestion",
}) {
  return (
    <div className={`posttrip-card posttrip-card-${accent}`}>
      <div className="posttrip-card-top">
        <span className="posttrip-kind">{kind}</span>
      </div>

      <p className="posttrip-title">{title}</p>
      {subtitle ? <p className="posttrip-subtitle">{subtitle}</p> : null}

      {children}

      <button className="posttrip-cta" type="button">
        {cta}
      </button>
    </div>
  );
}

function PostTripSplitCard() {
  const [peopleCount, setPeopleCount] = useState(4);

  const decrement = () => setPeopleCount((prev) => Math.max(2, prev - 1));
  const increment = () => setPeopleCount((prev) => Math.min(20, prev + 1));

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
          TypeInput: shared rides + meals
        </span>
      </div>

      <div className="posttrip-stepper-row" aria-label="People count stepper">
        <span className="posttrip-stepper-label">People</span>
        <div
          className="posttrip-stepper"
          role="group"
          aria-label="Select people count"
        >
          <button
            type="button"
            className="posttrip-stepper-btn"
            onClick={decrement}
            aria-label="Decrease people"
          >
            -
          </button>
          <span className="posttrip-stepper-count">{peopleCount}</span>
          <button
            type="button"
            className="posttrip-stepper-btn"
            onClick={increment}
            aria-label="Increase people"
          >
            +
          </button>
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

function PostTripSuggestionCard({ title, cta }) {
  const lowerTitle = title.toLowerCase();

  let kind = "Suggestion Card";
  let subtitle =
    "Generated from your full trip timeline, receipts, and group behavior.";
  let accent = "suggestion";

  if (lowerTitle.includes("expense") || lowerTitle.includes("spent")) {
    kind = "Expense Insight";
    subtitle =
      "Built from receipts, card logs, and the shared timeline to surface cost patterns quickly.";
    accent = "finance";
  }

  if (lowerTitle.includes("destination") || lowerTitle.includes("next")) {
    kind = "Next Trip Suggestion";
    subtitle =
      "Ranked using your trip style, pace, budget tolerance, and the group's activity preferences.";
    accent = "explore";
  }

  return (
    <PostTripCardBase
      kind={kind}
      title={title}
      subtitle={subtitle}
      cta={cta}
      accent={accent}
    />
  );
}

function PreTripCardBase({
  kind,
  title,
  subtitle,
  cta,
  children,
  accent = "question",
}) {
  return (
    <div className={`pretrip-card pretrip-card-${accent}`}>
      <div className="pretrip-card-top">
        <span className="pretrip-kind">{kind}</span>
      </div>

      <p className="pretrip-title">{title}</p>
      {subtitle ? <p className="pretrip-subtitle">{subtitle}</p> : null}

      {children}

      <button className="pretrip-cta" type="button">
        {cta}
      </button>
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
      <div className="pretrip-input-shell" aria-label="Destination type input">
        <span className="pretrip-input-label">TypeInput</span>
        <span className="pretrip-input-text">
          beach with nightlife + short flights
        </span>
      </div>
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
      subtitle="Date range selector"
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
  const [count, setCount] = useState(4);
  const decrement = () => setCount((prev) => Math.max(1, prev - 1));
  const increment = () => setCount((prev) => Math.min(20, prev + 1));

  return (
    <PreTripCardBase
      kind="Question Card"
      title={title}
      subtitle="Number stepper"
      cta="Confirm Group"
      accent="question"
    >
      <div
        className="pretrip-stepper"
        role="group"
        aria-label="People count stepper"
      >
        <button
          type="button"
          className="pretrip-stepper-btn"
          onClick={decrement}
        >
          -
        </button>
        <span className="pretrip-stepper-count">{count}</span>
        <button
          type="button"
          className="pretrip-stepper-btn"
          onClick={increment}
        >
          +
        </button>
      </div>
    </PreTripCardBase>
  );
}

function PreTripBudgetQuestionCard({ title }) {
  return (
    <PreTripCardBase
      kind="Question Card"
      title={title}
      subtitle="Budget field with currency"
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
  const [selectedChips, setSelectedChips] = useState([baseChips[0]]);
  const [customValue, setCustomValue] = useState("");
  const [customChips, setCustomChips] = useState([]);

  const toggleChip = (chip) => {
    setSelectedChips((prev) =>
      prev.includes(chip)
        ? prev.filter((item) => item !== chip)
        : [...prev, chip],
    );
  };

  const handleAddCustomChip = () => {
    const value = customValue.trim();
    if (!value) return;
    if (!customChips.includes(value)) {
      setCustomChips((prev) => [...prev, value]);
      setSelectedChips((prev) => [...prev, value]);
    }
    setCustomValue("");
  };

  const handleInputKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleAddCustomChip();
    }
  };

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
        <input
          className="pretrip-chip-input"
          type="text"
          value={customValue}
          onChange={(event) => setCustomValue(event.target.value)}
          onKeyDown={handleInputKeyDown}
          placeholder="Add preference"
        />
        <button
          type="button"
          className="pretrip-chip-enter"
          onClick={handleAddCustomChip}
        >
          Enter
        </button>
      </div>

      <div className="pretrip-chip-row" aria-label="Multi select choices">
        {baseChips.map((chip) => (
          <button
            type="button"
            key={chip}
            onClick={() => toggleChip(chip)}
            className={`pretrip-chip ${selectedChips.includes(chip) ? "pretrip-chip-selected" : ""}`}
          >
            {chip}
          </button>
        ))}

        {customChips.map((chip) => (
          <button
            type="button"
            key={chip}
            onClick={() => toggleChip(chip)}
            className={`pretrip-chip ${selectedChips.includes(chip) ? "pretrip-chip-selected" : ""}`}
          >
            {chip}
          </button>
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
      subtitle="Yes / No toggle"
      cta="Save Choice"
      accent="question"
    >
      <div className="pretrip-toggle" role="group" aria-label="Yes no toggle">
        <button
          type="button"
          className="pretrip-toggle-btn pretrip-toggle-btn-active"
        >
          Yes
        </button>
        <button type="button" className="pretrip-toggle-btn">
          No
        </button>
      </div>
    </PreTripCardBase>
  );
}

function PreTripPollCard({ title, options, subtext = [] }) {
  const [votes, setVotes] = useState(options.map(() => 1));
  const [selectedOption, setSelectedOption] = useState(null);

  const totalVotes = votes.reduce((sum, count) => sum + count, 0);

  const voteForOption = (index) => {
    setSelectedOption(index);
    setVotes((prev) =>
      prev.map((count, voteIndex) => (voteIndex === index ? count + 1 : count)),
    );
  };

  const getPercent = (count) => Math.round((count / totalVotes) * 100);

  return (
    <PreTripCardBase
      kind="Poll Card"
      title={title}
      subtitle="Quick vote for the group"
      cta="Vote"
      accent="poll"
    >
      <div className="pretrip-poll-options" aria-label="Poll options">
        {options.map((option, index) => (
          <button
            type="button"
            key={option}
            className={`pretrip-poll-option ${selectedOption === index ? "pretrip-poll-option-active" : ""}`}
            onClick={() => voteForOption(index)}
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
          </button>
        ))}
      </div>
    </PreTripCardBase>
  );
}

function PreTripSuggestionCard({ title, cta, warning = false }) {
  return (
    <PreTripCardBase
      kind={warning ? "Warning Card" : "Suggestion Card"}
      title={title}
      subtitle={
        warning
          ? "Potential risk detected from route data, seasonality, and travel patterns."
          : "Generated proactively from calendars, trip profile, and live destination signals."
      }
      cta={cta}
      accent={warning ? "warning" : "suggestion"}
    />
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
}) {
  return (
    <div className={`intrip-card intrip-card-${accent}`}>
      <div className="intrip-card-top">
        <span className="intrip-kind">{kind}</span>
      </div>

      <p className="intrip-title">{title}</p>
      {subtitle ? <p className="intrip-subtitle">{subtitle}</p> : null}

      {children}

      <button
        className={`intrip-cta ${urgent ? "intrip-cta-urgent" : ""}`}
        type="button"
      >
        {cta}
      </button>
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
      <div className="intrip-input-shell" aria-label="In-trip type input">
        <span className="intrip-input-label">TypeInput</span>
        <span className="intrip-input-text">best coffee open near me now</span>
      </div>
    </InTripCardBase>
  );
}

function InTripActionQuestionCard({ title, cta }) {
  return (
    <InTripCardBase
      kind="Question Card"
      title={title}
      subtitle="No extra input needed for this action."
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

function InTripSuggestionCard({ title, cta, warning = false, urgent = false }) {
  return (
    <InTripCardBase
      kind={warning ? "Warning Card" : "Suggestion Card"}
      title={title}
      subtitle={
        warning
          ? "Live risk signal detected from weather, transport, and timing data."
          : "Context-aware suggestion generated from your location, time window, and group flow."
      }
      cta={cta}
      accent={warning ? "warning" : "suggestion"}
      urgent={urgent}
    />
  );
}

function InTripPollCard({ title, options, subtext = [] }) {
  const [votes, setVotes] = useState(options.map(() => 1));
  const [selectedOption, setSelectedOption] = useState(null);

  const totalVotes = votes.reduce((sum, count) => sum + count, 0);

  const voteForOption = (index) => {
    setSelectedOption(index);
    setVotes((prev) =>
      prev.map((count, voteIndex) => (voteIndex === index ? count + 1 : count)),
    );
  };

  const getPercent = (count) => Math.round((count / totalVotes) * 100);

  return (
    <InTripCardBase
      kind="Poll Card"
      title={title}
      subtitle="Vote quickly and keep the day moving."
      cta="Vote"
      accent="poll"
    >
      <div className="intrip-poll-options" aria-label="In-trip poll options">
        {options.map((option, index) => (
          <button
            type="button"
            key={option}
            className={`intrip-poll-option ${selectedOption === index ? "intrip-poll-option-active" : ""}`}
            onClick={() => voteForOption(index)}
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
          </button>
        ))}
      </div>
    </InTripCardBase>
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
      renderCard: () => <PreTripTypeInputCard />,
    },
    {
      title: "Where do you want to go?",
      description: "Pre-Trip Question Card",
      renderCard: () => (
        <PreTripTextQuestionCard title="Where do you want to go?" />
      ),
    },
    {
      title: "When are you thinking of traveling?",
      description: "Pre-Trip Question Card",
      renderCard: () => (
        <PreTripDateQuestionCard title="When are you thinking of traveling?" />
      ),
    },
    {
      title: "How many people are joining?",
      description: "Pre-Trip Question Card",
      renderCard: () => (
        <PreTripStepperQuestionCard title="How many people are joining?" />
      ),
    },
    {
      title: "What's your total budget?",
      description: "Pre-Trip Question Card",
      renderCard: () => (
        <PreTripBudgetQuestionCard title="What's your total budget?" />
      ),
    },
    {
      title: "How do you prefer to get around?",
      description: "Pre-Trip Question Card",
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
      renderCard: () => (
        <PreTripToggleQuestionCard title="Do you have loyalty points or coupons?" />
      ),
    },
    {
      title: "Want me to check everyone's calendars?",
      description: "Pre-Trip Question Card",
      renderCard: () => (
        <PreTripToggleQuestionCard title="Want me to check everyone's calendars?" />
      ),
    },
    {
      title: "Should I build a packing checklist?",
      description: "Pre-Trip Question Card",
      renderCard: () => (
        <PreTripToggleQuestionCard title="Should I build a packing checklist?" />
      ),
    },
    {
      title: "Beach or mountains?",
      description: "Pre-Trip Poll Card",
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
      renderCard: () => (
        <PreTripSuggestionCard
          title="Here are dates when everyone is free."
          cta="Lock These Dates"
        />
      ),
    },
    {
      title: "Your group is split. Running a poll.",
      description: "Pre-Trip Suggestion Card",
      renderCard: () => (
        <PreTripSuggestionCard
          title="Your group is split. Running a poll."
          cta="See Poll"
        />
      ),
    },
    {
      title: "You went to beach last trip. Here are mountain options.",
      description: "Pre-Trip Suggestion Card",
      renderCard: () => (
        <PreTripSuggestionCard
          title="You went to beach last trip. Here are mountain options."
          cta="Show Me"
        />
      ),
    },
    {
      title: "It's summer, 10 days - long-haul is out. Here's what fits.",
      description: "Pre-Trip Suggestion Card",
      renderCard: () => (
        <PreTripSuggestionCard
          title="It's summer, 10 days - long-haul is out. Here's what fits."
          cta="See Destinations"
        />
      ),
    },
    {
      title: "Festival happening during your travel window.",
      description: "Pre-Trip Suggestion Card",
      renderCard: () => (
        <PreTripSuggestionCard
          title="Festival happening during your travel window."
          cta="Tell Me More"
        />
      ),
    },
    {
      title: "Very few vegan spots at destination Z.",
      description: "Pre-Trip Warning Card",
      renderCard: () => (
        <PreTripSuggestionCard
          title="Very few vegan spots at destination Z."
          cta="Find Alternatives"
          warning
        />
      ),
    },
    {
      title: "Here are 5 destinations ranked by fit.",
      description: "Pre-Trip Suggestion Card",
      renderCard: () => (
        <PreTripSuggestionCard
          title="Here are 5 destinations ranked by fit."
          cta="Vote Now"
        />
      ),
    },
    {
      title: "Here's a rough itinerary draft.",
      description: "Pre-Trip Suggestion Card",
      renderCard: () => (
        <PreTripSuggestionCard
          title="Here's a rough itinerary draft."
          cta="Review Itinerary"
        />
      ),
    },
    {
      title: "Found a ski resort in budget - added to itinerary.",
      description: "Pre-Trip Suggestion Card",
      renderCard: () => (
        <PreTripSuggestionCard
          title="Found a ski resort in budget - added to itinerary."
          cta="View Update"
        />
      ),
    },
    {
      title: "Every restaurant has a vegan option. Checked.",
      description: "Pre-Trip Suggestion Card",
      renderCard: () => (
        <PreTripSuggestionCard
          title="Every restaurant has a vegan option. Checked."
          cta="See Restaurants"
        />
      ),
    },
    {
      title: "That flight has a high cancellation rate.",
      description: "Pre-Trip Warning Card",
      renderCard: () => (
        <PreTripSuggestionCard
          title="That flight has a high cancellation rate."
          cta="Compare Flights"
          warning
        />
      ),
    },
    {
      title: "That timing cuts close. Here's what a 30-min delay does.",
      description: "Pre-Trip Warning Card",
      renderCard: () => (
        <PreTripSuggestionCard
          title="That timing cuts close. Here's what a 30-min delay does."
          cta="Show Impact"
          warning
        />
      ),
    },
    {
      title: "New event announced - free slot in your itinerary.",
      description: "Pre-Trip Suggestion Card",
      renderCard: () => (
        <PreTripSuggestionCard
          title="New event announced - free slot in your itinerary."
          cta="Add to Plan"
        />
      ),
    },
    {
      title: "Flight prices dropped. Good time to book.",
      description: "Pre-Trip Suggestion Card",
      renderCard: () => (
        <PreTripSuggestionCard
          title="Flight prices dropped. Good time to book."
          cta="Book Now"
        />
      ),
    },
    {
      title: "Delay and cancel trends on this route, past few weeks.",
      description: "Pre-Trip Warning Card",
      renderCard: () => (
        <PreTripSuggestionCard
          title="Delay and cancel trends on this route, past few weeks."
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
      renderCard: () => <InTripTypeInputCard />,
    },
    {
      title: "Best food stalls locals actually eat at around here?",
      description: "In-Trip Question Card",
      renderCard: () => (
        <InTripActionQuestionCard
          title="Best food stalls locals eat at?"
          cta="Show Me"
        />
      ),
    },
    {
      title: "Need a restroom nearby?",
      description: "In-Trip Question Card",
      renderCard: () => (
        <InTripActionQuestionCard
          title="Need a restroom nearby?"
          cta="Find Now"
        />
      ),
    },
    {
      title: "Shopping spots near me?",
      description: "In-Trip Question Card",
      renderCard: () => (
        <InTripActionQuestionCard
          title="Shopping spots near me?"
          cta="Show Me"
        />
      ),
    },
    {
      title: "Where can I just wander with no plan?",
      description: "In-Trip Question Card",
      renderCard: () => (
        <InTripActionQuestionCard
          title="Where can I just wander with no plan?"
          cta="Surprise Me"
        />
      ),
    },
    {
      title: "Help me do a food tour here.",
      description: "In-Trip Question Card",
      renderCard: () => (
        <InTripActionQuestionCard
          title="Help me do a food tour here."
          cta="Build Food Tour"
        />
      ),
    },
    {
      title: "Best ferry tours - where do locals buy tickets?",
      description: "In-Trip Question Card",
      renderCard: () => (
        <InTripActionQuestionCard
          title="Best ferry tours - where do locals buy tickets?"
          cta="Find Tours"
        />
      ),
    },
    {
      title: "Find me budget workation spots.",
      description: "In-Trip Question Card",
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
      renderCard: () => (
        <InTripSuggestionCard
          title="Tsukiji Market opens in 20 min - 3-min walk."
          cta="Take Me There"
        />
      ),
    },
    {
      title: "Scuba diving this afternoon. Conditions rough.",
      description: "In-Trip Warning Card",
      renderCard: () => (
        <InTripSuggestionCard
          title="Scuba diving this afternoon. Conditions rough."
          cta="See Alternatives"
          warning
        />
      ),
    },
    {
      title: "Missed a stop. Adjusted rest of day.",
      description: "In-Trip Suggestion Card",
      renderCard: () => (
        <InTripSuggestionCard
          title="Missed a stop. Adjusted rest of day."
          cta="View Updated Plan"
        />
      ),
    },
    {
      title: "Local event 10 minutes from you tonight.",
      description: "In-Trip Suggestion Card",
      renderCard: () => (
        <InTripSuggestionCard
          title="Local event 10 minutes from you tonight."
          cta="Tell Me More"
        />
      ),
    },
    {
      title: "Flight delayed 2 hours. Here's what to do nearby.",
      description: "In-Trip Warning Card",
      renderCard: () => (
        <InTripSuggestionCard
          title="Flight delayed 2 hours. Here's what to do nearby."
          cta="Show Options"
          warning
        />
      ),
    },
    {
      title: "Flight cancelled. Next available options.",
      description: "In-Trip Warning Card",
      renderCard: () => (
        <InTripSuggestionCard
          title="Flight cancelled. Next available options."
          cta="See Flights"
          warning
          urgent
        />
      ),
    },
    {
      title: "Walking 3 hours. Cafe 4 minutes away.",
      description: "In-Trip Suggestion Card",
      renderCard: () => (
        <InTripSuggestionCard
          title="Walking 3 hours. Cafe 4 minutes away."
          cta="Take Me There"
        />
      ),
    },
    {
      title: "This restaurant comes up in local picks near you.",
      description: "In-Trip Suggestion Card",
      renderCard: () => (
        <InTripSuggestionCard
          title="This restaurant comes up in local picks near you."
          cta="See Details"
        />
      ),
    },
    {
      title: "Weather turning. Outdoor activity may not work.",
      description: "In-Trip Warning Card",
      renderCard: () => (
        <InTripSuggestionCard
          title="Weather turning. Outdoor activity may not work."
          cta="Find Alternatives"
          warning
        />
      ),
    },
    {
      title: "Unplanned spot nearby with strong reviews. Detour?",
      description: "In-Trip Suggestion Card",
      renderCard: () => (
        <InTripSuggestionCard
          title="Unplanned spot nearby with strong reviews. Detour?"
          cta="Let's Go"
        />
      ),
    },
    {
      title: "Swap afternoon activity or push to tomorrow?",
      description: "In-Trip Poll Card",
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
      renderCard: () => <PostTripSplitCard />,
    },
    {
      icon: "❓",
      title: "Suggest my next trip based on this one.",
      description: "Post-Trip Request",
      renderCard: () => (
        <PostTripQuestionCard
          title="Suggest my next trip based on this one."
          cta="Show Me"
        />
      ),
    },
    {
      icon: "💡",
      title: "Trip done. Full expense report ready.",
      description: "Post-Trip Proactive Suggestion",
      renderCard: () => (
        <PostTripSuggestionCard
          title="Trip done. Full expense report ready."
          cta="View Report"
        />
      ),
    },
    {
      icon: "💡",
      title: "Reviewed group chat. Here's what everyone spent.",
      description: "Post-Trip Proactive Suggestion",
      renderCard: () => (
        <PostTripSuggestionCard
          title="Reviewed group chat. Here's what everyone spent."
          cta="See Breakdown"
        />
      ),
    },
    {
      icon: "💡",
      title: "Based on this trip, 3 destinations you'd love next.",
      description: "Post-Trip Proactive Suggestion",
      renderCard: () => (
        <PostTripSuggestionCard
          title="Based on this trip, 3 destinations you'd love next."
          cta="Show Destinations"
        />
      ),
    },
    {
      icon: "💡",
      title: "Visited 11 places across 7 days. Route map ready.",
      description: "Post-Trip Proactive Suggestion",
      renderCard: () => (
        <PostTripSuggestionCard
          title="Visited 11 places across 7 days. Route map ready."
          cta="View Summary"
        />
      ),
    },
    {
      icon: "💡",
      title: "Most expensive day was Day 4. Breakdown ready.",
      description: "Post-Trip Proactive Suggestion",
      renderCard: () => (
        <PostTripSuggestionCard
          title="Most expensive day was Day 4. Breakdown ready."
          cta="See Day 4"
        />
      ),
    },
    {
      icon: "💡",
      title: "Group rated adventure highest. Next picks weighted that way.",
      description: "Post-Trip Proactive Suggestion",
      renderCard: () => (
        <PostTripSuggestionCard
          title="Group rated adventure highest. Next picks weighted that way."
          cta="Plan Next Trip"
        />
      ),
    },
  ],
};

export default function HeroPhaseSection() {
  const [selectedPhase, setSelectedPhase] = useState("pretrip");
  const activePhaseCards =
    phaseCardsConfig[selectedPhase] || phaseCardsConfig.pretrip;

  return (
    <section
      className="hero-phase-section"
      style={{
        background: "#eeebe6",
        padding: "0 0 72px",
      }}
    >
      <div
        className="hero-phase-inner"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 48px",
          width: "100%",
        }}
      >
        <div
          className="hero-segment-wrap"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "48px",
            width: "100%",
          }}
        >
          <SegmentedControl
            options={phaseOptions}
            selected={selectedPhase}
            onChange={setSelectedPhase}
          />
        </div>

        <PhaseCarousel slides={activePhaseCards} />
      </div>

      <style jsx global>{`
        .pretrip-card {
          width: 100%;
          min-height: 293px;
          border-radius: 16px;
          padding: 18px;
          border: 1.5px solid #dfd7c8;
          display: flex;
          flex-direction: column;
          gap: 10px;
          box-shadow: 0 10px 28px rgba(26, 22, 14, 0.06);
        }

        .pretrip-card-content {
          background: linear-gradient(165deg, #fff8ea 0%, #fff3df 100%);
          border-color: #ead3a1;
        }

        .pretrip-card-question {
          background: linear-gradient(160deg, #ffffff 0%, #f8f7f3 100%);
        }

        .pretrip-card-poll {
          background: linear-gradient(165deg, #f6f4ff 0%, #ecebff 100%);
          border-color: #cec9f2;
        }

        .pretrip-card-suggestion {
          background: linear-gradient(165deg, #f1f8ff 0%, #eaf2ff 100%);
          border-color: #c2d6f4;
        }

        .pretrip-card-warning {
          background: linear-gradient(165deg, #fff5f3 0%, #ffeae6 100%);
          border-color: #efc0b5;
        }

        .pretrip-card-top {
          display: flex;
          justify-content: flex-start;
        }

        .pretrip-kind {
          font-family: "DM Sans", sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.09em;
          text-transform: uppercase;
          border-radius: 999px;
          padding: 5px 10px;
          background: #ece8df;
          color: #665844;
        }

        .pretrip-card-content .pretrip-kind {
          background: #f2e3bf;
          color: #755a20;
        }

        .pretrip-card-poll .pretrip-kind {
          background: #dcd9ff;
          color: #4c4496;
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
          margin: 2px 0 0;
          font-family: "Bricolage Grotesque", sans-serif;
          font-size: 22px;
          line-height: 1.12;
          letter-spacing: -0.015em;
          color: #1c1c1e;
        }

        .pretrip-subtitle {
          margin: 0;
          font-family: "DM Sans", sans-serif;
          font-size: 13px;
          line-height: 1.45;
          color: #625d53;
        }

        .pretrip-input-shell {
          margin-top: 4px;
          border: 1px dashed #cfbf9f;
          border-radius: 10px;
          padding: 10px 11px;
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.72);
          flex-wrap: wrap;
        }

        .pretrip-input-label {
          font-family: "DM Sans", sans-serif;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          border-radius: 999px;
          padding: 4px 8px;
          background: #f5ebd4;
          color: #674c1f;
        }

        .pretrip-currency {
          font-family: "DM Sans", sans-serif;
          font-size: 11px;
          font-weight: 700;
          border-radius: 999px;
          padding: 3px 8px;
          background: #ececf1;
          color: #4c4c55;
        }

        .pretrip-input-text {
          font-family: "DM Sans", sans-serif;
          font-size: 12px;
          color: #4f4b43;
        }

        .pretrip-stepper {
          display: inline-flex;
          align-items: center;
          border: 1px solid #d8cab0;
          border-radius: 999px;
          background: #ffffff;
          overflow: hidden;
          margin-top: 4px;
        }

        .pretrip-stepper-btn {
          border: none;
          width: 32px;
          height: 32px;
          background: #f6f1e8;
          color: #513d1f;
          font-size: 16px;
          font-weight: 700;
          line-height: 1;
          cursor: pointer;
        }

        .pretrip-stepper-count {
          min-width: 34px;
          text-align: center;
          font-family: "DM Sans", sans-serif;
          font-size: 13px;
          font-weight: 700;
          color: #1f1d19;
        }

        .pretrip-chip-row {
          margin-top: 4px;
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .pretrip-chip-input-row {
          margin-top: 4px;
          display: flex;
          gap: 8px;
        }

        .pretrip-chip-input {
          flex: 1 1 auto;
          min-width: 0;
          border: 1px solid #d6d1c6;
          border-radius: 10px;
          background: #ffffff;
          color: #37342f;
          padding: 9px 10px;
          font-family: "DM Sans", sans-serif;
          font-size: 12px;
        }

        .pretrip-chip-enter {
          border: none;
          border-radius: 10px;
          background: #1c1c1e;
          color: #ffffff;
          padding: 0 12px;
          font-family: "DM Sans", sans-serif;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
        }

        .pretrip-chip {
          border: none;
          border-radius: 999px;
          padding: 7px 10px;
          border: 1px solid #d6d1c6;
          background: #ffffff;
          color: #49443d;
          font-family: "DM Sans", sans-serif;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
        }

        .pretrip-chip-selected {
          border-color: #1c1c1e;
          background: #1c1c1e;
          color: #ffffff;
        }

        .pretrip-toggle {
          margin-top: 4px;
          display: inline-flex;
          background: #ece8e0;
          border-radius: 999px;
          padding: 3px;
          gap: 4px;
        }

        .pretrip-toggle-btn {
          border: none;
          border-radius: 999px;
          padding: 7px 14px;
          background: transparent;
          color: #4c4740;
          font-family: "DM Sans", sans-serif;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
        }

        .pretrip-toggle-btn-active {
          background: #1c1c1e;
          color: #ffffff;
        }

        .pretrip-poll-options {
          margin-top: 6px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .pretrip-poll-option {
          border: 1px solid #cdc8ef;
          border-radius: 10px;
          background: #ffffff;
          padding: 10px 11px;
          text-align: left;
          display: flex;
          flex-direction: column;
          gap: 3px;
          font-family: "DM Sans", sans-serif;
          font-size: 12px;
          color: #2f2b42;
          cursor: pointer;
        }

        .pretrip-poll-option-active {
          border-color: #867cf2;
          box-shadow: 0 0 0 2px rgba(134, 124, 242, 0.16);
        }

        .pretrip-poll-option-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
        }

        .pretrip-poll-percent {
          font-size: 11px;
          color: #5e5899;
          font-weight: 700;
        }

        .pretrip-poll-bar-track {
          margin-top: 3px;
          width: 100%;
          height: 6px;
          border-radius: 999px;
          background: #e4e1fb;
          overflow: hidden;
        }

        .pretrip-poll-bar-fill {
          display: block;
          height: 100%;
          border-radius: 999px;
          background: linear-gradient(90deg, #7c71f0 0%, #a99bf9 100%);
        }

        .pretrip-poll-option small {
          font-size: 11px;
          color: #6a648b;
        }

        .pretrip-cta {
          margin-top: auto;
          width: 100%;
          border: none;
          border-radius: 10px;
          padding: 11px 12px;
          background: #1c1c1e;
          color: #ffffff;
          font-family: "DM Sans", sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          cursor: pointer;
          transition:
            transform 0.18s ease,
            box-shadow 0.18s ease,
            background 0.18s ease;
        }

        .pretrip-cta:hover {
          transform: translateY(-1px);
          background: #2b2b2f;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.16);
        }

        .intrip-card {
          width: 100%;
          min-height: 293px;
          border-radius: 16px;
          padding: 18px;
          border: 1.5px solid #cfe0d8;
          display: flex;
          flex-direction: column;
          gap: 10px;
          box-shadow: 0 10px 28px rgba(18, 37, 30, 0.08);
        }

        .intrip-card-content {
          background: linear-gradient(165deg, #eafff6 0%, #e6fff4 100%);
          border-color: #a9d9c6;
        }

        .intrip-card-question {
          background: linear-gradient(160deg, #ffffff 0%, #f3faf7 100%);
        }

        .intrip-card-suggestion {
          background: linear-gradient(165deg, #eef8ff 0%, #e6f2ff 100%);
          border-color: #b7d0eb;
        }

        .intrip-card-warning {
          background: linear-gradient(165deg, #fff2ef 0%, #ffe6e0 100%);
          border-color: #efb8ab;
        }

        .intrip-card-poll {
          background: linear-gradient(165deg, #f3f2ff 0%, #e9e8ff 100%);
          border-color: #cbc7f0;
        }

        .intrip-card-top {
          display: flex;
          justify-content: flex-start;
        }

        .intrip-kind {
          font-family: "DM Sans", sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.09em;
          text-transform: uppercase;
          border-radius: 999px;
          padding: 5px 10px;
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
          background: #dbd8ff;
          color: #4c4495;
        }

        .intrip-title {
          margin: 2px 0 0;
          font-family: "Bricolage Grotesque", sans-serif;
          font-size: 22px;
          line-height: 1.12;
          letter-spacing: -0.015em;
          color: #16201c;
        }

        .intrip-subtitle {
          margin: 0;
          font-family: "DM Sans", sans-serif;
          font-size: 13px;
          line-height: 1.45;
          color: #4c5f58;
        }

        .intrip-input-shell {
          margin-top: 4px;
          border: 1px dashed #afd0c1;
          border-radius: 10px;
          padding: 10px 11px;
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.78);
          flex-wrap: wrap;
        }

        .intrip-input-label {
          font-family: "DM Sans", sans-serif;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          border-radius: 999px;
          padding: 4px 8px;
          background: #d9f4e8;
          color: #245944;
        }

        .intrip-currency {
          font-family: "DM Sans", sans-serif;
          font-size: 11px;
          font-weight: 700;
          border-radius: 999px;
          padding: 3px 8px;
          background: #e7ecf1;
          color: #42505f;
        }

        .intrip-input-text {
          font-family: "DM Sans", sans-serif;
          font-size: 12px;
          color: #2e3a36;
        }

        .intrip-poll-options {
          margin-top: 6px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .intrip-poll-option {
          border: 1px solid #c9c5ef;
          border-radius: 10px;
          background: #ffffff;
          padding: 10px 11px;
          text-align: left;
          display: flex;
          flex-direction: column;
          gap: 3px;
          font-family: "DM Sans", sans-serif;
          font-size: 12px;
          color: #2f2b42;
          cursor: pointer;
        }

        .intrip-poll-option-active {
          border-color: #7f76ee;
          box-shadow: 0 0 0 2px rgba(127, 118, 238, 0.16);
        }

        .intrip-poll-option-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
        }

        .intrip-poll-percent {
          font-size: 11px;
          color: #5b5398;
          font-weight: 700;
        }

        .intrip-poll-bar-track {
          margin-top: 3px;
          width: 100%;
          height: 6px;
          border-radius: 999px;
          background: #e3e0fb;
          overflow: hidden;
        }

        .intrip-poll-bar-fill {
          display: block;
          height: 100%;
          border-radius: 999px;
          background: linear-gradient(90deg, #7c71f0 0%, #a79cf9 100%);
        }

        .intrip-poll-option small {
          font-size: 11px;
          color: #666087;
        }

        .intrip-cta {
          margin-top: auto;
          width: 100%;
          border: none;
          border-radius: 10px;
          padding: 11px 12px;
          background: #133f34;
          color: #ffffff;
          font-family: "DM Sans", sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          cursor: pointer;
          transition:
            transform 0.18s ease,
            box-shadow 0.18s ease,
            background 0.18s ease;
        }

        .intrip-cta:hover {
          transform: translateY(-1px);
          background: #1a5647;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.18);
        }

        .intrip-cta-urgent {
          background: #891f1f;
          font-weight: 800;
          letter-spacing: 0.06em;
        }

        .intrip-cta-urgent:hover {
          background: #a12626;
        }

        .posttrip-card {
          width: 100%;
          min-height: 293px;
          border-radius: 16px;
          padding: 18px;
          border: 1.5px solid #e4ddd0;
          display: flex;
          flex-direction: column;
          gap: 10px;
          box-shadow: 0 10px 28px rgba(26, 22, 14, 0.06);
        }

        .posttrip-card-content {
          background: linear-gradient(165deg, #fff9ef 0%, #fff4df 100%);
          border-color: #ead2a4;
        }

        .posttrip-card-question {
          background: linear-gradient(160deg, #fff 0%, #f7f4ee 100%);
        }

        .posttrip-card-suggestion {
          background: linear-gradient(165deg, #ffffff 0%, #f7f7f7 100%);
        }

        .posttrip-card-finance {
          background: linear-gradient(165deg, #f8fff7 0%, #ecf9f0 100%);
          border-color: #b9dec4;
        }

        .posttrip-card-explore {
          background: linear-gradient(165deg, #f5f8ff 0%, #edf3ff 100%);
          border-color: #bed0f1;
        }

        .posttrip-card-top {
          display: flex;
          justify-content: flex-start;
        }

        .posttrip-kind {
          font-family: "DM Sans", sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.09em;
          text-transform: uppercase;
          border-radius: 999px;
          padding: 5px 10px;
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
          margin: 2px 0 0;
          font-family: "Bricolage Grotesque", sans-serif;
          font-size: 23px;
          line-height: 1.1;
          letter-spacing: -0.015em;
          color: #1c1c1e;
        }

        .posttrip-subtitle {
          margin: 0;
          font-family: "DM Sans", sans-serif;
          font-size: 13px;
          line-height: 1.45;
          color: #6a6357;
        }

        .posttrip-input-shell {
          margin-top: 4px;
          border: 1px dashed #d6bea0;
          border-radius: 10px;
          padding: 10px 11px;
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.72);
        }

        .posttrip-input-icon {
          width: 20px;
          height: 20px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 800;
          color: #62431d;
          background: #f4e5cc;
          flex-shrink: 0;
        }

        .posttrip-input-text {
          font-family: "DM Mono", monospace;
          font-size: 11px;
          color: #5e5140;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .posttrip-stepper-row {
          margin-top: 4px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
        }

        .posttrip-stepper-label {
          font-family: "DM Sans", sans-serif;
          font-size: 12px;
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
          background: #fff;
          overflow: hidden;
        }

        .posttrip-stepper-btn {
          border: none;
          width: 30px;
          height: 30px;
          background: #f7f0e3;
          color: #584221;
          font-size: 16px;
          font-weight: 700;
          line-height: 1;
          cursor: pointer;
        }

        .posttrip-stepper-count {
          min-width: 32px;
          text-align: center;
          font-family: "DM Sans", sans-serif;
          font-size: 13px;
          font-weight: 700;
          color: #1f1d19;
        }

        .posttrip-cta {
          margin-top: auto;
          width: 100%;
          border: none;
          border-radius: 10px;
          padding: 11px 12px;
          background: #1c1c1e;
          color: #ffffff;
          font-family: "DM Sans", sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          cursor: pointer;
          transition:
            transform 0.18s ease,
            box-shadow 0.18s ease,
            background 0.18s ease;
        }

        .posttrip-cta:hover {
          transform: translateY(-1px);
          background: #2b2b2f;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
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
