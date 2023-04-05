import { useParams } from 'react-router-dom';

import Header from '@components/Header/Header';
import { getAgentById } from '@services';


export default function Agent() {
  const { id } = useParams();

  const { data: agent, error, isFetching: loading } = getAgentById(id as string);

  return (
    <>
      <Header />

      <h1 className="text-white">{ agent?.displayName }</h1>
    </>
  );
}