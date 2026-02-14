const data = [
  {
    id: 1,
    category: "Reaction",
    score: 80,
    icon: "./assets/images/icon-reaction.svg",
  },
  {
    id: 2,
    category: "Memory",
    score: 92,
    icon: "./assets/images/icon-memory.svg",
  },
  {
    id: 3,
    category: "Verbal",
    score: 61,
    icon: "./assets/images/icon-verbal.svg",
  },
  {
    id: 4,
    category: "Visual",
    score: 72,
    icon: "./assets/images/icon-visual.svg",
  },
];

export default function App() {
  return (
    <div className="App">
      <Result />
      <Summary />
    </div>
  );
}

function Result() {
  return (
    <div className="result">
      <h2>Your Result</h2>
      <div>
        <span>76</span>
        <span>of 100</span>
      </div>
      <h1>Great</h1>
      <p>
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
}

function Summary() {
  return (
    <div className="summary">
      <h2>Summary</h2>
      <div className="records">
        {data.map((data) => (
          <div>
            <img src={data.icon} alt={data.category} />
            <p>{data.category}</p>
            <span>{data.score}/100</span>
          </div>
        ))}
      </div>
      <button> Continue</button>
    </div>
  );
}
