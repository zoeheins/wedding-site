import "./App.css";

function App() {
  var colors = [
    // gray/green
    {
      text: "#BC9D38",
      bg: "#D6D8CC",
    },
    // orange/light blue
    {
      text: "#a6ede4",
      bg: "#e38a4d",
    },
    // dark green/bright green
    {
      bg: "#404C34",
      text: "#D0F16E",
    },
    // mustard green/light blue
    {
      bg: "#BEB733",
      text: "#e1e6eb",
    },
  ];

  const getColors = function (max) {
    const i = Math.floor(Math.random() * max);
    const textColor = colors[i].text;
    const bgColor = colors[i].bg;
    return [textColor, bgColor];
  };

  const [textColor, bgColor] = getColors(colors.length);
  // const textColor = colors[1].text;
  // const bgColor = colors[1].bg;

  const style = {
    color: textColor,
    backgroundColor: bgColor,
  };

  return (
    <div className="App" style={style}>
      <h4 id="save-the-date">Save the date</h4>
      <h1 id="names">ZOË & NICK</h1>
      <h4 id="date">07.26.25</h4>
      <p id="location">
        <a href="https://www.theeddygolden.com/" style={style}>
          The Eddy Taproom & Hotel
          <br />
          Golden, CO
        </a>
      </p>
      <p id="info">
        <p id="info" style={{ marginBottom: "2px" }}>
          QUESTIONS? EMAIL <br />
        </p>
        <a href="mailto:nbengston.zheins@gmail.com" style={style}>
          NBENGTSON.ZHEINS@GMAIL.COM
        </a>
      </p>
    </div>
  );
}

export default App;
