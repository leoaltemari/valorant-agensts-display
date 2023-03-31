import { getAgents } from "./shared/services/agents.service";

function App() {

  const { data: agents, error, isFetching: loading } = getAgents();

  return (
    <h1>{ JSON.stringify(agents) }</h1>
  );
}

export default App
