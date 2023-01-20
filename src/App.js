import Countdown from "react-countdown";
import "./App.css";

const Completionist = () => <span>Times up!</span>;

const renderer = ({ hours, minutes, seconds, completed, days }) => {
  console.log({ hours, minutes, seconds, completed });
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <span>
        {days}:{String(hours).padStart(2, 0)}:
        {String(minutes + 1).padStart(2, 0)}
      </span>
    );
  }
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span>
          ❤️ MICHIGAN ❤️
          <Countdown date={"2023-02-04T00:44:00"} renderer={renderer} />
          ❤️
        </span>
        <span>
          ❤️ VEGAS ❤️
          <Countdown date={"2023-03-02T17:34:00"} renderer={renderer} />
          ❤️
        </span>
      </header>
    </div>
  );
}

export default App;
