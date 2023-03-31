import axios from "axios";
import { Agent } from "../models/agent.model.model";
import { ValorantApiResponse } from "../models/responses/valorant-api.model";

import { UseQueryResult, useQuery } from 'react-query';
import { ValorantEndpoints, url } from "../utils/endpoints.utils";

type GetAgentsResponse = ValorantApiResponse<Agent[]>;

export function getAgents(): UseQueryResult<Agent[], unknown> {
  return useQuery<Agent[]>('agents', async () => {
    const requestUrl = url(ValorantEndpoints.Agents);
    const response = await axios.get<GetAgentsResponse>(requestUrl);

    return response.data.data;
  });
}