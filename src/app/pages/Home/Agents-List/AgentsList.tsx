

import { useEffect, useState } from 'react';

import { Loading } from '@components/Loading/Loadint';
import { Agent } from '@models';
import { getAgents } from '@services';

import AgentCard from './Agent-Card/AgentCard';
import './AgentsList.scss';


export default function AgentsList() {
  const [ filteredAgents, setFilteredAgents ] = useState<Agent[] | undefined>([]);

  const { data: agentsList, error, isFetching: loading } = getAgents();

  useEffect(() => {
    setFilteredAgents(agentsList);
  }, [agentsList]);

  const searchForAgents = (event: React.ChangeEvent<HTMLInputElement>) => {
    const search = event.target.value;
    const filteredData = agentsList?.filter(agent => agent.displayName.toLowerCase().includes(search));

    setFilteredAgents(filteredData);
  }

  const getPageContent = () => {
    return filteredAgents?.length
      ? filteredAgents.map(agent => <AgentCard key={agent.uuid}  agent={agent} />)
      : <h1 className="font-valorant text-white">Any agent was found.</h1>;
  }

  return (
    <div className="d-flex flex-column align-items-center">

      <div className="search-agent position-relative">
        <input
          type="text"
          className="search-agent p-2 my-5"
          placeholder="Search for agent..."
          onChange={searchForAgents}
        />

        <img
          className="position-absolute"
          src="src/assets/images/icons/search.png"
          alt="Search icon"
        ></img>
      </div>

      <div className="d-flex flex-wrap justify-content-center align-items-center mt-5">
        {
          loading ? <Loading /> : getPageContent()
        }
      </div>
    </div>
  );
}
