import { Link } from 'react-router-dom';

import './Return-Button.scss';


interface ReturnButtonProps {
  label?: string;
  returnLink?: string;
}

export default function ReturnButton({ label, returnLink }: ReturnButtonProps) {
  return (
    <Link  to={ returnLink ?? '/' } className="d-flex align-items-center">
      <img
        src="/src/assets/images/icons/arrow-right.png"
        alt="Arrow icon set to the return button"
        className="return-icon me-2"
      />

      <span className="return-label font-valorant text-white fw-bold h5 m-0">
        { label ?? 'Return' }
      </span>
    </Link>
  )
}