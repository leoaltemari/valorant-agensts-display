import { Link } from 'react-router-dom';

import { Agent } from '@models';

import './AgentCard.scss';


interface AgentCardProps {
  agent: Agent;
}

export default function AgentCard({ agent }: AgentCardProps) {
  return (
    <div className="agent-card d-flex flex-column align-items-center mb-5">
      <span className="text-white font-valorant h1 mt-3 mb-0">{agent.displayName}</span>

      <div className="d-flex justify-content-center align-items-center">
        <img className="agent-bg" src={agent.background} />
        <img className="agent-portrait" src={agent.fullPortrait} />
      </div>

      <Link
        className="details primary text-white"
        to={`/agents/${agent.displayName.toLowerCase()}/${agent.uuid}`}
      >
        <div className="label">
          <span className="hover-effect"></span>
          <span className="label-text fw-bold font-valorant text-center">
            Details
          </span>
        </div>
      </Link>
    </div>
  );
}
