

import AgentsList from './Agents-List/AgentsList';
import './Home.scss';


function Home() {

  return (
    <main className="bg-secondary pt-5">
      <header className="fade-header position-relative">
        <div className="page-header p-4 d-flex justify-content-center align-items-center">
          <h1 className="text-secondary m-0 ">AGENTS</h1>
        </div>
      </header>

      <main className="p-5 d-flex justify-content-center align-items-center">
        <AgentsList />
      </main>
    </main>
  );
}

export default Home;
