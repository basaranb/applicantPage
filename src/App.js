import logo from "./logo.svg";
import "./App.css";
import ApplicantsPage from "./pages/applicants.page";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Route path="/" component={ApplicantsPage} />
    </div>
  );
};

export default App;
