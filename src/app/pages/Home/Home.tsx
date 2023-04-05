

import Header from '@/app/shared/components/Header/Header';

import AgentsList from './Agents-List/AgentsList';


export default function Home() {
  return (
    <>
      <Header />
      <div className="container py-5">
        <AgentsList />
      </div>
    </>
  );
}