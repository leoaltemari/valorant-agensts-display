import { environment } from '@env/environment';


type Endpoints = ValorantEndpoints;

export const enum ValorantEndpoints {
  Root = '/',
  Agents = '/agents',
  Agent = '/agents/{{0}}',
};


const interpolation = (baseurl: string, path: string, params: (string | number)[] = []): string => {
  const interpoled = params.reduce<string>((old, curr, i) => old.split(`{{${i}}}`).join(curr.toString()), path);

  return baseurl + interpoled;
};

export function url(endpoint: Endpoints, ...params: (string | number)[]): string {
  return interpolation(environment.valorantApiUrl, endpoint, params);
}