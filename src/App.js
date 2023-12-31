import { useEffect } from "react";
import "./App.css";
import OneSignal from "react-onesignal";
import logo from "./logo.png";

function App() {
  useEffect(() => {
    OneSignal.init({
      appId: "eaddcb81-91b3-45f3-ba58-67372636dcd5",
    });
  }, []);

  const onHandleTag = (tag) => {
    console.log("Tagging");
    OneSignal.sendTag("tech", tag).then(() => {
      console.log("Sent tag: " + tag);
    });
  };

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="tags">
        <button className="btn btn--react" onClick={() => onHandleTag("react")}>
          ReactJS
        </button>
        <button
          className="btn btn--angular"
          onClick={() => onHandleTag("angular")}
        >
          Angular
        </button>
        <button className="btn btn--vue" onClick={() => onHandleTag("vue")}>
          Vue
        </button>
      </div>
    </div>
  );
}

export default App;
