import "./App.css";
import Clock from "./components/Clock";
import Logo from "./components/Logo";
import GoogleAnalytics from "./GoogleAnalytics";

function App() {
  return (
    <div className="App">
      <GoogleAnalytics />
      <Clock />
      <Logo />
    </div>
  );
}

export default App;
