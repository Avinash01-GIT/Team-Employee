import "./App.css";
import TeamManager from "./components/TeamManager";
import { TeamProvider } from "./context/TeamContext";

const App = () => {
  return (
    <TeamProvider>
      <div>
        <h1>Employee Team Management</h1>
        <TeamManager />
      </div>
    </TeamProvider>
  );
};

export default App;
