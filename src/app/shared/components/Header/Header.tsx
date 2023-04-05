import { useLoaderData } from 'react-router-dom';

import './Header.scss';


interface HeaderLoaderData {
  headerText: string;
}

export default function Header() {
  const data = useLoaderData() as HeaderLoaderData;

  return (
    <header className="fade-header position-relative">
      <div className="page-header p-4 d-flex justify-content-center align-items-center">
        <h1 className="text-secondary uppercase m-0">{ data.headerText }</h1>
      </div>
    </header>
  )
}