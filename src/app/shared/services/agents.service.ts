import { useQuery, UseQueryResult } from 'react-query';

import { Agent, ValorantApiResponse } from '@models';
import { url, ValorantEndpoints } from '@utils';

import axios from 'axios';


type GetAgentsResponse = ValorantApiResponse<Agent[]>;
type GetAgentResponse = ValorantApiResponse<Agent>;

export function getAgents(): UseQueryResult<Agent[]> {
  return useQuery<Agent[]>('agents', async () => {
    const requestUrl = url(ValorantEndpoints.Agents);
    const response = await axios.get<GetAgentsResponse>(requestUrl);

    return response.data.data
      .filter(agent => agent.isPlayableCharacter)
      .sort((a, b) => a.displayName.localeCompare(b.displayName));
  });
}

export function getAgentById(id: string): UseQueryResult<Agent> {
  return useQuery<Agent>(`agent-${id}`, async () => {
    const requestUrl = url(ValorantEndpoints.Agent, id);
    const response = await axios.get<GetAgentResponse>(requestUrl);

    return response.data.data;
  });
}