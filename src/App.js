import Countdown from "react-countdown";
import "./App.css";

const Completionist = () => <span>🛫</span>;

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

const minuteRender = ({ hours, minutes, seconds, completed, days }) => {
  const total = hours * 60 + minutes + days * 24 * 60;
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return <span>{total} Minutes left</span>;
  }
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span>
          ❤️ MICHIGAN ❤️
          <Countdown date={"2023-02-04T00:44:00-05:00"} renderer={renderer} />
          ❤️ <br />
          <Countdown
            date={"2023-02-04T00:44:00-05:00"}
            renderer={minuteRender}
          />
        </span>
        <span>
          ❤️ VEGAS ❤️
          <Countdown date={"2023-03-02T17:34:00-05:00"} renderer={renderer} />
          ❤️ <br />
          <Countdown
            date={"2023-03-02T17:34:00-05:00"}
            renderer={minuteRender}
          />
        </span>
      </header>
    </div>
  );
}

export default App;
