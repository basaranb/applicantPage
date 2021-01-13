import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/nav-bar/nav-bar.component";
import ApplicantsOverview from "./components/applicants-overview/applicants-overview.component";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <ApplicantsOverview></ApplicantsOverview>
    </div>
  );
}

export default App;
