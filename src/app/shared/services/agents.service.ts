import { useQuery, UseQueryResult } from 'react-query';

import { Agent, ValorantApiResponse } from '@models';
import { url, ValorantEndpoints } from '@utils';

import axios from 'axios';


type GetAgentsResponse = ValorantApiResponse<Agent[]>;

export function getAgents(): UseQueryResult<Agent[], unknown> {
  return useQuery<Agent[]>('agents', async () => {
    const requestUrl = url(ValorantEndpoints.Agents);
    const response = await axios.get<GetAgentsResponse>(requestUrl);

    return response.data.data;
  });
}