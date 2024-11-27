import "./App.css";

function App() {
  var colors = [
    // blue/green
    {
      bg: "#D6D8CC",
      text: "#BC9D38",
    },
    // green/orange
    {
      bg: "#C4C2A9",
      text: "#CD7C44",
    },
    // peach/orange
    {
      bg: "#e0b390",
      text: "#D3793B",
    },
    // dark green/bright green
    {
      bg: "#404C34",
      text: "#D0F16E",
    },
    // green/yellow
    {
      bg: "#93901B",
      text: "#F3F2A2",
    },
    // mustard/purple
    {
      bg: "#BEA733",
      text: "#E0E5E9",
    },
  ];

  const getColors = function (max) {
    const i = Math.floor(Math.random() * max);
    const textColor = colors[i].text;
    const bgColor = colors[i].bg;
    return [textColor, bgColor];
  };

  const [textColor, bgColor] = getColors(colors.length);

  const style = {
    color: textColor,
    backgroundColor: bgColor,
  };

  return (
    <div className="App" style={style}>
        <h4 id="save-the-date">save the date</h4>
        <h4 id="celebrate">to celebrate the marriage of</h4>
        <h1>ZOË & NICK</h1>
        <h4 id="date">07.26.25</h4>
        <p id="location">
          <a href="https://www.theeddygolden.com/" style={style}>
            The Eddy Taproom & Hotel
          </a>
          <br />
          Golden, CO
        </p>
        <p id="info">
          FOR MORE DETAILS, PLEASE EMAIL NBENGTSON.ZHEINS@GMAIL.COM
        </p>
    </div>
  );
}

export default App;
