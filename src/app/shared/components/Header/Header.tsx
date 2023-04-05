import { useLoaderData } from 'react-router-dom';

import './Header.scss';


interface HeaderLoaderData {
  headerText: string;
}

export default function Header() {
  const { headerText } = useLoaderData() as HeaderLoaderData;

  return (
    <header className="fade-header position-relative">
      <div className="page-header p-4 d-flex justify-content-center align-items-center">
        <h1 className="text-secondary text-uppercase m-0">{ headerText }</h1>
      </div>
    </header>
  )
}