const data = [
  {
    id: 1,
    category: "Reaction",
    score: 80,
    icon: "./assets/images/icon-reaction.svg",
    color: "red",
  },
  {
    id: 2,
    category: "Memory",
    score: 92,
    icon: "./assets/images/icon-memory.svg",
    color: "yellow",
  },
  {
    id: 3,
    category: "Verbal",
    score: 61,
    icon: "./assets/images/icon-verbal.svg",
    color: "teal",
  },
  {
    id: 4,
    category: "Visual",
    score: 72,
    icon: "./assets/images/icon-visual.svg",
    color: "blue",
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
      <div className="result-circle">
        <span className="result-score">76</span>
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
          <Category data={data} />
        ))}
      </div>
      <button> Continue</button>
    </div>
  );
}

function Category({ data }) {
  return (
    <div className={`category bg-${data.color}`}>
      <div className="icon-category">
        <img src={data.icon} alt={data.category} />
        <p className={`f-${data.color}`}>{data.category}</p>
      </div>
      <p>
        {data.score}
        <span> / 100</span>
      </p>
    </div>
  );
}
