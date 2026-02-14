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
  return <h2>Result component</h2>;
}

function Summary() {
  return <h2>Summary component</h2>;
}
