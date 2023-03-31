import { environment } from "../../environment/environment";

type Endpoints = ValorantEndpoints;

export const enum ValorantEndpoints {
  Root = '/',
  Agents = '/agents',
}


const interpolation = (baseurl: string, path: string, params: (string | number)[] = []): string => {
  const interpoled = params.reduce<string>((old, curr, i) => old.split(`{{${i}}}`).join(curr.toString()), path);

  return baseurl + interpoled;
};

export function url(endpoint: Endpoints): string {
  return interpolation(environment.valorantApiUrl, endpoint);
}